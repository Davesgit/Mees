# Learner State Contract

> Status: ontwerpcontract  
> Doel: vastleggen hoe Mees uit losse observaties een voorzichtige, uitlegbare en veranderlijke inschatting maakt van wat een kind op dit moment waarschijnlijk kan en welke informatie nog ontbreekt.

## 1. Kernprincipe

Learner State is **geen rapportcijfer en geen etiket op een kind**.

Het is een actuele, veranderlijke inschatting op basis van bewijs.

    observaties
        ↓
    bewijs
        ↓
    betrouwbaarheid + spreiding + context
        ↓
    huidige inschatting
        ↓
    onzekerheid
        ↓
    volgende beste actie

Mees moet ook expliciet kunnen zeggen: **we weten het nog niet goed genoeg**.

## 2. Feit, bewijs, hypothese en toestand

We houden vier dingen uit elkaar.

### Observatie

Wat daadwerkelijk gebeurde.

Voorbeeld: het kind antwoordde 52 op 47 + 6.

### Evidence

De onderwijsbetekenis die een observatie als bewijs kan hebben.

Voorbeeld: een zelfstandig correct antwoord op een nieuwe passende opgave levert positief bewijs voor een leerdoel.

### Hypothese

Een mogelijke verklaring die nog getoetst moet worden.

Voorbeeld: mogelijk is een onderliggend leerdoel nog onzeker.

### Learner State

De huidige samenvatting van het beschikbare bewijs voor een specifiek leerdoel.

Geen van deze lagen mag stilletjes worden verwisseld.

## 3. State per leerdoel

Mees bouwt in beginsel een toestand per kind per leerdoel.

Conceptueel:

    child_id: internal_random_id
    learning_goal_id: LG-REK-OPT-0012

    estimate:
      state: developing
      confidence: medium

    evidence_summary:
      independent_successes: 3
      assisted_successes: 1
      recent_incorrect: 1
      representations_seen:
        - symbolic
        - number_line

    uncertainty:
      level: medium
      reasons:
        - limited_time_spread

    updated_at: timestamp
    model_version: 1

Dit is een conceptueel voorbeeld, geen definitief databaseschema.

## 4. Geen enkel magisch percentage

We beginnen niet met één getal zoals "82% beheerst".

Een enkel percentage suggereert meer precisie dan we waarschijnlijk werkelijk hebben en kan verschillende soorten onzekerheid verbergen.

Intern mogen later numerieke waarden nuttig blijken voor berekeningen, maar de betekenis moet altijd uitlegbaar blijven.

De productlaag kan werken met begrijpelijke toestanden en confidence.

## 5. Voorlopige toestanden

Voor MVP 1 gebruiken we een kleine set betekenisvolle states:

- **unknown**: onvoldoende bewijs;
- **emerging**: eerste aanwijzingen van begrip;
- **developing**: meerdere aanwijzingen, maar nog niet stabiel genoeg;
- **likely_mastered**: voldoende gevarieerd bewijs om beheersing aannemelijk te vinden;
- **needs_reassessment**: eerder bewijs is verouderd of tegenstrijdig en moet opnieuw worden gemeten.

Deze labels zijn systeemtoestanden, geen kindlabels.

We vermijden woorden als "zwak kind" of "slechte rekenaar".

## 6. Confidence staat los van state

Een inschatting en het vertrouwen in die inschatting zijn verschillende dingen.

Bijvoorbeeld:

    state: developing
    confidence: high

kan betekenen dat we vrij zeker weten dat het doel nog in ontwikkeling is.

En:

    state: likely_mastered
    confidence: low

kan betekenen dat er positieve signalen zijn, maar nog te weinig onafhankelijk bewijs.

Voor MVP 1 kan confidence bijvoorbeeld low, medium of high zijn.

## 7. Bewijssterkte

Niet ieder correct antwoord levert even sterk bewijs.

Voorbeeld van factoren:

- zelfstandig of met hulp;
- nieuwe opgave of vrijwel identieke herhaling;
- aantal hints;
- type representatie;
- bron van het bewijs;
- spreiding over verschillende vragen;
- spreiding over tijd;
- betrouwbaarheid van de validator;
- technisch geldige poging.

Dit wordt geen strafsysteem. Hulp gebruiken is onderdeel van leren. Het betekent alleen dat het antwoord iets anders bewijst dan volledig zelfstandig succes.

## 8. Onafhankelijk succes

Tien bijna identieke sommen direct achter elkaar zijn niet hetzelfde als tien onafhankelijke bevestigingen van begrip.

Mees moet daarom kunnen herkennen dat bewijs sterk op elkaar lijkt.

