export interface INavLinks {
  id: number;
  icon: JSX.Element;
  value: string;
  path: string;
}
export interface IChartsList {
  id: number;
  img: StaticImageData;
  title: string;
  artist: string;
  duration: string;
}

export interface IReleasesList {
  id: number;
  img: StaticImageData;
  title: string;
}

export interface IActions {
  id: number;
  img: StaticImageData;
  value: string;
}

export interface Isongs {
  id: number;
  img: StaticImageData;
  name: string;
  artist: string;
  duration: string;
}

export type ChartsItemType = {
  id: string;
  img: string;
  title: string;
  artist: string;
  tracks: string;
  duration: string;
};
