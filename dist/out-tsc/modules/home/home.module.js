var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { homeComponent } from "./components/home.component";
import { CommonModule } from '@angular/common';
var rt = [
    { path: '', component: homeComponent }
];
var homeModule = (function () {
    function homeModule() {
    }
    return homeModule;
}());
homeModule = __decorate([
    NgModule({
        declarations: [
            homeComponent
        ],
        providers: [],
        imports: [
            FormsModule,
            CommonModule,
            RouterModule.forChild(rt)
        ]
    }),
    __metadata("design:paramtypes", [])
], homeModule);
export { homeModule };
//# sourceMappingURL=../../../../src/modules/home/home.module.js.map