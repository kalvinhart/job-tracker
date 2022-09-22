export const toDateString = (date: number) => {
  return new Date(date).toDateString();
};

export const formatTime = (time: number) => {
  const date = new Date(time);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${minutes}`;
};
