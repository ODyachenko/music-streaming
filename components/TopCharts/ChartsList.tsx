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
import axios from 'axios';

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

const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/albums/',
  params: {
    ids: '382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc',
  },
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST,
  },
};

export default function ChartsList() {
  const [chartsData, setChartsData] = useState([]);
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

  useEffect(() => {
    fetchCharts();
  }, []);

  async function fetchCharts() {
    try {
      const response = await axios.request(options);
      setChartsData(response.data.albums);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ul className="charts__list">
      {showSlider ? (
        <Swiper slidesPerView={'auto'} spaceBetween={17} loop={true}>
          {chartsData.map((album: any) => {
            return (
              <SwiperSlide key={album.id}>
                <ChartsItem
                  key={album.id}
                  id={album.id}
                  img={album.images[1].url}
                  title={album.name}
                  artist={album.artists[0].name}
                  duration="49"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        chartsData.map((album: any) => {
          return (
            <ChartsItem
              key={album.id}
              id={album.id}
              img={album.images[1].url}
              title={album.name}
              artist={album.artists[0].name}
              duration="49"
            />
          );
        })
      )}
    </ul>
  );
}
