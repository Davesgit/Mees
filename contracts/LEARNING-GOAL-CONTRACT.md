# Learning Goal Contract

> Status: ontwerpcontract  
> Doel: vastleggen wat Mees onder een leerdoel verstaat en hoe leerdoelen onderling verbonden zijn.

## 1. Waarom dit contract bestaat

Een leerdoel is een stabiele onderwijseenheid waar vragen, bewijs, voortgang en adaptieve beslissingen aan gekoppeld kunnen worden.

Mees redeneert niet primair vanuit hoofdstukken of vaste routes zoals groep 4 → hoofdstuk 6 → vraag 17, maar vanuit een netwerk van leerdoel → benodigde voorkennis → bewijs van begrip → mogelijke volgende leerdoelen.

Een groep of leerjaar helpt bij ordening en presentatie, maar bepaalt niet automatisch wat een individueel kind wel of niet kan.

## 2. Wat een leerdoel wel en niet is

Een leerdoel beschrijft een concrete vaardigheid, kennis of begrip dat afzonderlijk genoeg is om er betekenisvol bewijs voor te verzamelen.

Een leerdoel is niet een losse vraag, werkblad, hoofdstuknummer, UI-scherm, oefenengine, diagnose van een kind, vooraf verzonnen denkfout of beheersingsscore van een individueel kind.

Leerdoelen behoren tot **Onderwijs**. Individuele beheersing en observaties behoren tot **Leerdata**.

## 3. Identiteit

Ieder leerdoel krijgt een permanente technische ID die niet verandert wanneer titel of beschrijving wordt aangepast. Bijvoorbeeld `LG-REK-OPT-0012`.

De exacte conventie kan later worden vastgesteld. De identifier moet uniek en stabiel zijn en niet afhankelijk zijn van een databasevolgnummer dat bij migratie kan veranderen.

## 4. Minimale velden

Een gepubliceerd leerdoel bevat minimaal:

```yaml
id: LG-REK-OPT-0012
subject: rekenen
domain: getallen
subdomain: optellen_en_aftrekken
title: Optellen over het tiental tot 100
child_title: Optellen over het tiental
description: >
  Het kind kan optellingen tot 100 oplossen waarbij
  een tientalgrens wordt overschreden.
success_criteria:
  - lost passende optellingen correct op
  - kan dit in meer dan één passende opgavevorm laten zien
group_guidance:
  from: 4
  to: 5
status: published
version: 1
```

Dit voorbeeld beschrijft de structuur, niet een definitief Nederlands curriculumdoel.

## 5. Granulariteit

Een leerdoel moet klein genoeg zijn om gericht op te kunnen handelen, maar niet zo klein dat iedere variant een apart leerdoel wordt.

"Kan optellen" is te breed. "Kan 47 + 6 uitrekenen" is een opgave, geen leerdoel. "Kan optellen over het tiental tot 100" kan een bruikbaar niveau van granulariteit zijn.

**Beslisregel:** we maken alleen een apart leerdoel wanneer het pedagogisch zinvol kan zijn dat een kind het ene doel wel beheerst en het andere nog niet, én wanneer Mees daar een andere volgende actie aan kan koppelen.

## 6. Succescriteria

Een leerdoel beschrijft welk soort gedrag als bewijs kan dienen. Succescriteria zijn geen individuele scores.

Het Learner State Contract bepaalt later hoeveel en welk bewijs nodig is om bij een specifiek kind tot een voldoende betrouwbare beheersingsinschatting te komen.

## 7. Groep is metadata, geen slot op de deur

Een leerdoel mag een indicatie bevatten van de groep(en) waarin het doorgaans relevant is. Dit betekent niet dat een jonger kind het nooit mag krijgen of dat een kind in de aangegeven groep het automatisch beheerst.

Het actuele leerlingmodel blijft leidend voor personalisatie.

## 8. Relaties tussen leerdoelen

Leerdoelen vormen samen een gerichte graaf. Mees ondersteunt minimaal:

- `required_prerequisite`: A is noodzakelijke voorkennis voor B.
- `supporting_prerequisite`: A helpt sterk bij B, maar is niet altijd strikt noodzakelijk.
- `progression`: B is een logische vervolgstap na A, zonder te stellen dat A de enige vereiste is.
- `related`: A en B zijn inhoudelijk verwant zonder noodzakelijke volgorde.

Als een doel structureel problemen geeft, kan Mees relevante prerequisites opnieuw onderzoeken.

## 9. Relaties zijn aparte onderwijsdata

Een relatie is conceptueel een eigen object:

```yaml
from_goal_id: LG-A
to_goal_id: LG-B
relation_type: required_prerequisite
strength: strong
rationale: >
  Onderwijskundige reden voor deze relatie.
status: reviewed
version: 1
```

Daardoor kunnen relaties afzonderlijk worden beoordeeld, gewijzigd en voorzien van herkomst.

## 10. Geen automatische waarheid

Een curriculum, methode, leerkracht of AI kan een relatie voorstellen. Dat maakt de relatie nog niet automatisch waar.

Relaties krijgen daarom een redactionele status, bijvoorbeeld draft → proposed → reviewed → published → revised. Bij belangrijke prerequisite-relaties moet kunnen worden vastgelegd waarom de relatie bestaat en waar deze vandaan komt.

## 11. Geen cycli in vereiste voorkennis

