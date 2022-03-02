import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';

import { BackendCallsService } from '../app/services/backend-calls.service'
import { TableExampleComponent } from './table/table-example.component';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { FacilityDropdownComponent } from './facility-dropdown/facility-dropdown.component';
import { DisplayHomePComponent } from './display-home-p/display-home-p.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CssBarComponent } from './css-bar/css-bar.component';
import { UnmappedServiceLinesComponent } from './unmapped-service-lines/unmapped-service-lines.component';
import { S3SkeletonComponent } from './s3-skeleton/s3-skeleton.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TableExampleComponent,

    TitleBarComponent,
    FacilityDropdownComponent,
    DisplayHomePComponent,
    FileUploadComponent,
    CssBarComponent,
    UnmappedServiceLinesComponent,
    S3SkeletonComponent,
    TopbarComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    FileUploadModule,
    MenubarModule,
    DropdownModule,
    ProgressSpinnerModule,
    InputTextModule
  ],
  providers: [BackendCallsService],
  exports: [AppRoutingModule, FacilityDropdownComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }