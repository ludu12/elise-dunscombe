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
        {/*<div className={'grid md:grid-cols-2 lg:grid-cols-3 gap-2'}>*/}
        {/*  {images.map((i) => {*/}
        {/*    return (*/}
        {/*      // <div key={i.src} className='relative' style={{ minWidth: `${i.ratio * constant}rem`, minHeight: `${constant}rem`}}>*/}
        {/*      <div key={i.src} className="relative" style={imageAspectStyle}>*/}
        {/*        <Image*/}
        {/*          priority*/}
        {/*          src={i.src}*/}
        {/*          alt={i.alt}*/}
        {/*          layout="fill"*/}
        {/*          objectFit="contain"*/}
        {/*        />*/}
        {/*      </div>*/}
        {/*    );*/}
        {/*  })}*/}
        {/*</div>*/}
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
