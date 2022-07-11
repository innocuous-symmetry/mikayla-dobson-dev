import { DocumentStyle } from '../styles/Style';
import Card from '@mui/material/Card';
import "../sass/pages/Links.scss";

import github from "../media/GitHub-Mark-120px-plus.png";
import linkedin from "../media/LI-In-Bug.png";

const { htmlTheme } = DocumentStyle;

export default function Links() {
    return (
        <div style={htmlTheme} className="links-page">
            <h1>Find more about my work at the links below!</h1>

            <div className="links-container">
                <Card>
                    <img src={github} alt="GitHub logo" />
                    {/* An image here for a Github logo? */}
                    <a href="https://github.com/innocuous-symmetry">My Github</a>
                </Card>
                <Card>
                    <img src={linkedin} alt="LinkedIn logo" />
                    <a href="https://www.linkedin.com/in/mikayla-dobson/">My LinkedIn Profile</a>
                </Card>
            </div>
        </div>
    )
}