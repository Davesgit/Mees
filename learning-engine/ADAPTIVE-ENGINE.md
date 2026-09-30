# Adaptive Engine

> Status: ontwerpmodel voor MVP 1  
> Doel: vastleggen hoe Mees op basis van Learner State, leerdoelen, eerdere interventies en sessiecontext de volgende beste leeractie kiest.

## 1. Rol

Het Mastery Model beantwoordt:

> Wat ondersteunt het huidige bewijs over dit leerdoel?

De Adaptive Engine beantwoordt:

> Wat is nu de meest zinvolle volgende leeractie?

De engine stelt dus geen diagnose. Hij kiest een volgende actie die leren bevordert of relevante onzekerheid verkleint.

    Learning Goal Graph
            +
      Learner State
            +
      Session Context
            +
    Intervention History
            ↓
      Adaptive Engine
            ↓
      Next Best Action

## 2. MVP 1 is deterministisch

MVP 1 gebruikt expliciete, testbare regels.

Een LLM beslist niet autonoom welke leerroute een kind krijgt.

Bij dezelfde input en dezelfde engineversie moet dezelfde beslissing reproduceerbaar zijn, behalve waar bewust gecontroleerde variatie in vraagselectie is toegestaan.

## 3. Twee doelen van adaptiviteit

Iedere actie dient hoofdzakelijk één van twee doelen:

### Leren
Een passende volgende stap aanbieden die begrip of vaardigheid kan versterken.

### Meten
Gericht informatie verzamelen om relevante onzekerheid te verminderen.

Mees moet deze doelen uit elkaar houden.

Een diagnostische vraag hoeft bijvoorbeeld niet dezelfde functie te hebben als een oefenvraag.

## 4. Input

De engine gebruikt minimaal:

    child_id
    active_learning_goal
    learner_state
    information_needs
    learning_goal_graph
    recent_attempts
    intervention_history
    representations_tried
    session_context
    availability_of_question_types
    engine_version

Waar nodig kunnen later aanvullende expliciete signalen worden toegevoegd.

## 5. Output

De engine levert geen volledig scherm, maar een semantische Next Best Action.

Conceptueel:

    action:
      type: check_prerequisite
      target_learning_goal_id: LG-...
      purpose: reduce_uncertainty
      preferred_question_features:
        independence: independent
        novelty: new_instance

      reason:
        learner_state: developing
        information_need: need_prerequisite_information

      engine_version: 1

De software vertaalt deze actie naar een concrete ervaring.

## 6. Mogelijke acties

MVP 1 ondersteunt conceptueel:

    gather_more_evidence
    continue_practice
    vary_question
    change_representation
    offer_hint
    provide_explanation
    check_prerequisite
    reassess
    advance_to_next_goal
    maintain_previous_goal
    propose_tutor_help
    suggest_offline_activity
    end_session

Niet iedere actie hoeft als aparte knop zichtbaar te zijn.

## 7. Beslisvolgorde

De engine beoordeelt acties in een vaste logische volgorde.

### Stap 1: is de evidence geldig genoeg?

Bij technische of inhoudelijke twijfel:

    gather_more_evidence

Geen leerconclusie trekken uit kapotte interactie.

### Stap 2: is er een expliciete information need?

Bijvoorbeeld:

    need_independent_evidence
    need_more_variation
    need_later_reassessment
    need_prerequisite_information
    need_conflict_resolution

Kies eerst een actie die die onzekerheid gericht kan verkleinen.

### Stap 3: is een passende interventie nog niet geprobeerd?

Bij een concrete mislukte poging kan een hint, uitleg of andere representatie passend zijn.

### Stap 4: blijft relevante onzekerheid bestaan?

Controleer prerequisite of verzamel diagnostisch bewijs.

### Stap 5: zijn automatische interventies voldoende geprobeerd?

Dan kan tutorhulp kandidaat worden.

### Stap 6: is het leerdoel waarschijnlijk beheerst?

Dan kan onderhoud of een volgende doelstap passend zijn.

### Stap 7: is de sessie inhoudelijk rond?

