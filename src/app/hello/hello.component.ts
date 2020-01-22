import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title: string;
  message: string;
  myControl: FormGroup;
  constructor( private fb: FormBuilder) { 

  }

  ngOnInit() {
    this.title = "Hello-app";
    this.message = 'FormControlを使う';
    this.myControl = this.fb.group({
      name: ['', [Validators.required]], // 必須項目のバリデーション
      mail: ['', [Validators.email, Validators.required]], // メール形式のバリデーション
      age: [0, [Validators.min(1), Validators.max(150)]], // 数値チェック
      sex: ['', [Validators.requiredTrue]]
    });
  }

  get name() { return this.myControl.get('name'); }
  get mail() { return this.myControl.get('mail'); }
  get age() { return this.myControl.get('age'); }
  get sex() { return this.myControl.get('sex'); }

  onSubmit() {
    if (this.myControl.invalid) {
      this.message = 'VALIDATION ERROR.';
    } else {
      let result = this.myControl.value;
      this.message = JSON.stringify(result);
    }
  }
}
