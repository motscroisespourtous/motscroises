import React, { useCallback, useRef, useState } from 'react';
import '../../../App.css';
import Crossword, { ThemeProvider } from '@jaredreisinger/react-crossword';
import {useStyles} from '../Grid.styles';
import {art1Styles} from './Art1.styles';

const data = {
  across: {
    1: {
      clue: 'one plus one',
      answer: 'TWO',
      row: 0,
      col: 0,
    },
  },
  down: {
    2: {
      clue: 'three minus two',
      answer: 'ORG',
      row: 0,
      col: 2,
    },
  },
};

function Art1() {
  const classes = useStyles();
  const classesArt1 = art1Styles();
  const art1 = useRef();

  const focus = useCallback((event) => {
    art1.current.focus();
  }, []);

  const fillAllAnswers = useCallback((event) => {
    art1.current.fillAllAnswers();
  }, []);

  const reset = useCallback((event) => {
    art1.current.reset();
    setMessages('');
  }, []);

  const [messages, setMessages] = useState([]);

  const addMessage = useCallback((message) => {
    setMessages((m) => m.concat(`${message}\n`));
  }, []);

  const onCorrect = useCallback(
    (direction, number, answer) => {
      addMessage(`onCorrect: "${direction}", "${number}", "${answer}"`);
    },
    [addMessage]
  );

  const onLoadedCorrect = useCallback(
    (answers) => {
      addMessage(
        `onLoadedCorrect:\n${answers
          .map(
            ([direction, number, answer]) =>
              `    - "${direction}", "${number}", "${answer}"`
          )
          .join('\n')}`
      );
    },
    [addMessage]
  );

  const onCrosswordCorrect = useCallback(
    (isCorrect) => {
      isCorrect && addMessage(`Felicitation !! Grille complétéé`);
    },
    [addMessage]
  );

  const onCellChange = useCallback(
    (row, col, char) => {
      addMessage(`onCellChange: "${row}", "${col}", "${char}"`);
    },
    [addMessage]
  );

  return (
    <div>

      <ThemeProvider
        theme={{
          columnBreakpoint: '768px',
          gridBackground: '#000',
          cellBackground: '#fff',
          cellBorder: '#e5e8ff',
          textColor: '#041399',
          numberColor: '#232324',
          focusBackground: '#ddd',
          highlightBackground: '#eee',
        }}
      >
      <div className={`${classes.crosswordWrapper} ${classesArt1.crosswordWrapper}`}>
        <div className={classes.buttonGroup}>
          <button className={classes.actionButton} onClick={focus}>Focus</button>
          <button className={classes.actionButton} onClick={fillAllAnswers}>Fill all answers</button>
          
        </div>
        <Crossword
            data={data}
            ref={art1}
            onCorrect={onCorrect}
            // onLoadedCorrect={onLoadedCorrect}
            onCrosswordCorrect={onCrosswordCorrect}
            onCellChange={onCellChange}
            defaultKey='art1'
          />
        {messages.length > 0 &&       
          <section className={classes.success}>
              <h4>Félicitation  !!</h4>
              <div>Grille complétée</div>
              <button className={classes.actionButton} onClick={reset}>Refaire la grille</button>
         </section>
        }
       </div>      
      </ThemeProvider>

    </div>
  );
};

export default Art1;