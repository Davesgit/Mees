# Webapp gekoppeld aan Session Engine

De Vercel-preview gebruikt niet langer een vaste lijst van twee demo-vragen. Na ieder afgerond leerblok vraagt de browserflow de bestaande Session Engine om de volgende actie en concrete vraag.

Een geldig antwoord wordt een Learning Event. De sessietoestand bewaart dit event en de volgende planning loopt opnieuw door evidence, mastery, adaptive action en question selection.

## Prerequisite-correctie

Een nieuw leerdoel controleert niet automatisch eerst onbekende voorkennis. Een prerequisite-check wordt pas relevant wanneer actuele observaties extra diagnostische informatie rechtvaardigen.

Prerequisites zijn diagnostische zijpaden, geen toegangsexamen voor een leerdoel.

## Preview en opslag

De flow is nog synthetisch en tijdelijk in browsergeheugen. Refresh wist de sessie. Dat is nu bewust.

Vercel is aangesloten. Supabase is nog niet nodig. Het Supabase-moment komt wanneer de sessieflow stabiel genoeg is om Learning Events en Session State centraal en duurzaam op te slaan.
