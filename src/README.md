# Executable learning-engine slice

Dit is de eerste kleine uitvoerbare implementatie van de Mees-leermotor.

## In code

- domeintypes voor Learning Events, Evidence, Learner State en Next Best Action;
- pure functie deriveEvidence;
- pure functie evaluateMastery;
- pure functie chooseNextAction;
- inspecteerbare simulator-run;
- golden tests voor belangrijke invarianten.

De waarden in DEFAULT_MASTERY_CONFIG zijn simulatiekalibratie, geen gevalideerde onderwijsdrempels.

De code gebruikt geen echte kinddata, database of AI API.

## Lokaal draaien

    npm install
    npm test
    npm run typecheck
    npm run sim

## Eerstvolgende uitbreidingen

1. JSON-fixtures uit test-data rechtstreeks in de simulator laden.
2. Alle simulatieprofielen automatisch uitvoeren.
3. Prerequisite-targetselectie koppelen aan de leerdoelgraaf.
4. Intervention history modelleren.
5. Masteryconfig kalibreren op golden scenarios.
6. Daarna pas UI-prototypes koppelen.
