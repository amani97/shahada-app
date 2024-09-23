import React, { useEffect, useState } from "react";

import Certificate from "./certificate.js";
import { ReactComponent as Listening } from "../assets/listening.svg";
import { useAudioVisualizer } from "../hooks/useAudioVisualizer.js";
import { useSpeechRecognition } from "../hooks/useSpeechRecognition.js";

const requiredSpeakArray = [
  "ašhadu",
  "ʾan lā ʾilāha",
  "ʾilla -llāhu,",
  "wa-ʾašhadu ʾ",
  "ʾanna muḥammadan",
  "rasūlu -llāh",
  "I bear witness that there is no god but Allah",
  "And I bear witness that Muhammad is the Messenger of God",
];
const error = {
  fontSize: "1.25rem",
  fontWeight: "500",
  fontFamily: "Poppins",
};

const globalStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "Center",
};
const useSpeechSynthesis = () => {
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return { speak };
};
function Recite() {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current word index
  const [isCorrect, setIsCorrect] = useState(null); // Track if user pronunciation is correct or wrong (null, true, false)
  const { transcript, setTranscript, setListening } = useSpeechRecognition();
  const { speak } = useSpeechSynthesis();
  const canvasRef = useAudioVisualizer();

  // Function to handle checking the user's speech input
  const handleCheck = () => {
    const currentWord = requiredSpeakArray[currentIndex];
    if (transcript.toLowerCase().includes(currentWord.toLowerCase())) {
      setIsCorrect(true);
      // Move to the next word
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1); // Move to the next word after short delay
        setIsCorrect(null);
        if (currentIndex + 1 < requiredSpeakArray.length) {
          speakWord(requiredSpeakArray[currentIndex + 1]); // Speak the next word
        }
      }, 1000);
    } else {
      setIsCorrect(true);
      speakWord(currentWord); // Repeat the current word
    }
  };

  const speakWord = (word) => {
    speak(word); // Use speech synthesis to speak the word
  };

  const speakText = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  useEffect(() => {
    speakText(requiredSpeakArray[0]);
    setListening(true); // Start listening automatically on component mount
  }, [setListening]);

  useEffect(() => {
    if (currentIndex < requiredSpeakArray.length) {
      handleCheck();
    }
  }, [transcript]);

  return (
    <div>
      {currentIndex < requiredSpeakArray.length ? (
        <div style={globalStyle}>
          {isCorrect === null ? (
            <>
              <span>Your first step on your path to Islam</span>
              <Listening />
              <p>I'm Listening...</p>
            </>
          ) : isCorrect ? (
            <>
              <p>Repeat after me: </p>
              <canvas
                ref={canvasRef}
                width={230}
                height={230}
                style={{
                  border: "2px solid black",
                  marginTop: "20px",
                  borderRadius: "50%", // Make canvas circular
                  backgroundImage: "url('../assets/listinig-background.png')", // Set your background image here
                  backgroundSize: "cover", // Ensure the image covers the entire canvas
                  backgroundPosition: "center",
                  width: "fit-content",
                }}
              />{" "}
              <strong>{requiredSpeakArray[currentIndex]}</strong>
            </>
          ) : (
            <>
              <span style={error}>
                Try again, it should be: {requiredSpeakArray[currentIndex]}
              </span>
              <canvas
                ref={canvasRef}
                width={500}
                height={200}
                style={{
                  border: "2px solid black",
                  marginTop: "20px",
                  backgroundImage: "url('../assets/listinig-background.png')", // Set your background image here
                  backgroundSize: "cover", // Ensure the image covers the entire canvas
                  backgroundPosition: "center",
                  width: "fit-content",
                }}
              />
            </>
          )}
        </div>
      ) : (
        <Certificate />
      )}
    </div>
  );
}

export default Recite;
