// import { Component, OnInit } from '@angular/core';
import { Component, Inject, OnInit, Optional, PLATFORM_ID } from '@angular/core';
// import { SEOMetaService } from 'src/app/services/seo-meta.service';
import { RESPONSE } from '@nguniversal/express-engine/tokens';
import { Response } from 'express';
import { isPlatformServer } from '@angular/common';
import { CanonicalService } from '../core/canonical.service';
import { Meta, Title } from '@angular/platform-browser';
import * as $ from 'jquery';


@Component({
  selector: 'app-no-page-found',
  templateUrl: './no-page-found.component.html',
  styleUrls: ['./no-page-found.component.scss']
})
export class NoPageFoundComponent implements OnInit {
  [x: string]: any;
  
  constructor(private canonical: CanonicalService,
    @Optional() @Inject(RESPONSE) private response: Response,
    @Inject(PLATFORM_ID) private platformId: any, private titleService: Title,private metaService: Meta ) { }

  ngOnInit(): void {
    $('.col-sm-4').hide();
    this.canonical.createCanonicalURL();
    if (isPlatformServer(this.platformId)) {
      this.response.status(404);  
    }
  }
}
