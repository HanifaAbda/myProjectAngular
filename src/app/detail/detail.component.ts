import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Announcement } from '../models/announcement.interface';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private announcementService = inject(AnnouncementService);

  announcement: Announcement | null = null;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID reçu dans le composant détail :', id);

    if (id && !isNaN(parseInt(id))) {
      this.announcementService.getAnnouncementById(parseInt(id)).subscribe({
        next: (data: Announcement) => {
          this.announcement = data;
          console.log('Annonce reçue :', this.announcement);
        },
        error: (err) => {
          console.error('Erreur lors du chargement de l\'annonce', err);
          this.router.navigate(['/not-found']);
        }
      });
    } else {
      // id invalide → redirection vers l'accueil
      this.router.navigate(['/']);
    }
  }
}
