import { makeStyles } from '@material-ui/core/styles';

const art1Styles = makeStyles(() => ({
    crosswordWrapper:{
        '& [class*="Crossword__GridWrapper"] > div': {
            width: '150px',
        },
    },
}));

export { art1Styles };