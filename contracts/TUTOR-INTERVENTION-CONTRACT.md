# Tutor Intervention Contract

> Status: ontwerpcontract  
> Scope: MVP 1  
> Doel: vastleggen wanneer menselijke begeleiding wordt voorgesteld, welke informatie een tutor nodig heeft, hoe oudertoestemming werkt en hoe tutorobservaties terugvloeien naar het leerlingmodel.

## 1. Uitgangspunt

Een tutor is in Mees geen nooduitgang nadat de software "faalt".

Menselijke begeleiding is een volwaardige interventievorm binnen de leerroute.

    kind oefent
      ↓
    Mees verzamelt bewijs
      ↓
    passende automatische interventies
      ↓
    onzekerheid blijft betekenisvol
      ↓
    menselijke hulp kan extra informatie of uitleg geven
      ↓
    ouder akkoord
      ↓
    tutorbegeleiding
      ↓
    tutorobservatie
      ↓
    later opnieuw meten

MVP 1 test deze volledige lus. MVP 1 bouwt geen openbare tutor-marktplaats.

## 2. Wat MVP 1 wel en niet bouwt

MVP 1 ondersteunt een zeer kleine groep vertrouwde tutors/leerkrachten.

Niet nodig voor MVP 1:

- openbare tutorprofielen;
- beoordelingen of sterren;
- betalingen;
- biedsystemen;
- automatische commerciële matching;
- honderden tutors;
- ranglijsten.

Het doel is eerst aantonen dat menselijke interventie inhoudelijk goed in het Mees-leermodel kan worden opgenomen.

## 3. Wanneer tutorhulp niet wordt voorgesteld

Tutorhulp wordt niet voorgesteld:

- na één fout antwoord;
- omdat een kind langzaam antwoordt;
- omdat een kind een hint gebruikt;
- omdat een vooraf verzonnen denkfout lijkt te passen;
- omdat een engagementmetric laag is;
- uitsluitend omdat een kind een bepaalde groep of leeftijd heeft.

Mees verzamelt eerst voldoende relevante informatie.

## 4. Wanneer tutorhulp mogelijk passend wordt

De Adaptive Engine kan tutorhulp als kandidaat-interventie zien wanneer bijvoorbeeld:

1. er herhaald relevante onzekerheid rond hetzelfde leerdoel bestaat;
2. Mees meerdere passende automatische interventies heeft geprobeerd;
3. een andere representatie waar zinvol is geprobeerd;
4. relevante prerequisites waar nodig zijn gecontroleerd;
5. het probleem of de onzekerheid blijft bestaan;
6. meer vergelijkbare oefeningen waarschijnlijk weinig nieuwe informatie opleveren;
7. menselijke uitleg of doorvragen waarschijnlijk nieuwe onderwijsinformatie kan opleveren.

De precieze drempels worden later in de Adaptive Engine getest. Dit contract legt het principe vast.

## 5. Tutorhulp is een voorstel

De engine produceert niet "dit kind moet naar bijles".

De systeemactie is conceptueel:

    propose_tutor_help

De productlaag kan dit aan de ouder uitleggen als bijvoorbeeld:

> Mees heeft verschillende manieren geprobeerd. Extra uitleg van een leerkracht kan nu helpen om te ontdekken wat nog lastig is.

De formulering blijft neutraal en vermijdt diagnoses.

## 6. Oudercontrole

Voor MVP 1 wordt tutorhulp pas geactiveerd nadat de ouder/verzorger daarmee akkoord gaat.

Conceptuele flow:

    tutor_help_proposed
      ↓
    ouder ziet waarom hulp wordt voorgesteld
      ↓
    ouder akkoord / niet akkoord
      ↓
    bij akkoord: tutorcontext beschikbaar
    bij geen akkoord: Mees vervolgt met andere passende route

Geen akkoord is geen negatieve leerlingobservatie.

## 7. Geen impliciete toestemming

Het feit dat een ouder een Mees-account heeft betekent niet automatisch dat iedere tutor alle leerdata van het kind mag zien.

Tutor-toegang is doelgebonden en beperkt tot de noodzakelijke context voor de betreffende begeleiding.

De precieze juridische toestemmings- en autorisatieflow wordt vóór gebruik met echte kinddata afzonderlijk gevalideerd.

## 8. Tutor Brief

De tutor ontvangt geen volledige databasehistorie.

