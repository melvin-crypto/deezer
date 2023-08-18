$(document).ready(function() {
    const playButton = $("#play-button");
    const musicBarPlayButton = $("#music-bar-play-button img");
    const musicBar = $("#music-bar").not("#music-bar-play-button");
    const musicBarInfo = $("#music-bar-info");
    const musicBarProgress = $("#music-bar-progress");
    const audio = $("#audio")[0]; // Utiliser [0] pour accéder à l'élément HTML audio

    // Fonction pour mettre à jour les boutons avec le même logo
    function updateButtons(src) {
        playButton.attr("src", src);
        musicBarPlayButton.attr("src", src);
    }

    // Fonction pour contrôler la lecture/pause de la musique
    function togglePlay() {
        if (audio.paused) {
            updateButtons("../src/assets/pause.png");
            audio.play();
            musicBar.addClass("active"); // Ajoutez la classe "active" au bouton de la barre de musique
            musicBar.show(); // Afficher la barre lors du démarrage de la musique
        } else {
            updateButtons("../src/assets/play.png");
            audio.pause();
            musicBar.removeClass("active"); // Supprimez la classe "active" du bouton de la barre de musique
        }
    }

    // Gérer le clic sur le bouton principal
    playButton.on("click", function() {
        togglePlay();
    });

    // Gérer le clic sur le bouton de la barre de musique
    musicBarPlayButton.on("click", function() {
        togglePlay();
    });

    // Mettre à jour la barre lors de la lecture de la musique
    audio.addEventListener("timeupdate", function() {
        const duration = audio.duration;
        const currentTime = audio.currentTime;
        const progressPercentage = (currentTime / duration) * 100;
        musicBarProgress.width(progressPercentage + "%");
    });

    // Mettre à jour le texte de la barre avec le nom de la musique et de l'artiste
    audio.addEventListener("play", function() {
        const musicInfo = "Tiakola - Gasolina";
        musicBarInfo.text(musicInfo);
        musicBar.show(); // Afficher la barre lors du démarrage de la musique
    });

    audio.addEventListener("pause", function() {
        // Ne masquez pas la barre lorsque la musique est en pause
        updateButtons("../src/assets/play.png");
    });

    musicBar.on("click", function(event) {
        const progressBarWidth = musicBar.width(); // Largeur totale de la barre de progression
        const clickPosition = event.pageX - musicBar.offset().left; // Position où l'utilisateur a cliqué
        const newTime = (clickPosition / progressBarWidth) * audio.duration; // Calculer le nouveau temps de lecture
console.log(newTime);
        audio.currentTime = newTime; // Mettre à jour la position de lecture
    });
});