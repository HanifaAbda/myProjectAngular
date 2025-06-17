import { Component } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'; // <-- le bon chemin

import { Announcement } from '../models/announcement.interface';

registerLocaleData(localeFr); // <-- on enregistre les locales

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

announcements: Announcement[] = [
    {
      id: 1,
      title: "Appartement à louer",
      description: "Appartement moderne en centre-ville.",
      price: 850,
      image: "https://images.unsplash.com/photo-1560448070-47c0c61dd1d3?auto=format&fit=crop&w=300&q=80",
      created_at: "2024-12-01T10:00:00Z"
    },
    {
      id: 2,
      title: "Maison avec jardin",
      description: "Maison de campagne avec un grand jardin.",
      price: 210000,
      image: "https://images.unsplash.com/photo-1572120360610-d971b9b9be5a?auto=format&fit=crop&w=300&q=80",
      created_at: "2025-01-15T15:30:00Z"
    },
    {
      id: 3,
      title: "Studio étudiant",
      description: "Studio proche de l’université, idéal étudiant.",
      price: 500,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80",
      created_at: "2025-03-10T09:00:00Z"
    },
    {
      id: 4,
      title: "Loft industriel",
      description: "Loft spacieux avec déco industrielle.",
      price: 1200,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=300&q=80",
      created_at: "2024-11-21T14:45:00Z"
    },
    {
      id: 5,
      title: "Villa de luxe",
      description: "Villa avec piscine et vue mer.",
      price: 980000,
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=300&q=80",
      created_at: "2025-02-10T11:00:00Z"
    },
    {
      id: 6,
      title: "Appartement neuf",
      description: "Appartement neuf avec balcon.",
      price: 1300,
      image: "https://images.unsplash.com/photo-1530541930197-1b2bf4744e0d?auto=format&fit=crop&w=300&q=80",
      created_at: "2024-10-05T16:30:00Z"
    },
    {
      id: 7,
      title: "Maison ancienne",
      description: "Charmante maison ancienne rénovée.",
      price: 300000,
      image: "https://images.unsplash.com/photo-1501183638714-0f3f3b1b8f8b?auto=format&fit=crop&w=300&q=80",
      created_at: "2024-09-15T09:00:00Z"
    },
    {
      id: 8,
      title: "Appartement avec terrasse",
      description: "Terrasse spacieuse et vue dégagée.",
      price: 1400,
      image: "https://images.unsplash.com/photo-1505692794403-204d6d0a9433?auto=format&fit=crop&w=300&q=80",
      created_at: "2024-12-11T12:00:00Z"
    },
    {
      id: 9,
      title: "Studio cosy",
      description: "Petit studio parfait pour étudiant.",
      price: 450,
      image: "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=300&q=80",
      created_at: "2025-01-01T08:00:00Z"
    },
    {
      id: 10,
      title: "Maison familiale",
      description: "Maison idéale pour famille nombreuse.",
      price: 350000,
      image: "https://images.unsplash.com/photo-1494522358652-4f56c1a2e727?auto=format&fit=crop&w=300&q=80",
      created_at: "2025-03-15T10:30:00Z"
    },
    {
      id: 11,
      title: "Penthouse moderne",
      description: "Penthouse avec grande terrasse.",
      price: 2500,
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=300&q=80",
      created_at: "2024-11-10T17:00:00Z"
    },
    {
      id: 12,
      title: "Appartement ancien",
      description: "Appartement avec charme ancien.",
      price: 900,
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=300&q=80",
      created_at: "2024-08-20T14:00:00Z"
    },
    {
      id: 13,
      title: "Maison de campagne",
      description: "Maison au calme avec grand terrain.",
      price: 270000,
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=300&q=80",
      created_at: "2025-02-28T13:00:00Z"
    },
    {
      id: 14,
      title: "Appartement duplex",
      description: "Duplex spacieux en centre-ville.",
      price: 1600,
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=300&q=80",
      created_at: "2024-12-25T09:30:00Z"
    },
    {
      id: 15,
      title: "Maison avec piscine",
      description: "Piscine chauffée et jardin paysager.",
      price: 480000,
      image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=300&q=80",
      created_at: "2025-01-30T15:00:00Z"
    },
    {
      id: 16,
      title: "Appartement lumineux",
      description: "Grand balcon et belles fenêtres.",
      price: 1100,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=300&q=80",
      created_at: "2024-09-10T08:30:00Z"
    },
    {
      id: 17,
      title: "Studio rénové",
      description: "Studio refait à neuf, proche métro.",
      price: 550,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=300&q=80",
      created_at: "2024-10-18T14:15:00Z"
    },
    {
      id: 18,
      title: "Villa avec vue montagne",
      description: "Cadre idyllique, calme assuré.",
      price: 650000,
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=300&q=80",
      created_at: "2024-11-29T11:45:00Z"
    },
    {
      id: 19,
      title: "Appartement cosy",
      description: "Proche commerces et transports.",
      price: 900,
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=300&q=80",
      created_at: "2025-02-14T10:00:00Z"
    },
    {
      id: 20,
      title: "Maison avec garage",
      description: "Garage double et grand jardin.",
      price: 380000,
      image: "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=300&q=80",
      created_at: "2025-03-05T12:30:00Z"
    },
    {
      id: 21,
      title: "Appartement spacieux",
      description: "Grand séjour et cuisine équipée.",
      price: 1450,
      image: "https://images.unsplash.com/photo-1505692794403-204d6d0a9433?auto=format&fit=crop&w=300&q=80",
      created_at: "2025-01-12T13:00:00Z"
    },
    {
      id: 22,
      title: "Studio lumineux",
      description: "Beaux volumes et calme assuré.",
      price: 600,
      image: "https://images.unsplash.com/photo-1560448070-47c0c61dd1d3?auto=format&fit=crop&w=300&q=80",
      created_at: "2024-12-18T09:00:00Z"
    },
    {
      id: 23,
      title: "Maison de ville",
      description: "Quartier calme, proche écoles.",
      price: 420000,
      image: "https://images.unsplash.com/photo-1494522358652-4f56c1a2e727?auto=format&fit=crop&w=300&q=80",
      created_at: "2025-02-20T10:30:00Z"
    },
    {
      id: 24,
      title: "Appartement design",
      description: "Design moderne et équipements récents.",
      price: 1250,
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=300&q=80",
      created_at: "2025-03-01T14:00:00Z"
    },
    {
      id: 25,
      title: "Villa contemporaine",
      description: "Beaux volumes, piscine chauffée.",
      price: 900000,
      image: "https://images.unsplash.com/photo-1501183638714-0f3f3b1b8f8b?auto=format&fit=crop&w=300&q=80",
      created_at: "2025-01-25T11:15:00Z"
    },
    {
      id: 26,
      title: "Appartement avec jardin",
      description: "Petit jardin privatif, calme.",
      price: 1050,
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=300&q=80",
      created_at: "2025-02-28T10:00:00Z"
    },
    {
      id: 27,
      title: "Maison traditionnelle",
      description: "Charme et authenticité.",
      price: 340000,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=300&q=80",
      created_at: "2024-11-18T08:00:00Z"
    },
    {
      id: 28,
      title: "Studio pratique",
      description: "Près des transports en commun.",
      price: 480,
      image: "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=300&q=80",
      created_at: "2024-12-30T07:30:00Z"
    },
    {
      id: 29,
      title: "Appartement moderne",
      description: "Beaux espaces et équipements neufs.",
      price: 1200,
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=300&q=80",
      created_at: "2025-03-20T15:00:00Z"
    },
    {
      id: 30,
      title: "Maison avec terrasse",
      description: "Grande terrasse et jardin arboré.",
      price: 400000,
      image: "https://images.unsplash.com/photo-1501183638714-0f3f3b1b8f8b?auto=format&fit=crop&w=300&q=80",
      created_at: "2025-01-05T09:30:00Z"
    }
  ];

}
