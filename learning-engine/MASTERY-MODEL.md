# Mastery Model

> Status: ontwerpmodel voor MVP 1  
> Doel: uitlegbaar bepalen hoe onderwijsbewijs wordt vertaald naar Learner State, zonder schijnprecisie of ondoorzichtige AI.

## 1. Rol van het Mastery Model

Het Mastery Model zit tussen Learning Events en Learner State.

    Learning Events
          ↓
       Evidence
          ↓
     Mastery Model
          ↓
     Learner State

Het model bepaalt **niet** welke vraag daarna wordt aangeboden. Dat doet de Adaptive Engine.

Het model beantwoordt vooral:

> Wat rechtvaardigt het beschikbare bewijs op dit moment over dit leerdoel, en hoe zeker zijn we daarvan?

## 2. MVP 1 is regelgebaseerd

MVP 1 gebruikt een deterministisch en testbaar regelmodel.

Geen machine-learningmodel of LLM bepaalt autonoom mastery.

Dezelfde relevante evidence met dezelfde modelversie moet tot dezelfde Learner State leiden.

AI kan later analyses of voorstellen doen, maar verandert deze kernregel niet zonder expliciete ontwerpbeslissing.

## 3. Geen puntensaldo

We beginnen bewust niet met:

    +10 goed
    -5 fout
    +3 hint
    = 78% mastery

Zo'n totaalscore mengt verschillende soorten bewijs en wekt snel een precisie die niet onderbouwd is.

MVP 1 redeneert eerst in **evidence dimensions**.

## 4. Evidence dimensions

Voor ieder leerdoel kijkt het model minimaal naar vijf dimensies:

### A. Correctness
Welke relevante antwoorden waren correct, incorrect of niet valide?

### B. Independence
Was succes zelfstandig, na lichte hulp of na sterke hulp/uitleg?

### C. Variation
Komt het bewijs uit voldoende verschillende passende opgaven of slechts uit vrijwel identieke herhaling?

### D. Time spread
Is het bewijs alleen uit één korte reeks afkomstig of ook op een later moment bevestigd?

### E. Consistency
Wijzen recente relevante observaties grotendeels dezelfde kant op of spreken ze elkaar tegen?

Representatie en bron blijven daarnaast belangrijke context.

## 5. Evidence unit

Een bruikbare evidence unit verwijst naar concrete Learning Events.

Conceptueel:

    evidence_id: EVD-...
    learning_goal_id: LG-...
    source: digital
    outcome: success
    independence: independent
    representation: symbolic
    question_family: ...
    occurred_at: ...
    validity: valid
    event_refs: [...]

Evidence is afgeleid. De originele Learning Events blijven de feitenlaag.

## 6. Validity eerst

Voordat bewijs meeweegt, controleert Mees of het geldig genoeg is.

Voorbeelden van invalid evidence:

- aantoonbare technische fout;
- antwoord niet verzonden;
- corrupte vraaginstantie;
- validatorfout;
- dubbele eventverwerking.

Invalid evidence verandert mastery niet.

Bij twijfel kan bewijs als low-confidence worden behandeld of aanleiding geven tot hermeting.

## 7. Zelfstandig succes

Zelfstandig correct antwoorden op een passende nieuwe vraag is sterk positief bewijs.

Maar één zelfstandig correct antwoord is niet genoeg voor likely_mastered.

Het kan toeval zijn, een eenvoudige variant zijn of onvoldoende dekking geven.

## 8. Succes na hulp

Correct na hulp blijft positief leerbewijs.

We onderscheiden conceptueel:

    independent
    light_support
    strong_support

Een correct antwoord na strong_support laat bijvoorbeeld zien dat het kind na interventie verder kon, maar bewijst nog niet zelfstandig mastery.

Daarom volgt later waar passend een zelfstandige hermeting.

## 9. Incorrect antwoord

Een incorrect antwoord is negatief bewijs voor succesvolle uitvoering van die concrete opdracht onder die omstandigheden.

Het is niet automatisch bewijs voor:

- gebrek aan begrip van het hele leerdoel;
- een specifieke denkfout;
- gebrek aan motivatie;
- een diagnose.

Het patroon over meerdere observaties bepaalt wat gerechtvaardigd is.

## 10. Vraagvariatie

Meerdere antwoorden tellen niet automatisch als meerdere onafhankelijke bevestigingen.

Vragen kunnen tot dezelfde question family behoren.

Bijvoorbeeld:

    47 + 6
    48 + 5
    46 + 7

kunnen inhoudelijk sterk op elkaar lijken.

