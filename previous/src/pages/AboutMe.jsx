import Card from '@mui/material/Card';
import { AboutSection } from '../components/AboutMe/AboutSection';
import { WhatIDo, Education, Employment } from '../components/AboutMe/SectionData';
import '../sass/pages/AboutMe.scss';

export default function AboutMe() {
    return (
        <div className="page about-me-page">
            <AboutSection data={WhatIDo} />
            <AboutSection data={Education} />
            <AboutSection data={Employment} />
        </div>
    )
}