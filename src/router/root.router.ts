import { RouterModule,Routes } from "@angular/router";
const router:Routes = [
  {path :'',loadChildren :'../modules/home/home.module#homeModule'}
]
export let rt = RouterModule.forRoot(router);
