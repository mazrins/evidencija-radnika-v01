import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthService) {}
  ngOnInit(): void {}

  registerForm = new FormGroup({
    // firstName: new FormControl('', Validators.required),
    // lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onRegister() {
    const { email, password } = this.registerForm.value;
    this.auth.register(email, password);
  }
}
