import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'HDP Tools';

  currentLocation!: string;
  menuActive!: boolean;
  userInfoSub!: Subscription;
  userSecurityRightsSub!: Subscription;
  userBranchesSub!: Subscription;

  private _userEnterprises: BehaviorSubject<{ EnterpriseID: number, EnterpriseName: string }[]> = new BehaviorSubject<{ EnterpriseID: number, EnterpriseName: string }[]>([]);
  public readonly userEnterprises: Observable<{ EnterpriseID: number; EnterpriseName: string }[]> = this._userEnterprises.asObservable();

  //Contains the modules the user has access to based on their Security Rights
  userModules: { name: string, routerLink: string, icon: string, description?: string }[] = [];

  showAboutInfo = false;
  versionInfo: any[] = [];

  subscription!: Subscription;
  err: any;

  loading = true; //Flag for loading data progress bar(s)

  //Does user have rights to Run Jobs, Stop Jobs or Stop Orchs
  canRunJobs = false;
  canStopJobs = false;
  canStopOrchs = false;

  //For Math functions
  math = Math;

  constructor() { }

  ngOnInit() {
    this.loading = true;
    this.setVersionInfo();
    this.loading = false;
  }

  convertToJSON(s: string) {
    return JSON.parse(s.replace(/'/g, '"'));
  }

  getEnterprises(): Observable<{ EnterpriseID: number, EnterpriseName: string }[]> {
    return new Observable(fn => this._userEnterprises.subscribe(fn));
  }

  setVersionInfo() {
    //TODO: Eventually call getVersionX for each service
    this.versionInfo.push({ name: 'HDP Tools', version: '1.0.0' });
    this.versionInfo.push({ name: 'AMS', version: '1.0.0' });
    this.versionInfo.push({ name: 'Config Service', version: '1.0.0' });
    this.versionInfo.push({ name: 'Glui Service', version: '1.0.0' });
  }


  onMenuButton(event: any) {
    this.menuActive = !this.menuActive;
    console.log(JSON.stringify(event));
    event.preventDefault();
  }

  hideMobileMenu(event: any) {
    this.menuActive = false;
    event.preventDefault();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.userInfoSub.unsubscribe();
    this.userSecurityRightsSub.unsubscribe();
    this.userBranchesSub.unsubscribe();
  }

}
