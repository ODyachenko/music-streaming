'use client';

import { useEffect, useState } from 'react';
import { useGetMusicByAlbumsQuery } from '@/redux/api/music.api';
import { Swiper, SwiperSlide } from 'swiper/react';
import ChartsItem from './ChartsItem';
import { IChartsList } from '@/@types';
import albumCover from '@/public/albumCover.png';
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
  const { data, error, isLoading } = useGetMusicByAlbumsQuery(
    '3IBcauSj5M2A6lTeffJzdv,382ObEPsp2rxGrnsizN5TX,2noRn2Aes5aoNVsU6iWThc'
  );

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

  return data ? (
    <ul className="charts__list">
      {showSlider ? (
        <Swiper slidesPerView={'auto'} spaceBetween={17} loop={true}>
          {data.albums.map((album: any) => {
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
        data.albums.map((album: any) => {
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
  ) : isLoading ? (
    <div>Loading...</div>
  ) : (
    console.error(error)
  );
}
