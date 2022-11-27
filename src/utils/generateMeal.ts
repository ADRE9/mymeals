import {addDot} from '../redux/slices/dots/dotSlice';
import {ICalendarDate} from '../types/Calendar';

const generateMeal = (meal: ICalendarDate, mealType: number, dispatch: any) => {
  console.log('Iam running', meal);
  if (mealType === 0) {
    let dinner = 0;
    meal.dots.map((dot: string) => {
      if (dot.toLowerCase().includes('dinner')) {
        dinner = dinner + 1;
      }
    });
    const data = {
      id: `Dinner${dinner + 1}`,
      type: 'dinner',
      color: 'blue',
    };
    dispatch(addDot(data));
    return `Dinner${dinner + 1}`;
  }
  if (mealType === 1) {
    let lunch = 0;
    meal.dots.map((dot: string) => {
      if (dot.toLowerCase().includes('lunch')) {
        lunch = lunch + 1;
      }
    });
    const data = {
      id: `Lunch${lunch + 1}`,
      type: 'lunch',
      color: 'green',
    };
    dispatch(addDot(data));
    return `Lunch${lunch + 1}`;
  } else {
    let breakfast = 0;
    meal.dots.map((dot: string) => {
      if (dot.toLowerCase().includes('breakfast')) {
        breakfast = breakfast + 1;
      }
    });
    const data = {
      id: `Breakfast${breakfast + 1}`,
      type: 'breakfast',
      color: 'red',
    };
    dispatch(addDot(data));
    return `Breakfast${breakfast + 1}`;
  }
};
export default generateMeal;