Dan mag Mees bewust stoppen.

## 8. Vraagflow binnen één poging

De standaard hulpflow blijft:

    vraag
      ↓
    antwoord
      ↓
    correct → afronden
      ↓
    incorrect
      ↓
    lichte hint
      ↓
    nieuwe poging
      ↓
    incorrect
      ↓
    sterkere hint / andere representatie
      ↓
    nieuwe poging
      ↓
    indien nodig uitleg
      ↓
    later opnieuw meten

Dit is een basispatroon. Een exercise type kan pedagogisch gemotiveerd afwijken.

## 9. Hint op verzoek

Een kind mag zelf een hint vragen voordat het een fout antwoord heeft gegeven.

De engine behandelt dit niet als falen.

De Learning Event registreert de hulp en het Mastery Model houdt rekening met de mate van zelfstandigheid.

## 10. Niet eindeloos dezelfde vraag

Wanneer meerdere vergelijkbare pogingen weinig nieuwe informatie opleveren, moet de engine niet gedachteloos meer van hetzelfde aanbieden.

Mogelijke alternatieven:

    vary_question
    change_representation
    check_prerequisite
    provide_explanation
    propose_tutor_help

Adaptiviteit betekent dus ook weten wanneer herhaling weinig toevoegt.

## 11. Andere representatie

Een representatiewissel is passend wanneer:

- het leerdoel meerdere representaties ondersteunt;
- de huidige representatie onvoldoende helpt;
- een andere representatie pedagogisch relevante informatie kan opleveren.

Voorbeeld:

    symbolic
      ↓
    number_line

De engine concludeert daaruit niet dat het kind permanent een voorkeur of leerstijl heeft.

## 12. Prerequisite-check

Wanneer doel B onzeker blijft en doel A een relevante prerequisite is:

    if state(A) is unknown or uncertain
       and relation(A → B) is educationally relevant
       then consider check_prerequisite(A)

De check moet klein en gericht zijn.

Mees stuurt een kind niet automatisch door een lange keten oude leerstof.

## 13. Als prerequisite wel beheerst blijkt

Wanneer een korte check voldoende bewijs geeft dat A waarschijnlijk beheerst is, keert de route terug naar B.

Dat is waardevolle informatie:

> Het probleem lijkt niet eenvoudig verklaard te worden door deze prerequisite.

Mees verzint vervolgens niet automatisch een andere oorzaak.

## 14. Als prerequisite onzeker blijkt

Dan kan de engine tijdelijk A versterken.

Daarna keert Mees terug naar B wanneer voldoende basis is hersteld.

De oorspronkelijke hulpvraag blijft in de context staan zodat het kind niet verdwaalt in een eindeloze zijroute.

## 15. Likely mastered

Bij:

    state: likely_mastered
    confidence: voldoende

kan de engine kiezen tussen:

- advance_to_next_goal;
- later maintenance;
- korte transfercheck wanneer succescriteria dit vereisen.

Niet ieder beheerst doel krijgt eindeloze extra oefeningen "voor de zekerheid".

## 16. Unknown

Bij unknown kiest de engine een kleine set passende startobservaties.

Doel is snel voldoende informatie krijgen zonder een kind eerst een lange toets te laten maken.

De eerste vragen mogen daarom informatief én normaal leerzaam zijn.

## 17. Emerging

Bij emerging verzamelt Mees meer onafhankelijk bewijs en kan lichte variatie introduceren.

De engine springt niet na één positief signaal direct naar een veel moeilijker doel.

## 18. Developing

Bij developing kijkt de engine naar limiting factors.

Voorbeelden:

    only_success_with_support
      → later independent check

    insufficient_variation
      → vary_question

    repeated_incorrect
      → intervention or diagnostic action

    prerequisite_unknown
      → check_prerequisite

    conflicting_evidence
      → targeted reassessment

Developing is dus geen generieke opdracht "meer oefenen".

## 19. Needs reassessment

Bij needs_reassessment kiest de engine een nieuwe passende meting die zo min mogelijk vervuild is door directe herinnering aan eerdere antwoorden.

