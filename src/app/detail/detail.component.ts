import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']  
})
export class DetailComponent {
  private route = inject(ActivatedRoute);
  announcementId: number | null = null;

  constructor() {
    this.announcementId = Number(this.route.snapshot.paramMap.get('id'));  // corrige 'apraMap' en 'paramMap'
  }
}
