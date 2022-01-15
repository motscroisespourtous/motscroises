import { makeStyles } from '@material-ui/core/styles';
import bg from './assets/bg.jpg';

const useStyles = makeStyles({
  root: {
  },
  opened: {
    border: 'solid 1px red',
  },
  mainWrapper: {
    '&[class*="opened"]': {
      left: 0,
    },
  },
  bg: {
    position: 'fixed',
    display: 'flex',
    height: '100vh',
    backgroundImage: `url(${bg})`,
    width: '120vw',
    // transform: 'scale(1, 0.8) skew(44deg)',
    opacity: '0.1',
    left: 0,
    top: 0,
  },
});

export { useStyles };