Meer vertrouwen kan ontstaan wanneer een kind hetzelfde leerdoel laat zien:

- bij andere getallen;
- in een nieuwe vraag;
- op een later moment;
- eventueel in een andere passende representatie.

We leggen de precieze regels later vast in het Mastery Model.

## 9. Fouten verlagen niet simpelweg een score

Een fout antwoord trekt niet automatisch punten van een beheersingsmeter af.

Een fout kan betekenen:

- het doel is nog niet beheerst;
- de vraag werd verkeerd gelezen;
- er was een invoerfout;
- de representatie werkte niet goed;
- een prerequisite is onzeker;
- het kind had hulp nodig;
- of iets wat we nog niet weten.

De adaptieve engine bepaalt daarom eerst welke volgende observatie de onzekerheid het beste kan verkleinen.

## 10. Recency

Oud bewijs blijft relevant, maar hoeft niet eeuwig even zwaar te wegen.

Een doel dat maanden geleden overtuigend werd beheerst kan later een korte hermeting krijgen.

We gebruiken recency niet om kinderen kunstmatig bezig te houden. Het doel is alleen te controleren of belangrijke kennis nog beschikbaar is wanneer dat onderwijskundig relevant is.

## 11. Representaties

Mees kan bijhouden in welke representaties bewijs is verzameld.

Dat maakt bijvoorbeeld mogelijk:

    symbolic: positief bewijs
    number_line: positief bewijs
    verbal: nog onbekend

Dit betekent niet dat een kind alle representaties moet beheersen tenzij het leerdoel dat expliciet vereist.

Het systeem concludeert ook niet "dit is een visuele leerling".

## 12. Hulp en hints

Een correct antwoord na een hint is positief leerbewijs, maar niet identiek aan zelfstandig correct antwoorden.

Voorbeeld:

    zelfstandig correct
      → sterk bewijs voor zelfstandige beheersing

    correct na lichte hint
      → positief bewijs, maar zelfstandigheid nog onzeker

    correct na sterke uitleg
      → bewijs dat de interventie mogelijk hielp;
        later opnieuw zelfstandig meten

Zo wordt hulp niet bestraft en tegelijk niet verward met zelfstandige beheersing.

## 13. Leren tijdens de sessie

Een kind kan tijdens een sessie iets leren.

Daarom hoeft een reeks als:

    fout
    → hint
    → fout
    → andere uitleg
    → correct
    → later zelfstandig correct

niet als "veel fouten" te worden samengevat.

Het interessante signaal kan juist zijn dat begrip na een interventie ontstond en later standhield.

## 14. Bronnen van bewijs

Learner State moet bewijs uit meerdere bronnen kunnen combineren:

- digitale opdrachten;
- interactieve opdrachten;
- papieren opdrachten;
- ouderbevestiging;
- tutorobservaties;
- latere hermetingen.

Iedere bron behoudt zijn provenance.

Een tutorobservatie wordt dus niet omgezet in een zogenaamd digitaal antwoord.

## 15. Tutorbewijs

Tutorobservaties kunnen sterk bewijs zijn omdat een mens door kan vragen en strategie kan observeren.

Maar ook een tutor kan zich vergissen of slechts een momentopname zien.

Daarom bevat tutorbewijs context en waar nuttig een confidence-inschatting.

Mees behandelt tutorfeedback als belangrijke aanvullende evidence, niet als onfeilbare waarheid.

## 16. Ouderbewijs

Een ouder kan nuttige informatie toevoegen, bijvoorbeeld bij papier of een activiteit buiten het scherm.

Ook deze bron blijft herkenbaar.

We voorkomen dat ouders complexe diagnostische labels hoeven te kiezen. Waar mogelijk bevestigen zij concrete observaties.

## 17. Tegenstrijdig bewijs

Tegenstrijdig bewijs wordt niet weggepoetst.

Bijvoorbeeld:

    digitaal zelfstandig: meerdere keren correct
    papier: fout
    tutor: begrip lijkt gedeeltelijk

Dan kan de state bijvoorbeeld developing blijven met hogere uncertainty, gevolgd door een gerichte hermeting.

Mees probeert eerst te begrijpen welk aanvullend bewijs nuttig is.

## 18. Onzekerheid is een eerste-klas onderdeel

Uncertainty krijgt expliciete redenen.

Mogelijke redenen:

- te weinig observaties;
- bewijs te veel uit dezelfde vraagvorm;
- bewijs alleen met hulp;
- tegenstrijdig bewijs;
- bewijs is oud;
- prerequisite onzeker;
- technische storing;
- open opdracht nog niet bevestigd.

