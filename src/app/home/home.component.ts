import { Component, OnInit } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import localeFr from '@angular/common/locales/fr'; 

import { Announcement } from '../models/announcement.interface';
import { ApiService } from '../services/api.service';

registerLocaleData(localeFr); 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

cities: string[] = ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice', 'Bordeaux'];
selectedCity: string = '';

announcements: Announcement[] = [];
filteredAnnouncements: Announcement[] = [];

locationFilter: string = '';
minPrice: number = 0;
maxPrice: number = 1000000;


  constructor (private apiService: ApiService) {}

    ngOnInit(): void {
      
      // Chargement des annonces du tableau en brut
      const localData = this.apiService.getLocalAnnouncements();
      this.announcements = [...localData];

      // Chargement des données de l'api
      this.apiService.getAnnouncements().subscribe({
        next: (data) => {
          console.log('Données reçues de l API :', data);
          this.announcements = [...this.announcements, ...data]; // fusion du tableau brut et données api
          this.filteredAnnouncements = [...this.announcements]; //filtres 
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des annonces API', err);
        }
      });      
    }


  applyFilters(): void {
    this.filteredAnnouncements = this.announcements.filter(announcement => {
      const matchesLocation = announcement.location.toLowerCase().includes(this.locationFilter.toLowerCase());
      const matchesPrice = announcement.price >= this.minPrice && announcement.price <= this.maxPrice;
      return matchesLocation && matchesPrice;
    });
  }

  voirPlus(announcement: Announcement): void {
  alert(`Titre : ${announcement.title}\nAdresse : ${announcement.address}\nLieu : ${announcement.location}`);
  }
  
}
