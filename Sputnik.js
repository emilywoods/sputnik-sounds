var audContext;
var sputnikBuffer;
var playNote;

window.onload = init;

function init() {
  try {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    audContext = new AudioContext;
    } catch(ex) {
      alert('Unfortunately the sound cannot be played in this browser :(');
    }

  sputnikBuffer = new BufferLoader(audContext, ['sputnik.wav'], finishLoading);
  sputnikBuffer.load();

  for (var i = 0; i < 8; ++i) {
     var playNote1 = new PlayNote(audContext, 'triangle',493.883, audContext.currentTime +i, (60/80)/2);
   }
}

function finishLoading(buffer) {
  var source = audContext.createBufferSource();
  source.buffer = buffer[0];
  var gainNode = AudioContext.createGain();
  gainNode.gain.value = 0.5;

  source.connect(gainNode)
  gainNode.connect(audContext.destination);
  source.start(0);
}
