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
    this.loadAnnouncements();
  }

  loadAnnouncements(): void {
    const localData = localStorage.getItem('announcements');
    if (localData) {
      this.announcements = JSON.parse(localData);
      this.filteredAnnouncements = [...this.announcements];
    } else {
      this.announcementService.getAnnouncements().subscribe(data => {
        this.announcements = data;
        this.filteredAnnouncements = [...this.announcements];
        localStorage.setItem('announcements', JSON.stringify(data));
      });
    }
  }

  applyFilters(): void {
    this.filteredAnnouncements = this.announcements.filter(announcement => {
      const matchesCity = this.selectedCity
        ? announcement.city.toLowerCase() === this.selectedCity.toLowerCase()
        : true;
      const matchesLocation = announcement.city?.toLowerCase().includes(this.locationFilter.toLowerCase());
      const matchesPrice =
        announcement.dailyPrice >= this.minPrice && announcement.dailyPrice <= this.maxPrice;

      return matchesCity && matchesLocation && matchesPrice;
    });
  }

  voirPlus(announcement: Announcement): void {
    const localAnnouncement = this.announcementService.getAnnouncementsByIdLocal(announcement.id);

    if (localAnnouncement) {
      console.log('Annonce trouvée en localStorage :', localAnnouncement);
      alert(
        `Titre : ${localAnnouncement.title}\nAdresse : ${localAnnouncement.address}\nLieu : ${localAnnouncement.city}`
      );
    } else {
      console.warn('Annonce non trouvée dans le localStorage.');
    }
  }
  
}
