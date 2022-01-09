import { makeStyles } from '@material-ui/core/styles';

const art1Styles = makeStyles((theme) => ({
    crosswordWrapper:{
        '& [class*="Crossword__OuterWrapper"]': {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '42px',
        },
        '& [class*="Crossword__GridWrapper"]': {

        },
        '& [class*="Crossword__GridWrapper"] > div': {
            width: '150px',
        },
   
        
    },
}));

export { art1Styles };