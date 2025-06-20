import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})
export class LoginComponent {
  email = '';
  password = '';

  onSubmit() {
    if (this.email && this.password) {
      console.log('Connexion avec:', this.email, this.password);
      alert(`Connecté en tant que ${this.email}`);
    }
  }
}
