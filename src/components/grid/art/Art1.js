import React, { useRef } from 'react';
import '../../../App.css';
import GenericGrid from '../../GenericGrid';
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
  const classesGrid = art1Styles();
  const art = useRef('art1');
  const defaultKey = 'art1';

  return (
    <GenericGrid genericName={art} data={data} cssGrid={classesGrid} defaultKey={defaultKey}/>
  );
};

export default Art1;