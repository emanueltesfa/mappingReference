import { Component, OnInit } from '@angular/core';
import { FileUploadServiceService } from '../file-upload-service/file-upload-service.service';
@Component({
  selector: 'app-s3-skeleton',
  templateUrl: './s3-skeleton.component.html',
  styleUrls: ['./s3-skeleton.component.css']
})
export class S3SkeletonComponent {

  fileObj: File | undefined;
  fileUrl!: string;
  errorMsg: boolean
  constructor(private fileUploadServiceService: FileUploadServiceService) {
    this.errorMsg = false
  }

  onFilePicked(event: Event): void {

    this.errorMsg = false
    console.log(event);
    const FILE = (event.target as any).files[0]; //HTMLInputElement
    this.fileObj = FILE;
    console.log(this.fileObj);
  }
  
  onFileUpload() {
    if (!this.fileObj) {
      this.errorMsg = true
      return
    }
    const fileForm = new FormData();
    fileForm.append('file', this.fileObj);
    this.fileUploadServiceService.fileUpload(fileForm).subscribe(res => {
    //  this.fileUrl = res['image'];
    });
  }

}



