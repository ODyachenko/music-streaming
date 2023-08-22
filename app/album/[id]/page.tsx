'use client';

import Image from '@/node_modules/next/image';
import albumCover from '@/public/album_cover1.png';
import AlbumActions from '@/components/AlbumActions/AlbumActions';
import Songs from '@/components/Songs/Songs';
import '../style.scss';
import PageWrapper from '@/components/PageWrapper/PageWrapper';
import { useGetMusicByAlbumsQuery } from '@/redux/api/music.api';

export default function page({ params }: { params: { id: string } }) {
  const { data, error, isLoading } = useGetMusicByAlbumsQuery(params.id);

  return data ? (
    <section className="album">
      <PageWrapper>
        <div className="album__inner">
          <Image
            className="album__cover"
            src={data.albums[0].images[1].url}
            alt="album cover"
            priority
            width={256}
            height={256}
          />
          <div className="album__info">
            <h1 className="album__title">{data.albums[0].name}</h1>
            <p className="album__description">
              {data.albums[0].artists[0].name}
            </p>
            <span className="album__amount">
              {data.albums[0].total_tracks} songs ~ 16 hrs+
            </span>
            <AlbumActions />
          </div>
        </div>
        <Songs tracks={data.albums[0].tracks.items} />
      </PageWrapper>
    </section>
  ) : isLoading ? (
    <div>Loading...</div>
  ) : (
    console.error(error)
  );
}
