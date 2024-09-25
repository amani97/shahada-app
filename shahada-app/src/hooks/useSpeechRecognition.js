import { useEffect, useState } from "react";

export const useSpeechRecognition = () => {
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  
  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let currentTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        currentTranscript += event.results[i][0].transcript;
      }
      setTranscript(currentTranscript);
    };

    if (listening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => recognition.stop();
  }, [listening]);

  return { transcript, setTranscript, setListening };
};
