export const getConvertTime = (time: number, format: string) => {
  let seconds = Math.floor(time / 1000);
  let minutes = 0;

  if (seconds >= 60) {
    minutes = Math.floor(seconds / 60);
    seconds = Math.floor(((seconds % 60) / 100) * 60);
  }
  return format === 'track'
    ? `${checkZero(minutes)}:${checkZero(seconds)}`
    : `${checkZero(minutes)}m ${checkZero(seconds)}s`;
};

function checkZero(elem: number) {
  return elem < 10 ? '0' + elem : elem;
}
