import Card from '@mui/material/Card';

import { DocumentStyle } from '../styles/Style';

const { htmlTheme, stockGallery } = DocumentStyle;

export default function Links() {
    return (
        <div style={htmlTheme}>
            <h1>Find more about my work at the links below!</h1>

            <div style={stockGallery}>
                <Card>
                    {/* An image here for a Github logo? */}
                    <a href="https://github.com/innocuous-symmetry">My Github</a>
                </Card>
                <Card>
                    {/* LinkedIn image? */}
                    <a href="https://www.linkedin.com/in/mikayla-dobson/">My LinkedIn Profile</a>
                </Card>
                <Card>
                    <a href="https://codepen.io/innocuous-symmetry">My CodePen</a>
                </Card>
            </div>
        </div>
    )
}