Waar mogelijk:

- nieuwe vraaginstantie;
- geen onnodige sterke hint vooraf;
- passend niveau;
- voldoende vergelijkbaar om hetzelfde leerdoel te meten.

## 20. Tutortrigger

Tutorhulp is pas kandidaat wanneer relevante automatische routes onvoldoende duidelijkheid geven.

Conceptueel:

    persistent_uncertainty
    AND relevant_interventions_tried
    AND prerequisite_checked_when_relevant
    AND more_same_practice_low_information_value
    AND human_help_expected_to_add_value
      → propose_tutor_help

De definitieve thresholds worden met simulaties en pilots bepaald.

## 21. Ouder weigert tutorhulp

Wanneer een ouder geen tutorhulp activeert:

- dit wordt niet als negatief leerlingbewijs opgeslagen;
- de engine zoekt een andere veilige leerroute;
- Mees mag later opnieuw een voorstel doen als daar een nieuwe relevante aanleiding voor bestaat.

Geen agressieve herhaalde prompts.

## 22. Na tutorhulp

Tutorfeedback wordt evidence.

De engine plant waar passend:

    tutor intervention
      ↓
    appropriate delay/context
      ↓
    independent reassessment
      ↓
    update Learner State

Het doel is vaststellen wat het kind daarna zelfstandig kan.

## 23. Papier en offline

De engine mag bewust een offline actie kiezen wanneer die onderwijsinhoudelijk passend is.

Bijvoorbeeld:

- meten met een echte liniaal;
- geldsituatie aan tafel;
- papieren oefenblad;
- fysieke blokjes;
- korte activiteit buiten het scherm.

Offline is geen fallback voor "geen digitale content". Het kan een volwaardige representatie zijn.

## 24. Schermtijd

De Adaptive Engine optimaliseert niet voor sessielengte.

Een korte succesvolle sessie kan beter zijn dan twintig extra vragen.

De engine mag daarom:

    end_session

kiezen wanneer het geplande leerdoel voor dat moment voldoende is bereikt of wanneer verder digitaal oefenen weinig extra waarde heeft.

## 25. Voor jou vandaag

"Voor jou vandaag" is een orchestrator boven de Next Best Actions.

Een korte sessie kan conceptueel bestaan uit:

    1. onderhoud
    2. onzeker leerdoel versterken/meten
    3. passende volgende stap
    4. soms andere representatie of offline activiteit
    5. duidelijk einde

Niet iedere sessie hoeft alle onderdelen te bevatten.

## 26. Sessiebudget

MVP 1 krijgt een expliciet inhoudelijk sessiebudget.

Niet alleen:

    maximaal N minuten

maar ook:

    maximaal aantal betekenisvolle leerblokken
    maximaal aantal herhaalde pogingen op één knelpunt
    duidelijke stopconditie

De precieze waarden testen we later.

## 27. Kind kiest zelf

Naast "Voor jou vandaag" kan een kind zelf een onderwerp kiezen.

De engine blijft dan binnen dat gekozen domein zo veel mogelijk adaptief ondersteunen.

Zelf kiezen betekent niet dat alle veiligheids- en evidence-regels verdwijnen.

## 28. Autonomie versus routeadvies

Mees mag adviseren:

> Dit lijkt nu een goede volgende stap.

Maar het productontwerp moet waar passend ruimte laten voor keuze.

Adaptiviteit is begeleiding, geen rails waar het kind nooit vanaf mag.

## 29. Geen verborgen straf

De engine gebruikt geen mechanismen zoals:

- moeilijkere vragen als straf;
- extra oefeningen omdat iemand stopte;
- verlies van voortgang na hulp;
- blokkeren van leuke onderdelen na fouten.

Interventies hebben een onderwijsdoel.

## 30. Moeilijkheid

Moeilijkheid is multidimensionaal.

De engine kan relevante vraagfeatures aanpassen, bijvoorbeeld:

- getalbereik;
- wel/geen tientaloverschrijding;
- aantal stappen;
- taalbelasting;
- abstractieniveau;
- representatie.

