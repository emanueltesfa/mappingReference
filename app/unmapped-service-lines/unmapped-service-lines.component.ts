import { Component, OnInit } from '@angular/core';
import { BackendCallsService } from '../services/backend-calls.service';

@Component({
  selector: 'app-unmapped-service-lines',
  templateUrl: './unmapped-service-lines.component.html',
  styleUrls: ['./unmapped-service-lines.component.css']
})
export class UnmappedServiceLinesComponent implements OnInit {
  ServiceLineDrop: { name: string; }[];
  serviceSpecilaity = [{ "Speciality": "", "ServiceLine": "" }];
  specialityInput!: any; specialityInput2!: any; specialityInput3!: any;
  serviceSeleced!: any; serviceSeleced2!: any; serviceSeleced3!: any;

  constructor(private hello: BackendCallsService) {
    this.ServiceLineDrop = [
      { name: 'Cardiology' },
      { name: 'CT Surgery' },
      { name: 'Medicine' },
      { name: 'Neonatology' },
      { name: 'Nuerology' },
      { name: 'Nuerosugery' },
      { name: 'Ophthalmogy' },
      { name: 'Orthopedics' },
      { name: 'Pulmonary' },
      { name: 'Renal' },
      { name: 'Surgery' },
      { name: 'Transplant' },
      { name: 'Vascular' },
      { name: "Women's Health" },
      { name: 'Renal' },
      { name: 'N/A' }
    ];
    this.serviceSeleced = this.ServiceLineDrop[0];
    this.serviceSeleced2 = this.ServiceLineDrop[0];
    this.serviceSeleced3 = this.ServiceLineDrop[0];
  }

  ngOnInit(): void {
  }

  onSave() {
    if (this.specialityInput2 == undefined && this.specialityInput3 == undefined) {           //1 is true 
      this.serviceSpecilaity = [
        { "Speciality": this.specialityInput, "ServiceLine": this.serviceSeleced }];
    } else if (this.specialityInput == undefined && this.specialityInput3 == undefined) {     //2 is true
      this.serviceSpecilaity = [
        { "Speciality": this.specialityInput2, "ServiceLine": this.serviceSeleced2 }];
    } else if (this.specialityInput == undefined && this.specialityInput2 == undefined) {     //3 is true
      this.serviceSpecilaity = [
        { "Speciality": this.specialityInput3, "ServiceLine": this.serviceSeleced3 }];
    } else if (this.specialityInput2 == undefined) {                                     //1 and 3 are true
      this.serviceSpecilaity = [
        { "Speciality": this.specialityInput, "ServiceLine": this.serviceSeleced },
        { "Speciality": this.specialityInput3, "ServiceLine": this.serviceSeleced3 }];
    } else if (this.specialityInput == undefined) {                                      //2 and 3 are true
      this.serviceSpecilaity = [
        { "Speciality": this.specialityInput2, "ServiceLine": this.serviceSeleced2 },
        { "Speciality": this.specialityInput3, "ServiceLine": this.serviceSeleced3 }];
    } else if (this.specialityInput3 == undefined) {                                      //1 and 2 are true
      this.serviceSpecilaity = [
        { "Speciality": this.specialityInput, "ServiceLine": this.serviceSeleced },
        { "Speciality": this.specialityInput2, "ServiceLine": this.serviceSeleced2 }];
    }
    else {                                                                         //all 3 are true
      this.serviceSpecilaity = [
        { "Speciality": this.specialityInput, "ServiceLine": this.serviceSeleced },
        { "Speciality": this.specialityInput2, "ServiceLine": this.serviceSeleced2 },
        { "Speciality": this.specialityInput3, "ServiceLine": this.serviceSeleced3 }];
    }

    console.log(this.serviceSpecilaity);

    this.hello.tableSave(this.serviceSpecilaity).subscribe(val => {
      alert(val);
    });
  }
}
