// types.ts

export interface ToggleState {
  isToggleOn: boolean;
}
export interface ToogleTextState {
  isToggleOnText:boolean;
}

interface Dog {
  id: number;
  name: string;
  age: number;
  gender: string;
  photo: string;
}

export interface DogsState {
  dogs: Dog[];
  currentIndex: number;
}
 export interface ScreenState {
  screen:boolean
  isDesktop:boolean
 }
