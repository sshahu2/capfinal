import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { BooksService } from "./../../services/books.service";
import * as jspdf from 'jspdf';
import * as Chart from 'chart.js';
import * as html2canvas from 'html2canvas';
@Component({
  selector: 'app-subdom',
  templateUrl: './subdom.component.html',
  styleUrls: ['./subdom.component.css']
})
export class SubdomComponent implements OnInit {

   id_id: any;
  id:any;
    book:any;
    domain:any;
    subdomain:any;
    constructor(private _bookService: BooksService, private route: ActivatedRoute,private location: Location) {
    }

    ngOnInit(): void {
       this.route.params.forEach((params: Params) => {
            this.id = +params['id'];
            this.id_id=+params['id_id'];
        });
        
   this.subdomain=this._bookService.getSubdomain(this.id,this.id_id);
    }
      goBack(): void {
        this.location.back();
    } 
 
}
