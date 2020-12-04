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





const components = [
  GridComponent,
  TodoComponent];

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
  MatButtonModule
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
