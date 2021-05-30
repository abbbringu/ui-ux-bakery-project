<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="">
    <img src="https://pngimage.net/wp-content/uploads/2018/05/cake-shop-logo-png-3.png" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Projekt UI / UX</h3>

  <p align="center">
    Skapar ett gränsnitt för en specifik målgrupp
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#om-projektet">Om projektet</a>
      <ul>
        <li><a href="#byggd-med">Byggd med</a></li>
      </ul>
    </li>
    <li>
      <a href="#kom-igång">Kom igång</a>
    </li>
    <li><a href="#dokumentation">Dokumentation</a></li>
    <li><a href="#förbättringar">Förbättringar</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Om projektet

Projektet utgår från att planera, designa och utveckla ett gränsnitt för en specifik målgrupp. I projektets början designades mockups för sidor och funktioner för att uppfylla 
gränssnitets krav.

Kraven:
* Tårtorna ska visas upp till användren
* Användaren ska kunna markera tårtorna de vill ha, och beställa den
* Användare ska kunna logga in / logga ut
* Personalen ska visas 

Planering utgick från att projektets gjordes av en person, en tidsbegrändning och tekniska förutsättnignar. Projektet dokumenteras även i form av en film som förklarar arbetets planering, arbetsgång, design tänk och resultat. 

### Byggd med

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [Quasar](https://quasar.dev/)
* [Vue](https://vuejs.org/)
* [Vuex](https://vuex.vuejs.org/)



<!-- GETTING STARTED -->
## Kom igång

För att installera alla bibliotek skrivs kommandot nedanstående i terminalen.
  ```sh
  npm install
  ```

Hemsidan komunicerar med en server som körs lokalt. För att starta upp servern kommandot:
* Start Server
  ```sh
  npm run start-server
  ```
## Dokumentation
[![IMAGE ALT TEXT HERE](/Bilder)](https://www.youtube.com/embed/AiztLLVSUww)

## Förbättringar
Under projektets gång och efter resultatet hittar man alltid förbättrings områden och ändringar som skulle kunna göra gränsnitet bättre. Många förändringar i detta fall handlar om den visuella delen, men det finns även förändringar i bakgrunden som förbättrar applikationen.
* Headern skulle kunna minimeras när man skrollar ner i hemsidan
* Tårtorna kan visas på ett bättre sätt som får den att se bättre ut när man klickar för mer information
* Om oss sidan kan visa upp personalen på ett bättre sätt som får användaren att förstå att man kan kopiera mail respektive telefonnumer. 
* Planneringen kunde ta med en tidsplan och vara bättre fördelat så rätt för att prioritera det viktigaste
* Kod strukturen kunde ske på bättre sätt. Istället för att se på varje "page" som en huvudkomponent kan det se som en child till en gemensam komponent. Vi skulle kunna hämta all data från apierna en gång och passera de genom barn-komponenter. 
* Gjort mer undersökning angående lokal lagring. Vet att quasar hade en lösning eller att datan lagrades i en huvudkomponent
