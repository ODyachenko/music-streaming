export interface INavLinks {
  id: number;
  icon: JSX.Element;
  value: string;
  path: string;
}

export interface IReleasesList {
  id: string;
  img: string;
  title: string;
  artist: string;
}

export type ChartsItemType = {
  id: string;
  img: string;
  title: string;
  artist: string;
  tracks: string;
  duration: number;
};

export type PlayingTrackType = {
  id: string;
  name: string;
  artist: string;
  url: string;
  img: string;
  playlist: [];
  track_number: number;
};

export interface IAddCollectionAlbum {
  id?: string;
  albumId: string;
  albumCover: string;
  name: string;
  artist: string;
}
