import Image from '@/node_modules/next/image';
import React from 'react';
import cover from '@/public/release.png';
import './style.scss';

export default function Player() {
  return (
    <div className="player">
      <div className="player__artist artist">
        <Image className="artist__img" src={cover} alt="cover" />
        <div>
          <h2 className="artist__song">Seasons in</h2>
          <h3 className="artist__name">James</h3>
        </div>
      </div>
      <div className="player__control">
        <button className="player__control--play">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
          >
            <path
              d="M0.00842285 6.50004V4.01889C0.00842285 0.834778 2.26214 -0.467736 5.01205 1.12432L7.16231 2.36483L9.31264 3.60534C12.0625 5.1974 12.0625 7.80268 9.31264 9.39473L7.16231 10.6352L5.01205 11.8758C2.26214 13.4678 0.00842285 12.1653 0.00842285 8.98118V6.50004Z"
              fill="#EFEEE0"
            />
          </svg>
        </button>
        <button className="player__control--next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
          >
            <path
              d="M4.16089 7.15352V15.8558C4.16089 17.6381 6.09777 18.7566 7.64363 17.8654L11.4174 15.6921L15.1911 13.5097C16.7369 12.6186 16.7369 10.3907 15.1911 9.49959L11.4174 7.3172L7.64363 5.14389C6.09777 4.25275 4.16089 5.36213 4.16089 7.15352Z"
              fill="white"
            />
            <path
              d="M19.1467 17.8018C18.7739 17.8018 18.4647 17.4926 18.4647 17.1198V5.88042C18.4647 5.5076 18.7739 5.19843 19.1467 5.19843C19.5195 5.19843 19.8287 5.5076 19.8287 5.88042V17.1198C19.8287 17.4926 19.5286 17.8018 19.1467 17.8018Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
