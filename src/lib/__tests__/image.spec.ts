import { getAboutMeImages, getCanvaImages, imageRegex } from '../image';

test('imageRegex', () => {
  expect(imageRegex.test('file.png')).toEqual(true);
  expect(imageRegex.test('file.jpg')).toEqual(true);
  expect(imageRegex.test('file.jpeg')).toEqual(true);
  expect(imageRegex.test('file.svg')).toEqual(false);
});

test('getAboutMeImages', async () => {
  const images = await getAboutMeImages();
  console.log(images);
  expect(images).toHaveLength(6);
  expect(
    images.map((x) => x.src).every((x) => x.includes('images/about/'))
  ).toEqual(true);
});

test('getCanvaImages', async () => {
  const images = await getCanvaImages();
  console.log(images);
  expect(images).toHaveLength(8);
  expect(
    images.map((x) => x.src).every((x) => x.includes('images/canva/'))
  ).toEqual(true);
});
