import { ToastModule } from 'primeng/toast';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { AsideBarComponent } from './elements/aside-bar/aside-bar.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
import { ExpensesComponent } from './spending-management/expenses/expenses.component';
import { NgbModule, NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestTableComponent } from './tests/test-table/test-table.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { ExpenseComponent } from './spending-management/expense/expense.component';
import { SecondModalComponent } from './elements/second-modal/second-modal.component';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DialogModule} from 'primeng/dialog';


import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



//api
import { SplitButtonModule } from 'primeng/splitbutton';
import { TestHereComponent } from './test-here/test-here.component';
import { ListusersComponent } from './listusers/listusers.component';
import { Test2Component } from './tests/test2/test2.component';
import { ToastrModule } from 'ngx-toastr';

import { ProjectsComponent } from './intervention/projects/projects.component';
import { ListProjectsComponent } from './intervention/list-projects/list-projects.component';

 import { NgToastModule } from 'ng-angular-popup' ;

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    AsideBarComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,
    ExpensesComponent,
    TestTableComponent,
    ExpenseComponent,
    SecondModalComponent,
    TimeSheetComponent,
    TestHereComponent,
    ListusersComponent,
    Test2Component,
    ProjectsComponent,
    ListProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule,
    TooltipModule,
    InputTextModule,
    ButtonModule,
    SplitButtonModule,
    RadioButtonModule,
    DialogModule,
    DynamicDialogModule,
    ToastModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
   NgToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
