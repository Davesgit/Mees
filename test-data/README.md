# Mees test-data

Deze map bevat uitsluitend synthetische data voor het ontwerpen en testen van de Mees-leermotor.

## Bestanden

- \`LEARNING-GOALS-MVP.json\`: kleine kunstmatige leerdoelgraaf.
- \`QUESTIONS-MVP.json\`: 26 gecontroleerde testvragen.
- \`SIMULATION-PROFILES.json\`: scenario's waarmee Mastery Model en Adaptive Engine worden getest.

## Belangrijk

Deze data is **geen gevalideerde Nederlandse leerlijn** en mag niet stilzwijgend als productieonderwijscontent worden gepubliceerd.

De doelen en vragen zijn bewust klein gehouden om technische en pedagogische engine-eigenschappen zichtbaar te maken.

## Wat we hiermee testen

Onder andere:
- onvoldoende bewijs;
- repetitie versus variatie;
- spreiding over sessies;
- zelfstandig versus ondersteund succes;
- representatiewissel;
- prerequisite-check;
- tegenstrijdig bewijs;
- technische invalidatie;
- tutorinterventie;
- ouder weigert tutor;
- stoppen zonder psychologische inferentie.

## Volgende technische stap

Bouw een simulator die deze fixtures omzet naar:
1. Learning Events;
2. evidence;
3. Learner State;
4. Next Best Action;
5. inspecteerbare reason codes.

De simulator gebruikt geen echte kindaccounts of productiegegevens.
