import { Component, OnInit } from '@angular/core';
import { FILES } from '../shared'
import { FilesService } from '../shared'

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
  files

  constructor( private fileService: FilesService ) { }

  async ngOnInit() {
  }

  uploaded(event) {
    this.beforeUpload = false
    this.onUpload = true
    this.nameFile = event.target.files[0].name;
  }

  async start() {
    this.beforeUpload = false;
    this.onUpload = false;
    this.afterUpload = true;
    this.files = await this.fileService.getFiles();
  }

}
