import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';//Unlocking the HttpClientModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';
import { ToastrModule } from 'ng6-toastr-notifications';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
 import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../environments/environment'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ShoppingListModule,
    SharedModule,
    AuthModule,
    CoreModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot(reducers),// Register the Reducer here
    EffectsModule.forRoot([AuthEffects]),
    StoreRouterConnectingModule,
    (!environment.production) ? StoreDevtoolsModule.instrument() : [] // Only for Dev environment not for production
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
