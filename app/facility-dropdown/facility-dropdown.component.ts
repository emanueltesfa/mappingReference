import { Component, OnInit } from '@angular/core';
import { BackendCallsService } from '../services/backend-calls.service';

@Component({
  selector: 'app-facility-dropdown',
  templateUrl: './facility-dropdown.component.html',
  styleUrls: ['./facility-dropdown.component.css']
})

export class FacilityDropdownComponent implements OnInit {
  facility2 = [{ "BranchID": "", "EnterpriseID": "", "BranchName": "", "BranchDescription": "", "ParentBranchID": "", "IsActive": "", "BranchGUID": "", "EnterpriseName": "", "FacilityNCID": "", "IsPhysicalFacility": "", "EnterpriseGUID": "", "BranchTypeID": "", "IsPreferredTenant": "" }];
  facExists = [{ "BranchID": "", "EnterpriseID": "", "BranchName": "", "BranchDescription": "", "ParentBranchID": "", "IsActive": "", "BranchGUID": "", "EnterpriseName": "", "FacilityNCID": "", "IsPhysicalFacility": "", "EnterpriseGUID": "", "BranchTypeID": "", "IsPreferredTenant": "", "IsMapped": "" }];
  facility = [{ "BranchID": "", "EnterpriseID": "", "BranchName": "", "BranchDescription": "", "ParentBranchID": "", "IsActive": "", "BranchGUID": "", "EnterpriseName": "", "FacilityNCID": "", "IsPhysicalFacility": "", "EnterpriseGUID": "", "BranchTypeID": "", "IsPreferredTenant": "" }];
  enterprise = [{ "BranchID": "", "EnterpriseID": "", "BranchName": "", "BranchDescription": "", "IsActive": "", "BranchGUID": "", "EnterpriseName": "", "FacilityNCID": "", "IsPhysicalFacility": "", "EnterpriseGUID": "", "BranchTypeID": "", "IsPreferredTenant": "", "SiteID": "" }];

  selectedEnterprise: string | undefined;
  selectedFacility: any;
  ifLoadingDrop = true;
  ifPageExists = false;
  isUrl: any;

  constructor(private hello: BackendCallsService) { }

  ngOnInit(): void {
    this.hello.getEnterpriseData().subscribe(val => {
      this.enterprise = (val as any)?.['Branches']; //breakdown proper
    });
    this.hello.getFacilityData(this.selectedFacility).subscribe(val => {
      this.facility = (val as any); //breakdown proper4
    });
  }

  populateDrop(event: any) {
    this.ngOnInit();
    this.ifLoadingDrop = true;
    var that = this;

    setTimeout(function () {
      that.facility.forEach(row => {
        if (row.BranchID === event.value) { // just fake api call
          that.facility2 = that.facility;
        }
      })
    }, 1000); //5 seconds
    this.ifLoadingDrop = false;
  }

  checkIfMapExists(event: any) {
    this.ifPageExists = false;
    this.hello.getFacExists(this.selectedFacility).subscribe(val => {
      this.facExists = (val as any); //breakdown proper
      console.log(this.facExists);

      this.facExists.forEach(row => {
        if (row.BranchID == this.selectedFacility && row.IsMapped) {
          this.ifPageExists = true;

        }
      });
    });
    return this.ifPageExists;
  }

}
//function returns true or false mock service call, to http call
