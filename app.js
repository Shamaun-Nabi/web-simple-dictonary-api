const userValue = document.getElementById("userValue");
const searchValue = document.getElementById("SearchBtn");


searchValue.addEventListener("click", function () {
    let dictWord = userValue.value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${dictWord}`)
        .then(res => res.json())
        .then(data => {
            // let source = document.getElementById("audio-source");
            // let audioUrl = `https://ssl.gstatic.com/dictionary/static/sounds/20200429/${dictWord}--_gb_1.mp3`;
            // source.setAttribute('src', audioUrl);

            // add describe
            let def = data[0].meanings[0].definitions[0].definition;
            const addDef=document.getElementById("meaning");
            addDef.innerText=def;

            // add partsOfSpeech
            let parts=data[0].meanings[1].partOfSpeech;
            const addParts=document.getElementById("parts");
            addParts.innerText=parts;
        
            // addExample
            let example=data[0].meanings[0].definitions[0].example;
            const addExample=document.getElementById("example");
            addExample.innerText=example;
        })


});