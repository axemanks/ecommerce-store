// The hero section

import React from 'react';
import Container from '../components/ui/container';
import Image from 'next/image';
import Button from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 '
    >
      <Container>
        <div className='relative flex flex-col justify-center items-start w-full pt-10 '>
          {/* The now live hover */}
          <div className='mx-auto  mb-10 flex max-w-fit  items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
            <p className='text-sm font-semibold text-blue-700'>
              Our new store is now live!
            </p>
          </div>

          <div className='w-full flex flex-row h-full'>
            {/* Left */}
            <div className='w-1/2 flex flex-col justify-between'>
              <h1 className='text-5xl font-bold text-gray-800 '>
                <span>Colonial Jewelery </span>
                <span className='text-red-500'>& Pawn</span>
              </h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                velit suscipit quis placeat, laboriosam a incidunt sapiente
                voluptate voluptatibus hic ipsam dolores eaque vitae corrupti
                laborum, aperiam repellendus perspiciatis molestias.
              </p>
              <br />
              {/* Shop Now button */}
              <Button className='bg-blue-500 mx-auto'>
                Shop Now in store or Online!
                <ArrowRight
                  className='ml-2'
                  size={24}
                />
              </Button>
            </div>
            {/* Right */}
            <div className='w-1/2 h-full'>
              <Image
                alt='hero-image'
                src={'/pawn_shop.jpg'}
                height={512}
                width={512}
                objectFit='cover'
                objectPosition='center'
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
