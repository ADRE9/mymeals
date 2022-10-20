export type ICalendarData = Record<string, ICalendarDate> | {};

export interface IDot {
  key: string;
  color: string;
  selectedDotColor: string;
}

export interface ICalendarDate {
  dots: IDot[];
  selectedColor: string;
  selectedTextColor: string;
}