Geen enkel universeel difficulty-getal hoeft alle vraagtypen te sturen.

## 31. Vraagselectie

De engine kiest eerst semantische requirements.

Bijvoorbeeld:

    learning_goal: LG-...
    purpose: independent_reassessment
    avoid_question_family: QF-previous
    support_level: none
    preferred_representation: symbolic

Een aparte question selector kiest daarna een concrete geschikte vraag of genereerbare instance.

Zo blijft beslislogica los van contentopslag.

## 32. Geen UI-beslissingen

De Adaptive Engine zegt bijvoorbeeld:

    change_representation → number_line

Niet:

    toon een blauwe kaart van 320px breed met een lijn op y=180

Presentatie blijft verantwoordelijkheid van de software/designlaag.

## 33. Uitlegbaarheid

Iedere beslissing bevat een reason.

Conceptueel:

    action: check_prerequisite
    reason_codes:
      - repeated_uncertainty
      - prerequisite_state_unknown
      - prerequisite_relation_required

Hiermee kunnen we later vragen beantwoorden als:

> Waarom kreeg dit kind deze opdracht?

zonder de beslissing achteraf te verzinnen.

## 34. Geen kindlabels in reason codes

Reason codes beschrijven de toestand van bewijs of route.

Goed:

    insufficient_independent_evidence

Niet:

    weak_student

Goed:

    repeated_incorrect_on_goal

Niet:

    careless

## 35. Prioriteiten bij meerdere doelen

Wanneer meerdere leerdoelen kandidaat zijn, gebruikt de orchestrator onderwijskundige prioriteiten.

Conceptueel:

1. benodigde prerequisite die verdere voortgang blokkeert;
2. actief onzeker kernleerdoel;
3. geplande hermeting;
4. onderhoud;
5. passende nieuwe progressiestap.

De exacte prioritering wordt met dummyprofielen getest.

## 36. Geen eindeloze prerequisite-lus

De engine bewaakt een maximale diagnostische diepte binnen één route.

Als A afhankelijk is van B en B van C, springt Mees niet onbeperkt achteruit.

Bij te veel onzekerheid kan een bredere diagnostische sessie of menselijke hulp nuttiger zijn.

## 37. Conflicterend bewijs

Bij conflict kiest de engine een actie met hoge informatiewaarde.

Niet automatisch:

    nog vijf standaardvragen

Wel bijvoorbeeld:

    één nieuwe onafhankelijke vraag
    andere passende context
    korte prerequisite-check
    later reassessment

## 38. Informatiewaarde

Een kernprincipe:

> Als we iets nog niet weten, kies dan liever een kleine actie die onderscheid maakt tussen plausibele verklaringen dan veel acties die hetzelfde signaal herhalen.

MVP 1 implementeert dit regelgebaseerd, niet via probabilistische AI.

## 39. Foutpatroon-hypothese testen

Wanneer later een geldige hypothese bestaat, kan de engine een diagnostische actie kiezen die het patroon helpt toetsen.

    hypothesis
      ↓
    diagnostic question
      ↓
    observation
      ↓
    hypothesis strengthened / weakened / unresolved

Een hypothese bepaalt niet automatisch de uitleg vooraf, omdat dat de meting kan beïnvloeden.

## 40. Rustiger scherm

Een kind of ouder kan waar ondersteund een rustigere presentatie kiezen.

Dit is een UI-/toegankelijkheidsvoorkeur en geen mastery-signaal.

De Adaptive Engine gebruikt dit niet als cognitief label.

## 41. Read-aloud

Voorlezen is ondersteuning en toegankelijkheid.

Het gebruik ervan wordt niet standaard als zwakker bewijs gezien tenzij luisteren/lezen zelf expliciet onderdeel van het gemeten leerdoel is.

## 42. Stoppen

Een kind mag stoppen.

Een stop-event betekent:

    session/attempt stopped

Niet automatisch:

    frustrated
    unmotivated
    unable

De volgende sessie kan de route passend hervatten.

## 43. Multi-device

De engine baseert beslissingen op server-side state.

Twee apparaten mogen niet onafhankelijk tegenstrijdige routes als waarheid opslaan.

