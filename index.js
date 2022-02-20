window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    audio.addEventListener("play", function(){
        key.classList.add('playing');
    });

    audio.addEventListener("ended", function(){
        key.classList.remove('playing');
   });
});


window.addEventListener('transitionend', removeTransition())
