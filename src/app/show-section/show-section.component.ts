import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TOGGLE_SECTION_VISIBILITY } from '../checkbox-config.actions';

@Component({
  selector: 'app-show-section',
  templateUrl: './show-section.component.html'
})
export class ShowSectionComponent {
  isVisibilityToggle$: Observable<boolean>;
  categories: any[] = [
    { name: 'Cars', key: 'cars', id: 1 },
    { name: 'Tons', key: 'tons', id: 2 },
    { name: 'Csx', key: 'csxtIncrease', id: 3 }
  ];

  constructor(private store: Store<{ isVisibilityToggle: boolean }>) {
    this.isVisibilityToggle$ = this.store.select('isVisibilityToggle');
  }

  toggleVisibility() {
    this.store.dispatch(TOGGLE_SECTION_VISIBILITY());
  }
}