De precieze definitie van question families wordt per exercise type ontworpen.

Het model kan daarom onderscheid maken tussen:

- repetition;
- variation;
- transfer.

## 11. Transfer

Transferbewijs is bewijs dat begrip ook standhoudt wanneer een relevante oppervlakte-eigenschap verandert.

Bijvoorbeeld een andere getalkeuze, context of passende representatie.

Transfer is alleen relevant wanneer het leerdoel die variatie daadwerkelijk omvat.

We forceren geen representatievariatie puur om mastery "moeilijker" te maken.

## 12. Tijdspreiding

Een reeks correcte antwoorden binnen twee minuten geeft ander bewijs dan vergelijkbaar succes dat later opnieuw zelfstandig wordt bevestigd.

MVP 1 gebruikt daarom minimaal het concept:

    same_session
    later_session

De exacte tijdsdrempel leggen we pas vast na tests.

## 13. Recency

Oud bewijs verdwijnt niet plotseling.

Het model kan wel aangeven dat bewijs te oud is om zonder hermeting een actuele hoge confidence te behouden.

Dat leidt tot needs_reassessment, niet automatisch tot "niet beheerst".

## 14. Bronnen

Evidence behoudt zijn bron:

    digital
    interactive
    worksheet_parent_confirmed
    tutor
    other_validated_source

Bron bepaalt niet alleen gewicht. De inhoud en kwaliteit van de observatie blijven belangrijk.

Een tutorobservatie kan bijvoorbeeld veel context bevatten, terwijl een digitaal zelfstandig antwoord juist zeer objectief valideerbaar kan zijn.

## 15. Representatie

Evidence bewaart de gebruikte representatie.

Voorbeeld:

    symbolic
    number_line
    blocks

Het Mastery Model kan zien dat succes alleen binnen één representatie is waargenomen.

Dat leidt niet automatisch tot een probleem. Of meerdere representaties nodig zijn hangt af van het leerdoel en de succescriteria.

## 16. Learner States

MVP 1 gebruikt:

### unknown
Er is onvoldoende bruikbaar bewijs.

### emerging
Er is eerste positief bewijs, maar nog te weinig voor een stabiele inschatting.

### developing
Er is betekenisvol bewijs van ontwikkeling, maar zelfstandigheid, consistentie, variatie of tijdspreiding is nog onvoldoende.

### likely_mastered
Er is voldoende passend en onafhankelijk bewijs om beheersing aannemelijk te vinden.

### needs_reassessment
Eerder bewijs was overtuigender, maar actuele zekerheid is onvoldoende door ouderdom, tegenspraak of andere relevante verandering.

Dit zijn modelstates, geen labels die letterlijk aan kinderen hoeven te worden getoond.

## 17. Confidence

Naast state gebruikt MVP 1:

    low
    medium
    high

Confidence beschrijft hoeveel vertrouwen Mees heeft in de state, niet hoe "goed" het kind is.

Bijvoorbeeld:

    developing + high confidence

kan volledig logisch zijn.

## 18. Voorlopige overgangslogica

De volgende regels zijn **startregels voor simulatie**, geen wetenschappelijke waarheid.

### unknown → emerging

Wanneer er minimaal één geldig relevant positief signaal is, maar onvoldoende onafhankelijk bewijs voor developing.

### emerging → developing

Wanneer er meerdere relevante observaties zijn en het beeld meer is dan één toevallig succes, maar nog onvoldoende basis bestaat voor likely_mastered.

### developing → likely_mastered

Alleen wanneer er voldoende zelfstandig, gevarieerd en consistent positief bewijs bestaat en relevante succescriteria voldoende zijn afgedekt.

### likely_mastered → needs_reassessment

Wanneer relevant nieuw bewijs sterk tegenstrijdig is of wanneer hermeting onderwijskundig nodig is door ouderdom van bewijs.

### needs_reassessment → andere state

Na nieuwe diagnostische evidence wordt de state opnieuw bepaald.

De exacte aantallen worden bewust nog niet als definitieve productregels vastgelegd.

## 19. Waarom nog geen vaste "3 goed"-regel

We kunnen technisch eenvoudig schrijven:

    if correct >= 3:
        mastered = true

Maar daarmee zouden drie vrijwel identieke vragen achter elkaar even zwaar kunnen tellen als drie zelfstandige bevestigingen verspreid over verschillende contexten.

We testen daarom eerst scenario's en kiezen daarna expliciete drempels.

## 20. Positief patroon na interventie

