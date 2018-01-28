import { Injectable} from '@angular/core';
import { Init } from "./initial-Books";
//import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import'rxjs/add/operator/map';

@Injectable()
export class BooksService extends Init {
Books:any[];
  constructor(private http:Http) {
    super();
    console.log("Initializing Books service ...");
    this.load();
  }

  getBookCount() {
       let headers=new Headers();
   
   

headers.append('Content-Type','application/json');
 this.http.get('http://localhost:3000/auth/books',{headers:headers}).map(res=>res.json()).subscribe(profilem=>{
      this.Books=profilem.books;
      return this.Books.length;
    },
    err=>{
      console.log(err);
      return false;
    }
    
    
  );}
  getQuestionCount(id:any,id_id:any,id_id_id:any) {
     let headers=new Headers();
   
   

headers.append('Content-Type','application/json');
 this.http.get('http://localhost:3000/auth/books',{headers:headers}).map(res=>res.json()).subscribe(profilem=>{
      this.Books=profilem.books;
  //  return this.Books[id-1].domain[id_id-1].subdomain[id_id_id-1].question.length;
       },
    err=>{
      console.log(err);
      return false;
    }
    
    
  );
return this.Books[id-1].domain[id_id-1].subdomain[id_id_id-1].question.length;}
    //number of questions in subdomain
  
  

  getBooks() {
    //array of assessment objects
    let headers=new Headers();
   
   let Books:any[];

headers.append('Content-Type','application/json');
 this.http.get('http://localhost:3000/b/books',{headers:headers}).map(res=>res.json()).subscribe(profilem=>{
Books=profilem.books;

console.log(Books);
    /*let score:any;
    let flag=1;;
    for(let i=0;i< this.Books.length;i++)
    {
       score=0;
       
      for(let j=0;j< this.Books[i].domain.length;j++)
      {
        if( this.Books[i].domain[j].dom_score==="Subdomain not complete")
        {
          flag=0;
          score="Assessment not complete";
        break;}
        score+= this.Books[i].domain[j].dom_score;
      }
      if(flag==0)
      { this.Books[i].score=score;
      console.log("score hai"+score);}
      else
      { this.Books[i].score=score/ this.Books[i].domain.length;
      console.log("score hai"+score);}
    }
  {  let headers=new Headers();
headers.append('Content-Type','application/json');
this.http.post('http://localhost:3000/auth/bregister',this.Books,{headers:headers}).
map(res=>res.json()).subscribe(data=>{
    if(data.success){
   console.log(" added");
    }
    else{
      console.log("not added");
    }
  
 
    
  },err=>{
      console.log(err);
      return false;
  });
 }} ,err=>{
      console.log(err);
      return false;
    }
    
    
 );
 return this.Books;}
*/
  });return Books;}

  getScore(id:any) {
    //domain score
   let headers=new Headers();
   let score:number[]=[];
   

headers.append('Content-Type','application/json');
 this.http.get('http://localhost:3000/auth/books',{headers:headers}).map(res=>res.json()).subscribe(profilem=>{
      this.Books=profilem.books;
    
    for(let i=0;i<this.Books[id-1].domain.length;i++)
    {
      score[i]=this.Books[id-1].domain[i].dom_score;
    }
    console.log("abey score="+score);
    //return score;
  },err=>{
      console.log(err);
      return false;
    }
    
    
  );return score;}
   getSubdomain(id:any,id_id:any) {
     //array of subdomains
     let headers=new Headers();
     let subdom:any[]=[];
    this.http.get('http://localhost:3000/auth/books',{headers:headers}).map(res=>res.json()).subscribe(profilem=>{
      this.Books=profilem.books;
    

    for(let i=0;i<this.Books[id-1].domain[id_id-1].subdomain.length;i++)
    {
      console.log(this.Books[id-1].domain[id_id-1].subdomain[i]);
      subdom[i]=this.Books[id-1].domain[id_id-1].subdomain[i];
    }
    
   
  },
    err=>{
      console.log(err);
      return false;
    }
    
    
  ); return subdom;}
  getdomain(id:any) {
    //array of domains
       let headers=new Headers();
   
   

headers.append('Content-Type','application/json');
 this.http.get('http://localhost:3000/auth/books',{headers:headers}).map(res=>res.json()).subscribe(profilem=>{
      this.Books=profilem.books;
    let dom:any[]=[];
    let flag:any;
    let score:any;
    
    for(let i=0;i<this.Books[id-1].domain.length;i++)
    {
      dom[i]=this.Books[id-1].domain[i];
      
    }
    console.log("bahar hai");
    for(let i=0;i<this.Books[id-1].domain.length;i++)
    {
      console.log("andar aa gaya");
      score=0;
      flag=1;
      for(let j=0;j<this.Books[id-1].domain[i].subdomain.length;j++)
      {
        
        if(this.Books[id-1].domain[i].subdomain[j].sub_score==0)
        {
          flag=0;
          score="Subdomain not complete";
          console.log("flag=0");
          break;
        }
        console.log("out");
        score+=this.Books[id-1].domain[i].subdomain[j].sub_score;
        console.log(score);
      }
      console.log("bahaar aa gaya");
      if(flag==0)
       {
         console.log("flag");
       this.Books[id-1].domain[i].dom_score=score;
        console.log(score);
        }
      else
      {
         console.log("chalo niklo");
       this.Books[id-1].domain[i].dom_score=score/this.Books[id-1].domain[i].subdomain.length;
       
      }

    }
    
{  let headers=new Headers();
headers.append('Content-Type','application/json');
this.http.post('http://localhost:3000/auth/bregister',this.Books,{headers:headers}).
map(res=>res.json()).subscribe(data=>{
    if(data.success){
return dom;
    }
    else{
      console.log("not added");
    }
  
 
    
  },err=>{
      console.log(err);
      return false;
    });
 }} ,err=>{
      console.log(err);
      return false;
    }
    
    
 );}

