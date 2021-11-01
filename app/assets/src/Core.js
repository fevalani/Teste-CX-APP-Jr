const getDateAndHour = () => {
  const date = new Date();

  let minute = date.getMinutes().toString();
  minute = formatChange(minute);

  let hour = date.getHours().toString();
  hour = formatChange(hour);

  let day = date.getDate().toString();
  day = formatChange(day);

  let month = (date.getMonth() + 1).toString();
  month = formatChange(month);

  const year = date.getFullYear();

  function formatChange(value) {
    if (value.length === 1) {
      value = `0${value}`;
    }
    return value;
  }
  return `${day}/${month}/${year} ${hour}:${minute}`;
};

const Core = {
  getDateAndHour,
};

export default Core;
