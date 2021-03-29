import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  beforeUpload = true
  onUpload = false
  afterUpload = false
  nameFile = ''
  constructor() { }

  ngOnInit(): void {
  }

  uploaded(event) {
    this.beforeUpload = false
    this.onUpload = true
    this.nameFile = event.target.files[0].name;
  }

  start() {
    this.beforeUpload = false;
    this.onUpload = false;
    this.afterUpload = true;
  }

}
