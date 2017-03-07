var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
var config = {
    apiKey: "AIzaSyB7DNZmLF8Od7Tcp_PpUFZklJVGUA08tOw",
    authDomain: "internal-7af54.firebaseapp.com",
    databaseURL: "https://internal-7af54.firebaseio.com",
    storageBucket: "internal-7af54.appspot.com",
    messagingSenderId: "354991495623"
};
var fb = (function () {
    function fb() {
        this.hosting = {};
        if (firebase.apps.length === 0) {
            firebase.initializeApp(config);
        }
        this.hosting = firebase.database().ref().child('hosting');
        console.log(this.hosting);
    }
    fb.prototype.getHostings = function () {
        var hander = this.hosting;
        console.log(hander);
        return new Promise(function (success, error) {
            hander.once('value', function (response) {
                success(response.val());
            });
        });
    };
    return fb;
}());
fb = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], fb);
export default fb;
//# sourceMappingURL=../../../src/model/firebase.model.js.map