import React, {createContext, useCallback} from 'react';
import {useMMKVObject} from 'react-native-mmkv';
import {storage} from '../utils/storage';

import {ICalendarData, ICalendarDate, IDot} from '../types/Calendar';
import {
  LUNCH1,
  LUNCH2,
  LUNCH3,
  LUNCH4,
  DINNER1,
  DINNER2,
  DINNER3,
  DINNER4,
} from '../constants/CALENDAR';

type Props = {children?: any};
export const DataContext = createContext({});

export const DataProvider = (props: Props) => {
  // const [data, setData] = useState(storage.getString('calendarData'));
  if (!storage.contains('calendarData')) {
    storage.set('calendarData', JSON.stringify({}));
  }

  const [data, setData] = useMMKVObject<ICalendarData>('calendarData');

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        getData: () => {
          if (data !== undefined) {
            return data;
          }
          return null;
        },
        addDots: (dot: IDot, date: string) => {
          try {
            const Dots = [...data[`${date}`].dots, dot];
            const DateObj = {...data[`${date}`], dots: Dots};
            const DB = {...data, [`${date}`]: DateObj};
            if (data) {
              // setData(data)
              storage.set('calendarData', JSON.stringify({...DB}));
              console.log('Added Dots', data);
            }
          } catch (e) {
            console.log(e);
          }
        },
        addMeal: (date: string, type: string) => {
          try {
            const dateObject = {
              [date]: {
                dots: [],
                selectedColor: 'black',
                selectedTextColor: 'white',
              },
            };
            storage.set(
              'calendarData',
              JSON.stringify({...data, ...dateObject}),
            );
            console.log('Types', type);
            if (type === 'dinner') {
              const dot = DINNER1;
              const Dots = [...data[`${date}`].dots, dot];
              const DateObj = {...data[`${date}`], dots: Dots};
              const DB = {...data, [`${date}`]: DateObj};
              storage.set('calendarData', JSON.stringify({...DB}));
              console.log('Added DINNER1', data);
            } else if (type === 'lunch') {
              const dot = LUNCH1;
              const Dots = [...data[`${date}`].dots, dot];
              const DateObj = {...data[`${date}`], dots: Dots};
              const DB = {...data, [`${date}`]: DateObj};
              storage.set('calendarData', JSON.stringify({...DB}));
              console.log('Added DINNER1', data);
            }
            console.log('Added LUNCH1', data);
          } catch (e) {}
        },
        editData: (dataObject: {[key: string]: string}) => {
          try {
            if (data !== undefined) {
              setData(JSON.stringify({...data, ...dataObject}));
            }
            setData(JSON.stringify({...dataObject}));
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {props.children}
    </DataContext.Provider>
  );
};
