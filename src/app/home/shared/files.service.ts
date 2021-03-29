import { Injectable } from '@angular/core';
import { FILES } from './mock-files';
import { File } from './file'

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor() { }

  getFiles(): File[] {
    return FILES;
  }
}
