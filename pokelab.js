let CardPokemon = document.getElementById('CardPokemon');
let Pokemons = 10;

async function pokeapi(id) {
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    console.log(data);
    createCardPokemon(data)
}

const PokeStart = async () => {
    for (let i = 1; i < Pokemons; i++) {
        await pokeapi(i)        
    }
}

PokeStart()

function createCardPokemon(data) {
    const PokeElement = document.createElement('div')
    PokeElement.classList.add('PokemonCard')
    const PokemonName = data.name[0].toUpperCase() + data.name.slice(1)
    const stats = data.stats.map((element)=> element.stat.name)
    const pokestats = stats.slice(0,3)
    const basestats = data.stats.map((element)=>element.base_stat)
    const pokebasestats = basestats.slice(0,3)
    const stat = pokestats.map((stat) =>{
        return `<li class='st'>${stat}</li>`
    }).join("")
    const base = pokebasestats.map((base) =>{
        return `<li class='base'>${base}</li>`
    }).join("")
    const PokeInnerHTML = `
    
    <div class = 'img-container'>  
    <img src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif'
    />
    </div>    
    <div class="info">    
    <h3 class = 'name'>${PokemonName}</h3>
    </div>
    <div class='stats'>
    <h2>INFO<h2>
    <div class='flex'>
    <ul>${stat}</ul>
    <ul>${base}</ul>    
    </div>
    </div>`

    PokeElement.innerHTML = PokeInnerHTML

    CardPokemon.appendChild(PokeElement)
}
