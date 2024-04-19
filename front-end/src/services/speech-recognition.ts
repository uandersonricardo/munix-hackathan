export const recognize = async (): Promise<string> => {
  // @ts-ignore
  const recognition = new window.webkitSpeechRecognition();
  recognition.lang = "pt-BR";
  recognition.start();
  return new Promise((resolve) => {
    recognition.onresult = (event: any) => {
      const result = event.results[event.results.length - 1][0].transcript;
      resolve(result);
    };
  });
};
