# Mees Design System

> Status: MVP 1 design contract  
> Doel: één samenhangend visueel en interactioneel systeem voor Mees, zodat schermen en exercise engines niet ieder hun eigen stijl uitvinden.

## 1. Karakter

Mees voelt warm, rustig, helder en vriendelijk. Niet schools-institutioneel, niet kleuterachtig en niet ontworpen als een aandachtsspel.

De interface ondersteunt:
- focus op één primaire taak;
- duidelijke hiërarchie;
- weinig visuele ruis;
- autonomie;
- toegankelijkheid;
- geleidelijke visuele groei van groep 3 naar groep 8.

## 2. Designprincipes

1. Eén primaire actie per scherm.
2. Hulp is zichtbaar en normaal.
3. Stoppen wordt niet verstopt.
4. Feedback is informatief, niet beoordelend.
5. Kleur draagt nooit alleen betekenis.
6. Animatie ondersteunt begrip en aandacht, niet engagement.
7. Interactieve objecten voelen tastbaar maar blijven rustig.
8. De mascotte ondersteunt, maar neemt het leren niet over.
9. Leeftijdsverschillen worden gradueel toegepast.
10. Onderwijssemantiek komt uit content/contracts, niet uit styling.

## 3. Design tokens

Definitieve kleurwaarden worden visueel gevalideerd tegen de gekozen mockups voordat implementatie als stabiel wordt beschouwd.

Gebruik semantische tokens, geen willekeurige kleurcodes in componenten:

    --color-bg
    --color-surface
    --color-surface-soft
    --color-text
    --color-text-muted
    --color-primary
    --color-primary-hover
    --color-accent
    --color-success
    --color-attention
    --color-error
    --color-border
    --color-focus

Iedere tokencombinatie moet voldoende contrast hebben voor zijn functie.

## 4. Kleurgedrag

De basis blijft licht en warm.

Sterkere kleuren zijn gereserveerd voor:
- primaire actie;
- geselecteerde interactieve staat;
- betekenisvolle feedback;
- kleine illustratieve accenten.

Geen regenboog van concurrerende knoppen.

Correct/incorrect gebruikt naast kleur altijd tekst, icoon of andere duidelijke vorm.

## 5. Typografie

Gebruik één goed leesbare primaire sans-serif familie.

Typografische rollen:

    display
    heading-1
    heading-2
    body
    body-strong
    label
    helper
    numeric-large

Rekenkundige symbolen en cijfers moeten op kleine schermen zeer helder blijven.

Geen decoratieve lettertypes voor kernopgaven.

## 6. Spacing

Gebruik een vaste spacing scale, bijvoorbeeld:

    4
    8
    12
    16
    24
    32
    48
    64

Componenten gebruiken tokens uit deze schaal in plaats van losse pixelwaarden.

## 7. Radius

Mees gebruikt zachte, afgeronde vormen.

Conceptuele rollen:

    radius-small
    radius-control
    radius-card
    radius-panel
    radius-round

Interactieve educatieve objecten mogen eigen geometrie hebben wanneer de inhoud dat vereist.

## 8. Schaduw

Schaduw wordt subtiel gebruikt om lagen en klikbaarheid te verduidelijken.

Geen zware zwevende dashboards.

Focus, selectie en validatie mogen niet uitsluitend via schaduw worden aangegeven.

## 9. Layout

Mobile-first, maar bruikbaar op tablet en desktop.

Oefenschermen houden de kernopgave visueel centraal.

Maximale contentbreedtes voorkomen extreem brede leesregels.

Op grotere schermen ontstaat ruimte, niet automatisch meer informatie.

## 10. Touch targets

Interactieve bediening heeft minimaal een ruim aanraakgebied.

Voor MVP hanteren we als ontwerpminimum 44×44 CSS-pixels voor primaire interactieve targets, tenzij een specifieke component aantoonbaar een betere toegankelijke oplossing gebruikt.

## 11. Focus en toetsenbord

Alle relevante interactieve controls hebben:
- zichtbare focus;
- logische tabvolgorde;
- semantische HTML waar mogelijk;
- toetsenbordalternatief voor drag-only interacties.

Een oefening mag nooit alleen uitvoerbaar zijn met precieze dragbewegingen.

## 12. Read-aloud

Voorleesfunctionaliteit is een vaste systeemfunctie.

De speakeractie is herkenbaar en consistent.

Voorlezen verandert mastery niet automatisch. Alleen wanneer lezen/luisteren zelf het leerdoel is kan de gebruikte ondersteuning onderwijsrelevant zijn.

## 13. Rustiger scherm

Mees ondersteunt een rustige presentatievariant.

Deze kan verminderen:
- decoratieve animatie;
- overbodige illustraties;
- visuele accenten;
- geluidseffecten.

De inhoud, beschikbare hulp en waardigheid van de ervaring blijven gelijk.

Noem dit niet een diagnose- of autismemodus.

## 14. Leeftijdsgradatie

Er zijn geen harde themawissels per groep.

### Jonger
- iets ruimere vormen;
- meer illustratieve warmte;
- mascotte vaker zichtbaar;
- grotere visuele ondersteuning.

### Ouder
- rustiger compositie;
- minder mascotteprominentie;
- iets compactere informatie;
- volwassenere, maar nog vriendelijke presentatie.

