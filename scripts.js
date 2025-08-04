document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById('audio');
    const volumeBar = document.getElementById('volume-bar');
    audio.volume = 0.01;
    volumeBar.value = 0.1;

    volumeBar.addEventListener('input', () => {
        audio.volume = volumeBar.value;
    });

    const volumeIcon = document.getElementById('volume-icon');
    volumeIcon.addEventListener('click', () => {
        audio.muted = !audio.muted;
        volumeIcon.style.opacity = audio.muted ? 0.5 : 1;
    });
});
const yaVioIntro = localStorage.getItem("introVisto");

if (!yaVioIntro) {
    window.addEventListener("DOMContentLoaded", () => {
        document.body.classList.add("fade-anim");
    });

    localStorage.setItem("introVisto", "true");
}