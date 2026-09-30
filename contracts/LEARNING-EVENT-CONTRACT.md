# Learning Event Contract

> Status: ontwerpcontract  
> Doel: vastleggen welke betekenisvolle gebeurtenissen Mees tijdens het leren registreert, zodat leerbeslissingen uitlegbaar, privacybewust en reproduceerbaar blijven.

## 1. Waarom dit contract bestaat

Het Question Contract beschrijft wat Mees kan aanbieden. Het Learning Event Contract beschrijft wat tijdens een concrete leersituatie daadwerkelijk gebeurde.

Een Learning Event is een feitelijke observatie. Het is nog geen conclusie over het kind.

Voorbeeld:

    FEIT
    vraag: 47 + 6
    antwoord: 52
    validator: incorrect
    hint gebruikt: ja

    NIET AUTOMATISCH EEN FEIT
    "het kind begrijpt tientaloverschrijding niet"

De tweede uitspraak is een hypothese die pas in het Learner State-model mag ontstaan wanneer voldoende bewijs daarvoor bestaat.

## 2. Kernprincipe

**Registreer observaties rijk genoeg om goed onderwijs mogelijk te maken, maar verzamel niets zonder concrete onderwijsfunctie.**

Mees bouwt geen surveillanceprofiel van een kind. Meer data is niet automatisch betere data.

## 3. Event versus sessie versus poging

We onderscheiden drie niveaus.

### Session

Een korte leerperiode waarin een kind met Mees werkt.

### Attempt

Een concrete poging bij een vraag of opdrachtinstantie.

### Event

Een betekenisvolle gebeurtenis binnen of rond die poging, bijvoorbeeld:

- opdracht aangeboden;
- antwoord ingediend;
- hint gevraagd;
- andere representatie geopend;
- uitleg bekeken;
- opdracht gestopt;
- tutorinterventie gekoppeld;
- papieren resultaat bevestigd.

Niet iedere klik is een Learning Event.

## 4. Minimale event-envelop

Ieder event bevat conceptueel:

    event_id: EVT-...
    event_type: answer_submitted
    occurred_at: timestamp

    child_id: internal_random_id
    session_id: SES-...
    attempt_id: ATT-...

    question:
      question_id: Q-REK-00001234
      question_version: 3
      instance_id: QI-...

    learning_context:
      primary_learning_goal_id: LG-REK-OPT-0012
      representation: symbolic

    payload:
      ...

    schema_version: 1

De exacte opslagstructuur bepalen we later. Dit contract definieert eerst de betekenis.

## 5. Interne identiteit

Events gebruiken de interne willekeurige child_id.

Voornaam, ouder-e-mailadres en andere identificerende gegevens worden niet herhaald in ieder event.

Daardoor kan de leerdata technisch aan het juiste profiel worden gekoppeld zonder persoonsgegevens onnodig door alle eventrecords te verspreiden.

## 6. Reproduceerbare vraaginstantie

Bij iedere poging moet achteraf duidelijk zijn wat het kind daadwerkelijk zag.

Daarom koppelen we minimaal:

- question_id;
- question_version;
- concrete instance_id;
- gebruikte parameters bij gegenereerde vragen;
- relevante templateversie indien van toepassing;
- gebruikte representatie.

Bij random gegenereerde inhoud bewaren we voldoende informatie om de concrete opdracht te reconstrueren.

## 7. Belangrijke event types voor MVP 1

De eerste versie ondersteunt minimaal:

    session_started
    session_ended
    question_presented
    answer_submitted
    hint_requested
    representation_changed
    explanation_presented
    attempt_completed
    attempt_stopped
    worksheet_result_confirmed
    tutor_help_proposed
    tutor_help_approved
    tutor_observation_added
    reassessment_scheduled
    reassessment_completed

We voegen alleen nieuwe eventtypes toe wanneer ze een duidelijke functie hebben voor leren, veiligheid, audit of noodzakelijke productwerking.

## 8. Answer submitted

Een antwoordevent registreert wat het kind daadwerkelijk heeft ingediend en wat de formele validator daarvan vond.

