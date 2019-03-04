// import { Router } from '@angular/router';
// import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';

// import * as firebase from 'firebase';// firebase is the SDK which has lots of methods
// import * as fromApp from '../store/app.reducers';
// import * as AuthActions from '../auth/store/auth.actions'

// @Injectable()
// export class AuthService {
//   constructor(private router: Router,private store: Store<fromApp.AppState>) { }

//   signupUser(email: string, password: string) {
//     // This is a promise
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//       .then(
//         (user) => {
//           this.store.dispatch(new AuthActions.Signup())
//           firebase.auth().currentUser.getIdToken()
//           .then(
//             (token: string) => {
//               this.store.dispatch(new AuthActions.Settoken(token))
//             }
//           );
//         }
//       )
//       .catch(
//         error => console.log(error)
//       )
//   }

//   signinUser(email: string, password: string) {
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(
//         (response) => {
//           this.store.dispatch(new AuthActions.Signin())
//           this.router.navigate(['/'])
//           firebase.auth().currentUser.getIdToken()
//             .then(
//               (token: string) => {
//                 this.store.dispatch(new AuthActions.Settoken(token))
//               }
//             );
//         }
//       )
//       .catch(
//         error => console.log(error)
//       )
//   }

//   // getToken() {
//   //   //async action
//   //   firebase.auth().currentUser.getIdToken()
//   //     .then(
//   //       (token: string) => {
//   //         this.token = token;
//   //       }
//   //     );
//   //   return this.token;
//   // }

//   // isAuthenticated() {
//   //   return this.token != null;
//   // }

//   logout() {
//     this.store.dispatch(new AuthActions.Logout())
//     firebase.auth().signOut();
//     //this.token = null;
//     this.router.navigate(['sign-in'])
//   }
// }

