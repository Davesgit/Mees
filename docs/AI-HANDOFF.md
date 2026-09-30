# AI Handoff

> Doel: snelle, betrouwbare overdracht van het Mees-project tussen ChatGPT-modellen, Codex en andere AI-systemen die aan het project werken.

## 1. Lees dit eerst

Als je als AI aan Mees gaat werken, behandel deze GitHub-repository als de technische bron van waarheid.

Chatgeschiedenis kan nuttige werkcontext bevatten, maar een belangrijke projectbeslissing geldt pas als deze in de Mees-documentatie is vastgelegd.

**Verzin ontbrekende projectbeslissingen niet.** Als documentatie iets nog openlaat, behandel het als een open ontwerpvraag.

## 2. Wat is Mees?

Mees is een gratis digitaal leerplatform voor kinderen in het Nederlandse basisonderwijs.

De eerste inhoudelijke focus is rekenen. De architectuur moet later uitbreiding naar andere vakken mogelijk maken.

Mees optimaliseert voor leren, niet voor schermtijd, engagement of commerciële conversie.

Geen advertenties, abonnementen, streaks, ranglijsten of andere mechanismen met als doel kinderen zo lang mogelijk in de app te houden.

## 3. Projectstatus

Mees wordt schoon opnieuw opgebouwd.

Oudere Mees/Leermees-code en bestaande onderwijsdata kunnen nuttig bronmateriaal bevatten, maar vormen **niet automatisch de technische, visuele of pedagogische basis** van de nieuwe Mees.

Op dit moment ligt de nadruk op:

1. product- en onderwijsarchitectuur;
2. formele contracten;
3. uitlegbare leerlogica;
4. privacy by design;
5. daarna pas implementatie met dummydata.

## 4. Verplichte leesvolgorde

Lees vóór substantiële architectuur- of implementatiebeslissingen minimaal:

