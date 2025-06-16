import React from 'react'
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'
import "./Prediction.scss"
import Skeleton from '../../../Components/Skeleton/Skeleton'
import ia from "../../../assets/Images/GIF/IA.gif"
import { quantum } from 'ldrs';

quantum.register();

function Prediction() {
    const [synth, setSynth] = React.useState(null);
  const [utterance, setUtterance] = React.useState(null);

   React.useEffect(() => {
    if ('speechSynthesis' in window) {
      setSynth(window.speechSynthesis);
    }
  }, []);

    // Générer la voix automatiquement
  React.useEffect(() => {
    if (synth) {
      const frenchVoices = synth.getVoices().filter(voice => 
        voice.lang.startsWith('fr') || voice.name.includes('French')
      );

      if (frenchVoices.length > 0) {
        const newUtterance = new SpeechSynthesisUtterance(
          `Dans cette menu de prédiction, veuillez dessiner des formes ou ce que vous voulez et notre modèle prédira votre pensée`
        );
        newUtterance.voice = frenchVoices[0];
        newUtterance.rate = 0.9;
        
        synth.speak(newUtterance);
        setUtterance(newUtterance);
      }
    }

    return () => {
      if (synth) {
        synth.cancel();
      }
    };
  }, [synth]);
  return (
      <div className="prediction-container">
      <div className="content-1">
      <div className="tldraw-wrapper">
       <Tldraw persistenceKey="whiteboard-storage" />
      </div>
      <div className="button-container">
        <button className="predict-button">Prédire</button>
      </div>
      </div>
      <div className="content-2">
        <img src={ia} alt="Artificial intelligence logo" />
        <div className="Skeleton">
           <Skeleton/>
        </div>
         <div className="loader">
            <l-quantum size="70" speed="3.75" color="#047185" />
         </div>
         
      </div>
    </div>
  )
}

export default Prediction
