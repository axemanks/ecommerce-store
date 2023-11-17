// This will hold the Google Map component
'use client';
import { Loader } from '@googlemaps/js-api-loader';
import React, { useEffect } from 'react';

type Props = {};

const Map = (props: Props) => {
  const mapRef = React.useRef<HTMLDivElement>(null); // ref

  // initallize the map
  useEffect(() => {
    const initMap = async () => {
      // init loader
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: 'weekly', // how ofter it is updated
      });
      // Get the map
      const { Map } = await loader.importLibrary('maps');

      // init a marker
      const { Marker } = (await loader.importLibrary(
        'marker'
      )) as google.maps.MarkerLibrary;

      // position - center of map 28.84423284299358, -82.36647327210869
      const position = { lat: 28.84423284299358, lng: -82.36647327210869 };

      // map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: 'colonial_jewelery_pawn',
      };

      // setup the map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      // setup the marker
      const marker = new Marker({
        map: map,
        position: position,
      })
    };
    initMap();
  }, []);

  return (
    <div
      style={{ height: '400px' }}
      ref={mapRef}
    ></div>
  );
};

export default Map;
