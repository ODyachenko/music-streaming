import { FC } from 'react';
import { ChartsList } from './ChartsList';
import './style.scss';

export const TopCharts: FC = () => {
  return (
    <section className="charts">
      <h2 className="charts__title title">Top charts</h2>
      <ChartsList />
    </section>
  );
};
