import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthGuard } from './components/auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
},
{
    path: 'register',
    component: RegisterComponent
},
  {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'active-posts',
      component: ActivePostsComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'inactive-posts',
      component: InactivePostsComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'active-posts/:id',
      component: PostDetailsComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'inactive-posts/:id',
      component: PostDetailsComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'users',
      component: UsersComponent,
      canActivate: [AuthGuard],
      children: [
          {
              path: ':id',
              component: UserDetailsComponent,
              canActivate: [AuthGuard]
          }
      ]
  },
  {
      path: '**',
      redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
