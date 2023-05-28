import "../sass/pages/CreativeWorks.scss";
import { Card } from "@mui/material";

import modulars from "../media/modulars.jpeg";
import score from "../media/paper_score.jpeg";
import bandcamp from "../media/bandcamp-button-circle-line-black-128.png";
import soundcloud from "../media/soundcloud-icon.png";

export default function CreativeWorks() {
    return (
        <div className="page creative-works-page">
            <h1>Creative works</h1>

            <div className="cw-gallery">
                <img src={score} alt="Original handwritten music notation" />
                <img src={modulars} alt="Patch on a modular synthesizer" />
            </div>

            <section className="cw-information">
                <p>I would be remiss not to take the opportunity to speak about how I feel my experience as a musician informs my work as a developer!</p>
                <p>Working as a musician helped me to develop invaluable skills that provide me with a unique frame of reference in regards to my approach to technical problems.</p>
                <p>See below some of the relevant applications of my musical experience:</p>
            </section>

            <section className="cw-experiences">
                <p><strong>Modular synthesis</strong>, which heavily involves fundamentals of <strong>arithmetic and data flow</strong></p>
                <p><strong>Orchestration</strong>; ensuring all instrumental parts are executable and comfortable to play within a given set of parameters</p>
                <p><strong>Learning to play new instruments,</strong> and adapt my pre-existing knowledge to apply to new frames of reference</p>
                <p><strong>Audio engineering</strong>, and the associated practices of learning/using <strong>music technology</strong></p>
                <p>Proper <strong>interaction of components</strong> within a complex system</p>
                <p>Managing <strong>proportional integrity</strong> in musical forms</p>
            </section>

            <section className="cw-examples">
                <h2>If you're interested, you can find some samples of my music at the links below:</h2>
                <div className="sources">
                    <Card>
                        <img src={soundcloud} alt="SoundCloud logo" />
                        <a href="https://soundcloud.com/mikaylamusic">My SoundCloud</a>
                    </Card>
                    <Card>
                        <img src={bandcamp} alt="Bandcamp logo" />
                        <a href="https://mikaylaclaire.bandcamp.com/releases">My Bandcamp</a>
                    </Card>
                </div>
            </section>
        </div>
    )
}