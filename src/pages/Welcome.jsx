import { Avatar, Card, Divider } from '@mui/material';
import profile from '../media/profile.jpeg';
import '../sass/pages/Welcome.scss';

export default function Welcome() {
    return (
        <div className="page welcome-page">
            <Card id="header-card" elevation={5}>
                <Avatar alt="Mikayla Dobson" src={profile} sx={{width: 110, height: 110}} />
                <h3>Hi, my name is Mikayla Dobson!</h3>
                <h4>Thanks for taking the time to learn more about me!</h4>
            </Card>

            <Divider orientation="horizontal" className="divider" />

            <Card id="welcome-info">
                <p>
                I am a software engineer based in Nashville, Tennessee. I build performant 
                web applications, seek out simple solutions to complex problems, and emphasize 
                elegance of design.
                </p>
                <p>
                Some of my most frequently used technologies include React, Redux, Node.js, 
                Express, TypeScript, Vite, PostgreSQL, MongoDB, and Sass, among others.
                </p>
            </Card>

            <Divider orientation="horizontal" className="divider" />

            <footer>
                <p>&copy; Mikayla Dobson 2022</p>
            </footer>
        </div>
    );
}