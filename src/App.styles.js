import { makeStyles } from '@material-ui/core/styles';

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
});

export { useStyles };