# Mees Blueprint

> Dit document is de centrale product- en architectuurblauwdruk van Mees. Belangrijke projectbeslissingen worden hier of in de gekoppelde ontwerpdocumenten vastgelegd voordat ze als bouwbeslissing gelden.

## 1. Missie

Mees is een gratis digitaal leerplatform voor kinderen in het Nederlandse basisonderwijs. De eerste focus is rekenen; later kan Mees uitbreiden naar andere vakken.

Mees optimaliseert voor leren, niet voor schermtijd. Geen advertenties, abonnementen, streaks, ranglijsten of andere mechanismen die kinderen zo lang mogelijk in de app proberen te houden.

Digitale opdrachten, interactieve opdrachten, papier en menselijke begeleiding moeten uiteindelijk binnen hetzelfde leermodel kunnen samenwerken.

## 2. Kernarchitectuur

Mees bestaat conceptueel uit vier gescheiden werelden:

- **Software**: website/app, design system, oefenengines, adaptieve engine, werkbladgenerator, tests en documentatie.
- **Onderwijs**: leerlijnen, leerdoelen, relaties tussen leerdoelen, vragen, antwoorden, hints, uitleg, versies en bijdragers.
- **Leerdata**: kindprofiel, pogingen, antwoorden, bewijs, beheersingsinschattingen, interventies, werkbladen en tutorobservaties.
- **AI**: een toekomstige gecontroleerde laag voor uitleg, dialoog, diagnostische vragen en analyse. AI is niet de kern van het leermodel.

De Mees API verbindt deze werelden.

### Hoofdregel

**Software weet niet welke onderwijsinhoud bestaat. Onderwijsinhoud weet niet hoe de interface eruitziet. De leerengine verbindt beide.**

Onderwijsdata bevat semantische informatie, geen CSS, pixels of oude UI-implementaties.

## 3. Clean build

Mees wordt schoon opgebouwd. Bestaande projecten zijn bronmateriaal en geen technische basis.

Uit bestaande onderwijsdata kunnen na controle onder meer leerdoelen, vragen, juiste antwoorden en bruikbare inhoud worden gemigreerd. Oude UI, CSS, componentstructuur, routes, architectuur en interactieve implementaties worden niet automatisch overgenomen.

Migratie gebeurt later via een gecontroleerde adapter naar de nieuwe Mees-contracten.

## 4. Contract before software

Voordat de echte software aan onderwijsdata wordt gekoppeld, definiëren we minimaal:

1. Learning Goal Contract
2. Question Contract
3. Learning Event Contract
4. Learner State Contract
5. Tutor Intervention Contract

De eerste software kan daarna met zorgvuldig gekozen dummyvragen en gesimuleerde leerlingprofielen worden gebouwd en getest.

## 5. Leerdoelen

Leerdoelen vormen geen simpele lineaire hoofdstukkenlijst maar een netwerk. Leerdoelen kunnen voorwaarden hebben en met andere doelen verbonden zijn.

Wanneer een kind structureel moeite heeft met een doel, kan Mees daarom onderliggende doelen onderzoeken in plaats van alleen meer van dezelfde vragen te geven.

Groep of leerjaar is richtinggevend, niet de enige waarheid over het actuele niveau van een kind.

## 6. Vragen en oefenvormen

Een vraag beschrijft wat de opdracht betekent. De software bepaalt hoe die opdracht wordt weergegeven.

Voorbeeld:

```text
type: clock
time: 14:35
action: read_time
```

De Mees Clock-engine bepaalt vervolgens hoe de klok eruitziet, reageert, schaalt, toegankelijk is en op verschillende apparaten werkt.

Dit principe geldt ook voor onder andere getallenlijnen, blokken, breuken, meten, geld, klokken, sorteren en meetkunde.

Interactiviteit moet informatie geven over het denken of begrip van het kind. Decoratieve interactie is geen doel op zichzelf.

## 7. Hulp tijdens een opdracht

Basisvolgorde:

```text
zelf proberen
→ lichte hint
→ opnieuw proberen
→ sterkere hint / andere representatie
→ opnieuw proberen
→ gerichte uitleg
→ verder oefenen of later opnieuw meten
```

Een kind mag ook zelf om een hint of een andere manier van uitleg vragen.

## 8. Fouten en denkfouten

**Een fout antwoord is een observatie, geen diagnose.**

Mees verzint geen denkfouten en behandelt een fout antwoord niet automatisch als bewijs van een denkfout.

Gewenste ontwikkeling:

```text
echte pogingen
→ geobserveerde fouten
→ terugkerende patronen
→ hypothese
→ aanvullend diagnostisch bewijs
→ analyse
→ menselijke validatie waar nodig
→ gevalideerd foutpatroon
→ passende interventie
```

Door eerdere systemen of AI verzonnen denkfouten worden niet automatisch gemigreerd.

AI kan later helpen patronen te vinden of hypotheses voor te stellen, maar een hypothese blijft onderscheiden van een gevalideerde conclusie.

