import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../Navbar";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

const Live = () => {
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  const [savedNotes, setSavedNotes] = useState([])

  useEffect(() => {
    handleListen()
  }, [isListening])

  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        // console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        // console.log('Stopped Mic on Click')
      }
    }
    mic.onstart = () => {
      // console.log('Mics on')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      // console.log(transcript)
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }

  // const handleSaveNote = () => {
  //   const saveFinalNote = setSavedNotes([...savedNotes, note])
  //   console.log(`savedNotes${savedNotes}`);
  //   setNote('')
  // }

  const saveFinalNote = () => {
    setSavedNotes([...savedNotes, note])


    axios.post("https://evening-harbor-58012.herokuapp.com/api/files", {
      
      file: {
        file: `${savedNotes}`,
        file_title: 'Test',
        uploader: 'Peter'
      }
    })
      .then((response) => {
        console.log(response);
      });

    setNote('')
  }

  return (
    <>
      <Section>
        <Navbar />
        <div className="grid">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h4>Current Note</h4>
                {isListening ? (
                  <span>Listening</span>
                ) : (
                  <span>Not Listening</span>
                )}
                &nbsp;
                &nbsp;
                <button onClick={saveFinalNote} disabled={!note} className="btn btn-success">
                  Save Note
                </button>
                &nbsp;
                &nbsp;
                <button onClick={() => setIsListening((prevSate) => !prevSate)} className="btn btn-danger">
                  Start/stop Note
                </button>
                <p>{note}</p>
              </div>
              <div className="col-6">
                <h4>Notes</h4>
                {savedNotes.map((n) => (
                  // editable paragrapgh

                  <p key={n}>{n}</p>
                ))}
              </div>
              <div>
                <button onClick={saveFinalNote} className="btn btn-success">Save Notes</button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Live;

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;
