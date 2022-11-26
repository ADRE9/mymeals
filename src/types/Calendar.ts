export type ICalendarData = Record<string, ICalendarDate>;

export interface IDot {
  id: string;
  type: string;
  color: string;
  selectedDotColor?: string;
}

export interface ICalendarDate {
  id: string;
  dots: string[];
  selectedColor: string;
  marked: boolean;
  selectedTextColor: string;
}
