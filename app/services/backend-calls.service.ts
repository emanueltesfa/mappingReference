import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendCallsService {

  constructor(private http: HttpClient) { }

  getPhysicianData() {
    return this.http.get("http://localhost:8882/Data/mock2");
  }
  getEnterpriseData() {
    return this.http.get("http://localhost:8882/Data/enterpriseData");
  }
  getFacilityData(event: any) {

    const url = "http://localhost:8882/Data/facilityData/" + event;
    console.log(url);

    try {
      return this.http.get(url);
    } catch (e) {
      alert("This is not a valid enterprise selection" + e);
      return this.http.get(url);
    }
  }
  getFacExists(key: any) {
    return this.http.get("http://localhost:8882/Data/facFlow/2547");
  }
  tableSave(tableData: any) {
    return this.http.post("http://localhost:8882/Data/tablePost", { tableData: tableData });
  }
  serviceLine(serviceLine: any) {
    return this.http.post("http://localhost:8882/Data/serviceLinePost", { serviceLine: serviceLine });
  }
}
