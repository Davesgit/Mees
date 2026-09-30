# Number Line Exercise Engine

> Status: MVP 1 exercise contract

## 1. Doel

De Mees Number Line is een herbruikbare onderwijsengine voor:
- getallen lokaliseren;
- getallen aflezen;
- sprongen maken;
- optellen;
- aftrekken;
- later andere geschikte getalrelaties.

Hij wordt nieuw gebouwd. Oude visuele implementaties zijn geen technische basis.

## 2. Semantiek

Voorbeelden van parameters:

    mode: locate | read | jump
    min
    max
    start
    target
    delta
    major_step
    minor_step
    snap_rule
    labels

De vraagdata beschrijft betekenis. De component bepaalt pixels en layout.

## 3. Geen pixeldata in content

Niet opslaan in de vragenbank:

    x: 142
    lineWidth: 318
    markerLeft: 62%

Wel:

    min: 0
    max: 100
    target: 35
    major_step: 10

## 4. Responsive rendering

De engine berekent visuele posities uit:
- semantische range;
- beschikbare breedte;
- gewenste labeldichtheid;
- touch targets.

Bij kleine schermen mogen minder labels zichtbaar zijn zolang de onderwijsbetekenis intact blijft.

## 5. Interaction modes

### Locate
Kind plaatst/selecteert een getalpositie.

### Read
Mees toont een positie; kind geeft het getal.

### Jump
Kind bouwt één of meer sprongen vanaf een startpunt.

De concrete interactie moet zowel touch als toetsenbord ondersteunen.

## 6. Meaningful steps

Bij jump mode mogen betekenisvolle stappen worden vastgelegd.

Bijvoorbeeld:

    start: 47
    jumps:
      - +3
      - +3
    end: 53

Dit kan strategie-informatie opleveren.

Niet loggen:
- iedere pointermove;
- iedere pixelpositie;
- hovergeschiedenis.

## 7. Snapping

Snapping helpt motorische precisie los te koppelen van rekenbegrip.

De snapregels zijn voorspelbaar.

Een kind mag niet fout gerekend worden omdat een vinger één pixel naast een mathematisch bedoelde positie landde.

## 8. Hints

Mogelijke interventies:
- teksthint;
- relevant tussenpunt zichtbaar maken;
- tientalmarkering benadrukken;
- startpunt explicieter tonen;
- begeleide eerste sprong;
- uitleg met volledige route.

Hints mogen het antwoord niet eerder onthullen dan het gekozen support level bedoelt.

## 9. Evidence

Een correcte eindpositie is niet altijd het enige interessante bewijs.

Waar het leerdoel dat rechtvaardigt kan Mees ook betekenisvolle sprongen gebruiken als observatie.

Maar strategie wordt niet als verplicht beschouwd wanneer alleen het eindresultaat het leerdoel is.

## 10. Accessibility

Alternatieven voor drag:
- pijltjestoetsen;
- plus/min-knoppen waar passend;
- directe numerieke invoer als equivalent wanneer dat dezelfde vaardigheid meet.

Screenreadertekst beschrijft schaal en huidige positie begrijpelijk.

## 11. Visual design

De getallenlijn is rustig en contrastrijk.

- duidelijke hoofdlijn;
- consistente ticks;
- geselecteerde positie duidelijk;
- grote interactieve marker;
- geen decoratieve ruis;
- kleur nooit enige betekenisdrager.

## 12. Range

De engine mag niet aannemen dat iedere lijn 0–100 is.

Ranges en stappen komen uit semantische parameters.

Later moeten ook negatieve getallen, decimalen of breuken mogelijk zijn zonder een volledig nieuwe visuele architectuur, mits onderwijscontracten dit ondersteunen.

## 13. Events

Minimaal:
- question_presented;
- semantic_step_added waar relevant;
- semantic_step_removed waar relevant;
- answer_submitted;
- hint_requested;
- representation_changed;
- attempt_completed;
- attempt_stopped.

## 14. Validatie

Validatie werkt op semantische waarden, niet op pixels.

Voor locate:
    selected_value == target

Voor jump:
    resulting_value en eventueel vereiste semantische constraints.

## 15. Tests

Minimaal:
- locate;
- read;
- addition jump;
- subtraction jump;
- mobile;
- keyboard;
- snapping;
- resize;
- long labels;
- hint;
- guided jump;
- reduced motion;
- duplicate submit;
- invalid parameters.

## 16. Ontwerpprincipe

**De Mees Number Line maakt het denken zichtbaar zonder motorische precisie of schermpixels te verwarren met rekenbegrip.**