  getdomainTitle(id:any) {
    //domain title 
    let headers=new Headers();
   
    let dom:any[]=[];

headers.append('Content-Type','application/json');
    this.http.get('http://localhost:3000/auth/books',{headers:headers}).map(res=>res.json()).subscribe(profilem=>{
      this.Books=profilem.books;
   
    let flag:any;
    let score:any;
    
    for(let i=0;i< this.Books[id-1].domain.length;i++)
    {
      dom[i]= this.Books[id-1].domain[i].title;
      
    }
    console.log("bahar hai");
   
 
   
  },err=>{
      console.log(err);
      return false;
    }
    
    
  );   return dom;}
  

  getBook(id: any) {
    //single assessment object
    console.log("Hiiiiiiii");
   let headers=new Headers();
   
   

headers.append('Content-Type','application/json');
    this.http.get('http://localhost:3000/auth/books',{headers:headers}).map(res=>res.json()).subscribe(profilem=>{
      this.Books=profilem.books;
    let book:any = null;
    for (let i = 0; i <   this.Books.length; i++) {
      if (  this.Books[i].id == id) {
        book =  this.Books[i];
        break;
      }
    }
    //console.log(book);
    return book;
  },err=>{
      console.log(err);
      return false;
    }
    
    
 ); }
  
  getQuestion(id:any,id_id: any,id_id_id:any) {
    //array of questions
     let headers=new Headers();
     let question:any[]=[];
   
     this.http.get('http://localhost:3000/auth/books',{headers:headers}).map(res=>res.json()).subscribe(profilem=>{
      this.Books=profilem.books;
    console.log("teesri aankh");
    //let question:any = null;
    
   /* for (let i in Books.subdomain) {
   // x += "<h1>" + Books.subdomain[i].name + "</h1>";
    for (let j in Books.subdomain[i].question) {

        question+= Books.subdomain[i].question[j];
    }
}*/
console.log("Hiiiiiii");
    for(let i=0;i<this.Books[id-1].domain[id_id-1].subdomain[id_id_id-1].question.length;i++)
    {
      //console.log(i);
        question[i]=this.Books[id-1].domain[id_id-1].subdomain[id_id_id-1].question[i];
    }
   
  },err=>{
      console.log(err);
      return false;
    }
    
    
 ); return question;}

  addBook(newBook: any) {
    let Books = JSON.parse(localStorage.getItem('Books'));
    Books.push(newBook);
    localStorage.setItem('Books', JSON.stringify(Books));
  }

  updateBook(updatedBook: any) {
    let Books = JSON.parse(localStorage.getItem('Books'));
    for (let i = 0; i < Books.length; i++) {
      if (Books[i].id == updatedBook.id) {
        Books[i] = updatedBook;
      }
    }
    localStorage.setItem('Books', JSON.stringify(Books));
  }
  updateScore(score: any,id_id:any,id:any,id_id_id:any) {
    //subdomain score is obtained
   let headers=new Headers();
   
     this.http.get('http://localhost:3000/auth/books',{headers:headers}).map(res=>res.json()).subscribe(profilem=>{
      this.Books=profilem.books;
    let book =  this.Books[id-1];
    
    console.log(book);
        let question=book.domain[id_id-1].subdomain[id_id_id-1];
        console.log(question);
        question.sub_score=score;
        console.log(question.sub_score);
    {  let headers=new Headers();
headers.append('Content-Type','application/json');
this.http.post('http://localhost:3000/auth/bregister',this.Books,{headers:headers}).
map(res=>res.json()).subscribe(data=>{
    if(data.success){
console.log(" added");
    }
    else{
      console.log("not added");
    }
  
 
    
  },err=>{
      console.log(err);
      return false;
    });
 }} ,err=>{
      console.log(err);
      return false;
    }
    
    
 );}
 

  deleteBook(id: any) {
    let Books = JSON.parse(localStorage.getItem('Books'));
    for (let i = 0; i < Books.length; i++) {
      if (Books[i].id == id) {
        Books.splice(i, 1);
      }
       
    }
    localStorage.setItem('Books', JSON.stringify(Books));
  }
}

//}