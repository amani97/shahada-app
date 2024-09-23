import * as Tone from "tone";

import { useEffect, useRef } from "react";

export const useAudioVisualizer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const analyzer = new Tone.Analyser("waveform", 1024);
    const microphone = new Tone.UserMedia().connect(analyzer);

    microphone.open().then(() => {
      Tone.Transport.start();
    });

    const draw = () => {
      const canvas = canvasRef.current;

      if (canvas) {
        const ctx = canvas.getContext("2d");
        const values = analyzer.getValue();

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw SVG background
        const img = new Image();
        img.onload = () => {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.src ="../assets/listinig-background.png"

        // Center point and radius for the circle
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = canvas.width / 2 - 10;

        // Draw the circular visualizer
        ctx.strokeStyle = "rgb(0, 150, 255)";
        ctx.lineWidth = 2;
        ctx.beginPath();

        const sliceAngle = (Math.PI * 2) / values.length;
        let angle = 0;

        values.forEach((value) => {
          const v = value * 0.5 + 0.5; // Normalize the values
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle) * v;

          if (angle === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }

          angle += sliceAngle;
        });

        ctx.closePath(); // Close the path to form a complete circle
        ctx.stroke();
      }

      requestAnimationFrame(draw); // Continue the animation loop
    };

    requestAnimationFrame(draw);

    return () => {
      microphone.close();
    };
  }, []);

  return canvasRef;
};
