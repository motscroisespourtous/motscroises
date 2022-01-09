import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    crosswordWrapper:{
        padding: '24px',
        position: 'relative',
        '& [class*="Crossword__GridWrapper"]': {
            width: '50%',
            overflow: 'auto',
            minWidth: 'auto',
            maxWidth: 'none',
            flex: 'none',
        },
        '& [class*="Crossword__CluesWrapper"]': {
            display: 'flex',
            flex: '1',
            flexDirection: 'column',
            width: '50%',
        },     
    },
    buttonGroup: {
        marginBottom: '24px',
        '& button': {
            marginRight: '24px',
        }

    },
    actionButton: {
        backgroundColor: '#fff',
        border: 'solid 1px #ccc',
        borderRadius: '5px',
        color:'#111',
        cursor: 'pointer',
        fontSize: '18px',
        height: '42px',
        padding: '0 24px',
        '&:hover': {
            backgroundColor: '#111',
            color:'#fff',
        },
    },
    success: {
        bottom: 0,
        display: 'flex',
        left: 0,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.8)',
        color: '#fff',
        height: '100%',
        position: 'absolute',
        width: '100%',
        '& button': {
            margin: '24px 0 42px',
        },
    },
}));

export { useStyles };