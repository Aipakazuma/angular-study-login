import {Routes, RouterModule} from "@angular/router";
import {LoggedInGardService} from "./logged-in-gard.service";
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoggedInGardService]
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

export const routing = RouterModule.forRoot(routes);
