import { makeStyles } from '@material-ui/core/styles';
import bgHeader from '../assets/crosswordHeader.svg';

const useStyles = makeStyles({
  headerWrapper: {
    position: 'relative',
    width: '100%',
  },
  root: {
    alignItems: 'flex-end',
    display: 'flex',
    height: '120px',
    width: '100%',
    position: 'relative',
    '& nav': {
      alignItems: 'center',
      backgroundColor: '#000',
      boxShadow: '2px 5px 9px -1px rgba(0,0,0,0.72)',
      display: 'flex',
      height: '48px',
      width: '100%',
    },
    '& ul': {
      alignItems: '100%',
      display: 'flex',
      height: '100%',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    },
    '& li': {
      alignItems:' center',
      display: 'flex',
    },
    '& a': {
      alignItems:' center',
      display: 'flex',
      color:'#fff',
      height: '100%',
      padding: '0 24px',
      textDecoration: 'none',
    },
    '& a:hover': {
      textDecoration: 'underline',
    },
    '& .is--active': {
      backgroundColor: '#fff',
      color: '#000',
    },
    '& .MuiButton-label': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  bg: {
    position: 'absolute',
    display: 'flex',
    height: '100%',
    backgroundImage: `url(${bgHeader})`,
    width: '120%',
    transform: 'scale(1, 0.8) skew(44deg)',
    opacity: '0.3',
    left: '-50px',
    top: 0,
  },
  opened : {
    '& span': {
      '&:nth-child(1), &:nth-child(6)': {
        transform: 'rotate(45deg)',
      },
      
      '&:nth-child(2),&:nth-child(5)': {
        transform: 'rotate(-45deg)',
      },
      
      '&:nth-child(1)': {
        left: '5px',
        top: '7px',
      },
      
      '&:nth-child(2)': {
        left: 'calc(50% - 5px)',
        top: '7px',
      },
      
      '&:nth-child(3)': {
        left: '-50%',
        opacity: 0,
      },
      
      '&:nth-child(4)': {
        left: '100%',
        opacity: 0,
      },
      
      '&:nth-child(5)': {
        left: '5px',
        top: '29px',
      },
      
      '&:nth-child(6)': {
        left: 'calc(50% - 5px)',
        top: '29px',
      },
    },
  },

});

export { useStyles };