Hierdoor kan de adaptieve engine gericht kiezen wat nog nodig is.

## 19. Prerequisites

Learner State werkt samen met de leerdoelgraaf.

Wanneer een kind moeite heeft met doel B en doel A een relevante prerequisite is, kan Mees de state van A raadplegen.

Als A unknown of onzeker is, kan een korte diagnostische meting nuttiger zijn dan nog vijf vragen over B.

Mees gaat niet automatisch alle prerequisites opnieuw aflopen. Het kiest gericht op basis van onzekerheid en relevantie.

## 20. Hypotheses over foutpatronen

Hypotheses staan apart van mastery state.

Conceptueel:

    hypothesis_id: HYP-...
    learning_goal_id: LG-...
    status: unverified
    confidence: low
    based_on_events:
      - EVT-...
      - EVT-...
    proposed_pattern: ...

Een hypothese mag aanleiding zijn voor een diagnostische vraag.

Pas na aanvullend bewijs en waar nodig menselijke validatie kan een patroon een vertrouwde onderwijsbetekenis krijgen.

## 21. State verandert door nieuw bewijs

Learner State is afgeleid en opnieuw berekenbaar.

Nieuwe events kunnen de inschatting wijzigen.

    unknown
      ↓
    emerging
      ↓
    developing
      ↓
    likely_mastered

Maar de route kan ook terug naar needs_reassessment wanneer nieuw bewijs daar aanleiding toe geeft.

Dit is geen "terugvalscore" voor het kind. Het betekent dat Mees opnieuw informatie nodig heeft.

## 22. Geen permanente labels

Mees slaat geen globale uitspraken op zoals:

- slecht in rekenen;
- visuele leerling;
- langzaam kind;
- ongemotiveerd;
- slordig;
- slim;
- zwak.

Als er iets wordt opgeslagen, moet het gekoppeld zijn aan concrete onderwijscontext en bewijs.

## 23. Next Best Action

Learner State levert geen volledige lesplanning, maar geeft de adaptieve engine voldoende informatie om een volgende actie te kiezen.

Mogelijke acties:

    gather_more_evidence
    continue_practice
    vary_question
    change_representation
    offer_hint
    check_prerequisite
    schedule_reassessment
    move_to_next_goal
    propose_tutor_help
    suggest_offline_activity

De Adaptive Engine bepaalt de precieze keuze.

## 24. Wanneer tutorhulp in beeld komt

Tutorhulp wordt niet voorgesteld na één fout antwoord.

Een mogelijke route kan zijn:

    herhaalde onzekerheid
    + passende automatische interventies geprobeerd
    + relevante prerequisite gecontroleerd
    + probleem blijft bestaan
    + menselijke uitleg kan extra waarde hebben
        ↓
    propose_tutor_help

De precieze voorwaarden leggen we vast in het Tutor Intervention Contract en de Adaptive Engine.

## 25. Mastery is doelafhankelijk

Niet ieder leerdoel heeft dezelfde hoeveelheid of soort bewijs nodig.

Een eenvoudig feitdoel kan anders worden beoordeeld dan een complex toepassingsdoel.

Daarom bevat het Learning Goal Contract succescriteria en kan het toekomstige Mastery Model per doeltype andere evidence-regels toepassen.

We vermijden één universele regel zoals "drie keer goed = beheerst".

## 26. Geen snelheid als beheersingsdoel tenzij relevant

Snelheid telt alleen zwaar mee wanneer vlotheid expliciet onderdeel is van het leerdoel.

Anders kan tijd hooguit context zijn.

Een kind dat correct en rustig werkt wordt niet als minder vaardig beoordeeld omdat een ander kind sneller antwoordt.

## 27. Technische fouten tellen niet als leerbewijs

Events met een betrouwbare technische foutstatus worden uitgesloten van negatieve onderwijsconclusies.

Bij twijfel kan evidence als invalid of low-confidence worden gemarkeerd.

## 28. Uitlegbaarheid

Iedere belangrijke state moet terug te voeren zijn op begrijpelijk bewijs.

Bijvoorbeeld:

    likely_mastered / confidence high

    omdat:
    - 4 onafhankelijke correcte pogingen
    - verspreid over 2 momenten
    - 2 passende vraagvarianten
    - laatste 3 zonder hulp

Dit is illustratief. De definitieve drempels worden later getest.

Een ouder, tutor of ontwikkelaar moet kunnen begrijpen waarom Mees een volgende stap koos zonder een ondoorzichtig AI-model te hoeven vertrouwen.

## 29. State history

We bewaren relevante veranderingen in Learner State zodat we ontwikkeling kunnen begrijpen.

