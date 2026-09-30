# Learning Engine Simulation Plan

> Status: testplan vóór implementatie met echte leerlingdata  
> Doel: het Mastery Model en de Adaptive Engine doorlichten met fictieve gebeurtenissen voordat Mees echte kinderen personaliseert.

## 1. Waarom simuleren

De regels van Mees mogen niet pas tijdens een echte pilot verrassend gedrag laten zien.

We bouwen daarom eerst een kleine simulator met:
- fictieve kinderen;
- fictieve leerdoelen;
- gecontroleerde vragen;
- vooraf bepaalde antwoorden;
- hints/interventies;
- verwachte Learner States;
- verwachte Next Best Actions.

## 2. Geen echte persoonsgegevens

Alle simulatieprofielen zijn synthetisch.

Gebruik namen zoals:
- Testkind A;
- Testkind B;
- of willekeurige fictieve voornamen zonder relatie tot echte gebruikers.

Geen productie-export als testfixture gebruiken.

## 3. Eerste minimale leerdoelgraaf

Voor rekenen maken we een kleine testgraaf met ongeveer 8–12 leerdoelen.

De set moet bevatten:
- minstens één duidelijke prerequisite-keten;
- twee parallelle doelen;
- een doel met meerdere representaties;
- een doel waarvoor vlotheid niet vereist is;
- eventueel later één doel waarbij vlotheid wel expliciet onderdeel is.

Dit is testcontent, niet automatisch de definitieve Nederlandse leerlijn.

## 4. Eerste vragenbank

Maak ongeveer 20–30 zorgvuldig ontworpen testvragen.

Niet bedoeld als volledige lesstof.

De set moet genoeg variatie bevatten om te testen:
- zelfstandig succes;
- bijna identieke herhaling;
- echte variatie;
- representatiewissel;
- hints;
- prerequisite-diagnostiek;
- hermeting;
- technische invalidatie.

## 5. Simulatieprofielen

### Profiel A: weinig bewijs
Eén correct antwoord.

Verwachting:
- niet likely_mastered;
- extra informatie nodig.

### Profiel B: repetitie
Vier vergelijkbare correcte vragen in één sessie.

Verwachting:
- positief bewijs;
- niet automatisch hoge-confidence mastery;
- variatie/tijdspreiding kan ontbreken.

### Profiel C: gespreid begrip
Meerdere zelfstandige successen met passende variatie over verschillende momenten.

Verwachting:
- likely_mastered wordt bereikbaar.

### Profiel D: leren door hulp
Fout → lichte hint → succes → later zelfstandig succes.

Verwachting:
- hulp wordt niet bestraft;
- later zelfstandig bewijs versterkt state.

### Profiel E: sterke hulp nodig
Meerdere successen alleen na sterke uitleg.

Verwachting:
- ontwikkeling erkennen;
- zelfstandigheid blijft information need.

### Profiel F: representatie-effect
Symbolisch herhaald onzeker, getallenlijn helpt.

Verwachting:
- geen label "visuele leerling";
- later zelfstandig opnieuw meten.

### Profiel G: prerequisite
Actief doel onzeker; relevante prerequisite unknown.

Verwachting:
- gerichte prerequisite-check.

### Profiel H: tegenstrijdig
Sterk eerder bewijs, later meerdere onverwachte fouten.

Verwachting:
- needs_reassessment of lagere confidence;
- diagnostische actie.

### Profiel I: technische storing
Incorrect ogende uitkomst veroorzaakt door validator-/clientfout.

Verwachting:
- geen negatieve mastery-evidence.

### Profiel J: tutor
Automatische interventies leveren onvoldoende duidelijkheid; ouder keurt tutor goed; tutor rapporteert gedeeltelijk begrip; later zelfstandig succes.

Verwachting:
- tutorfeedback als herkenbare evidence;
- hermeting;
- geen absolute tutorwaarheid.

