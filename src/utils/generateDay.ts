import {ICalendarDate} from '../types/Calendar';

const generateDay = (selectedDay: string, mealType: number) => {
  if (mealType === 0) {
    const data: ICalendarDate = {
      id: selectedDay,
      dots: ['Dinner1'],
      selectedColor: 'white',
      marked: true,
      selectedTextColor: 'black',
    };
    return data;
  }
  if (mealType === 1) {
    const data: ICalendarDate = {
      id: selectedDay,
      dots: ['Lunch1'],
      selectedColor: 'white',
      marked: true,
      selectedTextColor: 'black',
    };
    return data;
  } else {
    const data: ICalendarDate = {
      id: selectedDay,
      dots: ['Breakfast1'],
      selectedColor: 'white',
      marked: true,
      selectedTextColor: 'black',
    };
    return data;
  }
};
export default generateDay;
