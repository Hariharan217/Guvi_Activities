


let input = document.getElementById('input')

let button = document.getElementById('button')


button.onclick = function () {
    
    dictionaryapi()
}

function dictionaryapi() {
    let word = input.value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((responce) => responce.json())
        .then((data) => {

            
            // console.log(data[0].meanings[0].definitions[0].definition)
            let container = document.getElementById('container')
           

            let meaning = document.getElementById("meaning")
            meaning.innerHTML = `meaning: ${data[0].meanings[0].definitions[0].definition}`;
            container.appendChild(meaning);

            let verb = document.getElementById("verb")
            verb.innerHTML = `verb: ${data[0].meanings[1].definitions[0].definition}`;
            container.appendChild(verb);
        })



}