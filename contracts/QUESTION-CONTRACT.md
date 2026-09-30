# Question Contract

> Status: ontwerpcontract
> Doel: vastleggen wat een Mees-opdracht inhoudelijk is, onafhankelijk van de interface waarmee het kind de opdracht uitvoert.

## 1. Kernprincipe

Een vraag beschrijft **wat het kind moet doen en hoe het antwoord onderwijskundig wordt beoordeeld**. Een vraag beschrijft niet hoe knoppen, klokken, getallenlijnen, blokken of andere componenten eruitzien.

Onderwijs bevat vraagbetekenis, leerdoel, parameters, antwoordmodel, hints en uitleg. Software bevat rendering, interactie en de concrete Mees-oefenengines.

Hierdoor kan dezelfde onderwijsinhoud later een nieuw ontwerp of verbeterde oefenengine krijgen zonder duizenden vragen te herschrijven.

## 2. Vraag versus presentatie

Voorbeeld van onderwijsdata:

    exercise_type: clock
    prompt: Hoe laat is het?
    parameters:
      time: "14:35"
    response:
      type: time

De vraag zegt niet dat een blauwe klok 280 pixels groot moet zijn of waar een knop staat. Dat behoort tot Software.

## 3. Identiteit en versie

Iedere vraag krijgt een stabiele question_id, inhoudsversie en publicatiestatus. Een poging van een kind verwijst altijd naar zowel de vraag als de versie die daadwerkelijk is getoond.

    question_id: Q-REK-00001234
    version: 3
    status: published

Zo blijft historische leerdata interpreteerbaar wanneer een vraag later wordt aangepast.

## 4. Minimale structuur

Een gewone gepubliceerde vraag bevat conceptueel:

    question_id: Q-REK-00001234
    version: 1
    status: published
    primary_learning_goal_id: LG-REK-OPT-0012
    supporting_learning_goal_ids: []
    exercise_type: numeric_input
    prompt:
      text: "47 + 6 ="
      speakable_text: "Hoeveel is zevenenveertig plus zes?"
    parameters:
      expression:
        left: 47
        operator: "+"
        right: 6
    response:
      type: integer
      validation:
        method: exact
        accepted_answers: [53]
    hints:
      - level: 1
        strategy: light
        content:
          text: "Ga eerst naar het volgende tiental."
      - level: 2
        strategy: alternate_representation
        representation: number_line
    explanation:
      text: "47 + 3 is 50. Er blijven dan nog 3 over. 50 + 3 = 53."
    metadata:
      language: nl-NL

Dit is een contractvoorbeeld, niet de definitieve databasestructuur.

## 5. Eén primair leerdoel

Iedere vraag heeft in beginsel één primary_learning_goal_id. Dat is het leerdoel waarvoor het antwoord primair bewijs oplevert.

Een vraag kan aanvullende leerdoelen raken, maar die worden expliciet als ondersteunend gemarkeerd. We koppelen een vraag niet gemakshalve aan allerlei leerdoelen, omdat dan onduidelijk wordt waarvoor een antwoord werkelijk bewijs levert.

## 6. Exercise type

exercise_type bepaalt welke semantische oefenengine nodig is. Voorbeelden zijn numeric_input, multiple_choice, number_line, clock, money, blocks, fractions, measurement, sorting, geometry, table, graph en drawing.

Deze lijst groeit gecontroleerd. Een nieuw type wordt pas toegevoegd wanneer een bestaande engine de onderwijsinteractie niet goed kan uitdrukken. Een exercise type is geen visuele stijl.

## 7. Parameters

Parameters bevatten alleen informatie die de oefenengine nodig heeft om de bedoelde opdracht te construeren.

Voor een klok kan dat zijn:

    exercise_type: clock
    parameters:
      time: "14:35"
      mode: read_time

Voor een getallenlijn:

    exercise_type: number_line
    parameters:
      start: 0
      end: 100
      target: 63
      task: place_number

De Mees-component bepaalt pixels, schaal, animatie, touchgedrag, toetsenbordbediening en responsiviteit.

## 8. Prompt en taal

De prompt moet kindgericht, duidelijk en passend bij het leerdoel zijn. Waar nodig onderscheiden we zichtbare tekst, voorleesbare tekst en eventueel een alternatieve toegankelijke formulering.

Voorlezen mag niet afhankelijk zijn van toevallige UI-tekst. Een wiskundige expressie kan visueel compact zijn maar mondeling anders geformuleerd moeten worden.

## 9. Antwoordmodel

Niet iedere vraag heeft hetzelfde soort antwoord. Het contract ondersteunt verschillende response types, bijvoorbeeld integer, decimal, fraction, text, choice, multiple_choice, time, money, coordinate, ordered_items, constructed_state en drawing.

constructed_state kan bijvoorbeeld beschrijven wat een kind met blokken, een getallenlijn of een interactieve breuk heeft opgebouwd.

## 10. Validatie is expliciet

Het juiste antwoord wordt niet verborgen in frontendcode. De vraag beschrijft hoe een antwoord gevalideerd wordt.

