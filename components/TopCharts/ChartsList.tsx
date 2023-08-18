'use client';

import ChartsItem from './ChartsItem';
import { IChartsList } from '@/@types';
import albumCover from '@/public/albumCover.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';

const chartsList: IChartsList[] = [
  {
    id: 1,
    img: albumCover,
    title: 'Golden age of 80s',
    artist: 'Sean swadder',
    duration: '2:34:45',
  },
  {
    id: 2,
    img: albumCover,
    title: 'Golden age of 80s',
    artist: 'Sean swadder',
    duration: '2:34:45',
  },
  {
    id: 3,
    img: albumCover,
    title: 'Golden age of 80s',
    artist: 'Sean swadder',
    duration: '2:34:45',
  },
  {
    id: 4,
    img: albumCover,
    title: 'Golden age of 80s',
    artist: 'Sean swadder',
    duration: '2:34:45',
  },
  {
    id: 5,
    img: albumCover,
    title: 'Golden age of 80s',
    artist: 'Sean swadder',
    duration: '2:34:45',
  },
];

export default function ChartsList() {
  const [showSlider, setShowSlide] = useState(true);

  useEffect(() => {
    window.innerWidth > 1023 && setShowSlide(false);

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1023) {
        setShowSlide(false);
        return;
      }
      setShowSlide(true);
    });
  }, [showSlider]);

  return (
    <ul className="charts__list">
      {showSlider ? (
        <Swiper slidesPerView={'auto'} spaceBetween={17} loop={true}>
          {chartsList.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <ChartsItem key={item.id} {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        chartsList.map((item) => {
          return <ChartsItem key={item.id} {...item} />;
        })
      )}
    </ul>
  );
}
