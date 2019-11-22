import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LinesComponent } from './lines/lines.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Network } from './model/Network';
import { User } from './model/User';
import { MatGridListModule, MatIconModule, MatBadgeModule, MatTabsModule } from '@angular/material';
import { AccountComponent } from './account/account.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MyInterceptorService } from './interceptor/my-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LinesComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatGridListModule,
    MatIconModule,
    MatBadgeModule,
    MatTabsModule,
    NoopAnimationsModule,
    AngularFontAwesomeModule
  ],
  providers: [Network,
    User,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
