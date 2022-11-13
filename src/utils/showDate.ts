const showDates = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date();
  let day = date.getDate();
  let month = months[date.getMonth()].slice(0, 3);
  let year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

export default showDates;
