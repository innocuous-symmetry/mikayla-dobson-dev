import { Avatar, Card, Divider } from '@mui/material';
import profile from '../media/profile.jpeg';
import '../sass/pages/Welcome.scss';

export default function Welcome() {
    return (
        <div className="welcome-page">
            <Card id="header-card" elevation={5}>
                <Avatar alt="Mikayla Dobson" src={profile} sx={{width: 110, height: 110}} />
                <h3>Hi, my name is Mikayla! I'm a junior-level full stack web developer.</h3>
                <h4 className="do-stuff">Thanks for visiting! Feel free to peruse below:</h4>
            </Card>

            <Divider orientation="horizontal" className="divider" />

            <Card id="welcome-info">
                <p>
                I am a junior-level full stack web developer based in Nashville, Tennessee. I build responsive, well-designed web applications with emphasis on concise solutions to problems, self-documenting code, and elegance of design. Some of my most frequently used technologies include React, Redux, Node.js, Express, TypeScript, Vite, PostgreSQL, MongoDB, and Sass, among others.
                </p>
            </Card>

            <Divider orientation="horizontal" className="divider" />

            <footer>
                <p>&copy; Mikayla Dobson 2022</p>
            </footer>
        </div>
    );
}