Dat betekent niet dat iedere interne berekening permanent bewaard hoeft te blijven.

Belangrijke toestandsovergangen kunnen bijvoorbeeld vastleggen:

    previous_state
    new_state
    reason
    evidence_reference
    model_version
    changed_at

## 30. Modelversie

Iedere afgeleide state verwijst naar de versie van het Mastery Model waarmee deze is berekend.

Wanneer de regels later verbeteren, kunnen we onderscheiden:

- wat het kind destijds deed;
- hoe Mees dat destijds interpreteerde;
- hoe een nieuw model hetzelfde bewijs eventueel anders zou interpreteren.

De originele Learning Events blijven onaangetast.

## 31. Herberekenbaarheid

Omdat events feiten bevatten en Learner State afgeleid is, moet het systeem state waar mogelijk opnieuw kunnen berekenen vanuit relevante evidence.

Dit maakt verbeteringen en audits mogelijk zonder historische observaties te herschrijven.

## 32. Privacy

Learner State bevat alleen informatie die nodig is voor leren en begeleiding.

Geen marketingsegmenten, advertentieprofielen of commerciële engagementlabels.

De state gebruikt interne child_id en bevat niet onnodig voornaam, adres, geboortedatum of oudercontactgegevens.

Tutor- en oudertoegang wordt via aparte autorisatie geregeld.

## 33. Wat ouders zien

Ouders hoeven interne states zoals emerging of confidence=medium niet letterlijk te zien.

De productlaag vertaalt dit bijvoorbeeld naar:

- "Dit gaat al goed."
- "Mees wil dit nog een paar keer op een andere manier bekijken."
- "Hier lijkt extra uitleg te helpen."
- "We weten nog niet genoeg om hier iets over te zeggen."

De formulering blijft voorzichtig en concreet.

## 34. Wat het kind ziet

Het kind hoeft geen mastery-meter of onzekerheidspercentage te zien.

Feedback richt zich op de opdracht, strategie en volgende stap.

Mees voorkomt dat interne schattingen een identiteit worden: "ik ben maar 42% goed in breuken" is precies het soort effect dat we niet willen ontwerpen.

## 35. MVP 1 regelmodel

Voor MVP 1 gebruiken we een deterministisch, testbaar model.

Geen machine-learningmodel bepaalt autonoom mastery.

De regels worden in het toekomstige MASTERY-MODEL.md vastgelegd en getest met gesimuleerde leerlingprofielen voordat echte leerdata wordt gebruikt.

## 36. Testprofielen

Voor implementatie maken we fictieve profielen zoals:

### Profiel A
Veel zelfstandig correcte, gevarieerde pogingen.

Verwacht: likely_mastered met hoge confidence.

### Profiel B
Correct na sterke hints, maar zelfstandig nog wisselend.

Verwacht: developing en later zelfstandig opnieuw meten.

### Profiel C
Veel tegenstrijdige observaties.

Verwacht: hogere uncertainty en gerichte diagnostiek.

### Profiel D
Doel B blijft lastig en prerequisite A is unknown.

Verwacht: A kort controleren.

### Profiel E
Automatische interventies helpen onvoldoende.

Verwacht: tutorhulp kan worden voorgesteld volgens de tutorregels.

Deze scenario's worden later echte geautomatiseerde tests.

## 37. Wat we bewust nog niet vastzetten

Voor we echte drempels kiezen moeten we onderwijskundig testen:

- hoeveel onafhankelijk bewijs passend is;
- hoe snel oud bewijs minder zwaar mag wegen;
- hoe verschillende bronnen worden gewogen;
- wanneer een representatiewissel voldoende nieuw bewijs oplevert;
- wanneer een prerequisite opnieuw getest wordt;
- wanneer tutorhulp precies wordt voorgesteld;
- welke doelen expliciete vlotheid vereisen;
- hoe samengestelde leerdoelen worden behandeld.

We leggen eerst de betekenis vast en pas daarna de getallen.

## 38. Relatie met de volgende documenten

    LEARNING GOAL
        ↓
    QUESTION
        ↓
    LEARNING EVENT
        ↓
    LEARNER STATE
        ↓
    MASTERY MODEL
        ↓
    ADAPTIVE ENGINE
        ↓
    NEXT BEST ACTION

Het Tutor Intervention Contract beschrijft daarnaast hoe menselijke begeleiding gecontroleerd in deze keten komt.

## 39. Ontwerpprincipe

**Mees probeert niet zo snel mogelijk te beslissen wat een kind kan. Mees probeert met zo weinig mogelijk, maar voldoende goed bewijs de volgende leerstap verstandig te kiezen en blijft expliciet over wat nog onzeker is.**
