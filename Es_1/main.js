let persona = {
    "nome": 'Alessio',
    "cognome": 'Grieco',
    "età": 24,
    "saluta": function() {
        console.log(`Ciao, mi chiamo ${this.nome} ${this.cognome} e ho ${this.età} anni!`);
    }
}

//^Stampo l'oggetto, ed il risultato della sua funzione
console.log(persona);
persona.saluta(); 
