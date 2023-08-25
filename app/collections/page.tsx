'use client';
import { useState } from 'react';
import { CollectionActions } from '@/components/CollectionActions/CollectionActions';
import { CollectionLIst } from '@/components/CollectionLIst/CollectionLIst';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import './style.scss';

export default function Collection() {
  const [isActive, setIsActive] = useState(0);

  return (
    <PageWrapper>
      <div className="collection">
        <CollectionActions isActive={isActive} setIsActive={setIsActive} />
        <CollectionLIst type={!!isActive ? 'liked' : 'collection'} />
      </div>
    </PageWrapper>
  );
}
