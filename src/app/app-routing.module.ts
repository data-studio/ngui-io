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

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: 'login',       component: LoginComponent },
  { path: 'register',    component: RegisterComponent },

  { path: 'dashboard',   component: DashboardComponent,        canActivate: [ AuthGuard ] },
  { path: 'users',       component: UsersComponent,            canActivate: [ AuthGuard ] },
  { path: 'user/:id',    component: UserDetailComponent,       canActivate: [ AuthGuard ] },
  { path: 'apis',        component: XApisComponent,            canActivate: [ AuthGuard ] },
  { path: 'api/:id',     component: XApiDetailComponent,       canActivate: [ AuthGuard ] },
  { path: 'apps',        component: XAppsComponent,            canActivate: [ AuthGuard ] },
  { path: 'app/:id',     component: XAppDetailComponent,       canActivate: [ AuthGuard ] },
  { path: 'hosts',       component: XHostsComponent,           canActivate: [ AuthGuard ] },
  { path: 'host/:id',    component: XHostDetailComponent,      canActivate: [ AuthGuard ] },
  { path: 'orgs',        component: XOrgsComponent,            canActivate: [ AuthGuard ] },
  { path: 'org/:id',     component: XOrgDetailComponent,       canActivate: [ AuthGuard ] },
  { path: 'versions',    component: XVersionsComponent,        canActivate: [ AuthGuard ] },
  { path: 'version/:id', component: XVersionDetailComponent,   canActivate: [ AuthGuard ] },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
