import Image from '@/node_modules/next/image';
import { getTrackDuration } from '@/utils/getTrackDuration';

export default function Song({ track }: any) {
  // console.log(getTrackDuration(track.duration_ms));
  // console.log(track);

  return (
    <li className="album__songs-item song">
      {/* <Image className="song__cover" src={img} alt={track.name} /> */}
      <div className="song__info">
        <h2 className="song__name">{track.name}</h2>
        <span className="song__artist">{track.artists[0].name}</span>
      </div>
      <div className="song__details">
        <button className="song__details--btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
          >
            <path
              d="M7.25789 7.58341C7.58006 7.58341 7.84123 7.32225 7.84123 7.00008C7.84123 6.67792 7.58006 6.41675 7.25789 6.41675C6.93573 6.41675 6.67456 6.67792 6.67456 7.00008C6.67456 7.32225 6.93573 7.58341 7.25789 7.58341Z"
              stroke="#FACD66"
              strokeWidth="1.16667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.25789 3.49992C7.58006 3.49992 7.84123 3.23875 7.84123 2.91659C7.84123 2.59442 7.58006 2.33325 7.25789 2.33325C6.93573 2.33325 6.67456 2.59442 6.67456 2.91659C6.67456 3.23875 6.93573 3.49992 7.25789 3.49992Z"
              stroke="#FACD66"
              strokeWidth="1.16667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.25789 11.6667C7.58006 11.6667 7.84123 11.4055 7.84123 11.0833C7.84123 10.7612 7.58006 10.5 7.25789 10.5C6.93573 10.5 6.67456 10.7612 6.67456 11.0833C6.67456 11.4055 6.93573 11.6667 7.25789 11.6667Z"
              stroke="#FACD66"
              strokeWidth="1.16667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className="song__details--duration">
          {getTrackDuration(track.duration_ms)}
        </span>
      </div>
    </li>
  );
}
