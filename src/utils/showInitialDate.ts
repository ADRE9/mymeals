const showInitialDates = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  console.log(`${year}-${month}-${day}`);
  return `${year}-${month}-${day}`;
};

export default showInitialDates;
