import { HttpInterceptor, HttpEvent, HttpHandler , HttpRequest} from "@angular/common/http";
import { Observable } from "rxjs";
//import 'rxjs/operator/do' // earlier version < RXJS 6 , use do
import { tap} from 'rxjs/operators'// Higher RXJS version > 6

export class LoggingInterceptor implements HttpInterceptor {
    intercept (req : HttpRequest<any>, next : HttpHandler) : Observable <HttpEvent<any>>{
        return next.handle(req).pipe(tap(
            event => {
                console.log('Logging Intercepted', event)
            }
        ))
    }
}