Conceptueel:

    event_type: answer_submitted
    payload:
      response:
        type: integer
        value: 52
      validation:
        result: incorrect
        validator_version: 1
      attempt_number: 1

Dit event zegt niet waarom het antwoord fout was.

## 9. Correctheid versus bewijs

correct en incorrect zijn eigenschappen van de respons volgens de validator.

Ze zijn niet hetzelfde als:

    beheerst
    begrijpt het
    begrijpt het niet
    heeft denkfout X

Die conclusies horen in Learner State en moeten uit meerdere observaties kunnen worden opgebouwd.

## 10. Hints

Wanneer een kind om hulp vraagt, registreren we bijvoorbeeld:

    event_type: hint_requested
    payload:
      hint_level: 1
      hint_id: HINT-...
      strategy: light

Bij een volgende hint kan worden vastgelegd dat een andere representatie is aangeboden.

We registreren dat hulp is gebruikt omdat dit relevant kan zijn voor de sterkte van het bewijs. We behandelen hulp vragen niet als iets negatiefs.

## 11. Representaties

Wanneer een kind dezelfde onderwijsinhoud via een andere representatie ziet, registreren we de daadwerkelijke representatie.

Voorbeelden:

    symbolic
    number_line
    blocks
    fraction_model
    clock
    money
    verbal

Zo kan Mees later onderzoeken of een bepaalde representatie in een specifieke context hielp zonder het kind permanent als een bepaald "type leerling" te labelen.

## 12. Interactieve opdrachten

Een interactieve engine mag betekenisvolle tussenstappen registreren wanneer die onderwijskundige informatie opleveren.

Bij een getallenlijn kunnen bijvoorbeeld sprongen relevant zijn. Bij een klok kan een ingestelde eindtijd relevant zijn.

We registreren niet standaard:

- iedere pixelbeweging;
- iedere muispositie;
- ieder hovermoment;
- ruwe touchtracking;
- andere gedragsdata zonder concreet onderwijsdoel.

De oefenengine definieert expliciet welke interacties semantisch betekenisvol zijn.

## 13. Tijd

Events hebben timestamps voor volgorde, synchronisatie en noodzakelijke analyse.

Afgeleide duur kan context geven, maar snelheid wordt niet zelfstandig als bewijs van beheersing gebruikt.

We hoeven niet continu te volgen of een kind "actief" is. Een pauze kan allerlei oorzaken hebben.

## 14. Stoppen is geldige informatie

Wanneer een kind een opdracht of sessie stopt, registreren we dat neutraal.

    event_type: attempt_stopped
    payload:
      reason: child_chose_to_stop

Voor zover een reden niet expliciet door het kind of systeem bekend is, verzinnen we die niet.

Stoppen is niet automatisch frustratie, onvermogen of gebrek aan motivatie.

## 15. Sessies hebben een einde

Mees optimaliseert niet voor maximale sessieduur.

Een session_ended-event kan bijvoorbeeld onderscheiden tussen:

- geplande sessie afgerond;
- kind koos zelf te stoppen;
- ouder beëindigde sessie;
- technische onderbreking indien betrouwbaar bekend.

Dit helpt de leerroute hervatten zonder van schermtijd een prestatiedoel te maken.

## 16. Papier

Papieren werk kan als bewijsbron worden toegevoegd, maar de herkomst moet zichtbaar blijven.

Bijvoorbeeld:

    event_type: worksheet_result_confirmed
    payload:
      worksheet_id: WS-...
      question_instance_id: QI-...
      response: 53
      confirmation_source: parent
      recognition_method: manual_confirmation

Een door een ouder bevestigd antwoord is iets anders dan een volledig digitaal gevalideerde interactieve poging. Het Learner State-model kan met die verschillende bewijssterktes rekening houden.

Bij onleesbaar handschrift wordt niet gegokt.

## 17. Tutorinterventies

Tutorinterventies maken vanaf MVP 1 deel uit van de eventketen.

Voorbeeld:

    tutor_help_proposed
      ↓
    tutor_help_approved
      ↓
    begeleiding
      ↓
    tutor_observation_added
      ↓
    reassessment_scheduled
      ↓
    reassessment_completed

Tutorfeedback wordt als bron herkenbaar opgeslagen.

