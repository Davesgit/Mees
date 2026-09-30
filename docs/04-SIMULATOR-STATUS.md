# Simulator status

De eerste Mees-simulator kan nu synthetische profielen uit `test-data` door de keten sturen:

    profile fixture → Learning Events → Evidence → Learner State → prerequisite selection → Next Best Action

Toegevoegd zijn prerequisite-selectie uit de leerdoelgraaf, tutorobservaties met bronbehoud en uitgebreidere golden tests.

De huidige mastery-drempels blijven testkalibratie en zijn geen gevalideerde onderwijsnorm.

## Volgende laag

Intervention history wordt een expliciet domeinmodel. Daarna bouwen we een session orchestrator die na iedere betekenisvolle stap opnieuw beslist en assertions voor alle fixtureprofielen uitvoert.
