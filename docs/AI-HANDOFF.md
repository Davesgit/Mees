# AI Handoff

## Mees in één zin
Mees is een gratis, rustig en uitlegbaar leerplatform voor het Nederlandse basisonderwijs dat leren optimaliseert, niet schermtijd.

## Bron van waarheid
Deze repository is de technische bron van waarheid. Verzin ontbrekende beslissingen niet. Meld conflicten tussen implementatie en contracten.

## Fundamentele regels
- Clean build. Oude Mees-code en data zijn alleen bronmateriaal.
- Software, onderwijscontent, leerdata en toekomstige AI blijven gescheiden.
- Bewijsketen: Learning Goal → Question → Learning Event → Evidence → Learner State → Adaptive Engine → Next Action.
- Een fout antwoord is een observatie, geen diagnose.
- Geen permanente leerstijl-labels.
- Hints en andere representaties zijn hulp, geen straf.
- Onzekerheid is een geldige uitkomst.
- Geen punten, sterren, streaks of ranglijsten voor engagement.
- Stoppen blijft zichtbaar en sessies mogen bewust eindigen.
- Tutorinterventie hoort bij MVP 1, zonder marktplaats.
- Privacyminimalisatie: verzamel alleen gegevens met een concrete functie.
- De kern moet zonder LLM kunnen functioneren.

## Huidige technische staat
De fundering en eerste verticale slice bestaan:
- contracts voor Learning Goal, Question, Learning Event, Learner State en Tutor Intervention;
- Mastery Model, Adaptive Engine, Intervention Ladder en goal graph;
- synthetic simulator, journey goldens en session budget;
- Question Selector;
- Session Orchestrator, Session Engine, Session State en Session Loop;
- Basic Exercise Engine;
- Number Line Engine;
- gemeenschappelijke Exercise Adapter;
- React + Vite webapp;
- Vercel-preview gekoppeld;
- webapp gebruikt de Session Engine om volgende vragen te plannen.

De eerste webflow gebruikt uitsluitend synthetische testdata. Er is nog geen productiecurriculum en geen echte kinddata.

## Recente onderwijslogische beslissing
Een onbekende prerequisite veroorzaakt niet automatisch een prerequisite-check bij de start van een nieuw leerdoel. Prerequisites zijn gerichte diagnostische zijpaden wanneer actuele observaties daar aanleiding toe geven, geen toegangsexamen.

## UI-richting
Warm, rustig, vriendelijk en helder. Eén primaire taak per scherm. Minimaal 44px touch targets, zichtbare focus, kleur nooit als enige betekenisdrager, reduced-motion respecteren. Groep 3–5 kan warmer/speelser zijn; groep 6–8 geleidelijk rustiger.

De Number Line wordt semantisch aangestuurd. Onderwijscontent bevat waarden en stappen, geen pixels. De browserrenderer berekent de positie responsief.

## Infrastructuur
- GitHub: code en documentatie.
- Vercel: preview is nu relevant en aangesloten.
- Supabase: bewust nog niet aangesloten.
- Supabase wordt relevant zodra de sessieflow stabiel genoeg is voor centrale accounts, Session State, Learning Events en learner data. Ontwerp eerst datamodel, autorisatie/RLS, retentie en omgevingsscheiding.

## Niet definitief
Mastery-drempels, evidence weighting, recency, tutortriggers, echte leerdoelgranulariteit, curriculumkoppelingen en database/RLS-architectuur zijn nog te valideren. Synthetic waarden zijn geen onderwijswaarheid.

## Eerstvolgende werk
1. Maak de volledige adaptieve browserflow robuust: antwoord → event → state → actie → concrete vraag.
2. Maak representation change zichtbaar en correct, inclusief Number Line.
3. Implementeer prerequisite als tijdelijk zijpad en keer daarna terug naar het oorspronkelijke doel.
4. Voeg browservriendelijke tests toe voor deze verticale flow.
5. Beoordeel de Vercel-preview visueel.
6. Ontwerp daarna pas het Supabase-datamodel.

## Verplichte verdieping
Lees bij substantiële wijzigingen de relevante bronbestanden, minimaal:
- docs/00-MEES-BLUEPRINT.md
- docs/01-ARCHITECTURE.md
- design/DESIGN-SYSTEM.md
- contracts/*
- learning-engine/*
- docs/03-IMPLEMENTATION-BOUNDARY.md
- docs/08-END-TO-END-SESSION-ENGINE.md
- docs/09-SESSION-STATE-AND-BASIC-ENGINE.md
- docs/10-NUMBER-LINE-AND-EXERCISE-ADAPTER.md
- docs/13-SESSION-ENGINE-WEB-INTEGRATION.md

## Overdrachtsregel
Laat na werk in GitHub vastgelegd achter wat is veranderd, waarom, welke contracten geraakt zijn, welke aannames synthetisch zijn en wat logisch volgt. Een volgend model hoeft de chatgeschiedenis niet te raden.
