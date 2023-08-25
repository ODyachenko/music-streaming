'use client';
import Image from '@/node_modules/next/image';
import { useGetMusicByAlbumsQuery } from '@/redux/api/music.api';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { AlbumActions } from '@/components/AlbumActions/AlbumActions';
import { Songs } from '@/components/Songs/Songs';
import { getAlbumDuration } from '@/utils/getAlbumDuration';
import { getConvertTime } from '@/utils/getConvertTime';
import '../style.scss';

type AlbumPagePropsType = {
  params: { id: string };
};

export default function page({ params }: AlbumPagePropsType) {
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
              {data.albums[0].total_tracks} songs ~{' '}
              {getConvertTime(getAlbumDuration(data.albums[0]), 'album')}
            </span>
            <AlbumActions
              albumId={data.albums[0].id}
              albumCover={data.albums[0].images[1].url}
              name={data.albums[0].name}
              artist={data.albums[0].artists[0].name}
            />
          </div>
        </div>
        <Songs
          albumCover={data.albums[0].images[2].url}
          tracks={data.albums[0].tracks.items}
        />
      </PageWrapper>
    </section>
  ) : isLoading ? (
    <div>Loading...</div>
  ) : (
    console.error(error)
  );
}
