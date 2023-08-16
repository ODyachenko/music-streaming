'use client';

import ReleasesList from './ReleasesList';
import './style.scss';

export default function Releases() {
  return (
    <section className="releases">
      <h2 className="releases__title title">New releases</h2>
      <ReleasesList />
    </section>
  );
}
