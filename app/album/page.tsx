import Navbar from '@/components/Navbar/Navbar';
import Image from '@/node_modules/next/image';
import React from 'react';
import albumCover from '@/public/album_cover1.png';
import AlbumActions from '@/components/AlbumActions/AlbumActions';
import Songs from '@/components/Songs/Songs';
import './style.scss';
import Player from '@/components/Player/Player';

export default function page() {
  return (
    <section className="album">
      <main className="main">
        <div className="container">
          <Navbar />
          <div className="album__inner">
            <Image
              className="album__cover"
              src={albumCover}
              alt="album cover"
              priority
            />
            <div className="album__info">
              <h1 className="album__title">Tomorrow’s tunes</h1>
              <p className="album__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </p>
              <span className="album__amount">64 songs ~ 16 hrs+</span>
              <AlbumActions />
            </div>
          </div>
          <Songs />
        </div>
        <Player />
      </main>
    </section>
  );
}
