import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})
export class LoginComponent {

  loginForm: FormGroup;
  email: string = '';
  hidePassword: boolean = true;
  password: string = '';


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
    

  ) {
    //Création du formGroup
    this.loginForm = this.formBuilder.group({
        email:  ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
    })
  }

  togglePasswordVisibility(): void {
  this.hidePassword = !this.hidePassword;
  }

onSubmit(): void {
    if (this.loginForm.valid) {
      // Appel de la methode du service
      this.userService.login(this.loginForm.value).subscribe({
        next: data => {
          // Récupération du token
          console.log('Connexion réussie', data);
          //stocker le token dans le local storage
        },
        error: err => {
          console.error('Erreur de connexion', err);
          alert(err.error?.message || 'Erreur lors de la connexion');
        }
      });
    }
  }
}
