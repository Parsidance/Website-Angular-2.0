# Parsidance Website

## Development server opstarten

Run `npm install` to install dependencies.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Interessante links

- Components library: [Primeng](https://www.primeng.org)
- [SCSS guide](https://docs.gitlab.com/ee/development/fe_guide/style/scss.html)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0. 

## Deployment

### Dev ~ branch: main

Elke push op de `main`-branch wordt automatisch geüpload naar [dev.parsidance.be](https://dev.parsidance.be) met behulp van FTP. Script hiervoor staat in `.github/workflows/dev-deploy-OVH.yaml`.

Naar de `main`-branch kan er gemerged worden zonder enige beveiliging

### Productie ~ branch: production

Elke push op de `production`-branch wordt automatisch geüpload naar [parsidance.be](https://parsidance.be) met behulp van FTP. Script hiervoor staat in `.github/workflows/prod-deploy-OVH.yaml`

Op de `production`-branch staat er een beveiliging waardoor er sowieso eerst een Pull Request moet aangemaakt worden vooraleer er kan gemerged worden.

## Handig om te weten

> [!TIP] Geef een 'class' of 'id' geen namen zoals sponsor, sponsors, sponsoring..., want die elementen worden anders allemaal geblokkeerd/verwijderd door een adBlocker

## Kleuren

  Hex code verkregen met behulp van de `Color Picker`uit [Powertoys](https://github.com/microsoft/PowerToys)

- Paars: `#9a94c8`
- Groen: `#458b6a`
- Rood: `#d23f34`
- Geel: `#e0e457`
- Grijs: `#808285`
- Wit: `#ffffff`
- Zwart grijs: `#312f30`
- Zwart: `#080302`

## Gebruikte packages

- [Flip Countdown](https://github.com/PButcher/flipdown). Nodige bestanden staan in `src/assets/flipdown` en zijn toegevoegd als *styles* en *scripts* in `angular.json`  
- [Font Awesome](https://fontawesome.com/). Handig voor icons. Geïnstalleerd volgens [angular-fontawesome](https://github.com/FortAwesome/angular-fontawesome)

## Parsidance IT team

Wannes, Michiel, Brecht en Louis
