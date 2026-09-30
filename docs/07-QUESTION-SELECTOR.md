# Question Selector

De Adaptive Engine en Question Selector hebben verschillende verantwoordelijkheden.

- Adaptive Engine: welke onderwijsactie is nu zinvol?
- Question Selector: welke concrete beschikbare vraag past bij die actie?

De eerste selector filtert op leerdoel, kan recent gebruikte vragen vermijden, kan een gewenste representatie kiezen en kan variatie in vraagfamilie prefereren.

De selectie is voorlopig deterministisch: dezelfde invoer geeft dezelfde keuze. Dat maakt simulatie en debugging eenvoudig.

## Niet in de selector

De selector bepaalt geen mastery, verzint geen leerdoelen, diagnosticeert geen denkfouten en gebruikt geen engagementscore.

## Belangrijke beperking

De synthetische testbank is klein. Als er geen perfecte match is, valt de selector alleen terug op een geldige vraag binnen hetzelfde doel. Productiegedrag vereist later rijkere metadata voor moeilijkheid, semantische variatie en exposure.

## Volgende stap

Question Selector koppelen aan de Session Orchestrator, Session Budget daadwerkelijk in de beslisketen plaatsen en daarna de eerste end-to-end sessie-engine bouwen.
