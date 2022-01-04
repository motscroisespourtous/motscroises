import React, { useCallback, useRef, useState } from 'react';
import Crossword, { ThemeProvider } from '@jaredreisinger/react-crossword';

function GenericGrid({genericName, data}) {
  genericName = useRef();

  const focus = useCallback((event) => {
    genericName.current.focus();
  }, []);

  const fillAllAnswers = useCallback((event) => {
    genericName.current.fillAllAnswers();
  }, []);

  const reset = useCallback((event) => {
    genericName.current.reset();
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
      {<ThemeProvider
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
      {<Crossword
          data={data}
          ref={genericName}
          onCorrect={onCorrect}
          onLoadedCorrect={onLoadedCorrect}
          onCrosswordCorrect={onCrosswordCorrect}
          onCellChange={onCellChange}
          defaultKey= {genericName}
        />}
      </ThemeProvider>}
        {messages}
    </div>
  );
}

export default GenericGrid;