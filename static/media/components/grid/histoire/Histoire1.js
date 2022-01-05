import React, { useCallback, useRef, useState } from 'react';
import '../../../App.css';
import Crossword, { ThemeProvider } from '@jaredreisinger/react-crossword';

const data = {
  across: {
    1: {
      clue: 'one plus one',
      answer: 'PLO',
      row: 0,
      col: 0,
    },
  },
  down: {
    2: {
      clue: 'three minus two',
      answer: 'OPQ',
      row: 0,
      col: 2,
    },
  },
};

function Histoire1() {
  const histoire1 = useRef();

  const focus = useCallback((event) => {
    histoire1.current.focus();
  }, []);

  const fillAllAnswers = useCallback((event) => {
    histoire1.current.fillAllAnswers();
  }, []);

  const reset = useCallback((event) => {
    histoire1.current.reset();
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
      addMessage(`onCrosswordCorrect: ${JSON.stringify(isCorrect)}`);
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
        <button onClick={focus}>Focus</button>
        <button onClick={fillAllAnswers}>Fill all answers</button>
        <button onClick={reset}>Reset</button>
      <ThemeProvider
        theme={{
          columnBreakpoint: '9999px',
          gridBackground: '#acf',
          cellBackground: '#ffe',
          cellBorder: '#fca',
          textColor: '#fff',
          numberColor: '#9f9',
          focusBackground: '#f00',
          highlightBackground: '#f99',
        }}
      >
      <Crossword
          data={data}
          ref={histoire1}
          onCorrect={onCorrect}
          onLoadedCorrect={onLoadedCorrect}
          onCrosswordCorrect={onCrosswordCorrect}
          onCellChange={onCellChange}
          defaultKey='histoire1'
        />
      </ThemeProvider>
        {messages}
    </div>
  );
};

export default Histoire1;