import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { XApisComponent } from './x-apis/x-apis.component';
import { XApiDetailComponent } from './x-api-detail/x-api-detail.component';
import { XAppsComponent } from './x-apps/x-apps.component';
import { XAppDetailComponent } from './x-app-detail/x-app-detail.component';
import { XHostsComponent } from './x-hosts/x-hosts.component';
import { XHostDetailComponent } from './x-host-detail/x-host-detail.component';
import { XOrgsComponent } from './x-orgs/x-orgs.component';
import { XOrgDetailComponent } from './x-org-detail/x-org-detail.component';
import { XVersionsComponent } from './x-versions/x-versions.component';
import { XVersionDetailComponent } from './x-version-detail/x-version-detail.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [ AuthGuard ] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'apis', component: XApisComponent },
  { path: 'api/:id', component: XApiDetailComponent },
  { path: 'apps', component: XAppsComponent },
  { path: 'app/:id', component: XAppDetailComponent },
  { path: 'hosts', component: XHostsComponent },
  { path: 'host/:id', component: XHostDetailComponent },
  { path: 'orgs', component: XOrgsComponent },
  { path: 'org/:id', component: XOrgDetailComponent },
  { path: 'versions', component: XVersionsComponent },
  { path: 'version/:id', component: XVersionDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
