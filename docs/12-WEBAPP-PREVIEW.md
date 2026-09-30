# Mees webapp preview

De repository bevat nu een echte Vite + React app-shell bovenop de bestaande headless oefenengines.

De eerste browserflow gebruikt synthetische vragen en toont:
- Basic numeric input;
- rustige feedback en hint;
- Number Line;
- voortgang;
- Stoppen;
- responsive Mees-styling.

Dit is nog geen productieflow. Opslag, accounts en echte kinddata zijn bewust niet aangesloten.

## Infrastructuurmoment

Vercel is vanaf dit punt nuttig: de app kan nu als browserpreview worden gebouwd en gedeployed.

Supabase is nog niet nodig. Dat volgt pas wanneer de browserflow goed genoeg is om Session State en Learning Events centraal te bewaren.

## Volgende stap

1. Vercel-preview koppelen.
2. Browserflow visueel beoordelen tegen het Design System en de mockups.
3. UI koppelen aan de volledige Session Engine in plaats van de vaste demo-volgorde.
4. Pas daarna het Supabase-datamodel ontwerpen.
