import { makeStyles } from '@material-ui/core/styles';

const histoire1Styles = makeStyles(() => ({
    crosswordWrapper:{
        '& [class*="Crossword__GridWrapper"] > div': {
            width: '150px',
        },
    },
}));

export { histoire1Styles };