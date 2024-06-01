import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LandingPageComponent,
    ButtonModule,
    AvatarModule,
    CardModule,
    CommonModule,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'automative-car-purchase-app-angular17';
}
