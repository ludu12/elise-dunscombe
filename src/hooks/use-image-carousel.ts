import { ImageObj } from '../lib/types';
import React from 'react';

export const useImageCarousel = (
  images: ImageObj[],
  initialIndex = 0
): [() => void, (ImageObj) => string] => {
  const [imageIndex, setImageIndex] = React.useState(initialIndex);

  const imageClassName = React.useCallback(
    (image: ImageObj) => {
      return `transition-all duration-500 ${
        imageIndex === images.findIndex((i) => image.src === i.src)
          ? 'opacity-1'
          : 'opacity-0'
      }`;
    },
    [images, imageIndex]
  );

  const nextImage = React.useCallback(() => {
    setImageIndex((i) => {
      return (i + 1) % images.length;
    });
  }, [images]);

  return [nextImage, imageClassName];
};
