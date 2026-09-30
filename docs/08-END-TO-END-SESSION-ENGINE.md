# End-to-End Session Engine

De eerste end-to-end sessiemotor koppelt nu vier eerder losse onderdelen:

    Session Orchestrator
          ↓
    Session Budget
          ↓
    Next Best Action
          ↓
    Question Selector
          ↓
    concrete vraag of geen vraag

Een beslissing zoals `change_representation` kan daardoor leiden tot een concrete number-line-vraag. Een `check_prerequisite` selecteert een vraag uit het prerequisite-doel. Als het sessiebudget bereikt is, wint `end_session` en wordt bewust geen nieuwe vraag geselecteerd.

## Uitlegbaarheid

Iedere Session Plan bevat apart:
- de Learner State;
- de gekozen actie;
- reason codes voor die actie;
- de concrete vraag;
- reason codes voor de vraagselectie;
- het aantal gebruikte evidence-items.

## Nog niet productie-klaar

Dit is een deterministische simulatiekern. De drempels, het sessiebudget en de kleine synthetische vragenbank zijn testmateriaal. Er is nog geen database, auth, echte kinddata of productiecurriculum gekoppeld.

## Volgende technische stap

De sessiemotor krijgt een expliciete Session State en reducer/event-loop. Daarna kunnen Basic Exercise Engine en Number Line Engine aan dezelfde sessie-interface worden gekoppeld.
