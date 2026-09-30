# Mees MVP 1 Plan

> Status: werkplan  
> Doel: de huidige architectuur en contracten vertalen naar een gecontroleerde bouwvolgorde.

## 1. Definitie van MVP 1

MVP 1 bewijst niet dat Mees al het Nederlandse basisonderwijs kan aanbieden.

MVP 1 moet aantonen dat één kleine, goed ontworpen leerroute end-to-end werkt:

    leerdoel
      → vraag
      → poging
      → hint/interventie
      → evidence
      → learner state
      → adaptieve volgende stap
      → eventueel prerequisite
      → eventueel tutor
      → hermeting

Met multi-device server-side voortgang en privacy by design.

## 2. Wat we bewust klein houden

Voor MVP 1:
- rekenen;
- kleine testset leerdoelen;
- 20–30 gecontroleerde vragen;
- enkele exercise types;
- één vertrouwde tutorflow;
- eenvoudige ouderflow;
- geen openbare community;
- geen tutor-marktplaats;
- geen generieke AI-tutor;
- geen volledige migratie van de oude vragenbank.

## 3. Fase A: fundament

Status: grotendeels ontworpen.

Documenten:
- Blueprint;
- Architecture;
- Learning Goal Contract;
- Question Contract;
- Learning Event Contract;
- Learner State Contract;
- Tutor Intervention Contract;
- Mastery Model;
- Adaptive Engine;
- Intervention Ladder;
- AI Handoff.

Nog doen:
- concrete testfixtures;
- definitieve MVP-drempels na simulatie.

## 4. Fase B: design system

Definieer vóór veel schermbouw:
- kleurrollen;
- typografie;
- spacing;
- radii;
- schaduwen;
- motion;
- focus states;
- touch targets;
- rustige modus;
- leeftijdsgradatie;
- mascotgebruik.

Daarna kerncomponenten:
- Button;
- Card;
- Header;
- Progress;
- ExerciseCard;
- Hint;
- Feedback;
- NumberInput;
- ChoiceCard;
- Mees mascot slot.

## 5. Fase C: dummy onderwijsdata

Maak een kleine gecontroleerde dataset volgens de contracten:
- 8–12 testleerdoelen;
- prerequisite-relaties;
- 20–30 vragen;
- hints;
- uitleg;
- semantische parameters;
- vraagversies.

Nog geen massamigratie.

## 6. Fase D: exercise engines

Begin met weinig engines die samen genoeg gedrag testen.

Voorgestelde eerste set:
1. basic numeric/text response;
2. multiple choice waar pedagogisch passend;
3. number line;
4. één tweede interactieve engine, bijvoorbeeld blocks of clock.

Iedere engine krijgt:
- semantisch schema;
- rendering;
- touch;
- keyboard;
- read-aloud;
- hint hooks;
- meaningful interaction events;
- tests.

## 7. Fase E: simulator

Bouw de Learning Engine Simulator uit SIMULATION-PLAN.md.

Doel:
- masteryregels testen;
- adaptive decisions testen;
- reason codes inspecteren;
- golden scenarios draaien.

Geen echte kinddata.

## 8. Fase F: kindflow met dummydata

Bouw:
- instappen;
- Voor jou vandaag;
- zelf kiezen;
- oefenscherm;
- hint;
- andere manier;
- uitleg;
- duidelijke sessieafsluiting;
- eenvoudige voortgang.

Eerst functioneel en toegankelijk. Daarna visueel vergelijken met het vastgestelde design system.

## 9. Fase G: server-side data

Pas wanneer contracten en simulator stabiel genoeg zijn:
- database schema;
- auth;
- parent/child-relatie;
- server-side events;
- learner state;
- RLS/autorisatie;
- modelversioning.

Gebruik gescheiden dev/preview/prod.

## 10. Fase H: multi-device

Test:
- hetzelfde kind op twee apparaten;
- hervatten;
- dubbele events;
- gelijktijdige sessies;
- conflictgedrag;
- later offline-syncstrategie.

## 11. Fase I: tutorloop

Bouw klein:
- tutor_help_proposed;
- ouder ziet reden;
- ouder approve/decline;
- minimale Tutor Brief;
- tutorfeedback;
- evidence;
- hermeting.

Eén vertrouwde tutor is voldoende om de lus te testen.

## 12. Fase J: papier/ouder

Daarna:
- werkblad genereren;
- resultaat koppelen aan leerdoelen;
- ouder bevestigt onzekere invoer;
- evidencebron blijft herkenbaar;
- ouder krijgt concrete ondersteuningstips.

## 13. Fase K: oude vragenbank audit

Pas wanneer het nieuwe contract werkt:
- inventariseer oude velden;
- map betrouwbare velden;
- rapporteer ontbrekende/ambigue data;
- migreer geen oude UI;
- migreer geen onbewezen misconceptions;
- valideer samples handmatig;
- importeer gefaseerd.

## 14. Fase L: veilige pilot

Voor echte kinderen:
- privacy/dataflow review;
- security/RLS tests;
- ouderflow;
- tutorautorisatie;
- loggingcontrole;
- verwijder-/retentieontwerp;
- accessibility review;
- golden scenarios groen.

Pilot klein houden en gedrag observeren.

## 15. AI komt later

AI wordt pas toegevoegd wanneer een concrete onderwijsfunctie aantoonbaar baat heeft bij AI.

Mogelijke latere experimenten:
- alternatieve uitleg;
- gesproken onderwijsdialoog;
- diagnostische vraagvoorstellen;
- geanonimiseerde patroonanalyse;
- redactionele ondersteuning.

De kernroute moet zonder AI blijven functioneren.

## 16. Definition of Done voor MVP 1

MVP 1 is inhoudelijk geslaagd wanneer we met een kleine leerdoelset kunnen aantonen dat:

- een kind zelfstandig kan oefenen;
- hulp betekenisvol wordt opgebouwd;
- events correct worden opgeslagen;
- learner state uitlegbaar wordt afgeleid;
- de engine een passende volgende actie kiest;
- prerequisites gericht kunnen worden gecontroleerd;
- tutorhulp gecontroleerd kan worden ingezet;
- tutorfeedback terugkomt als evidence;
- later zelfstandig wordt hermeten;
- dezelfde voortgang op meerdere apparaten beschikbaar is;
- ouder en tutor alleen noodzakelijke data zien;
- de route zonder engagementtrucs werkt.

## 17. Wat geen MVP-succescriterium is

Niet nodig om MVP 1 geslaagd te noemen:
- duizenden vragen;
- alle groepen volledig gevuld;
- alle rekenleerlijnen;
- alle vakken;
- perfecte AI;
- tutor-marktplaats;
- gamification;
- maximale dagelijkse gebruikstijd.

## 18. Eerstvolgende bouwblok

Na dit plan is de volgende ontwerpstap het **Design System Contract**.

Daarna kunnen dummy onderwijsdata en de eerste simulatorfixtures worden gemaakt zonder dat we tijdens implementatie opnieuw fundamentele productkeuzes hoeven te verzinnen.

## 19. Ontwerpprincipe

**MVP 1 bewijst de kwaliteit van de leerlus, niet de grootte van de catalogus.**
