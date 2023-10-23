let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let input = document.getElementById("input");
let button = document.querySelector("button");
let voice = document.querySelector("i");
let audio = document.querySelector("audio");
let result = document.querySelector(".result");
let word = document.querySelector(".word");
let h2 = document.querySelector("h2");

button.addEventListener("click", function () {
  if (input.value != "") {
    fetch(url + input.value)
      .then((e) => e.json())
      .then((data) => {
        sound = data[0].phonetics[0].audio || data[0].phonetics[1].audio
        result.innerHTML = `       
        <div class="result">
        <div class="icon">
        <p class="word">${input.value }</p>
        <i class="fa-solid fa-volume-high" onclick="playsound()"></i>
      </div>
      <div class="phonetics">
        <p class="type">${data[0].meanings[0].partOfSpeech}</p>
        <p class="pas">${data[0].phonetic}</p>
      </div>
      <p class="meaning">${data[0].meanings[0].definitions[0].definition}</p>
      <p class="example">${data[0].meanings[0].definitions[0].example || ''}</p>    
        </div>
        `;
        audio.src = sound;
      console.log(audio)
      }).catch(() => {
        result.innerHTML= `<h2 class="error">Enter a valid word</h2>`
      })
  }
});

function playsound() {
    audio.play();
}