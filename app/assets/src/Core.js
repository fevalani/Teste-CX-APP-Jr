const getDateAndHour = () => {
  const date = new Date();
  let minute = date.getMinutes();
  if (minute.length === 1) {
    minute = `0${minute}`;
  }
  const hour = date.getHours();
  const day = date.getDate();
  let month = date.getMonth();
  if (month.length === 1) {
    month = `0${month}`;
  }
  const year = date.getFullYear();
  return `${day}/${month}/${year} ${hour}:${minute}`;
};

const Core = {
  getDateAndHour,
};

export default Core;
