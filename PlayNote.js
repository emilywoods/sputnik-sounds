var PlayNote = function(context, oscType, frequency, startTime, duration) {
  var oscillator = context.createOscillator();
  var volume = context.createGain();

  oscillator.type = oscType; //oscillator waveform

  volume.gain.value = 0.1;

  oscillator.connect(volume);
  volume.connect(context.destination);

  volume.gain.setValueAtTime(0.1, startTime + duration - 0.05);
  volume.gain.linearRampToValueAtTime(0, startTime + duration);

  oscillator.start(startTime);
  oscillator.stop(startTime + duration);
};
