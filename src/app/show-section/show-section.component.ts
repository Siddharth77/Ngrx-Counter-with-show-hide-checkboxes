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
  checkedValue: string;
  categories: any[] = [
    { name: 'A', key: 'A', id: 1, hidden: false },
    { name: 'B', key: 'B', id: 2, hidden: false },
    { name: 'C', key: 'C', id: 3, hidden: false }
  ];

  constructor(private store: Store<{ isVisibilityToggle: boolean }>) {
    this.isVisibilityToggle$ = this.store.select('isVisibilityToggle');
  }

  toggleVisibility(event) {
    console.log(event.target.value);
    this.store.dispatch(TOGGLE_SECTION_VISIBILITY());
  }
}
