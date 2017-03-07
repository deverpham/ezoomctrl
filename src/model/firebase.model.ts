import { Injectable } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
declare let firebase;
const config = {
  apiKey: "AIzaSyB7DNZmLF8Od7Tcp_PpUFZklJVGUA08tOw",
  authDomain: "internal-7af54.firebaseapp.com",
  databaseURL: "https://internal-7af54.firebaseio.com",
  storageBucket: "internal-7af54.appspot.com",
  messagingSenderId: "354991495623"
		  };
@Injectable()
export default class  fb {
  hosting :any = {};
  constructor() {
				if(firebase.apps.length ===0) {
		    		firebase.initializeApp(config)
			}
    this.hosting =firebase.database().ref().child('hosting');
    console.log(this.hosting);
  }
  getHostings() {
    let hander:any = this.hosting;
    console.log(hander);
    return new Promise(function(success :any,error :any) {
      hander.once('value',response => {
        success(response.val());
      })
    })
  }
}
