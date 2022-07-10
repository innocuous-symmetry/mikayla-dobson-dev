import { indigo, pink, deepPurple, purple } from '@mui/material/colors';

export const DocumentStyle = {
    htmlTheme: {
        backgroundColor: purple[100],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
    },
    dividerStyle: {
        width: '80%',
        color: '#000000',
        borderWidth: '2px'
    }
}

export const SidebarStyle = {
    background: {
        backgroundColor: purple[300],
        opacity: 0.7,
    },
    list: {
        height: '100vh',
        backgroundColor: pink[100]
    },
    listItem: {
        backgroundColor: pink[200]
    }
}

export const WelcomePage = {
    pageTheme: {
        display: 'flex',
        backgroundColor: purple[100],
        height: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        overflowX: 'hidden'
    },
    mainHeaderCard: {
      display: 'flex',
      margin: '2rem',
      width: '35vw',
      padding: '1rem',
      flexDirection: 'column',
      backgroundColor: pink[50],
      alignItems: 'center',
      fontSize: '1.2rem',
      borderRadius: '12px'
    },
    galleryTheme: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: indigo[800],
        border: '1px solid purple',
        width: '70vw',
        height: '18rem',
        padding: '3rem',
        margin: '2rem',
    },
    galleryRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    galleryPages: {
        display: 'flex',
        justifyContent: 'center',
    },
    galleryPage: {
        inactive: {
            backgroundColor: deepPurple[50],
        },
        active: {
            backgroundColor: indigo[800]
        }
    },
    welcomeFooter: {
        display: 'block',
        textAlign: 'right'
    }
}

export const AboutMePage = {
    headerCard: {
        backgroundColor: purple[700],
        color: indigo[50],
        fontSize: '1.5rem',
        alignItems: 'center',
        justifyContent: 'center',
        height: '12rem',
        width: '12rem',
        marginTop: '2rem',
        marginBottom: '3rem',
    },
    projectCards: {
        backgroundColor: indigo[800],
        color: indigo[50],
    },
    cardDimensions: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        textAlign: 'center',
    }
}