import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { onlaodAutomotivesSuccess } from '../actions/automotive.action';

export default class automotiveEffects {
  public onLoadCars$ = createEffect((): any =>
    this.action$.pipe(
      ofType(onlaodAutomotivesSuccess),
      exhaustMap(() =>
        of([
          {
            carId: 1,
            carBrand: 'Toyota supramk4 ',
            carModel: 'mk4',
            carPrice: 100000,
            carRating: 5,
            carInStock: true,
            carImage: 'assets/supra.jpeg',
          },
          {
            carId: 2,
            carBrand: ' Hyonday',
            carModel: '2018',
            carPrice: 9000,
            carRating: 3,
            carInStock: true,
            carImage: 'assets/HYONDAI.jpg',
          },
          {
            carId: 1,
            carBrand: ' Mercedes ',
            carModel: 'Amg',
            carPrice: 200000,
            carRating: 5,
            carInStock: true,
            carImage: 'assets/mercedes-amg-gt-coupe-2023.jpg',
          },
          {
            carId: 4,
            carBrand: 'Skyline r34',
            carModel: 'R34',
            carPrice: 100000,
            carRating: 4,
            carInStock: false,
            carImage: 'assets/1999-skyline-.jpg',
          },
        ])
      )
    )
  );

  constructor(public action$: Actions) {}
}
