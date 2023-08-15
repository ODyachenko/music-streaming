import { IChartsList } from '@/@types';
import Image from '@/node_modules/next/image';

export default function ChartsItem({
  img,
  title,
  artist,
  duration,
}: IChartsList) {
  return (
    <li className="charts__list-item">
      <Image
        className="charts__list--cover"
        src={img}
        alt={title}
        width={108}
        height={99}
      />
      <button className="charts__list--favourite">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.1539 8.69874C1.34915 6.18624 2.28965 3.31449 4.9274 2.46474C6.3149 2.01699 7.8464 2.28099 8.9999 3.14874C10.0911 2.30499 11.6789 2.01999 13.0649 2.46474C15.7026 3.31449 16.6491 6.18624 15.8451 8.69874C14.5926 12.6812 8.9999 15.7487 8.9999 15.7487C8.9999 15.7487 3.4484 12.7277 2.1539 8.69874Z"
            stroke="#FACD66"
            strokeWidth="0.5625"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.4"
            d="M12 5.02502C12.8025 5.28452 13.3695 6.00077 13.4377 6.84152"
            stroke="#FACD66"
            strokeWidth="0.5625"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <h3 className="charts__list--title">{title}</h3>
      <span className="charts__list--artist">{artist}</span>
      <span className="charts__list--duration">{duration}</span>
    </li>
  );
}
