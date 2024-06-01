import { createReducer, on } from '@ngrx/store';
import { Cars } from 'src/app/components/landing-page/landing-page.component';
import {
  onlaodAutomotivesSuccess,
  onlaodAutomotivesSuccessAction,
} from '../actions/automotive.action';
import { state } from '@angular/animations';

export type IntialCars = {
  cars: Cars;
};

export const inialState: IntialCars = {
  cars: [],
};

const automotiveReducer = createReducer(
  inialState,
  on(onlaodAutomotivesSuccessAction, (state, { paylaod }) => ({
    ...state,
    cars: [...state.cars, ...paylaod],
  }))
);

export { automotiveReducer };
