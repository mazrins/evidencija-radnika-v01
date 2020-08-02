import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore
  ) {}

  register(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password).then((cred) => {
      return this.db
        .collection('users')
        .doc(cred.user.uid)
        .set({})
        .then(() => this.router.navigate(['user']));
    });
  }

  login(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['dashboard']));
  }

  isLogedIn(): boolean {
    if (this.afAuth.user != null) {
      return false;
    } else {
      return true;
    }
  }
  logout() {
    this.afAuth.signOut();
  }
}
