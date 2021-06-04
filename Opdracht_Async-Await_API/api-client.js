// Maak in de api-client.js de variabele API_KEY aan met jouw API key als waarde.
const API_KEY = '8979677aa23bb526955348f8de1077cf'

// Declareer een asynchronous functie getData() met het async keyword
async function getData() {

    // In deze functie, voeg een const variabele toe genaamd apiUrl en geef deze de waarde van het endpoint dat je wilt aanspreken.
    const apiURL = "https://api.themoviedb.org/3/genre/movie/list?api_key="

    // Gebruik de fetch() functie met de GET methode om de data van de API te fetchen. Stop de fetch functie in een variable res die je await. 
    try {
        const res = await fetch(apiURL + API_KEY, { method: "GET" });
        const result = await res.json();
        return result;
    } catch (err) {
        console.log("Can not make a Get request");
    }
}

getData(); 