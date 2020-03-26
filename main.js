function playPianoKeySound(key) {
  let soundUrl = "";
  switch (key) {
    case "a":
      soundUrl = 'https://freesound.org/data/previews/203/203500_1622584-lq.mp3';
      break;
    case "b":
      soundUrl = 'https://freesound.org/data/previews/203/203490_1622584-lq.mp3';
      break;
    case "c":
      soundUrl = 'https://freesound.org/data/previews/203/203501_1622584-lq.mp3';
      break;
    case "d":
      soundUrl = 'https://freesound.org/data/previews/203/203492_1622584-lq.mp3'
      break;
    case "e":
      soundUrl = 'https://freesound.org/data/previews/203/203493_1622584-lq.mp3'
      break;
    case "f":
      soundUrl = 'https://freesound.org/data/previews/203/203495_1622584-lq.mp3'
      break;
    case "g":
      soundUrl = 'https://freesound.org/data/previews/203/203499_1622584-lq.mp3'
      break;
    case "h":
      soundUrl = 'https://freesound.org/data/previews/203/203502_1622584-lq.mp3'
      break;
    case "i":
      soundUrl = 'https://freesound.org/data/previews/203/203500_1622584-lq.mp3';
      break;
    case "j":
      soundUrl = 'https://freesound.org/data/previews/203/203490_1622584-lq.mp3';
      break;
    case "k":
      soundUrl = 'https://freesound.org/data/previews/203/203492_1622584-lq.mp3'
      break;
    case "l":
      soundUrl = 'https://freesound.org/data/previews/203/203493_1622584-lq.mp3'
      break;
  }

  let audio = new Audio(soundUrl);
  audio.play();
}

function pianoKeyPress(event) {
  playPianoKeySound(event.id);
}

function keyboardKeyPress(event) {
  playPianoKeySound(event.key);
}

window.addEventListener("keydown", keyboardKeyPress);

/*
This is the starting point to create a virtual piano. 
1. Create a page with a single piano key (HTML)
2. Style the piano and key to look more like a piano (CSS)
3. Make the key play a sound using JavaScript (Functions & Variables)
4. Add more keys to the piano and customise the sounds (Conditional logic)
5. Add the black sharp keys into the piano

Extension
6. Play the piano keys using the corresponding keys on your keyboard (Event Listeners)

Links to some piano key sounds, but you can use any sounds you want:
'https://freesound.org/data/previews/203/203502_1622584-lq.mp3'
'https://freesound.org/data/previews/203/203501_1622584-lq.mp3'
'https://freesound.org/data/previews/203/203500_1622584-lq.mp3'
'https://freesound.org/data/previews/203/203499_1622584-lq.mp3'
'https://freesound.org/data/previews/203/203495_1622584-lq.mp3'
'https://freesound.org/data/previews/203/203493_1622584-lq.mp3'
'https://freesound.org/data/previews/203/203492_1622584-lq.mp3'
'https://freesound.org/data/previews/203/203491_1622584-lq.mp3'
'https://freesound.org/data/previews/203/203490_1622584-lq.mp3'
'https://freesound.org/data/previews/176/176731_3249786-lq.mp3'

Remember to set load type on jsfiddle to no wrap - bottom of body
*/
