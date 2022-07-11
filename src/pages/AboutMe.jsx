import { DocumentStyle, AboutMePage } from '../styles/Style';
import '../sass/pages/AboutMe.scss';

import Card from '@mui/material/Card';

const { htmlTheme } = DocumentStyle;
const { projectCards, cardDimensions } = AboutMePage;

export default function AboutMe() {
    return (
        <div style={htmlTheme} className="about-me-page">
            <h1 className="what-i-do-header">What I Do</h1>

            <div className="about-gallery">
                <Card sx={[projectCards, cardDimensions]} className="fade one">
                    <h2 className="card-title">Create full stack web applications</h2>
                    <p>I have experience building web applications with and without back-end integrations.</p>
                    <p>I am comfortable conceptualizing and organizing complex structures, and as such, my projects tend to be 
                        natural in their structure and easy to maintain.</p>
                </Card>

                <Card sx={[projectCards, cardDimensions]} className="fade two">
                    <h2 className="card-title">Web Design Consulting</h2>
                    <p>I consult on small teams at <a href="/">Metazu Studio</a>, a Nashville-based startup connecting clients with services in video production, AR/VR, social media, photography, and web design.</p>
                    <p>I have worked on projects focused on full stack web engineering, real time communications, and designing beautiful user experiences.</p>
                </Card>

                <Card sx={[projectCards, cardDimensions]} className="fade three">
                    <h2 className="card-title">Creative minded problem solver</h2>
                    <p>My <a href="/creative-projects">rich creative background as a musician, composer, producer,
                        and artistic collaborator</a> provide me with a unique frame of reference for
                        solving technical problems and adapting to dynamic environments.</p>
                </Card>

                <Card sx={[projectCards, cardDimensions]} className="fade four">
                    <h2 className="card-title">Database Operations and Management</h2>
                    <p>My projects have featured both relational and non-relational databases, in particular 
                        PostgreSQL and MongoDB. I also have experience with various methods of connecting these
                        to front-end applications.</p>
                </Card>
            </div>
        </div>
    )
}