import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadServiceService {

  constructor(private http: HttpClient) { }

  fileUpload(file: FormData) {
    return this.http.post('http://localhost:5000/api/upload', file); //mock AWS S3 bucket call
  }

}