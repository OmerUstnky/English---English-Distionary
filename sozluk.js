const inputWord = document.getElementById('word');
const button = document.querySelector('button');
const translatDiv = document.getElementById('titleHeader');
const title = document.querySelector('.title');
const meaning = document.querySelector('.meaning');
const audio = document.querySelector('audio');



async function api() {
    translatDiv.style.display = 'none';
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord.value}`
    const result = await fetch(url).then((res) => res.json());
    console.log(result);
    if(result.title){

    }else{
        translatDiv.style.display = 'block';
        title.textContent = result[0].word;
        meaning.textContent = result[0].meanings[1].definitions[0].definition;
        audio.src = result[0].phonetics[0].audio;

    }
}



button.addEventListener('click' , api)