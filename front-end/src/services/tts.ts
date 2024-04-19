export const speak = async (text: string) => {
  const synth = window.speechSynthesis;
  const voices = synth.getVoices();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voices[0];
  synth.speak(utterance);
};
