import { Component, OnInit } from '@angular/core';
import { TopNavigationComponent } from '../top-navigation/top-navigation.component';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { Observable, of } from 'rxjs';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { Store } from '@ngrx/store';
import { onlaodAutomotivesAction } from '../../store/actions/automotive.action';

type Car = {
  carId: number;
  carBrand: string;
  carModel: string;
  carPrice: number;
  carRating: number;
  carImage?: string;
  carInStock: boolean;
};
type Cars = Array<Car>;

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    TopNavigationComponent,
    AvatarModule,
    CardModule,
    DataViewModule,
    CommonModule,
    RatingModule,
    FormsModule,
    TagModule,
    ButtonModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  public automatives$: Observable<Cars> = this.getCars();

  private getCars(): Observable<Cars> {
    return of([
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
        carId: 1,
        carBrand: 'Skyline r34',
        carModel: 'R34',
        carPrice: 100000,
        carRating: 4,
        carInStock: false,
        carImage: 'assets/1999-skyline-.jpg',
      },
    ]);
  }
}
export { Car, Cars };
