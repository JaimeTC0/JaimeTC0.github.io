const team = [];
let currentPokemon = null;

function findPokemon(){
    let pokemonSearch = document.getElementById("inputText").value.toLowerCase();
    const cachedData = localStorage.getItem(pokemonSearch);

    //If Found
    if(cachedData){
        display(JSON.parse(cachedData));
        console.log("Found in cache");
        return;
    }

    //Else Fetch
    else fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonSearch)
        .then(Response =>{
            //Pokemon Doesn't Exist
            if(!Response.ok){
                return Promise.reject("Pokemon not found");
            }
            return Response.json();
        })
        //Pokemon Found
        .then(data =>{
            localStorage.setItem(pokemonSearch, JSON.stringify(data));
            console.log("Fetching");
            display(data);
            return data;
        });

}

function display(data){
    currentPokemon = data;

    //Display Sprite
    document.getElementById("PokemonImage").src = data.sprites.front_default;

    //Display Audio
    const audio = document.getElementById("PokemonAudio")
    const crySource = document.getElementById("PokemonCry"); 
    crySource.src = data.cries.latest;
    audio.load();

    //Display Moves
    const movesList = [
        document.getElementById("move1"),
        document.getElementById("move2"),
        document.getElementById("move3"),
        document.getElementById("move4")
    ];

    movesList.forEach(select => {
        select.innerHTML = "";

        data.moves.forEach(moveObj => {
            const option = document.createElement("option");
            option.value = moveObj.move.name;
            option.textContent = moveObj.move.name;
            select.appendChild(option);
        });
    });

}

function addToTeam(){
    const selectedMoves = [
        document.getElementById("move1").value,
        document.getElementById("move2").value,
        document.getElementById("move3").value,
        document.getElementById("move4").value
    ];

    const pokemonData = {
        name: currentPokemon.name,
        image: currentPokemon.sprites.front_default,
        moves: selectedMoves
    };

    team.push(pokemonData);

    console.log("Added to Team");
    displayTeam();
}

function displayTeam() { 
    const teamDisplay = document.getElementById("teamDisplay"); 
    teamDisplay.innerHTML = ""; 
 
    team.forEach(pokemon => { 
        const div = document.createElement("div"); 
        div.innerHTML = ` 
            <h4>${pokemon.name}</h4> 
            <img src="${pokemon.image}" width="80"> 
            <p>Moves: ${pokemon.moves.join(", ")}</p> 
            <hr>`;
        teamDisplay.appendChild(div); 
    }); 
}