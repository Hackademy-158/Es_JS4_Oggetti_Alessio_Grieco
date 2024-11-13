// ! Esercizio 2 :

let agenda = {
    contacts: [
        { 'firstname': 'Nicola', 'number': '3331111111' },
        { 'firstname': 'Lorenzo', 'number': '3332222222' },
        { 'firstname': 'Paola', 'number': '3333333333' },
        { 'firstname': 'Jenny', 'number': '3334444444' }
    ],

    //! Mostra contatti
    mostra: function () {
        if (this.contacts.length > 0) {
            console.log("Contatti dell'agenda:");
            this.contacts.forEach(contact => {
                console.log(`Nome: ${contact.firstname}, Numero: ${contact.number}`);
            });
        } else {
            console.log("L'agenda è vuota.");
        }
    },

    //! Cerca contatto
    cerca: function (firstname) {
        let contact = this.contacts.find(c => c.firstname == firstname);
        if (contact) {
            console.log(`Nome: ${contact.firstname}, Numero: ${contact.number}`);
        } else {
            console.log("Contatto non trovato.");
        }
    },

    //! Rimuovi un contatto
    rimuovi: function (firstname) {
        let index = this.contacts.findIndex(c => c.firstname === firstname);
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log(`${firstname} è stato eliminato dalla Rubrica.`);
        } else {
            console.log("Contatto non trovato.");
        }
    },

    //! Nuovo contatto
    nuovo: function (firstname, number) {
        let existingContact = this.contacts.find(c => c.firstname === firstname);
        if (existingContact) {
            console.log("Contatto già presente.");
        } else {
            this.contacts.push({ firstname, number });
            console.log(`${firstname} è stato aggiunto alla Rubrica.`);
        }
    },

    //! Modifica contatto esistente
    modifica: function (firstname, newFirstname, newNumber) {
        let contact = this.contacts.find(c => c.firstname === firstname);
        if (contact) {
            contact.firstname = newFirstname || contact.firstname;
            contact.number = newNumber || contact.number;
            console.log(`${firstname} è stato modificato.`);
        } else {
            console.log("Contatto non trovato.");
        }
    }
};

//^ Stampo ogni risultato
agenda.mostra(); 
agenda.cerca('Paola'); 
agenda.rimuovi('Jenny'); 
agenda.nuovo('Mattia', '3335555555');
agenda.modifica('Mattia', 'Mattia Albanese', '3336666666'); 
agenda.mostra();
