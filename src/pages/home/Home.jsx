import React, {useEffect} from 'react';

// components
import BannerSlider from './BannerSlider';
import PopularDestination from './PopularDestination';
import TourGallery from './TourGallery';
import PopularVideos from './PopularVideos';

export default function Home({ placeLoding, places }) {

  useEffect(() => {
    document.title='Home | Perfect Tours and Events';
  });

  return (
    <>
      <BannerSlider />
      <PopularVideos />
      <PopularDestination places={places} placeLoding={placeLoding} />
      <TourGallery />
    </>
  )
}
