

const music = document.getElementById("music");
const  playMusic = document.getElementById("playMusic");
const lyricsContainer = document.getElementById("lyrics-container");
const header = document.getElementById("header");
const container = document.querySelector(".container");

const lyrics = 
[
    {time: 0, text: "i see you from behind"},
    {time: 4, text: "far from my sight"},
    {time: 8, text: "but close to what i feel"},
    {time: 12, text: "please turn around to me"},
    {time: 16, text: "i want to see your face, again.."},
    {time: 23, text: "tell me how?"},
    {time: 27, text: "tell me howWw?"},

];


function createBubble(text)
{
    const bubble = document.createElement("div");

    bubble.classList.add("bubble");

    bubble.textContent = text;

    const randomTop = "100vh";
    const randomLeft = Math.random()*80;

    bubble.style.top = randomTop + "%";
    bubble.style.left = randomLeft + "%";

    lyricsContainer.appendChild(bubble);

    setTimeout(() => {
    bubble.remove();
    }, 8000);
}





let currentLyricIndex = 0;

music.addEventListener("timeupdate", function() {
    if (currentLyricIndex < lyrics.length && music.currentTime >= lyrics[currentLyricIndex].time) {
        createBubble(lyrics[currentLyricIndex].text);
        currentLyricIndex++;
    }
});

playMusic.addEventListener("click", function() {
    music.play();
    container.classList.add("playing");
});



// call the html elments, set time for when will the lyrics shows up
// creating bubble for the lyrics, set the position random with percentage
// sync the song with the lyrics
// button to play music

// ps, u can change the song and lyrics freely, the time is set in second
// it would be better to crop the song to the part u want for easier tracking :3

// @ hibicya