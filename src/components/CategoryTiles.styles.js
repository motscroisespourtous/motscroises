import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

grid: {
  display: 'inline-flex',
  flexWrap: 'wrap',
  listStyleType: 'none',
  margin: '0 24px',
  padding: 0,
  width: 'calc(100% - 48px)',
  '&:after': {
    content: '',
    display: 'block',
    clear: 'both',
  }
},

gridItem: {
  display: 'flex',
  flexDirection: 'column',
  borderColor: 'hsla(0, 0%, 0%, 0.5)',
  borderRadius: '5px',
  marginBottom: '60px',
  position: 'relative',

  [theme.breakpoints.up('lg')]: {
        width: '12.5%',
  },
  
  [theme.breakpoints.between('md','lg')]: {
        width: '25%', 
  },
  
  [theme.breakpoints.between('sm','md')]: {
        width: '50%',
  },

  [theme.breakpoints.down('xs')]: {
        width: '100%',
  },
  '& > h2': {
    marginBottom: '8px',
  },
  
},

opened: {
  width: '100%',
  '& > h2': {
    top: 0,
    left: '24px',
    position: 'absolute',
    color: '#fff',
    zIndex: 1,
    fontSize: '42px',
  },
}, 

gridItemInner: {
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  border: 'solid 1px #ddd',
  borderRadius: '5px',
  boxShadow: '2px 5px 9px -1px rgba(0,0,0,0.14)',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  display: 'flex',
  margin: '0 24px 24px 0',
},

gridItemWidth2: {

},


gridItemWidth3: {

},

// gridItemHeight2: { 
//   height: '480px' 
// },

// gridItemHeight3: { 
//   height: '720px;',
// },


tileWrapper: {
  height: '360px',
  position: 'relative',
},
smallTile: {
  height: '120px',
  '& [class*="gridItemInner"]': {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    // boxShadow: 'none',
  },
},

tileButton: {
  backgroundColor: 'rgba(0,0,0, 0.6)',
  borderBottomLeftRadius: '5px',
  borderBottomRightRadius: '5px',
  border: 'none',
  color: '#fff',
  cursor: ' pointer',
  fontSize: '22px',
  height: '64px',
},

closeButton: {
  position: 'absolute',
  right: '38px',
  top: '12px',
  height: '42px',
  width: '42px',
  border: 'solid 1px #fff',
  backgroundColor: 'rgba(0,0,0,0.5)',
  color: '#fff',
  fontSize: '24px',
  cursor: 'pointer',
},
itemList: {
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '20px',
  textDecoration: 'underline',
  cursor: 'pointer',
  padding: 0,
},

listItems: {
  display: 'flex',
  flexWrap: 'wrap',
  listStyleType: 'none',
  margin: '0 24px 60px 0',
  padding: '24px',
  '& li': {
    marginBottom: '12px',
    [theme.breakpoints.up('lg')]: {
      width: '12.5%',
    },

    [theme.breakpoints.between('md','lg')]: {
      width: '25%', 
    },

    [theme.breakpoints.between('sm','md')]: {
      width: '50%',
    },

    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
},

listItemsWrapper: {
  boxShadow: '2px 5px 9px -1px rgb(0 0 0 / 14%)',
  position: 'relative',
},


}));

export { useStyles };