Mogelijke methoden zijn exact, een set geaccepteerde antwoorden, numerieke tolerantie waar onderwijskundig passend, equivalente breuken, equivalente geldnotatie of de structurele toestand van een interactief object.

Validatie moet deterministisch zijn wanneer dat mogelijk is. AI wordt in MVP 1 niet gebruikt om gewone rekenantwoorden willekeurig goed of fout te verklaren.

## 11. Meerdere juiste antwoorden

Het contract ondersteunt opdrachten met meer dan één geldig antwoord. Waar antwoorden mathematisch equivalent zijn, heeft een formele equivalentievalidator de voorkeur boven het handmatig opsommen van iedere schrijfwijze.

## 12. Open opdrachten

Sommige toekomstige opdrachten hebben geen enkel exact antwoord. Die mogen niet worden geforceerd in een ja/nee-validator.

Een open opdracht kan bewijs verzamelen via een expliciete rubric, ouder- of tutorbevestiging, menselijke beoordeling of later gecontroleerde AI-assistentie. De betrouwbaarheid van dit bewijs wordt apart vastgelegd in Leerdata.

## 13. Hints

Hints zijn onderdeel van onderwijscontent, niet van de diagnose van het kind. Een vraag kan meerdere hintniveaus bevatten.

Een hint kan een kleine aanwijzing geven, een tussenstap zichtbaar maken, een relevante vraag terugstellen of een andere representatie activeren. Een hint geeft niet standaard onmiddellijk het antwoord weg.

## 14. Andere representatie

Een sterkere hint mag een andere oefenengine of representatie oproepen.

    kale som
      ↓
    hint 1: tekstuele aanwijzing
      ↓
    hint 2: getallenlijn

De oorspronkelijke vraag blijft inhoudelijk dezelfde vraag. De Learning Event-laag registreert welke representatie het kind daadwerkelijk heeft gezien en gebruikt.

## 15. Uitleg na pogingen

Een vraag kan een gerichte standaarduitleg bevatten voor wanneer de interventieladder daarom vraagt. Die uitleg mag het juiste antwoord en een begrijpelijke oplossingsroute tonen.

Een standaarduitleg beweert niet automatisch waarom het kind een fout maakte. Dus niet "Je vergat over het tiental te gaan" wanneer Mees alleen weet dat het antwoord fout was. Wel: "Een manier is eerst aan te vullen tot 50: 47 + 3 = 50. Daarna tel je de laatste 3 erbij."

## 16. Geen vooraf verzonnen denkfout als vereiste

misconception of denkfout is geen verplicht veld van een vraag. Een fout antwoord wordt eerst als observatie opgeslagen.

Als later uit echte leerdata een gevalideerd foutpatroon ontstaat, kan een afzonderlijke Misconception Library eventueel een relatie leggen tussen geobserveerd patroon, relevante leerdoelen, diagnostische vragen en geschikte interventies.

## 17. Moeilijkheid is multidimensionaal

We gebruiken niet alleen één willekeurig moeilijkheidscijfer. Kenmerken kunnen bijvoorbeeld number_range, crosses_ten, operation_count, language_load en representation zijn.

Welke kenmerken relevant zijn verschilt per oefentype en leerdoel. Werkelijke moeilijkheid kan later mede uit geanonimiseerde gebruiksdata blijken. Een vooraf ingestelde moeilijkheid is dus een inhoudelijke inschatting, geen eeuwige waarheid.

## 18. Generatieve vragen

Niet iedere opgave hoeft uiteindelijk als volledig uitgeschreven vraagrecord te bestaan. Een veilig gedefinieerde vraagtemplate kan parameters genereren binnen onderwijsregels.

    template_id: T-OPT-OVER-TIENTAL-01
    constraints:
      result_max: 100
      must_cross_ten: true
      operands_positive: true

Een gegenereerde concrete instantie moet alsnog reproduceerbaar zijn. De Learning Event-laag bewaart daarom de daadwerkelijk gebruikte parameters en contract/templateversie.

## 19. Willekeur en reproduceerbaarheid

Als een engine randomisatie gebruikt, moet een poging achteraf reconstrueerbaar blijven. We bewaren daarom de concrete gegenereerde parameters en waar relevant een seed of instance-ID.

Mees moet exact kunnen weten welke opgave het kind daadwerkelijk heeft gezien.

## 20. Interactieve antwoorden

Bij interactieve opdrachten kan niet alleen het eindantwoord relevant zijn. Een getallenlijn kan bijvoorbeeld registreren welke betekenisvolle stappen een kind heeft gezet.

Het Question Contract bepaalt welke eindtoestand geldig is. Het Learning Event Contract bepaalt later welke interacties als betekenisvolle gebeurtenissen worden opgeslagen.

We slaan niet gedachteloos iedere muisbeweging op. Alleen gegevens met een concrete onderwijsfunctie horen in Leerdata.

## 21. Tijd en snelheid

