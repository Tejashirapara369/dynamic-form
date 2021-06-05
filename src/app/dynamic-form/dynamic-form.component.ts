import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as formService from '../shared/fields';
import { generateForm } from '../shared/form-generate';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  public formGroup: FormGroup
  public form = formService.segment['userForm'].fields

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    var fieldArray = generateForm(this.form)
    // fieldArray['hobbies'] = this.fb.array([])
    this.formGroup = this.fb.group(fieldArray)
  }

  get hobbyArray() {
    return (this.formGroup.get('hobbies') as FormArray).controls;
  }

}