Dezelfde componentbibliotheek blijft de basis.

## 15. Mees-mascotte

De mascotte:
- begeleidt;
- kan uitleg introduceren;
- kan sessie-einde markeren;
- kan kleine positieve feedback geven.

De mascotte:
- geeft geen overdreven feest na ieder antwoord;
- manipuleert niet om door te spelen;
- is geen vervanging voor duidelijke tekst;
- wordt geen algemene AI-vriend.

## 16. Feedback

### Correct
Kort, rustig en concreet.

Niet ieder correct antwoord vraagt confetti.

### Incorrect
Geen rood alarmgevoel.

Bijvoorbeeld:
- "Nog niet helemaal."
- daarna passende hulp.

Vermijd:
- "Fout!"
- beschamende toon;
- verlies van punten/hartjes.

### Na hulp
Benoem voortgang zonder te doen alsof hulp minderwaardig is.

## 17. Progress

Progress laat zien waar het kind zich in de huidige korte activiteit bevindt.

Bijvoorbeeld:

    vraag 3 van 6

Niet:
- wereldwijde competitieve score;
- rang;
- streak;
- percentage "hoe slim je bent".

## 18. Stoppen

Stoppen is altijd bereikbaar en visueel voldoende duidelijk.

De stopactie hoeft niet dezelfde nadruk als "Verder" te hebben, maar mag niet verstopt, verkleind of grijs gemaakt worden om kinderen binnen te houden.

## 19. Kerncomponenten

### Button
Varianten:
- primary;
- secondary;
- quiet;
- destructive alleen waar werkelijk nodig.

### Card
Generieke container. Geen onderwijsbetekenis hardcoderen.

### ExerciseCard
Structureert prompt, interactieve inhoud, antwoord en ondersteuning.

### Hint
Toont hulp met expliciet support level in de logica, maar hoeft dat nummer niet aan het kind te tonen.

### Feedback
Correct, opnieuw proberen, uitleg of neutrale systeemfeedback.

### Progress
Sessievoortgang.

### NumberInput
Grote, heldere numerieke invoer met goede mobiele toetsenbordondersteuning.

### ChoiceCard
Selecteerbare optie met duidelijke selected/focus state.

### Header
Bevat alleen noodzakelijke navigatie en vaste ondersteuningsacties.

### MascotSlot
Gestandaardiseerde plek/maatvoering voor de mascotte, zodat illustraties niet willekeurig door layouts zweven.

## 20. Exercise Engine Shell

Alle interactieve engines draaien in een gemeenschappelijke shell:

    prompt
    optional speak action
    exercise surface
    answer/action area
    hint/other-way actions
    feedback
    stop/navigation
    progress

De engine beheert alleen de specifieke educatieve interactie binnen de exercise surface.

## 21. Motion

Motion:
- kort;
- voorspelbaar;
- functioneel;
- reduceerbaar.

Gebruik beweging bijvoorbeeld om een getallijnsprong begrijpelijk te maken.

Gebruik geen eindeloze pulsen, bouncing CTA's of beloningsloops.

Respecteer reduced-motion voorkeuren.

## 22. Geluid

Geluid is optioneel en nooit de enige informatiedrager.

Geen casinostijl successounds.

Voorlezen staat los van decoratieve audio.

## 23. Foutpreventie

Bij kindinteracties:
- grote doelen;
- herstelbare acties;
- geen onnodige bevestigingsdialogen;
- duidelijke reset wanneer relevant;
- voorkomen dat één verkeerde touch een hele oefening vernietigt.

## 24. Responsiviteit

Ontwerp minimaal voor:
- kleine telefoon;
- grote telefoon;
- tablet portrait;
- tablet landscape;
- desktop/laptop.

Exercise engines moeten expliciet op deze formaten worden getest.

## 25. Design QA

Een component is niet klaar voordat is gecontroleerd:
- contrast;
- toetsenbord;
- focus;
- touch;
- screenreader-semantiek waar relevant;
- reduced motion;
- kleine viewport;
- lange Nederlandse tekst;
- grote cijfers;
- rustige modus.

## 26. Visuele regressie

Belangrijke schermen krijgen later screenshot-/visual-regressiontests.

Doel: voorkomen dat een generieke componentwijziging onverwacht de kinderervaring breekt.

## 27. Geen lokale stijleilandjes

Schermen mogen geen eigen willekeurige:
- buttonstijl;
- radius;
- spacing;
- feedbackkleur;
- typografieschaal

introduceren wanneer een systeemtoken/component bestaat.

Nieuwe patronen worden eerst aan het design system toegevoegd.

## 28. Open punten

Nog visueel vast te leggen:
- definitieve kleurwaarden uit de gekozen mockup;
- definitieve fontkeuze;
- mascotte asset/richtlijnen;
- exacte responsive max-widths;
- motion durations;
- rustige-modus token overrides.

Deze worden met echte mockups/componentprototypes gevalideerd.

## 29. Ontwerpprincipe

**Mees moet voelen alsof alles op dezelfde rustige tafel ligt: vriendelijk genoeg voor een kind, helder genoeg om zelfstandig te gebruiken en stil genoeg om het leren zelf de hoofdrol te geven.**
