const progress = document.getElementById('progress');
const song = document.getElementById('song');
const crtlicon = document.getElementById('crtlicon');


song.onloadedmetadata = function(){
    progress.max =song.duration;
    progress.value = song.currentTime;

}

function playPause(){
    if(crtlicon.classList.contains('fa-pause')){
        song.pause();
        crtlicon.classList.remove('fa-pause');
        crtlicon.classList.add('fa-play');

    }
    else{
        song.play();
        crtlicon.classList.add('fa-pause');
        crtlicon.classList.remove('fa-play');
        
    }

}

if(song.play()){
    setInterval(()=>{
       progress.value = song.currentTime 
    },500)
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    crtlicon.classList.add('fa-pause');
    crtlicon.classList.remove('fa-play');
}