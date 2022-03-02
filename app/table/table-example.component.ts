import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BackendCallsService } from '../services/backend-calls.service';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.css']
})

export class TableExampleComponent implements AfterViewInit {

  products2!: PatientData[];
  clonedData: { [s: string]: PatientData; } = {};
  isAError = false; isDoneEditing = false;
  first = 0; rows = 10;
  dataLists = [{ "NPI": "", "Name": "", "Group": "", "Speciality": "", "ServiceLine": "" }];
  selectedValues: string[] = [];
  errorCounter = 0;

  constructor(private hello: BackendCallsService) { }

  ngAfterViewInit() { }

  ngOnInit(): void {
    this.hello.getPhysicianData().subscribe(val => {
      this.dataLists = (val as any)?.['Configuration']?.['arrayOfObjects'];
      var key = 1;
      this.dataLists.forEach(item => {
        (item as any)["key"] = key++;
      });
      var that = this;
      setTimeout(function () {
        that.validate(1, 0);
      }, 0);
    });

  }

  ngAfterViewChecked() {
    /*   Promise.resolve().then(() =>this.validateLine(this.dataLists.length, 0)) */
  }

  //Paginator methods
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.dataLists ? this.first === (this.dataLists.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.dataLists ? this.first === 0 : true;
  }

  //Initalizes, save, deletes the row editing in table
  onRowEditInit(patientData: PatientData) {
    this.clonedData[patientData.NPI] = { ...patientData };
  }

  onRowEditSave(patientData: PatientData, editing: any) {
    this.isAError = false;
    delete this.clonedData[patientData.NPI];
    return editing;
  }

  onRowEditCancel(patientData: PatientData, index: number) {
    this.dataLists[index] = (this.clonedData[patientData.NPI] as any);
    delete this.clonedData[patientData.NPI];
  }

  onRowEditDelete(id: number) {
    this.dataLists.splice(id, 1);
  }

  validate(ranOnInit: any, upperBound: any, lowerBound?: any) {
    this.errorCounter = 0;

    if (ranOnInit == 1) {
      upperBound = this.dataLists.length;
      lowerBound = 0;
    } else {
      lowerBound = upperBound;
    }

    upperBound++;
    this.dataLists.slice(lowerBound, upperBound).forEach(row => {``
      var errorChar = false;
      var errorLength = false;

      //NPI validation
      if (row.NPI.match(/\D/g)) {
        this.errorCounter++;
        errorChar = true;
      }
      if (row.NPI.length > 10 || row.NPI.length < 10) {
        errorLength = true;
      }
      if (errorChar || errorLength) {
        this.errorCounter++;
        (row as any)["npiError"] = true;
        if (errorChar && ranOnInit != 1) {
          alert("NPI should only contain numeric charecters");
        } else if (errorLength && ranOnInit != 1) {
          alert(row.NPI + " is an invalid NPI, must be 10 digits long");
        } else if (errorChar && errorLength && ranOnInit != 1) {
          alert("NPI should only contain numeric charecters " + row.NPI + " is an invalid NPI, must be 10 digits long");
        }
      } else {
        (row as any)["npiError"] = false;
      }
      //Name validation 
      if (row.Name.length > 100) {
        this.errorCounter++;
        (row as any)["nameError"] = true;
        if (ranOnInit != 1) {
          alert(row.Name + " is an invalid Name, must be less than 100 charecters long");
        }
      } else {
        (row as any)["nameError"] = false;
      }
      //Speciality
      if (row.Speciality.length > 50) {
        this.errorCounter++;
        (row as any)["specialityError"] = true;
        if (ranOnInit != 1) {
          alert(row.Speciality + " is an invalid Speciality name, must be less than 50 charecters long");
        }
      } else {
        (row as any)["specialityError"] = false;
      }
      //Group
      if (row.Group.length > 75 || row.Group == "N/A") {
        this.errorCounter++;
        (row as any)["groupError"] = true;
        if (ranOnInit != 1) {
          alert(row.Group + " is an invalid Group name, must be less than 75 charecters long");
        }
      } else {
        (row as any)["groupError"] = false;
      }
    });
  }

  ifErrors() {
    this.validate(1, 0);

    if (confirm("Are you sure you wish to save changes?")) {
      if (this.errorCounter > 0) {
        alert("Error, unable to submit! Please ensure all incorrect records are updated.")
      } else {
        this.isDoneEditing = true;
      }
    }
  }

  save() {
    this.hello.tableSave(this.dataLists).subscribe(val => {
      alert(val);
    });
  }

}

export interface PatientData {
  name: string;
  NPI: string;
  group: string;
  speciality: string;
  actions: any;
}