# Session Orchestrator

De orchestrator verbindt Learning Events, Intervention History en de Goal Graph met Evidence, Learner State en Next Best Action.

## Waarom Intervention History apart staat

Een hint, uitleg of representatiewissel is niet automatisch negatief bewijs over kennis. Daarom bewaart Mees twee verschillende verhalen:

- Evidence: wat ondersteunt een conclusie over het leerdoel?
- Intervention History: welke hulp en routes zijn al geprobeerd?

Zo kan Mees weten dat hulp al is geprobeerd zonder die hulp als strafpunt op mastery te zetten.

## Eerste orchestrator

De eerste uitvoerbare versie:
- deriveert evidence;
- berekent Learner State;
- vat interventies samen;
- controleert required prerequisites;
- detecteert herhaalde incorrecte antwoorden in dezelfde representatie;
- kan een representatiewissel kiezen;
- kan tutorhulp voorstellen wanneer expliciete voorwaarden zijn vervuld;
- geeft één Next Best Action terug.

## Bewust nog open

Definitieve mastery-drempels, herhalingslimieten, vraagselectie, sessiebudget, prerequisite-terugkeer, autorisatie, persistence en productiecurriculum worden niet stilzwijgend in deze laag vastgezet.

## Volgende laag

Golden assertions voor alle twaalf journeys, daarna Question Selector en Session Budget.
