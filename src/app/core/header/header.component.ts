import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ToastrManager } from 'ng6-toastr-notifications';
// import { DataStorageService } from '../../shared/data-storage.service';
// import { AuthService } from '../../auth/auth.service';
import { HttpEvent } from '@angular/common/http';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as fromApp from '../../store/app.reducers'
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipe.actions'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //@Output() tabClickedEvent = new EventEmitter <string>();
  authState : Observable<fromAuth.State>
  constructor(
    //private dataStorageService : DataStorageService, 
    //private authService : AuthService,
    //private toastr :ToastrManager,
    private store : Store<fromApp.AppState>) {

     }

  ngOnInit() {
    this.authState = this.store.select('auth');//This will return state
  }

  onSaveData(){
    this.store.dispatch( new RecipeActions.StoreRecipes())
      // this.dataStorageService.storeRecipes()
      // .subscribe(
      //   (response : HttpEvent<Object>) => {
      //     console.log(response)
      //    // this.toastr.successToastr('Data Saved Successfully!');
      //   }
      // )
  }

  onFetchData(){
    //this.dataStorageService.getRecipes();
    this.store.dispatch( new RecipeActions.FetchRecipes())
  }

  // isAuthenticated(){
  //   return this.authService.isAuthenticated();
  // }

  onLogout(){
    //this.authService.logout()
    this.store.dispatch(new AuthActions.Logout())
  }
}
