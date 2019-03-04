//This effects is used to handle side effects mainly Async tasks
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as AuthActions from './auth.actions';
import { map, tap, switchMap, mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
// import { fromPromise } from 'rxjs/internal-compatibility';//Converts promise into an Observable
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
    //******* We never change the applications states in the Effects, just listen the Actions
    //******* this.actions$ : This property holds list of all actions in our applications 
    constructor(private actions$: Actions, private router: Router) { }

    @Effect() // This is added to know ngrx that effects are created i.e for Registration 
    //also listening to the actions
    authSignup = this.actions$
        .ofType(AuthActions.TRY_SIGNUP) //ofType is used to filter the actions from list of actions
        .pipe(
            map((action: AuthActions.Trysignup) => {
                return action.payload;
            }),
            switchMap((authData: { username: string, password: string }) => {
                return from(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password))
            }),
            switchMap(() => {
                return from(firebase.auth().currentUser.getIdToken())
            }),
            //Merge map is used to merge all the observable as an Actions
            mergeMap((token: string) => {
                return [
                    {
                        type: AuthActions.SIGN_UP //emit the event
                    },
                    {
                        type: AuthActions.SET_TOKEN, //emit the event
                        payload: token
                    }
                ]
            })
        );


    @Effect()
    authSignin = this.actions$
        .ofType(AuthActions.TRY_SIGNIN)
        .pipe(
            map((action: AuthActions.Trysignup) => {
                return action.payload;
            }),
            switchMap((authData: { username: string, password: string }) => {
                return from(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password))
            }),
            switchMap(() => {
                return from(firebase.auth().currentUser.getIdToken())
            }),
            //Merge map is used to merge all the observable as an Actions
            mergeMap((token: string) => {
                this.router.navigate(['/'])
                return [
                    {
                        type: AuthActions.SIGN_IN //emit the event
                    },
                    {
                        type: AuthActions.SET_TOKEN, //emit the event
                        payload: token
                    }
                ]
            })
        );

    @Effect({ dispatch: false })
    authLogout = this.actions$
        .ofType(AuthActions.LOGOUT)
        .pipe(
            tap(() => {
                this.router.navigate(['/'])
            })
        );


}