Een tutorobservatie kan bijvoorbeeld bevatten:

    understanding:
      value: partial
      confidence: medium

    helpful_representation:
      - number_line

    observation_text: "..."

    recommended_next_action:
      - reassess
      - targeted_practice

De tutorobservatie is waardevol bewijs, maar geen absolute waarheid.

## 18. Minimale tutorcontext

De tutor krijgt via een aparte geautoriseerde view alleen de informatie die nodig is voor de begeleiding.

Learning Events zelf worden niet onbeperkt als complete ruwe historie aan een tutor blootgesteld.

Mees kan een Tutor Brief samenstellen uit relevante gebeurtenissen, bijvoorbeeld:

- voornaam;
- groep;
- relevant leerdoel;
- relevante recente pogingen;
- gebruikte hints;
- gebruikte representaties;
- relevante eerdere interventies.

Onnodige ouder- of kindgegevens blijven buiten deze context.

## 19. Ouders

Een ouderdashboard hoeft geen technisch eventlog te tonen.

Mees vertaalt gebeurtenissen naar begrijpelijke, voor het onderwijs relevante informatie.

De onderliggende events blijven feitelijk. De presentatie aan ouders kan samenvatten wat goed gaat, waar onzekerheid zit en wat Mees als volgende stap probeert.

## 20. Offline en meerdere apparaten

Events moeten geschikt zijn voor synchronisatie vanaf meerdere apparaten.

Daarom heeft ieder event een unieke event_id en voldoende tijd- en sessiecontext om duplicaten en conflicten te herkennen.

We ontwerpen later expliciete regels voor:

- tijdelijk offline werken;
- later synchroniseren;
- dubbele verzending;
- twee apparaten tegelijk;
- volgordeconflicten.

Server-side leerdata blijft de centrale waarheid.

## 21. Append-first geschiedenis

Learning Events worden in beginsel append-first opgeslagen.

Een historisch feit zoals "antwoord 52 werd ingediend" wordt niet later veranderd in "antwoord 53" omdat dat beter uitkomt.

Wanneer een correctie nodig is, leggen we een nieuwe correctie- of superseding-gebeurtenis vast zodat de geschiedenis controleerbaar blijft.

## 22. Schema-versies

Ieder event bevat een schema_version.

Daardoor kunnen we het eventmodel later verbeteren zonder oude leerdata onleesbaar te maken.

Migraties moeten expliciet zijn.

## 23. Privacy en dataminimalisatie

Voor ieder eventveld moet een concrete reden bestaan.

We slaan niet op "voor het geval dat".

Voorbeelden van gegevens die niet standaard in Learning Events horen:

- achternaam kind;
- volledig adres;
- geboortedatum;
- persoonlijk e-mailadres kind;
- ouder-e-mailadres;
- schoolnaam;
- apparaatfingerprints voor marketing;
- advertentie-ID's;
- locatiegegevens;
- willekeurige gedragsanalytics.

Technische gegevens die voor beveiliging of foutoplossing noodzakelijk zijn worden apart en met passende bewaartermijnen ontworpen, niet stilletjes als onderwijsbewijs gebruikt.

## 24. Geen marketingprofiel

Leerdata wordt ontworpen om het kind te helpen leren, het systeem uitlegbaar te maken en noodzakelijke begeleiding mogelijk te maken.

Het Learning Event-model is niet bedoeld om commerciële gedragsprofielen, advertentieprofielen of engagementoptimalisatie te bouwen.

## 25. Bewaartermijnen

Dit contract bepaalt nog niet de definitieve bewaartermijnen.

Wel geldt: verschillende soorten data hoeven niet automatisch even lang te worden bewaard. Voor productie leggen we per categorie doel, noodzaak, bewaartermijn, verwijderproces en eventuele wettelijke vereisten vast.

## 26. Verwijderen en ontkoppelen

Omdat child_id centraal staat, moet de architectuur later gecontroleerde verwijdering of anonimisering van persoonlijke koppelingen ondersteunen.

We ontwerpen dit voordat echte productie-leerdata wordt verzameld.

