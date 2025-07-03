import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    name = '';
    email = '';
    password = '';
    confirmPassword = '';
  
    onSubmit() {
      if(this.password !== this.confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return
      }
      if (this.name && this.email && this.password) {
        console.log('Inscription avec:', this.name, this.email);
        alert(`Inscrition réussie pour ${this.name}`);
      }
    }
}
