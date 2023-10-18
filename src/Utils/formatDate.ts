export const convertDate = (data: string): string => {
  const date = new Date(`${data}`);
  const dateFormate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} às ${date.getHours()}:${date.getMinutes()}`;

  return dateFormate;
};

export const formatDate = (data: string): string => {
  const date = new Date(`${data}`);
  const formatDate = `${String(date.getDate()).padStart(2, '0')}/${String(
    date.getMonth() + 1
  ).padStart(2, '0')}/${date.getFullYear()}`;
  return formatDate;
};

export const convertedHour = (data: string): string => {
  const hour = new Date(`${data}`);
  const convertedHOur = `${hour.getHours()}:${hour.getMinutes()}`;

  return convertedHOur;
};
// eslint-disable-next-line
export const formatHour = (hour: number) => {
  const hours = Math.floor(hour / 60);
  const minute = hour % 60;

  return `${padToTwoDigits(hours)}:${padToTwoDigits(minute)}`;
};

const padToTwoDigits = (num: number) => {
  return num.toString().padStart(2, '0');
};
