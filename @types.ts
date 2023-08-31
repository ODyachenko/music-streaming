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

export interface IActions {
  id: number;
  img: SVGElement;
  value: string;
  action: string;
  albumId?: string;
}

export interface Isongs {
  id: number;
  img: SVGElement;
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

export type PlaylistType = {
  id: string;
  name: string;
  preview_url: string;
};

export type AlbumType = {
  id: string;
  title: string;
  img: any;
  artist: any;
  tracks: any;
  duration: number;
};

export interface IAddCollectionAlbum {
  id?: string;
  albumId: string;
  albumCover: string;
  name: string;
  artist: string;
}
