# Session State en Basic Exercise Engine

Mees heeft nu een expliciete sessietoestand in plaats van alleen losse beslisfuncties.

Session State bewaart onder andere:
- root goal;
- actief goal;
- prerequisite stack;
- actieve vraag;
- events en interventions;
- session usage;
- status active/ended.

De reducer verandert deze toestand alleen via expliciete commands. Daardoor is de sessie reproduceerbaar en testbaar.

## Prerequisite-terugkeer

Wanneer de motor tijdelijk naar voorkennis gaat, wordt het oorspronkelijke doel op een stack gezet. Na de prerequisite kan de sessie expliciet terugkeren. Dit voorkomt dat een tijdelijk zijpad ongemerkt het hoofddoel vervangt.

## Basic Exercise Engine

Ook is de eerste headless Basic Engine toegevoegd voor numeric_input.

Hij ondersteunt:
- starten;
- numeriek antwoord indienen;
- lege invoer negeren als leerantwoord;
- incorrect antwoord;
- hint;
- opnieuw proberen;
- correct afronden.

Dit is bewust nog geen React-component. Eerst testen we de gedragslogica zonder visuele laag. Daarna kan dezelfde logica in de Mees-interface worden gerenderd.

## Volgende stap

De Number Line Engine wordt op dezelfde headless manier gebouwd. Daarna maken we één Exercise Adapter die Basic en Number Line via dezelfde sessie-interface aanstuurt. Vervolgens is de eerste echte UI-slice logisch en klein genoeg om te bouwen.
