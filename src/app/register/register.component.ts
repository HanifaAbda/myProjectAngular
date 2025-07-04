import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';  

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  

  constructor(private userService: UserService) {}

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    if (this.email && this.password) {
      this.userService.register({
        name: this.name,
        email: this.email,
        password: this.password
      }).subscribe({
        next: (response) => {
          alert(`Inscription réussie pour ${this.name}`);
          this.email = '';
          this.password = '';
          this.confirmPassword = '';
        },
        error: (error) => {
          alert(`Erreur lors de l'inscription : ${error.error?.message || error.message}`);
        }
      });
    } else {
      alert('Merci de remplir tous les champs');
    }
  }
}
