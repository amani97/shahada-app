import React, { useEffect, useState } from "react";
import Sound from "../assets/sound.svg";

import Certificate from "./certificate.js";
import { ReactComponent as Listening } from "../assets/listening.svg";
import { useSpeechRecognition } from "../hooks/useSpeechRecognition.js";
import SpeakingSvg from "./speaking.js";
import WrongSvg from "./wrong.js";

const requiredSpeakArray = [
  "ashad",
  "ʾan lā ʾilāha",
  "ʾilla -llāhu,",
  "wa-ʾašhadu ʾ",
  "ʾanna muḥammadan",
  "rasūlu -llāh",
  "I bear witness that there is no god but Allah",
  "And I bear witness that Muhammad is the Messenger of God",
];

const errorStyle = {
  fontSize: "1.25rem",
  fontWeight: "500",
  fontFamily: "Poppins",
};

const globalStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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
  const [isListeningMode, setIsListeningMode] = useState(true); // Track if the app is in listening mode or speaking mode
  const { transcript, setTranscript, setListening } = useSpeechRecognition();
  const { speak } = useSpeechSynthesis();

  // Debounce timer to wait before checking
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const handleCheck = () => {
    const currentWord = requiredSpeakArray[currentIndex]
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // Normalize and remove diacritics

    const userTranscript = transcript
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    console.log("Checking transcript:", userTranscript);
    console.log("Against word:", currentWord);

    // Split the transcript into words and check if any match the currentWord
    const userWords = userTranscript.toLowerCase().split(/\s+/);
    const isMatch = userWords.some((word) =>
      word.includes(currentWord.toLowerCase())
    );

    if (isMatch) {
      setIsCorrect(true);
      setTimeout(() => {
        if (currentIndex + 1 < requiredSpeakArray.length) {
          setCurrentIndex((prevIndex) => prevIndex + 1); // Update the index
        }
        setIsCorrect(null);
        setIsListeningMode(true); // Switch back to listening mode
      }, 1000);
    } else {
      setIsCorrect(false);
      speakWord(currentWord); // Repeat the current word
      // Reset state after showing "wrong" feedback
      setTimeout(() => {
        setIsCorrect(null);
        setIsListeningMode(true); // Switch back to listening mode
      }, 2000); // Adjust the delay time if necessary
    }
  };

  const speakWord = (word) => {
    setIsListeningMode(false);
    speak(word);
  };

  const speakText = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  useEffect(() => {
    speakText(requiredSpeakArray[0]);
    setListening(true);
  }, [setListening]);

  useEffect(() => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    if (
      isListeningMode &&
      currentIndex < requiredSpeakArray.length &&
      transcript
    ) {
      const timeout = setTimeout(() => {
        handleCheck(); // Call the check after the debounce time
      }, 1000); // Adjust the delay time as needed

      setDebounceTimeout(timeout);
    }
  }, [transcript, currentIndex, isListeningMode]);

  const renderContent = () => {
    if (currentIndex >= requiredSpeakArray.length) {
      return <Certificate />;
    }

    if (isListeningMode && isCorrect === null) {
      return (
        <>
          <h3 style={errorStyle}>Your first step on your path to Islam</h3>
          <Listening />
          <p style={{ fontSize: "18px", fontWeight: "500" }}>
            I'm Listening...
          </p>
        </>
      );
    }

    if (isCorrect) {
      return (
        <>
          <h3>Repeat after me: </h3>
          <SpeakingSvg />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: "18px", fontWeight: "500" }}>
              {requiredSpeakArray[currentIndex]}{" "}
            </span>
            <button
              className="soundIcon"
              onClick={() => speakWord(requiredSpeakArray[currentIndex])}
            >
              <img src={Sound} alt="Sound" />
            </button>
          </div>
        </>
      );
    }

    return (
      <>
        <h3 style={errorStyle}>
          Try again, it should be: {requiredSpeakArray[currentIndex]}
        </h3>
        <WrongSvg />
        <span style={{ fontSize: "18px", fontWeight: "500" }}>
          {requiredSpeakArray[currentIndex]}{" "}
        </span>
      </>
    );
  };

  return <div style={globalStyle}>{renderContent()}</div>;
}

export default Recite;
