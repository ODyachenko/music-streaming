export function getAlbumDuration(album: any) {
  return album.tracks.items.reduce((res: number, current: any) => {
    return res + current.duration_ms;
  }, 0);
}
