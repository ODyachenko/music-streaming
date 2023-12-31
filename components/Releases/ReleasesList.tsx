'use client';
import { FC } from 'react';
import { useGetMusicByAlbumsQuery } from '@/redux/api/music.api';
import { ReleasesItem } from './ReleasesItem';
import { ReleasesSkelleton } from './ReleasesSkelleton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const ReleasesList: FC = () => {
  const { data, error, isLoading }: any = useGetMusicByAlbumsQuery(
    '6jVg0POvGYH1Pt6lISl3ok,2WFFcvzM0CgLaSq4MSkyZk,70uejEPPRPSLBrTRdfghP5,0HiZ8fNXwJOQcrf5iflrdz,5mWnMYLnfcnkDOCojHW6O1,4wtZQMNTC1O79kDxMBsEan'
  );

  return (
    <ul className="releases__list">
      <Swiper slidesPerView={'auto'} spaceBetween={30} loop={true}>
        {data
          ? data.albums.map((release: any) => {
              return (
                <SwiperSlide key={release.id}>
                  <ReleasesItem
                    id={release.id}
                    img={release.images[1].url}
                    title={release.name}
                    artist={release.artists[0].name}
                  />
                </SwiperSlide>
              );
            })
          : isLoading
          ? [...new Array(4)].map((_, index) => (
              <SwiperSlide key={index}>
                <li className="charts__list-item" key={index}>
                  <ReleasesSkelleton />
                </li>
              </SwiperSlide>
            ))
          : console.error(error)}
      </Swiper>
    </ul>
  );
};
