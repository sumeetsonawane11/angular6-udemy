import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
// import { DataStorageService } from "../shared/data-storage.service";
// import { AuthService } from "../auth/auth.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "../shared/auth.interceptor";
import { LoggingInterceptor } from "../shared/logging.interceptor";

@NgModule({
    declarations : [
        HomeComponent,
        HeaderComponent
    ],
    imports : [
        SharedModule,
        AppRoutingModule
    ],
    exports : [
        HeaderComponent,
        AppRoutingModule
    ],
    providers: [
        // RecipeService, 
        // DataStorageService, 
        // AuthService, 
    //Order of the Interceptor is important for multiple interceptors
        { // Registering the Interceptors
        provide : HTTP_INTERCEPTORS,
        useClass : AuthInterceptor,
        multi : true
    },
    { // Registering the Interceptors
        provide : HTTP_INTERCEPTORS,
        useClass : LoggingInterceptor,
        multi : true
    } ],
})
export class CoreModule {}