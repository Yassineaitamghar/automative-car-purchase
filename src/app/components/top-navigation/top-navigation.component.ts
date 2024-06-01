import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'app-top-navigation',
  standalone: true,
  imports: [AvatarModule, CardModule, DataViewModule],
  templateUrl: './top-navigation.component.html',
  styleUrl: './top-navigation.component.css',
})
export class TopNavigationComponent {}
