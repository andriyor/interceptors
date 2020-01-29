import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { ToastrModule } from "ngx-toastr";
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { httpInterceptorProviders } from "./interceptors";
import { GithubUsersComponent } from './components/github-users/github-users.component';
import { IssuesComponent } from './components/issues/issues.component';

@NgModule({
  declarations: [AppComponent, GithubUsersComponent, IssuesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    MatListModule,
    MatIconModule,
    InfiniteScrollModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
