import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { UserService } from 'src/app/auth/user.service';
import { User } from 'src/app/models';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      roles: this.formBuilder.array([''], Validators.required),
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  addRoleControl() {
    const roles = this.signUpForm.get('roles') as FormArray;
    roles.push(this.formBuilder.control(''));
  }

  signUp() {
    console.log("Sign up button clicked");
    if (this.signUpForm.invalid) {
      return;
    }

    const user: User = {
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password,
      name: this.signUpForm.value.name,
      roles: this.signUpForm.value.roles
    };

    this.userService.register(user).subscribe(response => {
      console.log('Registration successful');
      console.log(response);
      // Handle success response as per your application requirements
    });
  }
}