Reactietijd kan context geven maar is geen zelfstandig bewijs van begrip. Een kind kan worden afgeleid, nadenken, even weglopen of motorisch meer tijd nodig hebben.

Daarom wordt snelheid nooit zonder aanvullende context vertaald naar "kan dit slecht" of "kan dit goed".

## 22. Toegankelijkheid

Een vraag mag geen essentiële betekenis uitsluitend via kleur, geluid of fijne motoriek communiceren.

Waar een specifieke motorische handeling niet het leerdoel is, moet waar mogelijk een gelijkwaardige invoermethode beschikbaar zijn.

## 23. Leeftijd en groep

Een vraag kan metadata bevatten over de doelgroep waarvoor taal en context oorspronkelijk zijn geschreven. Dat is geen harde toegangsregel.

Het leerlingmodel, het leerdoel en de gekozen leerroute bepalen of de vraag passend kan zijn.

## 24. Contexten

Verhaalsommen en contextopgaven scheiden de wiskundige structuur van de tekstuele context waar praktisch mogelijk. Dat helpt bij varianten, toegankelijkheid, analyse van taalbelasting en voorkomt dat hetzelfde rekendoel steeds aan één context vastzit.

## 25. Bron en provenance

Een vraag moet uiteindelijk herleidbaar zijn. Metadata kan bronsoort, bronreferentie, bijdrager, reviewers en reviewdatum bevatten.

Bij migratie uit de bestaande vragenbank blijft de herkomst zichtbaar.

## 26. Redactionele workflow

Voor onderwijscontent voorzien we minimaal de mogelijkheid voor draft → proposed → reviewed → published → revised.

Publiceren is een redactionele beslissing. AI kan controles of voorstellen doen, maar publiceert niet zelfstandig vertrouwde onderwijsinhoud.

## 27. Wijzigen en verwijderen

Een gebruikte vraag wordt niet stilzwijgend overschreven alsof de oude versie nooit heeft bestaan.

Wijzigingen verhogen de versie volgens nog vast te leggen versiebeleid. Een vraag kan worden gearchiveerd of vervangen. Historische pogingen blijven gekoppeld aan de versie die destijds is gebruikt.

## 28. Automatische kwaliteitscontroles

Voor publicatie kunnen minimaal worden gecontroleerd:

1. question ID en versie zijn geldig;
2. primair leerdoel bestaat;
3. exercise type bestaat;
4. verplichte parameters voor die engine zijn aanwezig;
5. antwoordvalidator is geldig;
6. correct antwoord slaagt voor de eigen validator;
7. prompt en voorleesbare tekst zijn aanwezig waar vereist;
8. hints voldoen aan hun schema;
9. gekoppelde representaties bestaan;
10. er staat geen UI/CSS in onderwijsdata;
11. er staan geen persoonsgegevens van kinderen in;
12. er wordt geen onbewezen denkfout als feit vastgelegd.

Later kunnen aanvullende wiskundige en taalkundige checks per oefentype worden toegevoegd.

## 29. Question Type Schemas

Het algemene Question Contract is de buitenste envelop. Ieder interactief oefentype krijgt daarnaast een eigen schema:

    Question Contract
    ├── Numeric Input Schema
    ├── Number Line Schema
    ├── Clock Schema
    ├── Money Schema
    ├── Fraction Schema
    ├── Blocks Schema
    └── ...

Zo hoeft het hoofdcontract niet vol te lopen met klok-specifieke of breuk-specifieke velden. De schemas beschrijven semantiek. De bijbehorende Mees-componenten beschrijven gedrag en presentatie.

## 30. Relatie met Learning Event

Het Question Contract beschrijft wat aangeboden kan worden. Het Learning Event Contract registreert wat tijdens één concrete poging daadwerkelijk gebeurde.

Bijvoorbeeld: de vraag is 47 + 6. De Learning Event-laag kan vastleggen dat het antwoord 52 was, hint 1 is gebruikt, hint 2 niet is gebruikt, de representatie symbolic was en de validator het antwoord incorrect verklaarde.

Daaruit volgt nog niet automatisch waarom het kind 52 antwoordde.

## 31. Privacyprincipe

De vragenbank bevat onderwijscontent en geen persoonlijke leerlingdata.

Een vraag bevat nooit kindnaam, oudergegevens, individueel leerlingprofiel of persoonlijke tutorinformatie. De verbinding met een kind ontstaat pas in de private Learning Event/Leerdata-laag.

## 32. Wat we nog testen

Voor definitieve implementatie testen we dit contract met een kleine set uiteenlopende rekenvragen: kale som, meerkeuze, getallenlijn, klok, geld, breuken, meten, sorteren en een open of geconstrueerde opdracht.

Daarmee controleren we of de scheiding tussen vraagbetekenis en oefenengine echt standhoudt.

## 33. Ontwerpprincipe

**Een Mees-vraag legt de onderwijsbetekenis, antwoordregels en mogelijke hulp vast. De software bepaalt hoe het kind die opdracht beleeft. Een fout antwoord blijft een observatie totdat aanvullend bewijs meer rechtvaardigt.**
