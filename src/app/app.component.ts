import { HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import * as $ from 'jquery';
import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { data } from 'jquery';
import { map, filter, scan } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { CanonicalService } from './core/canonical.service';

let gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  token: any;
  http: any;

  constructor(private canonical: CanonicalService,private router: Router){
    this.router.events.subscribe((event: Event) => {

    });   

    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );
    
  }
  ngOnInit() { 
    this.canonical.createCanonicalURL();
  }

}

