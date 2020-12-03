/** @format */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridComponent } from './grid/grid.component';
import { TodoComponent } from './todo/todo.component';

const components = [
  GridComponent,
  TodoComponent];
const modules = [
  CommonModule
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