Historische geanonimiseerde onderwijsstatistiek mag alleen behouden blijven wanneer die daadwerkelijk niet meer tot een kind herleidbaar is en dit past binnen het vastgestelde privacybeleid.

## 27. Geanonimiseerde patroonanalyse

Voor onderzoek naar terugkerende foutpatronen hebben we geen namen nodig.

Een toekomstige analysepipeline werkt bij voorkeur met zo min mogelijk herleidbare data:

    relevante pogingen
    → privacybewuste dataset
    → patroon/clustering
    → hypothese
    → onderwijsinhoudelijke beoordeling
    → eventueel gevalideerd foutpatroon

AI krijgt niet automatisch toegang tot de volledige persoonlijke historie van kinderen.

## 28. Events en hypotheses blijven gescheiden

We bewaren feit en interpretatie apart.

Bijvoorbeeld:

    OBSERVATIES
    Q1 → 52
    Q2 → 61
    Q3 → 43

    HYPOTHESE
    mogelijk patroon X

    VERVOLG
    diagnostische vraag

    NIEUW BEWIJS
    ...

Hierdoor kan een hypothese worden aangepast zonder de oorspronkelijke observaties te herschrijven.

## 29. Auditability

Voor belangrijke geautomatiseerde leerbeslissingen moet later terug te vinden zijn welk bewijs eraan voorafging.

Als Mees besluit een prerequisite opnieuw te testen of tutorhulp voor te stellen, moet de reden in begrijpelijke vorm reconstrueerbaar zijn.

Dit betekent niet dat we alle interne softwarelogs eeuwig bewaren. Alleen de onderwijsrelevante beslisgrond wordt passend vastgelegd.

## 30. Eventkwaliteit

Een event mag alleen worden gebruikt als bewijs wanneer duidelijk is:

- wat er gebeurde;
- bij welke vraagversie;
- bij welk leerdoel;
- in welke representatie;
- welke hulp al was gegeven;
- hoe het antwoord werd gevalideerd;
- wat de bron van de observatie was.

Ontbreekt essentiële context, dan kan het bewijs minder zwaar wegen.

## 31. Fouttolerantie

Technische problemen mogen niet worden geïnterpreteerd als leerproblemen.

Als bijvoorbeeld een interactieve component crasht, verbinding wegvalt of invoer aantoonbaar niet is verzonden, mag daar geen fout antwoord van worden gemaakt.

Waar betrouwbaar detecteerbaar, krijgt technische mislukking een aparte status.

## 32. Geen stille inferenties

De eventlaag schrijft niet automatisch psychologische of cognitieve labels weg zoals:

    gefrustreerd
    ongemotiveerd
    slordig
    onzeker
    ADHD
    dyscalculie
    denkfout X

Alleen expliciete, daarvoor ontworpen en gerechtvaardigde observaties worden opgeslagen. Interpretaties horen in aparte modellen en moeten hun bewijs en onzekerheid behouden.

## 33. Validatieregels

Een Learning Event is minimaal valide wanneer:

1. event_id uniek is;
2. event_type bekend is;
3. timestamp geldig is;
4. child_id geldig is voor persoonlijke events;
5. session/attempt-relaties consistent zijn waar vereist;
6. vraag-ID en vraagversie aanwezig zijn bij vraaggebonden events;
7. payload voldoet aan het schema van het eventtype;
8. er geen verboden of onnodige persoonsgegevens in de payload staan;
9. bron en validatorversie aanwezig zijn waar relevant;
10. schema_version aanwezig is.

## 34. Relatie met Learner State

Learning Events zijn het ruwe onderwijsbewijs.

    QUESTION
       ↓
    LEARNING EVENTS
       ↓
    EVIDENCE
       ↓
    LEARNER STATE
       ↓
    NEXT BEST ACTION

Het Learner State Contract bepaalt vervolgens hoe verschillende observaties worden gewogen, hoe onzekerheid wordt bijgehouden en hoe hypotheses worden getest.

## 35. Ontwerpprincipe

**Learning Events bewaren wat werkelijk gebeurde, niet wat Mees hoopt dat het betekende. We verzamelen zo weinig mogelijk, maar genoeg om leerbeslissingen te onderbouwen, te controleren en te verbeteren.**