Mees maakt een compacte Tutor Brief met alleen relevante onderwijscontext.

Conceptueel:

    child:
      display_name: Noor
      group: 5

    focus:
      learning_goal_id: LG-...
      learning_goal_title: ...

    current_evidence:
      recent_relevant_attempts: [...]
      hints_tried: [...]
      representations_tried: [...]
      prerequisite_checks: [...]

    uncertainty:
      what_mees_knows: ...
      what_mees_does_not_know: ...

    request:
      purpose: clarify_understanding

De Tutor Brief bevat feiten en expliciete onzekerheid.

## 9. Wat de tutor niet standaard ziet

Niet nodig voor de begeleiding en daarom niet standaard zichtbaar:

- achternaam;
- volledig adres;
- exacte geboortedatum;
- persoonlijk e-mailadres van het kind;
- ouder-e-mailadres;
- telefoonnummer;
- schoolnaam;
- volledige leerhistorie;
- andere leerdoelen zonder relevantie;
- interne productanalytics;
- commerciële gegevens.

Voornaam en groep zijn in MVP 1 voldoende als vriendelijke context naast de interne technische ID.

## 10. Geen onbewezen diagnose in Tutor Brief

De Tutor Brief zegt niet:

> Noor heeft denkfout X.

wanneer daarvoor onvoldoende gevalideerd bewijs bestaat.

Wel:

> Bij vier relevante opdrachten zagen we dit antwoordpatroon. We weten nog niet waarom. Een getallenlijn en twee hints hebben het nog niet voldoende opgehelderd.

Zo krijgt de tutor bruikbare informatie zonder door Mees in een verklaring te worden gestuurd.

## 11. Tutor kan doorvragen

De menselijke meerwaarde is onder andere dat een tutor flexibel kan:

- vragen hoe het kind dacht;
- een voorbeeld laten uitleggen;
- een andere representatie proberen;
- een prerequisite kort onderzoeken;
- controleren of taal of opdrachtbegrip meespeelde;
- observeren welke uitleg effect lijkt te hebben.

De tutor hoeft daarbij niet ieder gesprek woordelijk vast te leggen.

## 12. Geen standaard opname of transcript

MVP 1 vereist geen audio-opname, video-opname of volledig transcript van tutorsessies.

Dat zou veel extra gevoelige data creëren terwijl voor het leermodel meestal een korte gestructureerde onderwijsobservatie voldoende is.

Als communicatiefunctionaliteit later wordt ontworpen, krijgt privacy daarvoor een apart ontwerp.

## 13. Tutor Feedback

Na begeleiding vult de tutor een korte gestructureerde observatie in.

Conceptueel:

    learning_goal_id: LG-...

    understanding:
      value: present | partial | absent | uncertain
      confidence: low | medium | high

    helpful_representations:
      - number_line

    observed:
      note: "..."

    recommended_next_action:
      value: reassess | targeted_practice | check_prerequisite | no_extra_help

    optional_prerequisite:
      learning_goal_id: LG-...

De precieze interface moet snel genoeg zijn om in de praktijk door een leerkracht gebruikt te worden.

## 14. Concrete observatie boven label

Vrije tutorfeedback wordt aangemoedigd om concreet te blijven.

Beter:

> Bij 63 - 8 telde het kind eerst terug naar 60 en daarna nog 5. Met de getallenlijn kon het dit daarna zelfstandig herhalen.

Minder bruikbaar:

> Zwak in aftrekken.

Het eerste levert toetsbare onderwijsinformatie op. Het tweede is een breed label.

## 15. Tutorobservatie is bewijs

Een tutorobservatie wordt via het Learning Event Contract opgeslagen als herkenbare bewijsbron.

    source: tutor
    tutor_observation_id: ...
    learning_goal_id: ...
    occurred_at: ...

Het Learner State-model kan dit bewijs vervolgens meenemen.

De originele digitale observaties worden niet aangepast.

## 16. Tutor is niet onfeilbaar

Een tutorobservatie mag zwaar meewegen, maar wordt niet automatisch absolute waarheid.

Bij tegenstrijdig bewijs kan Mees later opnieuw meten.

Bijvoorbeeld:

    tutor: begrip lijkt aanwezig
    later zelfstandig digitaal: herhaald onzeker
      ↓
    needs_reassessment

Het systeem behoudt beide bronnen.

