import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ConfigItem } from '../../services/config-item';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  footer: ConfigItem = {
    // Define the data for the footer
    name: 'footer',
    data: {
      title: '2024 All rights reserved by',
      url: 'https://www.instagram.com/yasuuun.x7/',
      developer: 'Yassine',
    },
  };
}
