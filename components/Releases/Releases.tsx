'use client';
import { FC } from 'react';
import { ReleasesList } from './ReleasesList';
import './style.scss';

export const Releases: FC = () => {
  return (
    <section className="releases">
      <h2 className="releases__title title">New releases</h2>
      <ReleasesList />
    </section>
  );
};
