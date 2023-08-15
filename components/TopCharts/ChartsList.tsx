'use client';

import ChartsItem from './ChartsItem';
import { IChartsList } from '@/@types';
import albumCover from '@/public/albumCover.png';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function ChartsList() {
  return (
    <ul className="charts__list">
      <Swiper>
        {chartsList.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <ChartsItem key={item.id} {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ul>
  );
}
