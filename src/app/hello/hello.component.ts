import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title: string;
  message: string;
  price: number;
  now: Date;
  styleClass: string;
  count: number;
  input: string;
  visible:boolean;
  data:string[];
  switch:string;

  constructor() { 
    setInterval(
      () => { 
        this.now = new Date();
        this.styleClass = this.styleClass =='red' ? '' : 'red';
        console.log(this.styleClass)
      }, 1000);
  }

  ngOnInit() {
    this.title = "Hello-app";
    this.message = 'This is My First Component!!';
    this.price = 123450;
    this.styleClass = 'red';
    this.count = 0;
    this.input = '';
    this.visible = true;
    this.data = [
      '最初の項目。',
      '2番目の項目',
      '最後の項目k'
    ];
    this.switch = "one";
  }

  today() {
    return this.now.toLocaleString();
  }

  doClick() {
    this.message = ++this.count + "回、クリックしました";
  }

  doType(val:string) {
    this.input = val;
    this.message = 'you type: ' + this.input;
  }

  doChange() {
    this.visible = !this.visible;
  }

  doSelect(val) {
    this.switch = val;
  }
}