1. \`docs/00-MEES-BLUEPRINT.md\`
2. \`contracts/LEARNING-GOAL-CONTRACT.md\`
3. \`contracts/QUESTION-CONTRACT.md\`
4. \`contracts/LEARNING-EVENT-CONTRACT.md\`
5. \`contracts/LEARNER-STATE-CONTRACT.md\`
6. \`contracts/TUTOR-INTERVENTION-CONTRACT.md\`
7. \`docs/01-ARCHITECTURE.md\` zodra dit verder is uitgewerkt.

Bij conflicten: signaleer het conflict. Kies niet stilletjes zelf welke regel vervalt.

## 5. Niet opnieuw uitvinden

De volgende beslissingen zijn al fundamenteel vastgelegd.

### Clean build

Mees wordt nieuw ontworpen en gebouwd. Oude UI, CSS, componenten, routes, architectuur en eerdere AI-implementaties worden niet automatisch hergebruikt.

### Scheiding van werelden

Mees onderscheidt:

- Software;
- Onderwijs;
- Leerdata;
- toekomstige AI-laag.

Onderwijscontent bepaalt betekenis. Software bepaalt presentatie en interactie. Persoonlijke leerdata blijft gescheiden van publieke/inhoudelijke onderwijsdata.

### Contract before software

De software wordt gekoppeld aan expliciete contracten. Implementeer geen impliciet dataschema omdat het toevallig handig is voor één scherm.

### Fout antwoord is geen diagnose

Een fout antwoord is eerst een observatie.

Nooit automatisch:

    fout antwoord → denkfout X

Wel:

    observaties
      → patroon
      → hypothese
      → aanvullend bewijs
      → eventuele menselijke validatie
      → gevalideerd patroon

### Geen vaste leerstijl-labels

Mees mag ontdekken dat een representatie bij een bepaald doel en moment helpt.

Mees labelt een kind niet permanent als bijvoorbeeld "visuele leerling".

### Uitlegbare adaptiviteit

MVP 1 gebruikt een regelgebaseerde, testbare en uitlegbare adaptieve engine.

Geen opaque AI/ML-model bepaalt autonoom wat een kind beheerst.

### Onzekerheid is geldig

Mees moet kunnen zeggen:

> We weten het nog niet goed genoeg.

Niet ieder leerdoel hoeft onmiddellijk als beheerst of niet-beheerst te worden geclassificeerd.

### Hulp is geen straf

Een hint, andere representatie of tutorinterventie is onderdeel van leren.

Succes na hulp is waardevol bewijs, maar heeft een andere betekenis dan zelfstandig succes.

### Tutor zit in MVP 1

MVP 1 test de volledige lus:

    signalering
      → ouder
      → tutor
      → begeleiding
      → tutorobservatie
      → hermeting

MVP 1 bouwt geen tutor-marktplaats.

### Privacyminimalisatie

Kindprofiel MVP 1 begint conceptueel met:

    random child_id
    voornaam
    groep
    leerdata

Verzamel geen achternaam, adres, exacte geboortedatum, kind-e-mail, telefoon of schoolnaam tenzij later een aantoonbaar noodzakelijke functie bestaat.

### Server-side leerlingprofiel

Een kind moet op meerdere apparaten hetzelfde profiel en dezelfde voortgang kunnen gebruiken.

### Geen engagementoptimalisatie

Geen punten, sterren, streaks of ranglijsten om gebruiksduur te maximaliseren.

Sessies mogen bewust eindigen. Papier en activiteiten buiten het scherm kunnen onderdeel zijn van dezelfde leerroute.

## 6. Belangrijkste architectuurregel

**Software weet niet welke onderwijsinhoud bestaat. Onderwijsinhoud weet niet hoe de interface eruitziet. De leerengine verbindt beide.**

Voorbeeld:

    ONDERWIJSDATA
    exercise_type: clock
    time: 14:35
    action: read_time

    SOFTWARE
    MeesClock bepaalt:
    - rendering
    - interactie
    - responsiviteit
    - toegankelijkheid
    - touch/keyboard
    - visueel ontwerp

Stop geen CSS, pixels of componentimplementaties in de vragenbank.

## 7. De bewijsketen

Houd deze lagen strikt uit elkaar:

    LEARNING GOAL
        ↓
    QUESTION
        ↓
    LEARNING EVENT
        ↓
    EVIDENCE
        ↓
    LEARNER STATE
        ↓
    ADAPTIVE ENGINE
        ↓
    NEXT BEST ACTION

Tutorobservaties en papier kunnen als herkenbare bewijsbronnen dezelfde keten binnenkomen.

## 8. Learning Events

Learning Events bewaren wat daadwerkelijk gebeurde.

Voorbeelden:

- antwoord ingediend;
- hint gevraagd;
- representatie gewijzigd;
- uitleg getoond;
- werkbladresultaat bevestigd;
- tutorobservatie toegevoegd.

Sla niet gedachteloos iedere muisbeweging, hover of touchpositie op.

Technische fouten mogen niet als leerproblemen worden geïnterpreteerd.

## 9. Learner State

Learner State is een veranderlijke inschatting, geen identiteit van het kind.

Voor MVP 1 zijn conceptuele states:

- unknown;
- emerging;
- developing;
- likely_mastered;
- needs_reassessment.

Confidence staat apart van state.

Vermijd globale labels als:

- slecht in rekenen;
- langzaam kind;
- ongemotiveerd;
- slordig;
- slim;
- visuele leerling.

## 10. Tutorinterventie

Tutorhulp wordt niet voorgesteld na één fout.

De adaptieve engine moet eerst beoordelen of relevante automatische interventies, representaties en prerequisites voldoende informatie hebben opgeleverd.

Een tutor ontvangt een minimale Tutor Brief met relevante onderwijscontext en geen onnodige persoonsgegevens.

Tutorfeedback is sterk aanvullend bewijs, geen absolute waarheid.

Na tutorhulp volgt waar passend een zelfstandige hermeting.

## 11. AI-filosofie

Alles in de kern van Mees moet zonder AI kunnen functioneren.

AI kan later ondersteunen bij:

- alternatieve uitleg;
- onderwijsgerichte dialoog;
- diagnostische vervolgvragen;
- patroonanalyse;
- redactionele ondersteuning.

AI is geen autonome leerengine en geen algemene digitale vriend van het kind.

AI-inferenties over begrip zijn hypotheses/evidence met onzekerheid, geen automatisch feit.

## 12. Designrichting

De eerder gekozen Mees-stijl is warm, rustig, vriendelijk en kindgericht.

Het design groeit geleidelijk mee:

- groep 3–5 warmer en speelser;
- groep 6–8 rustiger en geleidelijk volwassener;
- mascotte herkenbaar, maar bij oudere kinderen minder prominent.

Vertaal visuele keuzes naar een formeel design system en herbruikbare componenten.

Bouw officiële oefenengines zoals MeesClock, MeesNumberLine en andere interactieve componenten opnieuw. Neem oude visuele engines niet automatisch over.

## 13. Toegankelijkheid

Toegankelijkheid hoort vanaf het begin in ontwerp en componenten.

Belangrijke uitgangspunten:

- voorleesbaarheid;
- voldoende contrast;
- grote aanraakdoelen;
- toetsenbordbediening waar relevant;
- kleur nooit als enige betekenisdrager;
- rustige presentatieoptie;
- stoppen niet visueel verstoppen ten opzichte van doorgaan.

## 14. Bestaande vragenbank

De bestaande vragenbank kan waardevolle onderwijsinhoud bevatten.

Behandel deze als bronmateriaal.

Migreer later via een gecontroleerde adapter naar de nieuwe contracten.

Niet automatisch migreren:

- oude UI;
- interactieve componenten;
- oude architectuur;
- eerdere AI-aannames;
- vooraf verzonnen/onbewezen denkfouten.

Rapporteer tijdens migratie welke velden niet betrouwbaar naar het nieuwe contract kunnen worden vertaald.

## 15. Technische richting

Beoogd:

    GitHub       → code, documentatie, versiebeheer
    Vercel       → preview en productie
    Supabase     → PostgreSQL, auth, storage
    Vimexx       → domein en DNS

Gebruik gescheiden development-, preview- en productieomgevingen.

Een previewomgeving mag nooit per ongeluk productie-leerdata gebruiken.

Persoonlijke kinddata hoort nooit in GitHub.

## 16. Hoe AI aan Mees moet werken

Bij een nieuwe taak:

1. lees relevante Mees-documentatie;
2. bepaal welke bestaande contracten geraakt worden;
3. verander geen fundamentele beslissing stilzwijgend;
4. benoem een conflict als implementatie en contract botsen;
5. werk in kleine controleerbare stappen;
6. voeg tests toe voor onderwijslogica;
7. gebruik dummydata voordat echte kinddata nodig is;
8. documenteer nieuwe fundamentele beslissingen;
9. houd hypotheses herkenbaar als hypotheses;
10. optimaliseer niet voor snelheid ten koste van uitlegbaarheid.

## 17. Wat Codex niet zelfstandig moet beslissen

Codex of een andere code-agent mag niet zonder expliciete projectbeslissing:

- een nieuw mastery-algoritme verzinnen;
- persoonsgegevens toevoegen;
- tracking toevoegen;
- een AI-model leerlingdiagnoses laten stellen;
- oude componenten migreren omdat dat sneller is;
- tutorautorisatie vereenvoudigen door meer data bloot te stellen;
- onderwijscontent in frontendcode hardcoderen;
- een nieuw exercise type toevoegen terwijl een bestaand type voldoet;
- fundamentele contractvelden verwijderen.

Als implementatie een nieuwe fundamentele keuze vereist, stop dan op die grens en leg de keuze voor.

## 18. Eerstvolgende ontwerpwerk

De contractfundering bestaat nu uit:

- Learning Goal Contract;
- Question Contract;
- Learning Event Contract;
- Learner State Contract;
- Tutor Intervention Contract.

De volgende inhoudelijke stap is het **Mastery Model**.

Daarin worden de concrete, uitlegbare regels ontworpen waarmee evidence wordt vertaald naar Learner State.

Daarna volgt de **Adaptive Engine**, die Learner State en de leerdoelgraaf gebruikt om de volgende beste actie te kiezen.

## 19. Nog niet definitief

Onder andere nog te valideren:

- mastery-drempels;
- evidence weighting;
- recency;
- exacte tutortriggers;
- granulariteit van echte leerdoelen;
- definitieve exercise-type schemas;
- curriculumkoppelingen;
- database/RLS-architectuur;
- offline synchronisatie;
- design tokens;
- uiteindelijke AI-integratie.

Behandel deze dus niet alsof ze al besloten zijn.

## 20. Overdrachtsregel

Wanneer je werk overdraagt aan een ander AI-model, laat de repository in een toestand achter waarin het volgende model kan vaststellen:

- wat je hebt veranderd;
- waarom;
- welke contracten geraakt zijn;
- welke aannames je hebt gedaan;
- wat nog openstaat;
- wat de logisch volgende stap is.

**Een goed AI-handoff vraagt niet dat het volgende model de geschiedenis raadt.**
