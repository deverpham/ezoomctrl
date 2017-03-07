declare let $;
import { Component,OnInit } from "@angular/core";
import firebase   from "../../../model/firebase.model";
@Component({
  selector: 'home',
  templateUrl :'./assets/home.html',
  styleUrls: ['./assets/home.css'],
  providers :[firebase]
})

export class homeComponent {
   constructor(public firebase:firebase ) {
   }
   links:any=[];
   linkResult:any='';
   ExportLink:any='';
   link:any={};
   ngOnInit() {
     $('.collapsible').collapsible();
   }
   //function link
       addLink() {
         this.links.push(this.link);
         this.updateLink();
       }
       updateLink() {
           this.linkResult+=`<li><a ref='nofollow' href='${this.link.link}'> ${this.link.text}</a></li>\r\n`
           this.ExportLink="<ul>" + this.linkResult + "</ul>";
           console.log(this.linkResult);
         this.link={};
       }
       copyLinkResult() {
         $('#result').select();
         document.execCommand('copy');
         alert('Đã Copy!');
       }
       removeLink() {
         this.linkResult='';
         this.ExportLink='';
         this.links=[];
       }
    //function link
}
