export type ICalendarData = Record<string, ICalendarDate> | {};

export interface IDot {
  id: string;
  color: string;
  selectedDotColor: string;
}

export interface ICalendarDate {
  id: string;
  dots: IDot[];
  selectedColor: string;
  selectedTextColor: string;
}
