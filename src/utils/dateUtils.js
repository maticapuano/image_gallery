export const formatDate = (date) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const formatedDate = new Date(date);
  return `${
    months[formatedDate.getMonth()]
  } ${formatedDate.getDay()}, ${formatedDate.getFullYear()}`;
};
