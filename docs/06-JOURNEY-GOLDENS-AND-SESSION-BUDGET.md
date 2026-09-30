# Journey Goldens en Session Budget

De twaalf synthetische leerlingprofielen zijn nu gekoppeld aan automatische journey-tests. De tests controleren de belangrijkste invariant per profiel, van één eerste succes tot tutorweigering en stoppen.

## Waarom dit belangrijk is

Een losse functie kan correct lijken terwijl de combinatie van functies toch ongewenst gedrag oplevert. Journey-tests controleren daarom de hele keten na opeenvolgende gebeurtenissen.

## Session Budget

Ook stoppen is een geldige adaptieve beslissing. Daarom is een eerste expliciet Session Budget toegevoegd.

De huidige waarden zijn uitsluitend simulatiekalibratie:
- maximaal 5 betekenisvolle leerblokken;
- maximaal 3 pogingen op hetzelfde knelpunt voordat dezelfde oefenroute wordt beëindigd.

Deze aantallen zijn geen onderwijsnorm en moeten later worden gekalibreerd.

Het budget straft niet. Bij een limiet retourneert de engine end_session met een uitlegbare reason code.

## Volgende stap

Question Selector: de Adaptive Engine kiest semantisch wat nodig is; de selector kiest daarna een concrete geldige vraag die past bij leerdoel, gewenste variatie, representatie en eerdere blootstelling.
