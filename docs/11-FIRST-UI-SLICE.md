# Eerste UI-slice

De eerste presentatie-laag voor een Mees-oefensessie staat nu als framework-onafhankelijke UI-slice in de repository.

Onderdelen:
- Exercise View Model;
- Exercise Shell;
- Basic renderer;
- Number Line renderer;
- eerste CSS-tokens en responsive styling;
- rustige feedback, hint en progress;
- zichtbare Stoppen-actie;
- focus-visible en reduced-motion basis.

De UI leest de headless Exercise Engines en bevat zelf geen masterylogica.

## Waarom nog geen React/Next.js

De repository heeft op dit moment bewust nog geen webframework. Door eerst de grens tussen leermotor en presentatie te testen, voorkomen we dat frameworkkeuzes de onderwijsarchitectuur gaan bepalen.

De eerstvolgende infrastructuurkeuze is daarom het app-framework en de previewomgeving. Zodra we de interactieve UI als echte webapp willen openen, wordt Vercel relevant. Supabase is daarna nodig wanneer sessies, accounts en leerdata centraal opgeslagen moeten worden.

## Volgende stap

App-shell kiezen en bouwen, de UI-slice interactief maken en als preview deploybaar maken. Dit is het eerste natuurlijke moment om Vercel te koppelen. Supabase is nog niet nodig.
