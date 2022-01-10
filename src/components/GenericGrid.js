import React, { useCallback, useRef, useState } from 'react';
import Crossword, { ThemeProvider } from '@jaredreisinger/react-crossword';
import {useStyles} from '../components/grid/Grid.styles';

function GenericGrid({genericName, data, cssGrid, defaultKey}) {
  const classes = useStyles();
  genericName = useRef();

  const focus = useCallback((event) => {
    genericName.current.focus();
  }, []);

  const fillAllAnswers = useCallback((event) => {
    genericName.current.fillAllAnswers();
  }, []);

  const reset = useCallback((event) => {
    genericName.current.reset();
    setMessages();
  }, []);

  const [messages, setMessages] = useState();

  const onCrosswordCorrect = useCallback(
    (isCorrect) => {
      setMessages(isCorrect);
    },
  );

  const onCorrect = useCallback(
    (direction, number, answer) => {
      console.log(`onCorrect: "${direction}", "${number}", "${answer}"`);
    },
    []
  );

  const onCellChange = useCallback(
    (row, col, char) => {
      console.log(`onCellChange: "${row}", "${col}", "${char}"`);
    },
    []
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
      <div className={`${classes.crosswordWrapper} ${cssGrid.crosswordWrapper}`}>
        <div className={classes.buttonGroup}>
          <button className={classes.actionButton} onClick={focus}>Focus</button>
          <button className={classes.actionButton} onClick={fillAllAnswers}>Fill all answers</button>
          
        </div>
        <Crossword
            data={data}
            ref={genericName}
            onCorrect={onCorrect}
            onCrosswordCorrect={onCrosswordCorrect}
            onCellChange={onCellChange}
            defaultKey={defaultKey}
          />
        {messages === true &&       
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
}

export default GenericGrid;