Bij gelijktijdige events worden Learning Events eerst veilig verwerkt en wordt Learner State opnieuw afgeleid voordat een nieuwe belangrijke beslissing wordt bevestigd.

## 44. Offline synchronisatie

Later offline verzamelde events behouden timestamps, event IDs en context.

Na synchronisatie kan state opnieuw worden berekend.

Een oude offline beslissing mag nieuwere server-evidence niet stilletjes overschrijven.

## 45. Engineversie

Iedere beslissing bewaart:

    adaptive_engine_version: 1

Hierdoor kunnen we later reconstrueren welke regels een actie hebben veroorzaakt.

## 46. Beslissingslog

Voor belangrijke adaptieve keuzes bewaren we minimaal:

    decision_id
    child_id
    timestamp
    active_learning_goal
    learner_state_reference
    selected_action
    reason_codes
    relevant_evidence_refs
    adaptive_engine_version

Geen volledige interne debugdump met onnodige persoonsgegevens.

## 47. Simulaties vóór echte kinderen

We testen de engine met fictieve leerlingprofielen.

Minimaal:

### A. Onbekend nieuw doel
Verwacht: kleine informatieve startset.

### B. Drie vergelijkbare successen in één sessie
Verwacht: niet automatisch likely_mastered; variatie/tijdspreiding overwegen.

### C. Fout → hint → succes
Verwacht: positief leerbewijs; later zelfstandig meten.

### D. Herhaald fout in dezelfde representatie
Verwacht: niet eindeloos herhalen; andere passende interventie.

### E. Prerequisite onbekend
Verwacht: gerichte prerequisite-check.

### F. Prerequisite blijkt goed
Verwacht: terug naar actief doel zonder verzonnen diagnose.

### G. Tegenstrijdig bewijs
Verwacht: diagnostische hermeting.

### H. Waarschijnlijk beheerst
Verwacht: vooruit of later onderhoud, niet blijven drillen.

### I. Automatische interventies uitgeput
Verwacht: tutorhulp kan kandidaat worden.

### J. Ouder weigert tutor
Verwacht: alternatieve route, geen negatieve evidence.

### K. Tutorinterventie
Verwacht: later zelfstandige hermeting.

### L. Technische fout
Verwacht: geen negatieve masteryconclusie.

### M. Kind stopt
Verwacht: neutraal stop-event en later hervatbare route.

## 48. Tests als productregel

Belangrijke adaptieve beslissingen krijgen geautomatiseerde scenario-tests.

Een wijziging die een scenario-uitkomst verandert moet zichtbaar maken:

- welke regel veranderde;
- waarom;
- welke scenario's anders reageren;
- of het contract/document moet worden bijgewerkt.

Zo voorkomen we dat een kleine codewijziging ongemerkt de onderwijslogica verandert.

## 49. Nog niet vastgezet

We moeten met dummydata nog bepalen:

- concrete mastery-thresholds;
- aantal pogingen voordat representatie wisselt;
- wanneer een prerequisite-check voldoende is;
- maximale diagnostische diepte;
- tutortriggerdrempels;
- sessiebudget;
- maintenancefrequentie;
- recencyregels;
- exacte prioritering in "Voor jou vandaag";
- selectie tussen digitale en offline acties.

Deze waarden horen pas definitief te worden nadat scenario's zijn doorgerekend en onderwijsinhoudelijk beoordeeld.

## 50. Implementatiescheiding

De uiteindelijke code hoort minimaal conceptueel gescheiden verantwoordelijkheden te hebben:

    mastery evaluator
    adaptive decision engine
    question selector
    session orchestrator
    intervention tracker
    tutor trigger
    event writer

Niet één enorme functie die alles tegelijk doet.

## 51. Ontwerpprincipe

**De Adaptive Engine probeert niet zoveel mogelijk opdrachten te kiezen. Hij kiest de kleinste volgende actie die op dat moment waarschijnlijk de meeste onderwijswaarde of relevante informatie oplevert, en weet wanneer stoppen de beste volgende stap is.**
