let audioElements = document.querySelectorAll("audio");
audioElements.forEach((audio) => {
    audio.style.display = "none";
});


// Show the desired audio element (for example, "playItAgain")
document.getElementById("playItAgain").style.display = "block";

let albumCovers = document.querySelectorAll('.cover');

// Add a click event listener to each album cover image.
albumCovers.forEach((cover) => {
  cover.addEventListener('click', function () {
      // Hide all audio elements first.
      audioElements.forEach((audio) => {
          audio.style.display = 'none';
      });

      // Determine which song to play based on the clicked album cover.
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