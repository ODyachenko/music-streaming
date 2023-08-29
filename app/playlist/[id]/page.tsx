'use client';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { PlaylistSongs } from '@/components/Songs/PlaylistSongs';
import Image from '@/node_modules/next/image';
import { useGetPlaylistsQuery } from '@/redux/api/music.api';
import './style.scss';

type PlaylistProps = {
  params: {
    id: string;
  };
};

export default function page({ params }: PlaylistProps) {
  const { data, isLoading, error } = useGetPlaylistsQuery(params.id);

  return (
    <PageWrapper>
      {data && (
        <section className="playlist album">
          <div className="album__inner">
            <Image
              className="album__cover"
              src={data.images[0].url}
              alt="playlist cover"
              priority
              width={256}
              height={256}
            />
            <div className="album__info">
              <h1 className="album__title">{data.name}</h1>
              <p className="album__description">{data.description}</p>
              <span className="album__amount">
                {data.tracks.total} songs ~{' '}
                {/* {getConvertTime(getAlbumDuration(data.albums[0]), 'album')} */}
              </span>
            </div>
          </div>
          <PlaylistSongs id={params.id} />
        </section>
      )}
    </PageWrapper>
  );
}
