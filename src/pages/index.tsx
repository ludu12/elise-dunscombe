import React from 'react';
import Layout from '../components/Layout';

const Index: React.FC = () => {
  return (
    <Layout title={'Home'}>
      <main>
        <figure className="md:flex md:flex-row-reverse">
          <div className="flex-1 w-96 h-96 bg-green-500" />
          <div className="flex-1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Senectus et netus et malesuada fames ac turpis egestas sed. Hac
              habitasse platea dictumst vestibulum rhoncus est pellentesque.
              Euismod lacinia at quis risus sed vulputate odio. Maecenas
              pharetra convallis posuere morbi leo urna molestie. Volutpat
              blandit aliquam etiam erat. Tincidunt praesent semper feugiat nibh
              sed pulvinar. Sit amet consectetur adipiscing elit pellentesque
              habitant. Accumsan lacus vel facilisis volutpat est velit egestas
              dui. Est lorem ipsum dolor sit amet consectetur. Urna et pharetra
              pharetra massa massa ultricies. Pharetra et ultrices neque ornare
              aenean euismod elementum nisi quis. Tellus elementum sagittis
              vitae et leo duis.
            </p>
            <br />
            <p>
              Suspendisse interdum consectetur libero id faucibus nisl
              tincidunt. Nisi est sit amet facilisis magna etiam. Varius quam
              quisque id diam vel. Montes nascetur ridiculus mus mauris vitae
              ultricies. Pellentesque elit ullamcorper dignissim cras tincidunt
              lobortis. At tempor commodo ullamcorper a lacus vestibulum sed
              arcu non. Turpis cursus in hac habitasse platea dictumst quisque.
              Lectus arcu bibendum at varius vel pharetra vel turpis. Nibh
              tortor id aliquet lectus proin nibh. Ullamcorper sit amet risus
              nullam eget felis eget nunc. Duis at tellus at urna condimentum
              mattis pellentesque id nibh. Cras pulvinar mattis nunc sed
              blandit. Pellentesque sit amet porttitor eget dolor morbi non
              arcu.
            </p>
            <br />
            <p>
              Purus gravida quis blandit turpis cursus in hac. Felis imperdiet
              proin fermentum leo vel orci porta non pulvinar. Varius sit amet
              mattis vulputate enim nulla aliquet. Tincidunt dui ut ornare
              lectus sit amet est placerat in. Nibh nisl condimentum id
              venenatis a. Tristique magna sit amet purus gravida quis blandit.
              In massa tempor nec feugiat nisl pretium fusce id velit. Tristique
              senectus et netus et malesuada fames ac turpis. Maecenas accumsan
              lacus vel facilisis volutpat est. Dignissim enim sit amet
              venenatis urna cursus eget nunc scelerisque.
            </p>
          </div>
        </figure>
      </main>
    </Layout>
  );
};

export default Index;
