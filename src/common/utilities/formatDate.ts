type Key = {
  [key: string]: string;
};

const DATE_SUFFIX: Key = {
  1: "st",
  2: "nd",
  3: "rd",
  other: "th",
};

const MONTHS: Key = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

export const toDateString = (time: number) => {
  const date = new Date(time);
  const dateNum = date.getDate();
  const month = date.getMonth();

  const dateSuffix = dateNum <= 3 ? DATE_SUFFIX[dateNum] : DATE_SUFFIX["other"];

  const dateString = `${dateNum}${dateSuffix} ${MONTHS[month]}`;

  return dateString;
};

export const formatTime = (time: number) => {
  const date = new Date(time);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${minutes}`;
};