## 17. Tutor mag hypothese voorstellen

Een tutor kan een mogelijke verklaring noteren.

Deze wordt opgeslagen als hypothese, niet direct als gevalideerde denkfout.

Conceptueel:

    hypothesis:
      source: tutor
      description: ...
      confidence: medium
      status: unverified

Mees kan daarna passende diagnostische opdrachten gebruiken om de hypothese te onderzoeken.

## 18. Tutor en Misconception Library

Wanneer tutors bij veel kinderen vergelijkbare concrete patronen observeren, kunnen die observaties later bijdragen aan onderzoek naar foutpatronen.

De route blijft:

    observaties
      ↓
    terugkerend patroon
      ↓
    hypothese
      ↓
    aanvullend bewijs
      ↓
    onderwijsinhoudelijke beoordeling
      ↓
    eventueel gevalideerd patroon

Een individuele tutor kan dus niet met één klik een universele denkfout aan de vragenbank toevoegen.

## 19. Na de tutorsessie

Een tutorsessie is niet het eindpunt.

Waar passend volgt een nieuwe zelfstandige meting.

    tutorinterventie
      ↓
    korte wachttijd of vervolgactiviteit
      ↓
    passende nieuwe vraag
      ↓
    zelfstandig bewijs
      ↓
    Learner State bijwerken

Zo meten we of het begrip ook buiten de begeleide situatie standhoudt.

## 20. Reassessment

De nieuwe meting gebruikt waar mogelijk niet exact dezelfde vraag.

We willen transfer en begrip meten, niet alleen herinnering aan het antwoord.

De Adaptive Engine kiest een passende vraaginstantie binnen hetzelfde leerdoel en houdt rekening met de interventie die eerder is gebruikt.

## 21. Tutor-toegang is tijdelijk en doelgebonden

De architectuur moet kunnen ondersteunen dat een tutor alleen toegang heeft:

- tot toegewezen kinderen;
- voor relevante hulpvragen;
- tot relevante onderwijscontext;
- gedurende een passende periode.

Een tutoraccount geeft niet automatisch toegang tot alle kinderen of alle data.

## 22. Autorisatie

Tutorautorisatie wordt server-side afgedwongen.

De clientinterface bepaalt niet zelfstandig welke leerlingdata een tutor mag ophalen.

Bij de technische architectuur ontwerpen we rollen en policies voor minimaal:

    parent
    child
    tutor
    editor
    admin

Onderwijsredactie en toegang tot persoonlijke leerdata zijn afzonderlijke bevoegdheden.

## 23. Audit

Belangrijke toegang en wijzigingen rond tutorbegeleiding moeten controleerbaar zijn.

Bijvoorbeeld:

- wie kreeg toegang;
- voor welk kind;
- voor welk doel;
- wanneer;
- welke observatie werd toegevoegd;
- wanneer toegang eindigde.

Auditdata wordt zelf ook geminimaliseerd en krijgt later passende bewaartermijnen.

## 24. Veiligheid en communicatie

MVP 1 hoeft geen vrij sociaal netwerk tussen kind en tutor te bouwen.

Als live communicatie later onderdeel wordt van Mees, ontwerpen we afzonderlijk:

- wie een sessie kan starten;
- ouderzicht en toestemming;
- contactmogelijkheden buiten sessies;
- moderatie en rapportage;
- passende grenzen voor communicatie met kinderen;
- bewaartermijnen;
- noodzakelijke veiligheidsmaatregelen.

Voor MVP 1 kan de tutorinterventie worden getest zonder een volledig ingebouwd chat- of videoplatform.

## 25. Tutorcapaciteit

Tutorhulp is schaars vergeleken met automatische oefeningen.

De engine mag daarom niet onnodig ieder onzeker leerdoel naar een mens sturen.

Het doel is menselijke aandacht inzetten waar die waarschijnlijk extra onderwijsinformatie of uitleg oplevert.

Dit is geen reden om hulp kunstmatig te blokkeren wanneer die wel passend is.

## 26. Wachttijd

Als tutorhulp niet direct beschikbaar is, blijft de leerroute bruikbaar.

Mees kan bijvoorbeeld:

- tijdelijk een ander leerdoel aanbieden;
- passende onderhoudsoefeningen geven;
- een offline activiteit voorstellen;
- later opnieuw meten.

Het kind hoeft niet vast te zitten op één probleem totdat een tutor beschikbaar is.

