import React, { useRef } from 'react';
import '../../../App.css';
import GenericGrid from '../../GenericGrid';
import {art2Styles} from './Art2.styles';


const data = {
  across: {
    1: {
      clue: 'one plus plus one',
      answer: 'TWO',
      row: 0,
      col: 0,
    },
  },
  down: {
    2: {
      clue: 'three minus two',
      answer: 'ONE',
      row: 0,
      col: 2,
    },
  },
};

function Art2() {
  const classesGrid = art2Styles();
  const art = useRef('art2');
  const defaultKey = 'art2';

  return (
    <GenericGrid genericName={art} data={data} cssGrid={classesGrid} defaultKey={defaultKey}/>
  );
};

export default Art2;