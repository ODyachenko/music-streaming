import { CollectionActions } from '@/components/CollectionActions/CollectionActions';
import { CollectionLIst } from '@/components/CollectionLIst/CollectionLIst';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import './style.scss';

export default function Collection() {
  return (
    <PageWrapper>
      <div className="collection">
        <CollectionActions />
        <CollectionLIst />
      </div>
    </PageWrapper>
  );
}
