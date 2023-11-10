let audioElements = document.querySelectorAll("audio");
audioElements.forEach((audio) => {
    audio.style.display = "none";
});

document.getElementById("playItAgain").style.display = "block";

let albumCovers = document.querySelectorAll('.cover');
let players = document.querySelectorAll('audio');


albumCovers.forEach((cover) => {
  cover.addEventListener('click', function () {
    players.forEach(function (el) {
      el.pause();
      el.currentTime = 0;
    });
    
      audioElements.forEach((audio) => {
          audio.style.display = 'none';
      });

   
      switch (cover.id) {
          case 'party':
              document.getElementById('playItAgain').style.display = 'block';
              document.getElementById('songName').textContent = 'Play It Again';
              break;
          case 'tailgate':
              document.getElementById('countryGirl').style.display = 'block';
              document.getElementById('songName').textContent = 'Country Girl (Shake It For Me)';
              break;
          case 'lights':
              document.getElementById('dustUp').style.display = 'block';
              document.getElementById('songName').textContent = 'Kick the Dust Up';
              break;
          case 'country':
              document.getElementById('people').style.display = 'block';
              document.getElementById('songName').textContent = 'Most People Are Good';
              break;
      }
  });
});