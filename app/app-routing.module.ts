import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayHomePComponent } from './display-home-p/display-home-p.component';
import { FacilityDropdownComponent } from './facility-dropdown/facility-dropdown.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UnmappedServiceLinesComponent } from './unmapped-service-lines/unmapped-service-lines.component';

const routes: Routes = [
  {
    path: 'mappingPage',
    pathMatch: 'full',
    component: DisplayHomePComponent
  },
  {
    path: '',
    component: FacilityDropdownComponent
  },
  {
    path:'fileUploadPage',
    component: FileUploadComponent
  },{
    path:"unmappedServiceLinesPage",
    component:UnmappedServiceLinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