## 27. Geen strafstatus

Een tutorinterventie is geen negatieve status.

Het kind ziet niet:

> Je hebt gefaald, nu moet een tutor helpen.

De ervaring moet voelen als een normale extra manier om iets te leren.

## 28. Oudersamenvatting

De ouder krijgt een begrijpelijke reden voor het voorstel.

Bijvoorbeeld:

> Mees heeft dit leerdoel op verschillende manieren geoefend. Het is nog niet duidelijk waar het precies lastig wordt. Een korte uitleg door een leerkracht kan helpen om dat uit te zoeken.

Na de interventie kan de ouder een korte onderwijsgerichte samenvatting krijgen zonder onnodige interne technische details.

## 29. Privacy by design

Tutorfunctionaliteit volgt dezelfde dataminimalisatie als de rest van Mees.

Voor iedere extra datapunt geldt:

> Heeft de tutor dit nodig om het kind bij deze concrete leervraag te helpen?

Zo niet, dan hoort het niet in de Tutor Brief.

## 30. MVP 1 pilotsituatie

MVP 1 mag bewust klein beginnen, bijvoorbeeld met één vertrouwde leerkracht/tutor.

Dat maakt het mogelijk om eerst te onderzoeken:

- is de Tutor Brief bruikbaar;
- begrijpt de tutor waarom hulp wordt gevraagd;
- kost feedback weinig genoeg tijd;
- levert tutorfeedback nieuwe onderwijsinformatie op;
- kan Mees daarna verstandig opnieuw meten;
- werkt de ouderflow;
- delen we niet te veel gegevens.

Pas daarna ontwerpen we eventuele schaalvergroting.

## 31. Testscenario's

Voor implementatie maken we minimaal deze fictieve scenario's:

### A. Eén fout
Tutorhulp wordt niet voorgesteld.

### B. Meerdere fouten, hint helpt
Mees meet later zelfstandig opnieuw; nog geen tutor nodig.

### C. Andere representatie helpt
Mees verzamelt nieuw zelfstandig bewijs; nog geen tutor nodig.

### D. Prerequisite blijkt onzeker
Mees werkt eerst aan de prerequisite.

### E. Meerdere interventies zonder voldoende duidelijkheid
Tutorhulp kan worden voorgesteld.

### F. Ouder weigert
Geen tutor krijgt toegang. Mees kiest een andere passende route.

### G. Tutor rapporteert gedeeltelijk begrip
Mees plant gerichte hermeting.

### H. Tutorhypothese blijkt bij hermeting niet te passen
Hypothese wordt niet als waarheid behandeld.

Deze scenario's worden later onderdeel van geautomatiseerde tests van de Adaptive Engine.

## 32. Nog te valideren

Voor productie moeten we nog expliciet ontwerpen en testen:

- exacte triggerregels voor tutorhulp;
- oudertoestemmingsflow;
- tutorrollen en autorisatie;
- bewaartermijn van Tutor Briefs;
- hoe lang tutor-toegang actief blijft;
- vorm van eventuele planning/afspraken;
- veiligheidsregels wanneer live communicatie wordt ingebouwd;
- welke tutorfeedbackvelden in de praktijk echt nuttig zijn;
- juridische/privacyvereisten voor de uiteindelijke implementatie.

We leggen geen schijnzekerheid vast voordat deze onderdelen zijn gevalideerd.

## 33. Relatie met andere contracten

    LEARNING EVENTS
          ↓
    LEARNER STATE
          ↓
    ADAPTIVE ENGINE
          ↓
    propose_tutor_help
          ↓
    PARENT APPROVAL
          ↓
    TUTOR BRIEF
          ↓
    TUTOR INTERVENTION
          ↓
    TUTOR OBSERVATION
          ↓
    LEARNING EVENT
          ↓
    LEARNER STATE
          ↓
    REASSESSMENT

Zo wordt menselijke begeleiding onderdeel van dezelfde bewijsarchitectuur in plaats van een los systeem naast Mees.

## 34. Ontwerpprincipe

**Mees schakelt een tutor niet in om een kind een label te geven, maar om nieuwe uitleg en betere onderwijsinformatie mogelijk te maken wanneer de automatische leerroute onvoldoende duidelijkheid oplevert. De tutor ziet alleen wat daarvoor nodig is, en daarna meet Mees opnieuw.**
