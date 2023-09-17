
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAssistant } from '../redux/actions';
import { SpeechRecognition } from 'web-speech-api';

const Assistant = () => {
  const dispatch = useDispatch();
  const assistant = useSelector(state => state.assistant);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    const recognition = new SpeechRecognition();

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = event => {
      setTranscript(event.results[0][0].transcript);
    };

    recognition.onend = () => {
      setListening(false);
      dispatch(updateAssistant(transcript));
    };

    if (assistant.active) {
      recognition.start();
    } else {
      recognition.stop();
    }
  }, [assistant.active]);

  return (
    <div>
      <h2>Assistant</h2>
      <p>{listening ? 'Listening...' : 'Click to speak'}</p>
      <button onClick={() => dispatch(updateAssistant(!assistant.active))}>
        {assistant.active ? 'Stop' : 'Start'}
      </button>
      <p>{transcript}</p>
    </div>
  );
};

export default Assistant;
