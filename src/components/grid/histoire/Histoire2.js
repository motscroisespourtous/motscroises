import React, { useRef } from 'react';
import '../../../App.css';
import GenericGrid from '../../GenericGrid';
import {histoire2Styles} from './Histoire2.styles';

const data = {
  across: {
    1: {
      clue: 'one plus one',
      answer: 'FGH',
      row: 0,
      col: 0,
    },
  },
  down: {
    2: {
      clue: 'three minus two',
      answer: 'HIJ',
      row: 0,
      col: 2,
    },
  },
};

function Histoire2() {
  const classesGrid = histoire2Styles();
  const histoire = useRef('histoire2');
  const defaultKey = 'histoire2';

  return (
    <GenericGrid genericName={histoire} data={data} cssGrid={classesGrid} defaultKey={defaultKey}/>
  );
};

export default Histoire2;