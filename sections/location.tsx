// Our location and hours
"use client" // needed for map to work
import Container from '@/components/ui/container';
import React from 'react';
import { clsx } from 'clsx';
import Map from '@/components/google-map';

type Props = {};

const LocationSection = (props: Props) => {
  return (
    <section id='location'>
      <Container>
        <div className='flex flex-row w-full h-fit pt-10'>
            {/* Left */}
          <div className='flex-1'>
            <div className='flex-1'>
              <h1 className='text-2xl font-semibold'>Colonial Jewelery & Pawn</h1>
              <p>2805 Highway 44 W Inverness, FL 34453</p>
              <p>(352) 726-8616</p>
            </div>
            <br />
            <div className='flex-1'>
              <p className='text-2xl'>Open Hours:</p>
              <p> Monday: 9:00 AM - 5:30 PM</p>
              <p>Tuesday: 9:00 AM - 5:30 PM</p>
              <p>Wednesday: 9:00 AM - 5:30 PM</p>
              <p>Thursday: 9:00 AM - 5:30 PM</p>
              <p>Friday: 9:00 AM - 5:30 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: <span className='text-red-500'>Closed</span></p>
            </div>
          </div>
          <div className='flex-1'>
            {/* Right */}
            <Map />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LocationSection;
