import { indigo, pink, deepPurple, purple } from '@mui/material/colors';

export const DocumentStyle = {
    htmlTheme: {
        backgroundColor: purple[100],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        height: '100%',
    },
    linkStyle: {
        color: deepPurple[300],
        textDecoration: 'none'
    },
    buttonStyle: {
        backgroundColor: deepPurple[200],
        color: deepPurple[500],
        '&:hover': {
            backgroundColor: purple[400],
            color: deepPurple[50],
        },
        width: '25vw',
        height: '10rem',
        margin: '2rem',
    },
    galleryArrowStyle: {
        width: '8vw',
        height: '10rem',
        display: 'flex',
        justifyContent: 'center',
        color: deepPurple[50],
        backgroundColor: deepPurple[400],
        '&:hover': {
            backgroundColor: deepPurple[500],
        }
    },
    galleryCards: {
        width: '3rem',
        height: '1rem',
        margin: '0.8rem'
    },
    dividerStyle: {
        width: '80%',
        color: '#000000',
        borderWidth: '2px'
    },

    stockGallery: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '85vw',
        height: '45vh',
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
        width: '300px',
        height: '300px',
        padding: '2rem',
    },
    cardDimensions: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        textAlign: 'center',
    },
    aboutGallery: {
        display: 'flex',
        height: '70vh',
        width: '80vw',
        justifyContent: 'space-around',
        margin: '2rem',
    }
}

export const TechnologiesPage = {
    technologyCard: {
        backgroundColor: indigo[50],
        width: '40vw',
        margin: '2rem',
        borderRadius: '15px',
    }
}

export const ProjectsPage = {
    projectsButton: {
        backgroundColor: purple[500],
        color: indigo[50],
        height: '45%',
        width: '5%',
    },
}