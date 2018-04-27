import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from 'angularfire2/auth';
import { MatSnackBar } from '@angular/material';

// import { TrainingService } from '../training/training.service';
import { UIService } from '../shared/ui.service';
import { AuthData } from './model/auth-data.model';

import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  currentPage: number = 1;

  userDetailsStore;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    // private trainingService: TrainingService,
    private db: AngularFirestore,
    private uiService: UIService
  ) {}

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/home']);
      } else {
        // this.trainingService.cancelSubscriptions();
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      }
    });
  }

  registerUser(authData: AuthData) {
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        this.uiService.loadingStateChanged.next(false);
      })
      .catch(error => {
        this.uiService.loadingStateChanged.next(false);
        this.uiService.showSnackbar(error.message, null, 3000);
      });
  }

  login(authData: AuthData) {
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        this.uiService.loadingStateChanged.next(false);
      })
      .catch(error => {
        this.uiService.loadingStateChanged.next(false);
        this.uiService.showSnackbar(error.message, null, 3000);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  isAuth() {
    return this.isAuthenticated;
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }



  // MINE ==========================

  setUserDetails(userData) {
    this.userDetailsStore = {
      displayName: userData.displayName,
      email: userData.email,
      photoURL: userData.photoURL
    };
  }

  getUserDetails() {
    return this.userDetailsStore;
  }


  // additionalDetails() {

  // }

  private updateUserData(): void {
    // const path = `users/${this.currentUserId}`; // Endpoint on firebase
    // const data = {
    //   email: this.afAuth.authState.email,
    //   name: this.afAuth.authState.displayName
    // };

    // this.db.object(path).update(data)
    //   .catch(error => console.log(error));

  }

  changeLoginPage(value) {
    this.currentPage = value;
  }

}
