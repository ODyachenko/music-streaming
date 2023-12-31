import { FC } from 'react';
import Image from '@/node_modules/next/image';
import heroSocial from '@/public/hero_social.png';
import heroOverlay from '@/public/hero_overlay.svg';

export const Hero: FC = () => {
  return (
    <div className="header__hero hero">
      <Image
        className="hero__overlay"
        src={heroOverlay}
        alt="overlay"
        priority
        width={675}
        height={167}
      />
      <span className="hero__name">Currated playlist</span>
      <h1 className="hero__title">R & B Hits</h1>
      <p className="hero__text">
        All mine, Lie again, Petty call me everyday, Out of time, No love, Bad
        habit, and so much more
      </p>
      <div className="hero__social">
        <Image
          className="hero__social--avatars"
          src={heroSocial}
          alt="social avatars"
          priority
        />
        <span className="hero__social--activity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M9.88371 3.23386C10.5977 3.25557 11.289 3.38024 11.9588 3.60804H12.0257C12.071 3.62957 12.105 3.65337 12.1277 3.6749C12.3782 3.75537 12.615 3.84604 12.8417 3.9707L13.2724 4.16337C13.4424 4.25404 13.6464 4.4229 13.7597 4.49204C13.873 4.5589 13.9977 4.62804 14.0997 4.70624C15.3588 3.74404 16.8877 3.2227 18.463 3.23386C19.1782 3.23386 19.8922 3.3349 20.571 3.5627C24.7542 4.9227 26.2615 9.5127 25.0024 13.5247C24.2884 15.5749 23.121 17.446 21.5922 18.9749C19.4037 21.0942 17.0022 22.9756 14.417 24.5962L14.1337 24.7674L13.839 24.5849C11.2448 22.9756 8.82971 21.0942 6.62084 18.9636C5.10218 17.4347 3.93371 15.5749 3.20838 13.5247C1.92771 9.5127 3.43504 4.9227 7.66351 3.5389C7.99218 3.42557 8.33104 3.34624 8.67104 3.30204H8.80704C9.12551 3.25557 9.44171 3.23386 9.75904 3.23386H9.88371ZM19.9817 6.81537C19.517 6.65557 19.007 6.90604 18.837 7.38204C18.6784 7.85804 18.9277 8.37937 19.4037 8.54824C20.1302 8.82024 20.6164 9.53537 20.6164 10.3276V10.3627C20.5948 10.6222 20.673 10.8727 20.8317 11.0654C20.9904 11.258 21.2284 11.3702 21.4777 11.394C21.9424 11.3816 22.339 11.0087 22.373 10.5316V10.3967C22.407 8.8089 21.4448 7.3707 19.9817 6.81537Z"
              fill="white"
            />
          </svg>
          33k&nbsp;Likes
        </span>
      </div>
    </div>
  );
};
