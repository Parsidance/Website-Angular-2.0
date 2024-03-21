import { Component, ViewEncapsulation  } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InfoComponent {
  hovered = [false, false, false, false, false];

  titelAlgemeen = ['Openingsuren en Podia', 'Minimumleeftijd', 'Drugs en Alcohol', 'Lockers']
  uitlegAlgemeen = [
    // Openingsuren en Podia
    'Vrijdag 12 april <br>\
    &emsp;16u00 tot 00u00 <br>\
    &emsp;Dixieland, Bunker <br>\
    Zaterdag 13 april <br>\
    &emsp;13u00 tot 01u00 <br>\
    &emsp;Dixieland, Bunker, Mainstage \
    ',
    
    // Minimumleeftijd
    'Je moet minstens 18 jaar zijn op de dag van het festival. Word je 18 \
    op de dag van het festival? Dan krijg je ook toegang.', 

    // Drugs en Alcohol
    'Het bezitten van drugs is strikt verboden op het festival! Het bezitten van drugs betekent \
    voor de bezitter het einde van het festival, zonder uitzonderingen.', 

    // Lockers
    'Er zullen lockers aanwezig zijn op het festival. De kostprijs van deze lockers \
    zullen geafficheerd worden en er is een betaalpunt aanwezig.', 
  ]

  titelTickets = ['Waar koop ik mijn ticket?', 'Wanneer ontvang ik mijn ticket?', 'Ik ben mijn ticket kwijt…', 'Ticket verkopen', 'Nog vragen over je ticket(s)?']
  uitlegTickets = [
    // Waar koop ik mijn ticket?
    'Tickets voor Parsidance 2024 zijn verkrijgbaar via <a href="https://tickets.parsidance.be">tickets.parsidance.be</a>.',

    // Wanneer ontvang ik mijn ticket?
    'De tickets werden op woensdag 20 maart om 20u doorgestuurd. Tickets die later dan deze datum worden aangekocht, zullen direct verstuurd worden. We kiezen bewust voor deze uitgestelde verzending met als \
    voornaamste doel de handel op de zwarte markt en ticketfraude tegen te gaan.', 

    // Ik ben mijn ticket kwijt…
    'Als je je ticket(s) niet terug kan vinden of je vindt de bevestigingsmail niet terug, \
    dan kan je de bevestigingsmail opnieuw laten verzenden via de <i>Help</i>-knop op de <a href="https://tickets.parsidance.be">ticketsite</a>.', 

    // Ticket verkopen
    'Indien je je tickets wenst door te verkopen aan een andere persoon, kan je gebruik maken van <a href="https://www.ticketswap.nl/parsidance-festival?">Ticketswap</a>. \
    Dit is een veilige en eerlijke manier om tickets te kopen en te verkopen. Tickets die via een ander platform \
    worden aangeboden zijn vaak hoger geprijsd. Een bijkomend risico is dat de tickets ongeldig zijn op de dag van het festival \
    en dus geen toegang tot het festival zullen verlenen.', 

    // Nog vragen over je ticket(s)?
    'Vragen over je ticket(s) kan je sturen naar <a href="mailto:tickets@parsidance.be">tickets@parsidance.be</a>. Een antwoord op de meest \
    courante ticket gerelateerde vragen vind je in de <a href="https://help.tickoweb.be/help/nl-nl/23-ticket-kopers">Tickoweb FAQ</a>.', 
  ]

  titelMobiliteit = ['Fiets', 'Auto', 'Openbaar Vervoer']
  uitlegMobiliteit = [
    // Fiets
    'Er wordt een fietsenparking voorzien aan het begin van de Pastoor Slossestraat, ter hoogte van de O.C.A.R en \
    Den Hazelt. Fietsen die langs de straat staan geparkeerd, zullen worden verwijderd.',
    
    // Auto
    'De Koestraat (gedeeltelijk) en de Pastoor Slossestraat zijn tijdens het evenement volledig verkeer- en parkeervrij. \
    Het is dus niet mogelijk om door deze straten te rijden of hier te parkeren. Wens je te parkeren in de buurt van het \
    festival, dan doe je dit best op de permanent voorziene parkeerplaatsen. <br><br>\
    Er wordt een Kiss&Ride zone voorzien in de Oekensestraat, aan het begin van de Pastoor Slossestraat. Hier parkeren is \
    niet toegelaten, maar kort stoppen om in of uit te stappen is wel mogelijk.', 

    // Openbaar Vervoer
    'Je kan naar het festival komen met het openbaar vervoer. Plan jouw reis via <a href="https://delijn.be">delijn.be</a>. Er zijn enkele bushaltes op \
    wandelafstand van het festivalterrein.', 
  ]

  titelFoodDrinks = ['Bonnen', 'Drank', 'Eten']
  uitlegFoodDrinks = [
    // Bonnen
    'Alles op het festival wordt betaald met drankbonnen. De drankbonnen kan je aan de verschillende kassa’s kopen, die verspreid staan \
    over het terrein. Betalen kan met Payconiq, Bancontact of cash.',
    
    // Drank
    'Eigen drank meenemen op het festivalterrein is niet toegestaan. Er zijn voldoende drankgelegenheden voorzien op het festivalterrein.', 

    // Eten
    'Er is een uitgebreid aanbod van foodtrucks terug te vinden op het festivalterrein.', 
  ]

  constructor( 
    private title: Title,
    private route: ActivatedRoute,
    private router: Router
    ) {
      route.snapshot.data['title'];
      this.title.setTitle(route.snapshot.data['title'] + ' | Parsidance Festival');
    }
}
