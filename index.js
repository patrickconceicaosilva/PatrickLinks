const playPause = document.getElementById("playPause");
const audio = document.getElementById("audio")

window.addEventListener("load", () => {
    const audio = window.getElementById("audio")
    audio.play()
})

playPause.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPause.innerHTML = '<i class="fa-solid fa-pause fa-2xl"></i>';
        playPause.classList.add("pause")
    } else {
        audio.pause();
        playPause.innerHTML = '<i class="fa-solid fa-play fa-2xl"></i>'
        playPause.classList.remove("pause")
    }
});