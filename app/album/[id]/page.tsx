'use client';
import { useGetMusicByAlbumsQuery } from '@/redux/api/music.api';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { AlbumHead } from '@/components/AlbumHead/AlbumHead';
import { Songs } from '@/components/Songs/Songs';
import '../style.scss';

type AlbumPagePropsType = {
  params: { id: string };
};

export default function page({ params }: AlbumPagePropsType) {
  const { data, error, isLoading }: any = useGetMusicByAlbumsQuery(params.id);

  return (
    data && (
      <section className="album">
        <PageWrapper>
          <AlbumHead {...data} />
          <Songs
            albumCover={data.albums[0].images[2].url}
            tracks={data.albums[0].tracks.items}
          />
        </PageWrapper>
      </section>
    )
  );
}
