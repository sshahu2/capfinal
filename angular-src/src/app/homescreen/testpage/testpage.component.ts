import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { DomainServiceService } from '../domain-service.service';
import { BooksService } from "./../../services/books.service";
@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {
domain: any;
id:Number;
   
    constructor(private _bookService: BooksService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
       this.route.params.forEach((params: Params) => {
            this.id = +params['id'];
        });
        //this.book = this._bookService.getBook(this.id);
        this.domain=this._bookService.getdomain(this.id);
        
    
    }
    
      
   

 
}

