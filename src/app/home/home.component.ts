import { Component, OnInit } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import localeFr from '@angular/common/locales/fr'; 

import { Announcement } from '../models/announcement.interface';
import { AnnouncementService } from '../services/announcement.service';


registerLocaleData(localeFr); 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ],
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


  constructor (private  announcementService: AnnouncementService) {}

    ngOnInit(): void {
      
      // Chargement des annonces du tableau en brut
      const localData = this.announcementService.getLocalAnnouncements();
      this.announcements = [...localData];

       this.filteredAnnouncements = [...this.announcements];

      console.log('Annonces locales :', this.announcements); 

      // Chargement des données de l'api
      this.announcementService.getAnnouncements().subscribe({
        next: (data) => {
          console.log('Données reçues de l API :', data);
          this.announcements = [...this.announcements, ...data]; // fusion du tableau brut et données api
          this.filteredAnnouncements = [...this.announcements]; //filtres 
          console.log('Toutes les annonces finales :', this.announcements);
          
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des annonces API', err);
        }
      });      
    }


applyFilters(): void {
  this.filteredAnnouncements = this.announcements.filter(announcement => {
    const matchesCity = this.selectedCity ? announcement.city.toLowerCase() === this.selectedCity.toLowerCase() : true;
    const matchesLocation = announcement.city?.toLowerCase().includes(this.locationFilter.toLowerCase());
    const matchesPrice = announcement.dailyPrice >= this.minPrice && announcement.dailyPrice <= this.maxPrice;
    return matchesCity && matchesLocation && matchesPrice;
    });
  }

  voirPlus(announcement: Announcement): void {
    console.log('Annonce cliquée :', announcement);
  alert(`Titre : ${announcement.title}\nAdresse : ${announcement.address}\nLieu : ${announcement.city}`);
  }
  
}