Een belangrijke leercurve is:

    incorrect
      ↓
    hint
      ↓
    success with support
      ↓
    later independent success

Het model moet dit kunnen herkennen als leren na interventie.

De eerdere fout blijft bestaan als observatie, maar hoeft een latere mastery-inschatting niet kunstmatig naar beneden te blijven trekken.

## 21. Herhaalde fouten

Bij herhaalde incorrecte antwoorden gaat het Mastery Model niet zelf steeds meer oefeningen voorschrijven.

Het rapporteert bijvoorbeeld:

    state: developing
    confidence: medium
    uncertainty:
      - repeated_incorrect
      - cause_unknown

De Adaptive Engine beslist vervolgens of een andere representatie, prerequisite-check, uitleg of tutorinterventie passend is.

## 22. Tegenstrijdig bewijs

Bij een mix van sterk positief en negatief recent bewijs kan confidence dalen.

Voorbeeld:

    3 zelfstandig correct
    later 2 relevante incorrecte pogingen

Mogelijk resultaat:

    state: needs_reassessment
    confidence: medium

Niet:

    mastery = 60%

De engine krijgt zo een duidelijke opdracht: verzamel diagnostisch bewijs.

## 23. Prerequisite-state

Het Mastery Model verandert een doel niet automatisch omdat een prerequisite onzeker is.

Het rapporteert die relatie als relevante context.

De Adaptive Engine kan vervolgens besluiten de prerequisite kort te meten.

Zo blijven "bewijs over doel B" en "vermoeden over doel A" gescheiden.

## 24. Tutorobservatie

Tutorbewijs kan een state beïnvloeden wanneer de observatie relevant en voldoende concreet is.

Bijvoorbeeld:

    understanding: partial
    confidence: high
    observed_strategy: ...
    recommended_next_action: reassess

Dit kan developing ondersteunen en aanleiding geven tot hermeting.

Een tutor kan likely_mastered niet simpelweg handmatig "aanzetten" zonder dat de evidencebron zichtbaar blijft.

## 25. Papier

Een ouderbevestigd werkbladresultaat kan mastery-evidence leveren.

Het model bewaart dat de bron worksheet_parent_confirmed was.

Wanneer alleen een totaalscore beschikbaar is zonder vraag- of leerdoelkoppeling, is het bewijs mogelijk onvoldoende specifiek voor een individuele learning-goal state.

## 26. Open opdrachten

Evidence uit open opdrachten krijgt alleen gewicht wanneer een betrouwbare beoordelingsmethode beschikbaar is.

Bijvoorbeeld:

- rubric;
- tutorbeoordeling;
- ouderbevestiging voor een concrete observeerbare taak;
- later een gevalideerde AI-beoordeling.

Een LLM-oordeel wordt niet stilzwijgend gelijkgesteld aan een deterministische rekenvalidator.

## 27. Hypotheses blijven apart

Mastery state bevat geen verborgen misconception-diagnose.

Bij herhaalde patronen kan een apart hypothesesysteem ontstaan.

    evidence
      ↓
    pattern candidate
      ↓
    hypothesis
      ↓
    diagnostic evidence
      ↓
    validation

Het Mastery Model mag een hypothese als context gebruiken zodra de Adaptive Engine die gericht wil testen, maar herschrijft observaties niet.

## 28. Evidence window

Niet alle historische events hoeven bij iedere berekening volledig te worden verwerkt.

De implementatie mag relevante evidence samenvatten, zolang:

- belangrijke provenance behouden blijft;
- state uitlegbaar blijft;
- oude relevante evidence niet oncontroleerbaar verdwijnt;
- herberekening mogelijk blijft.

De technische optimalisatie bepalen we later.

## 29. Mastery explanation

Iedere berekende state krijgt een machineleesbare redenstructuur.

Conceptueel:

    state: developing
    confidence: medium

    supporting_evidence:
      independent_successes: 2
      supported_successes: 2

    limiting_factors:
      - only_same_session
      - insufficient_variation

    suggested_information_need:
      - later_independent_check

Hierdoor hoeft de Adaptive Engine de mastery-logica niet opnieuw te raden.

## 30. Information need

Het Mastery Model mag aangeven welk soort bewijs ontbreekt.

Voorbeelden:

    need_independent_evidence
    need_more_variation
    need_later_reassessment
    need_prerequisite_information
    need_conflict_resolution
    need_valid_observation

Dit is geen concrete vraagselectie. De Adaptive Engine vertaalt de information need naar een actie.

## 31. Geen engagementsignalen

Mastery wordt niet bepaald door:

- hoeveel dagen achter elkaar iemand inlogt;
- totale schermtijd;
- aantal geopende schermen;
- streaks;
- clicks;
- commerciële engagementmetrics.

Alleen onderwijsrelevant bewijs telt.

## 32. Modelversie

Iedere state verwijst naar:

    mastery_model_version: 1

Wanneer regels later veranderen, blijven oude Learning Events hetzelfde.

We kunnen states dan opnieuw berekenen en verschillen tussen modelversies onderzoeken.

## 33. Deterministische tests

Iedere masteryregel krijgt scenario-tests.

Voorbeeld:

    GIVEN
      1 zelfstandig correct antwoord

    EXPECT
      niet likely_mastered

Of:

    GIVEN
      strong_support success
      later independent success

    EXPECT
      positief bewijs voor groei
      geen negatieve straf voor eerdere hulp

Tests beschrijven gedrag, niet alleen code.

## 34. Simulatieprofielen

Voor implementatie maken we minimaal:

### A. Snelle eerste successen
Meerdere correcte antwoorden in één zeer vergelijkbare reeks.

Doel: voorkomen dat Mees te snel mastery concludeert.

### B. Gespreid zelfstandig begrip
Gevarieerde zelfstandige successen over meerdere momenten.

Doel: likely_mastered moet bereikbaar zijn.

### C. Leren na hint
Eerst fout, daarna hulp, later zelfstandig correct.

Doel: interventie-effect goed verwerken.

### D. Alleen succes met sterke hulp
Doel: positieve ontwikkeling erkennen zonder zelfstandige mastery te claimen.

### E. Tegenstrijdig bewijs
Doel: confidence verlagen en hermeting vragen.

### F. Technische storing
Doel: technisch falen telt niet negatief mee.

### G. Tutorinterventie
Tutor ziet gedeeltelijk begrip, daarna zelfstandig succes.

Doel: menselijke evidence correct combineren.

### H. Papier
Ouder bevestigt relevante antwoorden, daarna digitale hermeting.

Doel: bronverschillen behouden.

## 35. Kalibratie vóór echte leerlingen

We kiezen definitieve drempels niet alleen op gevoel.

Eerst draaien we de scenario's met dummydata en bekijken we of de uitkomsten pedagogisch logisch zijn.

Daarna kunnen onderwijsprofessionals de regels beoordelen.

Pas na veilige pilotdata kunnen we onderzoeken of de gekozen regels in de praktijk te snel, te langzaam of scheef reageren.

## 36. Toekomstige verbetering

Later kunnen statistische modellen helpen bij kalibratie.

Dat mag alleen wanneer:

- de uitkomst uitlegbaar blijft;
- privacy passend is;
- modelgedrag getest kan worden;
- het model geen oncontroleerbare diagnoses maakt;
- menselijke productbeslissingen bepalen welke rol het krijgt.

Een complexer model is niet automatisch een beter model.

## 37. Wat MVP 1 bewust niet doet

MVP 1 gebruikt geen:

- black-box mastery prediction;
- permanente ability score;
- IQ-achtige rangschikking;
- vergelijking met klasgenoten als kern van personalisatie;
- engagementscore;
- automatische diagnose;
- vaste leerstijlclassificatie.

## 38. Open beslissingen

Voor implementatie moeten we met testdata nog vaststellen:

- minimale hoeveelheid onafhankelijke evidence voor iedere state;
- definitie van question-family variation;
- minimale tijdspreiding voor sterkere bevestiging;
- recencyregels;
- hoe confidence exact wordt afgeleid;
- hoe verschillende evidencebronnen praktisch worden gewogen;
- wanneer tegenstrijdigheid tot needs_reassessment leidt;
- welke leerdoeltypen afwijkende masteryregels nodig hebben.

Deze waarden worden in een volgende versie van dit document expliciet gemaakt nadat we scenario's hebben doorgerekend.

## 39. Interface naar Adaptive Engine

Het Mastery Model levert minimaal:

    learning_goal_id
    state
    confidence
    supporting_evidence
    limiting_factors
    uncertainty_reasons
    information_needs
    relevant_prerequisite_context
    last_meaningful_evidence_at
    mastery_model_version

De Adaptive Engine gebruikt dit om de volgende beste actie te kiezen.

## 40. Ontwerpprincipe

**Mastery in Mees is geen score die een kind verzamelt. Het is een uitlegbare, tijdelijke conclusie over wat het beschikbare bewijs voldoende ondersteunt. Wanneer het bewijs tekortschiet, is "we weten het nog niet" een correcte uitkomst.**
