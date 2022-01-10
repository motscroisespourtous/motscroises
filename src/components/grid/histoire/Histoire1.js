import React, { useRef } from 'react';
import '../../../App.css';
import GenericGrid from '../../GenericGrid';
import {histoire1Styles} from './Histoire1.styles';

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
  const classesGrid = histoire1Styles();
  const histoire = useRef('histoire1');
  const defaultKey = 'histoire1';

  return (
    <GenericGrid genericName={histoire} data={data} cssGrid={classesGrid} defaultKey={defaultKey}/>
  );

};

export default Histoire1;