import { Component } from '@angular/core';

@Component({
  selector: 'app-show-section',
  templateUrl: './show-section.component.html'
})
export class ShowSectionComponent {
  categories: any[] = [
    { name: 'Cars', key: 'cars', id: 1 },
    { name: 'Tons', key: 'tons', id: 2 },
    { name: 'Csx', key: 'csxtIncrease', id: 3 }
  ];

  constructor() {}
}
