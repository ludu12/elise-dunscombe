import fs from 'fs';
import { ImageObj } from './types';
import path from 'path';
// eslint-disable-next-line
const sizeOf = require('image-size');

export const imageRegex = new RegExp(/\.png|\.jpg|\.jpeg/);

const aboutMeImageDir = path.join(process.cwd(), 'public/images/about');
const canvaImageDir = path.join(process.cwd(), 'public/images/canva');

export function getAboutMeImages(): Promise<ImageObj[]> {
  return createImages(aboutMeImageDir);
}

export function getCanvaImages(): Promise<ImageObj[]> {
  return createImages(canvaImageDir);
}

function createImages(dir: string): Promise<ImageObj[]> {
  const fileNames = fs.readdirSync(dir);
  return Promise.all(
    fileNames
      .filter((f) => imageRegex.test(f))
      .map((f) => {
        return path.join(dir, f);
      })
      .map(toImageObj)
  );
}

async function toImageObj(imgFile: string): Promise<ImageObj> {
  const size = sizeOf(imgFile);
  const src = imgFile.split('/public').pop();
  const alt = src.split('/').pop();

  return {
    ...size,
    placeholder: null,
    ratio: size.width / size.height,
    src,
    alt,
  };
}
