import {NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {RouterModule,Routes} from "@angular/router";
import { homeComponent } from "./components/home.component";
import { CommonModule } from '@angular/common';

const rt:Routes = [
  {path:'',component:homeComponent}
]
@NgModule({
  declarations : [
    homeComponent
  ],
  providers: [],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(rt)
  ]
})
export class homeModule {
}