## 9. Leerlingmodel

Het leerlingmodel werkt met bewijs en onzekerheid, niet alleen met 'beheerst' of 'niet beheerst'.

Conceptueel:

```text
leerdoel
→ observaties
→ bewijs
→ huidige inschatting
→ onzekerheid
→ volgende beste actie
```

Eén goed of fout antwoord is onvoldoende om een definitieve conclusie over beheersing te trekken.

## 10. Adaptieve engine MVP

De eerste adaptieve engine is regelgebaseerd, uitlegbaar en testbaar.

Voorbeelden van gedrag:

- verschillende taken verzamelen bewijs voor een leerdoel;
- meerdere onafhankelijke successen verhogen het vertrouwen in beheersing;
- herhaalde problemen leiden tot een andere interventie in plaats van eindeloos dezelfde oefening;
- Mees kan een onderliggend leerdoel controleren;
- zwakke voorwaarden kunnen aanleiding zijn om tijdelijk een stap terug te gaan;
- na interventie wordt later opnieuw gemeten.

Opaque machine-learningbeslissingen zijn niet nodig voor MVP 1.

## 11. Verschillende manieren van leren

Hetzelfde leerdoel kan worden aangeboden als kale som, visuele opdracht, interactieve opdracht, papieren opdracht of activiteit buiten het scherm.

Mees labelt kinderen niet permanent als bijvoorbeeld 'visuele leerling'. Een bepaalde representatie kan bij één onderwerp helpen en bij een ander onderwerp niet.

Er komt ruimte voor een rustigere presentatie met minder beweging, kleur of geluid zonder kinderen hiervoor een diagnostisch label te geven.

## 12. Schermtijd

Mees probeert kinderen niet vast te houden.

Sessies hebben een duidelijk einde. 'Voor jou vandaag' kan een korte gepersonaliseerde sessie samenstellen met onderhoud, een onzeker leerdoel, een volgende stap en eventueel een andere representatie.

Papier en activiteiten buiten het scherm mogen onderdeel zijn van dezelfde leerroute.

## 13. Papier

Mees moet gepersonaliseerde werkbladen kunnen genereren.

Later kan een ouder een gemaakt werkblad fotograferen of scannen. Resultaten kunnen na betrouwbare herkenning of bevestiging worden toegevoegd aan het leerlingmodel.

Mees gokt niet bij onleesbaar handschrift.

Bewijs uit papier kan een andere betrouwbaarheid hebben dan bewijs uit een volledig interactieve digitale opdracht.

## 14. Kindgegevens en privacy

Dataminimalisatie is een fundamenteel ontwerpprincipe.

Voor MVP 1 is het uitgangspunt voor het kindprofiel:

```text
interne willekeurige child_id
voornaam
groep
leerdata
```

De interne ID is de technische identiteit. De voornaam is vooral een vriendelijk label.

Mees verzamelt niet automatisch achternaam, volledig adres, geboortedatum, telefoonnummer, persoonlijk e-mailadres of schoolnaam van het kind.

Oudergegevens worden logisch gescheiden van het kindprofiel.

**Mees verzamelt geen persoonsgegeven omdat het misschien ooit handig is. Elk veld moet een concrete noodzakelijke functie hebben. Als die functie zonder het gegeven kan worden uitgevoerd, verzamelen we het niet.**

Persoonlijke leerdata komt nooit in GitHub.

## 15. Meerdere apparaten

Het leerlingprofiel en de voortgang zijn server-side. Een apparaat is slechts een venster op hetzelfde profiel.

Een kind moet op verschillende apparaten kunnen werken zonder een nieuw leerprofiel te krijgen.

Later ontwerpen we expliciet voor zwakke verbindingen, offline gedrag, gelijktijdige sessies en conflictresolutie.

## 16. Ouders

De ouderomgeving moet vooral antwoord geven op:

- wat gaat goed;
- waar loopt het kind tegenaan;
- wat doet Mees daarmee;
- wat kan de ouder thuis doen.

Ouders kunnen toestemming en toegang beheren waar dat nodig is. De ouderidentiteit staat los van de minimale identiteit van het kind.

## 17. Tutor in MVP 1

Menselijke begeleiding is onderdeel van MVP 1.

MVP 1 bouwt **geen tutor-marktplaats**. We testen eerst de volledige interventielus met een zeer klein aantal vertrouwde tutors/leerkrachten.

```text
kind oefent
→ Mees verzamelt bewijs
→ Mees probeert passende interventies
→ probleem blijft terugkomen
→ hulp van leerkracht/tutor wordt voorgesteld
→ ouder geeft akkoord
→ tutor ontvangt minimale onderwijscontext
→ begeleiding
→ tutor geeft gestructureerde observatie
→ observatie wordt nieuw bewijs
→ Mees meet later opnieuw
```

