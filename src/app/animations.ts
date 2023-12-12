// src/app/animations/route-transition.ts

import { trigger, transition, style, animate } from '@angular/animations';

export const routeTransition = trigger('routeTransition', [
  transition(':enter', [
    style({ transform: 'translateY(100%)', opacity: 0 }),
    animate('1s ease-in-out', style({ transform: 'translateY(0)', opacity: 1 })),
  ]),
  transition(':leave', [
    animate('1s ease-in-out', style({ transform: 'translateY(-100%)', opacity: 0 })),
  ]),
]);
