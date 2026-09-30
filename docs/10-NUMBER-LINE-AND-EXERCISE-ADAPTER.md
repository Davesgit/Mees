# Number Line Engine en Exercise Adapter

De tweede headless oefenengine is toegevoegd.

## Number Line Engine

De engine werkt uitsluitend met semantische waarden. Pixels horen bij de toekomstige renderer en worden niet als leerbetekenis opgeslagen.

Ondersteund:
- waarde selecteren;
- snapping naar betekenisvolle stappen;
- semantische sprongen toevoegen;
- laatste sprong verwijderen;
- antwoord valideren;
- hints;
- ongeldige ranges afwijzen.

Een route als 36 → +4 → 40 → +4 → 44 kan daardoor als betekenisvolle strategie worden vastgelegd zonder pointermoves of pixelcoördinaten te bewaren.

## Exercise Adapter

Basic en Number Line hebben nu één gemeenschappelijke ingang:

    Question
       ↓
    startExercise
       ↓
    ExerciseAttempt
       ↓
    reduceExercise(command)
       ↓
    exerciseStatus

De Session Engine hoeft hierdoor later niet te weten hoe ieder oefentype intern werkt.

Nieuwe oefentypen zoals klok, geld, blokken en breuken kunnen dezelfde grens gebruiken.

## Architectuurgrens

De adapter vertaalt interactie. Hij bepaalt geen mastery en kiest geen volgende onderwijsactie. De learning engine blijft eigenaar van de leerroute.

## Volgende stap

De eerste UI-slice kan nu klein worden gehouden: Exercise Shell + Basic renderer + Number Line renderer, gekoppeld aan synthetische data en de headless engines. Daarna volgt visuele vergelijking met het Mees Design System voordat database/auth wordt toegevoegd.
