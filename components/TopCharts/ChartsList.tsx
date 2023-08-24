'use client';

import { useEffect, useState } from 'react';
import { useGetMusicByAlbumsQuery } from '@/redux/api/music.api';
import { Swiper, SwiperSlide } from 'swiper/react';
import ChartsItem from './ChartsItem';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { getAlbumDuration } from '@/utils/getAlbumDuration';
import { Skelleton } from '../Skelleton/Skelleton';

export default function ChartsList() {
  const [showSlider, setShowSlide] = useState(true);
  const { data, error, isLoading } = useGetMusicByAlbumsQuery(
    '33pt9HBdGlAbRGBHQgsZsU,1CEODgTmTwLyabvwd7HBty,1jUoeAbO2HCADZ1uiyLYIo,3cQO7jp5S9qLBoIVtbkSM1'
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
                  tracks={album.total_tracks}
                  duration={getAlbumDuration(album)}
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
              tracks={album.total_tracks}
              duration={getAlbumDuration(album)}
            />
          );
        })
      )}
    </ul>
  ) : isLoading ? (
    [...new Array(4)].map((_, index) => (
      <li className="charts__list-item" key={index}>
        <Skelleton />
      </li>
    ))
  ) : (
    console.error(error)
  );
}
