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
    { name: 'A', key: 'A', id: 1 },
    { name: 'B', key: 'B', id: 2 },
    { name: 'C', key: 'C', id: 3 }
  ];

  constructor(private store: Store<{ isVisibilityToggle: boolean }>) {
    this.isVisibilityToggle$ = this.store.select('isVisibilityToggle');
  }

  toggleVisibility() {
    this.store.dispatch(TOGGLE_SECTION_VISIBILITY());
  }
}
