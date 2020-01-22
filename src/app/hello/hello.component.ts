import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title: string;
  message: string;
  myControl: FormGroup;

  constructor() { 

  }

  ngOnInit() {
    this.title = "Hello-app";
    this.message = 'FormGroupを使う';
    this.myControl = new FormGroup({
      name: new FormControl(''),
      mail: new FormControl(''),
      age: new FormControl(0),
      control: new FormControl(),
      control2: new FormControl(),
      control3: new FormControl(),
      control4: new FormControl()
    }); 
  }

  onSubmit() {
    let result = this.myControl.value;
    this.message = JSON.stringify(result);
  }
}
