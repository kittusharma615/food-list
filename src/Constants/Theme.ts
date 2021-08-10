import {DarkTheme, DefaultTheme} from 'react-native-paper';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      white: string;
      black: string;
      success: string;
      winter: string;
      blue: string;
      primary: string;
      secondary: string;
      ebony: string;
      darkGray: string;
      text: string;
      gray: string;
      lightGray: string;
    }
    interface Theme {}
  }
}

export const DayTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    white: '#ffffff',
    black: '#000000',
    success: '#25a820',
    primary: '#F9537B',
    winter: '#F3F3F3',
    blue: '#3EC4DE',
    secondary: '#BABDBE',
    error: '#c13851',
    ebony: '#111719',
    darkGray: '#5E676A',
    text: '#757E81',
    gray: '#828282',
    lightGray: '#DBDBDB',
  },
};

export const NightTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    white: '#ffffff',
    black: '#000000',
    success: '#25a820',
    primary: '#F9537B',
    winter: '#F3F3F3',
    blue: '#3EC4DE',
    secondary: '#BABDBE',
    ebony: '#111719',
    darkGray: '#5E676A',
    text: '#757E81',
    gray: '#828282',
    lightGray: '#DBDBDB',
  },
};
