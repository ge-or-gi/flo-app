import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Form, Validators, NgForm } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  documnetsForm;
  options: string[] = ['123456789', '123987456', '789456123', '456789', '2589632', '753215987'];
  filteredOptions: Observable<string[]>;
  formValid: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.documnetsForm = this.fb.group({
      send: [''],
      documentupld: ['', Validators.required],
      datesend: ['', Validators.required],
      comment: [''],
      passportnumber: ['', Validators.required],
      urgent: ['', Validators.required],
      deadline: ['', Validators.required]
    });

    this.filteredOptions = this.documnetsForm.get('passportnumber').valueChanges.pipe(
      startWith(''),
      map((value:any) => this._filter(value))
    );

    this.documnetsForm.get('send').valueChanges.subscribe(res => {
      if(res === 'send') {
        this.documnetsForm.get('passportnumber').disable();
        this.documnetsForm.get('urgent').disable();
        this.documnetsForm.get('deadline').disable();
      } else {
        this.documnetsForm.get('passportnumber').enable();
        this.documnetsForm.get('urgent').enable();
        this.documnetsForm.get('deadline').enable();
      }

      if(res === 'not-send'){
        this.documnetsForm.get('documentupld').disable();
        this.documnetsForm.get('datesend').disable();
      } else {
        this.documnetsForm.get('documentupld').enable();
        this.documnetsForm.get('datesend').enable();
      }
    });

    this.documnetsForm.get('urgent').valueChanges.subscribe(res => {
      if(res !== 'urgent'){
        this.documnetsForm.get('deadline').clearValidators();
        this.documnetsForm.get('deadline').updateValueAndValidity();
      } else {
        this.documnetsForm.get('deadline').setValidators(Validators.required);
        this.documnetsForm.get('deadline').updateValueAndValidity();
      }
    });


  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  updateDocumentField(ev){
    this.documnetsForm.get('documentupld').setValue('file added !!!');
  }

  send(){
    this.formValid = this.documnetsForm.status;
  }

}
