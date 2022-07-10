import '../sass/pages/Technologies.scss';

import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';

import { TechnologiesPage, DocumentStyle } from '../styles/Style';

const { technologyCard } = TechnologiesPage;
const { htmlTheme } = DocumentStyle;

export default function Technologies() {
    return (
        <div className="technologies-page" style={htmlTheme}>
            <Card sx={{padding: '2rem'}}>
                <h1>What technologies do I use?</h1>
            </Card>

            <h2>These are my most often-used technologies:</h2>
            <Card sx={technologyCard}>
                <div className="tech-scrollbar">
                    <Chip label="React" className="tech-bar-item"/>
                    <Chip label="Redux" className="tech-bar-item"/>
                    <Chip label="Express" className="tech-bar-item"/>
                    <Chip label="PostgreSQL" className="tech-bar-item"/>
                    <Chip label="Supabase" className="tech-bar-item"/>
                    <Chip label="MongoDB" className="tech-bar-item"/>
                </div>

                <div className="tech-scrollbar backup-bar">
                <Chip label="React" className="tech-bar-item"/>
                    <Chip label="Redux" className="tech-bar-item"/>
                    <Chip label="Express" className="tech-bar-item"/>
                    <Chip label="PostgreSQL" className="tech-bar-item"/>
                    <Chip label="Supabase" className="tech-bar-item"/>
                    <Chip label="MongoDB" className="tech-bar-item"/>
                </div>
            </Card>

            <h2>Here are some I use relatively often:</h2>
            <Card sx={technologyCard}>

                <div className="tech-scrollbar from-right">
                    <Chip className="tech-bar-item variant-2" label="Sass" />
                    <Chip className="tech-bar-item variant-2" label="Material UI" />
                    <Chip className="tech-bar-item variant-2" label="Python" />
                    <Chip className="tech-bar-item variant-2" label="Figma" />
                    <Chip className="tech-bar-item variant-2" label="TypeScript" />
                </div>

                <div className="tech-scrollbar backup-from-right">
                    <Chip className="tech-bar-item variant-2" label="Sass" />
                    <Chip className="tech-bar-item variant-2" label="Material UI" />
                    <Chip className="tech-bar-item variant-2" label="Python" />
                    <Chip className="tech-bar-item variant-2" label="TypeScript" />
                </div>

            </Card>

            <h2>And here are some things I'm working on learning:</h2>
            <Card sx={technologyCard}>

                <div className="tech-scrollbar">
                    <Chip className="tech-bar-item variant-3" label="Prisma" />
                    <Chip className="tech-bar-item variant-3" label="Figma" />
                    <Chip className="tech-bar-item variant-3" label="C# / ASP.NET" />
                    <Chip className="tech-bar-item variant-3" label="Next.js" />
                </div>

                <div className="tech-scrollbar backup-bar">
                    <Chip className="tech-bar-item variant-3" label="Prisma" />
                    <Chip className="tech-bar-item variant-3" label="Figma" />
                    <Chip className="tech-bar-item variant-3" label="C# / ASP.NET" />
                    <Chip className="tech-bar-item variant-3" label="Next.js" />
                </div>
                
            </Card>
        </div>
    )
}