De tutor krijgt alleen gegevens die noodzakelijk zijn voor de begeleiding, bijvoorbeeld voornaam, groep, relevant leerdoel, relevante pogingen, gebruikte hints/interventies en relevante onderwijscontext.

De tutor hoeft geen adres, geboortedatum, ouder-e-mailadres of andere onnodige identificerende gegevens te zien.

### Tutorobservaties

Tutorfeedback is sterk aanvullend bewijs, maar wordt niet automatisch absolute waarheid.

Een tutor kan bijvoorbeeld vastleggen:

- mate van begrip;
- welke representatie of uitleg hielp;
- een vrije onderwijsobservatie;
- advies voor opnieuw oefenen, opnieuw meten of controleren van een onderliggend leerdoel.

Zo kan het leerlingmodel uiteindelijk bewijs combineren uit digitale opdrachten, papier, ouderbevestiging en tutorobservaties.

## 18. AI

Alles in de eerste kern van Mees moet zonder AI kunnen functioneren.

AI kan later een gecontroleerde onderwijslaag worden die bijvoorbeeld:

- vragen van kinderen beantwoordt binnen onderwijscontext;
- uitleg op een andere manier formuleert;
- diagnostische vervolgvragen stelt;
- geanonimiseerde foutpatronen helpt analyseren;
- redacteuren helpt onderwijsinhoud te controleren.

Mees bepaalt de leerroute. AI is assistent, niet de autonome leerengine en niet een algemene digitale vriend.

AI-uitkomsten die iets over het begrip van een kind zeggen worden als hypothese/bewijs behandeld, met passende onzekerheid.

## 19. Open vragenbank

De onderwijsinhoud moet uiteindelijk databasegestuurd en redactioneel beheersbaar zijn.

Een toekomstige bijdrageflow kan bijvoorbeeld werken met bijdragers, geverifieerde bijdragers, editors en beheerders en statussen zoals Draft, Proposed, Reviewed, Published en Revised.

Wijzigingen moeten herleidbaar zijn. Oude versies blijven beschikbaar.

Een poging van een kind verwijst naar de versie van de vraag die het kind daadwerkelijk heeft gezien.

## 20. Design

Het eerder gekozen Mees-ontwerp vormt de visuele basis en wordt vertaald naar een formeel design system.

De stijl groeit mee met de leeftijd:

- jongere groepen warmer en speelser;
- oudere groepen geleidelijk rustiger en volwassener;
- de Mees-mascotte blijft herkenbaar maar kan minder prominent worden.

We ontwerpen eerst de officiële Mees-componenten en oefenengines. Oude visuele implementaties bepalen niet hoe deze eruitzien.

## 21. Toegankelijkheid

Toegankelijkheid is onderdeel van het ontwerp, niet een reparatieronde achteraf.

Onder andere:

- voorleesfunctie;
- voldoende contrast;
- ruime aanraakdoelen;
- toetsenbordbediening waar relevant;
- kleur draagt nooit als enige betekenis;
- rustige presentatieoptie;
- stop/afsluiten is even vindbaar als doorgaan.

## 22. Technische richting

Beoogde verantwoordelijkheden:

```text
GitHub       → software + documentatie + versiebeheer
Vercel       → preview + productie
Supabase     → PostgreSQL + auth + storage
Vimexx       → domein + DNS

Supabase/Postgres:
  onderwijsdata
  ≠
  private leerdata

Mees API verbindt de lagen.
```

Onderwijsdata en persoonlijke leerdata worden minimaal logisch strikt gescheiden. De precieze database- en beveiligingsarchitectuur wordt ontworpen vóór productiegegevens worden opgeslagen.

Development, preview en production krijgen gescheiden omgevingen. Een preview-build mag nooit per ongeluk productie-leerdata gebruiken.

## 23. Bouwvolgorde

1. Blueprint en architectuur vastleggen.
2. Learning Goal Contract ontwerpen.
3. Question Contract ontwerpen.
4. Learning Event Contract ontwerpen.
5. Learner State Contract ontwerpen.
6. Tutor Intervention Contract ontwerpen.
7. Design system vastleggen.
8. Kleine set dummy-leerdoelen, vragen en leerlingprofielen maken.
9. Oefenengines bouwen en visueel testen.
10. Volledige kindflow bouwen met dummydata.
11. Leerlingmodel en adaptieve engine v1 bouwen.
12. Multi-device gedrag testen.
13. Tutor-loop MVP bouwen.
14. Bestaande vragenbank auditen en via adapter migreren.
15. Papier/ouderervaring verder uitbouwen.
16. Pilot met echte gebruikers pas nadat privacy, beveiliging en gegevensstromen geschikt zijn gemaakt.
17. AI pas toevoegen waar het aantoonbaar onderwijswaarde levert.

## 24. Projectregel

**Belangrijke beslissingen over Mees worden in de projectdocumentatie vastgelegd. Chatgesprekken zijn werkruimte; GitHub is de technische bron van waarheid.**
