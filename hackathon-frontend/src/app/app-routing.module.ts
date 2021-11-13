
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/components/about/about.component';
import { CoursesComponent } from 'src/components/courses/courses.component';
import { LoginComponent } from 'src/components/login/login.component';
import { RegisterComponent } from 'src/components/register/register.component';


const routes: Routes = [ 
{path:'',component:AboutComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'courses',component:CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
