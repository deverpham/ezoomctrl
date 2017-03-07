var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import firebase from "../../../model/firebase.model";
var homeComponent = (function () {
    function homeComponent(firebase) {
        this.firebase = firebase;
        this.links = [];
        this.linkResult = '';
        this.ExportLink = '';
        this.link = {};
    }
    homeComponent.prototype.ngOnInit = function () {
        $('.collapsible').collapsible();
    };
    homeComponent.prototype.addLink = function () {
        this.links.push(this.link);
        this.updateLink();
    };
    homeComponent.prototype.updateLink = function () {
        this.linkResult += "<li><a ref='nofollow' href='" + this.link.link + "'> " + this.link.text + "</a></li>\r\n";
        this.ExportLink = "<ul>" + this.linkResult + "</ul>";
        console.log(this.linkResult);
        this.link = {};
    };
    homeComponent.prototype.copyLinkResult = function () {
        $('#result').select();
        document.execCommand('copy');
        alert('Đã Copy!');
    };
    homeComponent.prototype.removeLink = function () {
        this.linkResult = '';
        this.ExportLink = '';
        this.links = [];
    };
    return homeComponent;
}());
homeComponent = __decorate([
    Component({
        selector: 'home',
        templateUrl: './assets/home.html',
        styleUrls: ['./assets/home.css'],
        providers: [firebase]
    }),
    __metadata("design:paramtypes", [firebase])
], homeComponent);
export { homeComponent };
//# sourceMappingURL=../../../../../src/modules/home/components/home.component.js.map