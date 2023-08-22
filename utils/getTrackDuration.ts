export const getTrackDuration = (time: number) => {
  let seconds = Math.floor(time / 1000);
  let minutes = 0;

  if (seconds >= 60) {
    minutes = Math.floor(seconds / 60);
    seconds = Math.floor(((seconds % 60) / 100) * 60);
  }
  return `${checkZero(minutes)}:${checkZero(seconds)}`;
};

function checkZero(elem: number) {
  return elem < 10 ? '0' + elem : elem;
}