`required_prerequisite` mag geen onmogelijke cirkel veroorzaken waarbij A B vereist, B C vereist en C vervolgens A vereist. De publicatiecontrole moet zulke cycli detecteren.

Andere relatietypen, zoals `related`, mogen wel wederzijds zijn.

## 12. Representaties horen bij onderwijsbetekenis, niet bij UI

Een leerdoel kan aangeven via welke soorten representaties er zinvol bewijs voor verzameld kan worden, bijvoorbeeld `symbolic`, `number_line`, `blocks` of `verbal`.

Dit bepaalt niet hoe een component eruitziet. De concrete rendering behoort tot **Software**. Ook betekent het niet dat ieder kind alle representaties moet gebruiken.

## 13. Opgavetypen

Vragen verwijzen naar één primair leerdoel en kunnen waar nodig aanvullende leerdoelen raken.

```yaml
primary_learning_goal_id: LG-REK-OPT-0012
supporting_learning_goal_ids:
  - LG-REK-GETALBEGRIP-0007
```

We voorkomen dat één vraag zonder goede reden aan veel leerdoelen wordt gekoppeld, omdat het bewijs dan onduidelijk wordt.

## 14. Bewijs blijft buiten het leerdoel

Het Learning Goal Contract bevat geen gegevens zoals "Noor beheerst dit voor 82%", "Sam maakte dit gisteren fout" of "dit kind heeft denkfout X".

Dat hoort in Leerdata. Het leerdoel beschrijft de onderwijsstructuur; het leerlingmodel beschrijft wat Mees op basis van bewijs over een specifiek kind denkt te weten.

## 15. Denkfouten horen niet in dit contract

Een leerdoel krijgt geen verplichte lijst met vooraf bedachte denkfouten.

Werkelijke verkeerde antwoorden worden als observaties opgeslagen. Terugkerende patronen kunnen later leiden tot hypotheses en, na voldoende bewijs en eventuele menselijke validatie, tot een afzonderlijke Misconception Library.

Een gevalideerd foutpatroon kan aan één of meerdere leerdoelen gekoppeld worden, maar blijft een apart object.

## 16. Diagnostiek

Wanneer een kind moeite heeft met een doel kan Mees relevante voorwaarden onderzoeken. Het hoeft niet automatisch helemaal terug naar het begin van de leerlijn.

Diagnostische vervolgvragen worden ontworpen om onzekerheid te verkleinen, niet alleen om meer vragen te stellen.

## 17. Curriculumkoppeling

Mees moet leerdoelen kunnen koppelen aan externe curriculumbronnen zonder zijn interne structuur volledig afhankelijk te maken van één curriculumversie.

```yaml
curriculum_references:
  - framework: nader_te_bepalen
    external_id: nader_te_bepalen
    version: nader_te_bepalen
    relation: aligns_with
```

Daardoor kan een curriculum worden bijgewerkt terwijl de interne Mees-ID en historische leerlingdata stabiel blijven.

De actuele Nederlandse curriculumbronnen en precieze identifiers worden afzonderlijk onderzocht en gevalideerd voordat deze velden worden gevuld.

## 18. Herkomst en redactie

Een leerdoel moet uiteindelijk herleidbaar zijn. Metadata kan vastleggen wie of welke bron het doel heeft ingebracht, waarop het gebaseerd is, wie het heeft beoordeeld en wanneer.

Persoonsgegevens van kinderen komen hier nooit in terecht.

## 19. Versiebeheer

Een leerdoel kan inhoudelijk veranderen zonder dat historische leerdata haar betekenis verliest. Daarom gebruiken we een stabiele `learning_goal_id`, inhoudsversies, wijzigingshistorie en publicatiestatus.

Grote betekenisveranderingen kunnen aanleiding zijn om een nieuw leerdoel te maken in plaats van een bestaande ID stilzwijgend een andere betekenis te geven.

## 20. Verwijderen

Een gebruikt leerdoel wordt in principe niet hard verwijderd. Het kan bijvoorbeeld `deprecated`, `superseded` of `archived` worden en verwijzen naar een opvolgend leerdoel.

Zo blijven oude pogingen en analyses interpreteerbaar.

## 21. Validatieregels

Voor publicatie controleert Mees minimaal:

1. unieke stabiele ID;
2. onderwerp, domein, titel en beschrijving aanwezig;
3. minimaal één bruikbaar succescriterium;
4. geldige status en versie;
5. alle gekoppelde leerdoelen bestaan;
6. geldige relatietypen;
7. geen cyclus in `required_prerequisite`;
8. geen UI/CSS-informatie in onderwijscontent;
9. geen leerlinggegevens;
10. geen verplichte of onbewezen denkfoutdiagnoses.

## 22. Wat we bewust nog niet vastzetten

Enkele keuzes worden pas definitief nadat dit contract op een gevarieerde set echte rekenleerdoelen is getest:

- ideale granulariteit per rekendomein;
- definitieve ID-conventie;
- eventuele extra niveaus voor relation strength;
- benodigde curriculumkoppelingen;
- standaard representatietypen;
- behandeling van samengestelde leerdoelen.

## 23. Ontwerpprincipe

**Een leerdoel is een stabiel knooppunt in het onderwijsnetwerk van Mees. Het beschrijft wat geleerd kan worden en hoe het samenhangt met andere kennis, maar zegt nooit op zichzelf wat een individueel kind beheerst.**
