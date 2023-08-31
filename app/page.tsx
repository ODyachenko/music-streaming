import { Header } from '@/components/Header/Header';
import { TopCharts } from '@/components/TopCharts/TopCharts';
import { Releases } from '@/components/Releases/Releases';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';

export default async function Home() {
  return (
    <PageWrapper>
      <div className="main__inner">
        <Header />
        <TopCharts />
      </div>
      <Releases />
    </PageWrapper>
  );
}
