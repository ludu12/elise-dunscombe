import React from 'react';
import Layout from '../components/Layout';
import { ImageObj } from '../lib/types';
import Image from 'next/image';
import { getCanvaImages } from '../lib/image';
import { GetStaticProps } from 'next';
import { useImageCarousel } from '../hooks/use-image-carousel';

// const constant = 20;
const imageAspectStyle = {
  minHeight: '48rem',
  minWidth: '24rem',
};

const Canva: React.FC<{ images: ImageObj[] }> = (props) => {
  const { images } = props;
  const [nextImage, imageClassName] = useImageCarousel(images); // Grad pic

  return (
    <Layout title={'Canva'}>
      <h1 className={'text-2xl'}>Canva</h1>
      <main>
        <div
          className={`flex-1 cursor-pointer md:ml-2 relative`}
          onClick={nextImage}
          style={imageAspectStyle}
        >
          {images.map((image) => (
            <Image
              key={image.src}
              className={imageClassName(image)}
              priority
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="contain"
            />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const images = await getCanvaImages();
  return {
    props: {
      images,
    },
  };
};

export default Canva;
