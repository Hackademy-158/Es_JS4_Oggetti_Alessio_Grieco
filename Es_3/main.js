// ! Esercizio 3 :

// creare un oggetto bowling con una proprietà che comprenda una lista di giocatori con un nome e i relativi punteggi, ed abbia diverse funzionalità tra cui:

// creare 10 punteggi casuali per ogni giocatore:
// Suggerimento: questo metodo dovra’ ciclare tutti i giocatori, presenti nell’oggetto bowling, e aggiungere ad ogni proprieta’ scores, dieci punteggi casuali ad ogni giocatore
// Utilizzare l’istruzione per generare un punteggio casuale da 1 a 10: Math.floor(Math.random() * (10 - 1 +1) + 1)
// trovare il punteggio finale per ogni giocatore:
// Suggerimento: ordinare l’array in ordine Decrescente (Attenzione! E’ un array di oggetti: Array.prototype.sort() - JavaScript | MDN )
// determinare il vincitore
// EXTRA: impostare una classifica dei giocatori
// EXTRA: aggiungere un nuovo giocatore


// Dati di partenza:
// let bowling = {

//     'players': [

//         {'name': 'Livio', 'scores': []},

//         {'name': 'Paola', 'scores': []},

//         {'name': 'Filippo', 'scores': []},

//         {'name': 'Giuseppe', 'scores': []}

//     ],

//     ...

// }