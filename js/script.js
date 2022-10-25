// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.



const { createApp } = Vue

  createApp({
    data() {
      return {
        titolo: "Ciao Mondo, ecco Vue!",
        nome: "",
        printResult : "",
        immagine : ""
      }
    },
    methods: {
        printing: function () {
            this.printResult = `Ciao ${this.nome}!`
            this.immagine = "img/lofi-music.jpg"
        }
    }
  }).mount('#app');
