import "../sass/pages/Links.scss";
import Card from '@mui/material/Card';
import github from "../media/GitHub-Mark-120px-plus.png";
import linkedin from "../media/LI-In-Bug.png";

export default function Links() {
    return (
        <div className="page links-page">
            <h1>Connect with me and get a closer look at my work!</h1>

            <div className="links-container">
                <Card>
                    <img src={github} alt="GitHub logo" />
                    <a href="https://github.com/innocuous-symmetry">Github</a>
                </Card>
                <Card>
                    <img src={linkedin} alt="LinkedIn logo" />
                    <a href="https://www.linkedin.com/in/mikayla-dobson/">LinkedIn Profile</a>
                </Card>
            </div>
        </div>
    )
}