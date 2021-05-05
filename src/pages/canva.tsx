import React from 'react';
import Layout from '../components/Layout';
import { ImageObj } from '../lib/types';
import Image from 'next/image';
import { getCanvaImages } from '../lib/image';
import { GetStaticProps } from 'next';

// const constant = 20;
const imageAspectStyle = {
  minHeight: '32rem',
  minWidth: '24rem',
};

const Canva: React.FC<{ images: ImageObj[] }> = (props) => {
  const { images } = props;
  return (
    <Layout title={'Canva'}>
      <h1 className={'text-2xl'}>Canva</h1>
      <div className={'grid md:grid-cols-2 lg:grid-cols-3 gap-2'}>
        {images.map((i) => {
          return (
            // <div key={i.src} className='relative' style={{ minWidth: `${i.ratio * constant}rem`, minHeight: `${constant}rem`}}>
            <div key={i.src} className="relative" style={imageAspectStyle}>
              <Image
                priority
                src={i.src}
                alt={i.alt}
                layout="fill"
                objectFit="contain"
              />
            </div>
          );
        })}
      </div>
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
