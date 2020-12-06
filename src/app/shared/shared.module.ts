/** @format */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridComponent } from './grid/grid.component';
import { TodoComponent } from './todo/todo.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatAutocompleteModule, MatNativeDateModule, MatRadioModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FloButtonComponent } from './flo-button/flo-button.component';





const components = [
  GridComponent,
  TodoComponent,
  FloButtonComponent];

const modules = [
  CommonModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatToolbarModule,
  MatSlideToggleModule,
  MatCardModule,
  MatTableModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  FormsModule
];

@NgModule({
  declarations: [
    ...components,
    ],
  imports: [
    ...modules],
  exports: [
    ...components,
    ...modules],
})
export class SharedModule {}
