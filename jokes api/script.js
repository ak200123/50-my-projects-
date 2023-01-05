const jokeEl =document.getElementById('joke')
const jokeBtn =document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke(){
    const res =await fetch(`https://hindi-jokes-api.onrender.com/jokes?api_key=c483881fcff522155ab32a40a6e9`)

    const data =await res.json()
    console.log(data);
    jokeEl.innerHTML =data.jokeContent
}