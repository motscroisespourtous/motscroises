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
  const classesArt1 = art1Styles();
  const art1 = useRef('art1');
  const defaultKey = 'art1';

  return (
    <GenericGrid genericName={art1} data={data} cssGrid={classesArt1} defaultKey={defaultKey}/>
  );
};

export default Art1;