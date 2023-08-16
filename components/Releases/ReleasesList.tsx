import { Swiper, SwiperSlide } from 'swiper/react';
import ReleasesItem from './ReleasesItem';
import { IReleasesList } from '@/@types';
import releaseCover from '@/public/release.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const releasesList: IReleasesList[] = [
  {
    id: 11,
    img: releaseCover,
    title: 'Life in a bubble',
  },
  {
    id: 12,
    img: releaseCover,
    title: 'Life in a bubble',
  },
  {
    id: 13,
    img: releaseCover,
    title: 'Life in a bubble',
  },
  {
    id: 14,
    img: releaseCover,
    title: 'Life in a bubble',
  },
];

export default function ReleasesList() {
  return (
    <ul className="releases__list">
      <Swiper slidesPerView={2} spaceBetween={30} loop={true}>
        {releasesList.map((release) => {
          return (
            <SwiperSlide key={release.id}>
              <ReleasesItem {...release} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ul>
  );
}
