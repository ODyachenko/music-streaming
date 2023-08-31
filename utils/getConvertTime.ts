export const getConvertTime = (time: number, format: string) => {
  let seconds = Math.floor(time / 1000);
  let minutes = 0;
  let hours = 0;

  if (seconds >= 3600) {
    hours = Math.floor(seconds / 3600);
    minutes = Math.floor(seconds % 60);
    seconds = Math.floor((seconds / 60) % 60);
  } else if (seconds < 0) {
    console.error('Time cannot be negative');
  } else {
    minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
  }

  return format === 'track'
    ? `${checkZero(minutes)}:${checkZero(seconds)}`
    : !!hours
    ? `${checkZero(hours)}h ${checkZero(minutes)}m ${checkZero(seconds)}s`
    : `${checkZero(minutes)}m ${checkZero(seconds)}s`;
};

function checkZero(elem: number) {
  return elem < 10 ? '0' + elem : elem;
}
