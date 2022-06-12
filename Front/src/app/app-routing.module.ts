import { Test2Component } from './tests/test2/test2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { AsideBarComponent } from './elements/aside-bar/aside-bar.component';
import { SecondModalComponent } from './elements/second-modal/second-modal.component';
import { AuthuserguardGuard } from './guards/authuserguard.guard';
import { ListusersComponent } from './listusers/listusers.component';
import { ExpenseComponent } from './spending-management/expense/expense.component';
import { ExpensesComponent } from './spending-management/expenses/expenses.component';
import { TestHereComponent } from './test-here/test-here.component';
import { TestTableComponent } from './tests/test-table/test-table.component';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';
import { ProjectsComponent } from './intervention/projects/projects.component';
import { ListProjectsComponent } from './intervention/list-projects/list-projects.component';
import { TempTableComponent } from './tests/temp-table/temp-table.component';


const routes: Routes = [
  {path:'sign-up',component:SignUpComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'forget-pswd',component:ForgetPasswordComponent},
  {path:'reset-pswd/:id',component:ResetPasswordComponent},
  {path:'aside',component:AsideBarComponent,canActivate:[AuthuserguardGuard]},
  {path:'',component:TestTableComponent,canActivate:[AuthuserguardGuard]},
  {path:'exp',component:ExpensesComponent,canActivate:[AuthuserguardGuard]},
  {path:'e',component:ExpenseComponent,canActivate:[AuthuserguardGuard]},
  {path:'ex',component:SecondModalComponent,canActivate:[AuthuserguardGuard]},
  {path:'time',component:TimeSheetComponent,canActivate:[AuthuserguardGuard]},
  {path:'test-here',component:TestHereComponent,canActivate:[AuthuserguardGuard]},
  {path:'test2',component:Test2Component,canActivate:[AuthuserguardGuard]},
  {path:'list-users',component:ListusersComponent,canActivate:[AuthuserguardGuard]},
  {path:'Projects',component:ProjectsComponent,canActivate:[AuthuserguardGuard]},
  {path:'list',component:ListProjectsComponent,canActivate:[AuthuserguardGuard]},
  {path:'t',component:TempTableComponent,canActivate:[AuthuserguardGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
