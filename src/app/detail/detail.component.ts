import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
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
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private announcementService: AnnouncementService = inject(AnnouncementService);

  announcement: Announcement | null = null;

ngOnInit() {
  const id: string | null = this.route.snapshot.paramMap.get('id');

  if (id && !isNaN(parseInt(id))) {
    this.announcementService.getAnnouncementById(parseInt(id)).subscribe({
      next: (data: Announcement) => {
        this.announcement = data;
        console.log(this.announcement);
      },
      error: (err) => {
        console.error('Erreur lors du chargement de l\'annonce', err);
        this.router.navigate(['/not-found']); 
      }
    });
    } else {
    // erreur id redirection vers home
    this.router.navigate(['/']);
    }
  }
}

