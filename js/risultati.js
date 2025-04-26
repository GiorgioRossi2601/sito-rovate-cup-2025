// js/risultati.js

// Risultati delle partite dei gironi
const risultatiPartite = {
    gironeA: [
        { squadra1: 0, squadra2: 3, risultato: "-", data: "19/05/2025", ora: "20:30" },
        { squadra1: 1, squadra2: 2, risultato: "-", data: "19/05/2025", ora: "21:30" },
        { squadra1: 0, squadra2: 1, risultato: "-", data: "23/05/2025", ora: "20:30" },
        { squadra1: 2, squadra2: 3, risultato: "-", data: "23/05/2025", ora: "21:30" },
        { squadra1: 0, squadra2: 2, risultato: "-", data: "28/05/2025", ora: "20:30" },
        { squadra1: 1, squadra2: 3, risultato: "-", data: "28/05/2025", ora: "21:30" }
    ],
    gironeB: [
        { squadra1: 0, squadra2: 3, risultato: "-", data: "21/05/2025", ora: "20:30" },
        { squadra1: 1, squadra2: 2, risultato: "-", data: "21/05/2025", ora: "21:30" },
        { squadra1: 0, squadra2: 1, risultato: "-", data: "26/05/2025", ora: "20:30" },
        { squadra1: 2, squadra2: 3, risultato: "-", data: "26/05/2025", ora: "21:30" },
        { squadra1: 0, squadra2: 2, risultato: "-", data: "30/05/2025", ora: "20:30" },
        { squadra1: 1, squadra2: 3, risultato: "-", data: "30/05/2025", ora: "21:30" }
    ]
};

// Risultati delle fasi finali
const risultatiFaseFinale = {
    eliminatorie: [
        { match: "E1", squadra1: "", squadra2: "", risultato: "-" }, // 3A vs 4B
        { match: "E2", squadra1: "", squadra2: "", risultato: "-" }  // 3B vs 4A
    ],
    quarti: [
        { match: "Q1", squadra1: "Vincitore E1", squadra2: "2B", risultato: "-" },
        { match: "Q2", squadra1: "Vincitore E2", squadra2: "2A", risultato: "-" }
    ],
    semifinali: [
        { match: "S1", squadra1: "Vincitore Q1", squadra2: "1A", risultato: "-" },
        { match: "S2", squadra1: "Vincitore Q2", squadra2: "1B", risultato: "-" }
    ],
    finali: [
        { match: "Finale 3° Posto", squadra1: "Perdente S1", squadra2: "Perdente S2", risultato: "-" },
        { match: "Finalissima", squadra1: "Vincitore S1", squadra2: "Vincitore S2", risultato: "-" }
    ]
};