### Profiel K: ouder weigert tutor
Verwachting:
- geen negatieve evidence;
- alternatieve route.

### Profiel L: stoppen
Kind stopt midden in sessie.

Verwachting:
- geen motivatie-/frustratielabel;
- route later hervatbaar.

## 6. Golden scenarios

Een subset wordt "golden scenario".

Voor iedere enginewijziging moet de output van deze scenario's worden vergeleken met de verwachte uitkomst.

Als een wijziging bewust ander gedrag veroorzaakt:
- leg uit waarom;
- wijzig de relevante documentatie;
- update het scenario expliciet.

Geen stille drift van onderwijslogica.

## 7. Scenarioformaat

Conceptueel:

    scenario_id: SIM-004
    title: leren na hint

    initial_state:
      learning_goal: LG-TEST-03
      state: unknown

    events:
      - answer_incorrect
      - hint_requested
      - answer_correct_with_light_support
      - later_session
      - answer_correct_independent

    expected:
      learner_state: developing_or_better
      must_not:
        - diagnose_misconception
        - penalize_hint
      next_action:
        - compatible_with_independent_confirmation

De definitieve fixturestructuur wordt tijdens implementatie vastgelegd.

## 8. Eigenschappen die altijd moeten gelden

Naast scenario-uitkomsten testen we invarianten.

Voorbeelden:
- technische fouten verlagen mastery niet;
- één fout maakt geen misconception;
- vrijwillige hint is geen fout;
- tutorweigering door ouder is geen negatieve evidence;
- stop-event is geen bewijs van onvermogen;
- likely_mastered vereist meer dan één toevallig succes;
- persoonlijke gegevens zijn niet nodig voor enginebeslissingen;
- dezelfde input + modelversie geeft dezelfde kernuitkomst.

## 9. Counterfactual tests

We testen ook kleine veranderingen.

Voorbeeld:
- hetzelfde scenario mét hint;
- hetzelfde scenario zonder hint.

Of:
- drie successen in één minuut;
- dezelfde successen verspreid over meerdere sessies.

Zo zien we of de regels daadwerkelijk reageren op de dimensie die we bedoelen.

## 10. Inspecteerbare output

De simulator toont per stap minimaal:
- relevante events;
- afgeleide evidence;
- Learner State;
- confidence;
- uncertainty;
- gekozen actie;
- reason codes.

Een mens moet kunnen volgen waarom de engine iets deed.

## 11. Geen mooie UI nodig

De eerste simulator mag een testtool, script of eenvoudige interne pagina zijn.

We bouwen geen gepolijste kinderinterface om de onderwijslogica te testen.

## 12. Onderwijsreview

Na technische tests beoordelen we de scenario's met een onderwijsprofessional.

Vragen:
- reageert Mees te snel?
- blijft Mees te lang hangen?
- vraagt het onnodig veel?
- is de prerequisite-route logisch?
- komt tutorhulp op een logisch moment?
- wordt hulp eerlijk geïnterpreteerd?

Feedback leidt tot expliciete regelwijzigingen.

## 13. Kalibratie

Pas na simulatie kiezen we concrete MVP-drempels voor onder andere:
- minimale onafhankelijke evidence;
- benodigde variatie;
- tijdspreiding;
- recency;
- interventieherhaling;
- tutortrigger;
- diagnostische diepte.

Drempels krijgen rationale en tests.

## 14. Voor pilot

Voordat echte leerlingdata wordt gebruikt moeten minimaal:
- golden scenarios slagen;
- privacy/dataflow zijn beoordeeld;
- autorisatie zijn getest;
- logging geen onnodige persoonsgegevens bevatten;
- tutorflow zijn getest met synthetische data;
- rollback/modelversioning werken.

## 15. Ontwerpprincipe

**We testen eerst de beslissingen van Mees op fictieve kinderen, zodat echte kinderen niet de debugger van onze onderwijslogica worden.**
