import { Card, Chip } from "@mui/material"
import { v4 } from 'uuid';

export const WhatIDo = {
    title: "What I Do",
    jsx: (
        <div className="about-gallery">
            <Card>
                <h2 className="card-title">Create full stack web applications</h2>
                <p>I have experience building web applications with and without back-end integrations.</p>
                <p>I am comfortable conceptualizing and organizing complex structures, and as such, my projects tend to be 
                    natural in their structure and easy to maintain.</p>
            </Card>

            <Card>
                <h2 className="card-title">Web Design Consulting</h2>
                <p>I consult on small teams at <a target="_blank" rel="noreferrer" href="https://www.metazu.studio/">Metazu Studio</a>, a Nashville-based startup connecting clients with services in video production, AR/VR, social media, photography, and web design.</p>
                <p>I have worked on projects focused on full stack web engineering, real time communications, and designing beautiful user experiences.</p>
            </Card>

            <Card>
                <h2 className="card-title">Creative minded problem solver</h2>
                <p>
                    My background as a musician, composer, producer, and artistic
                    collaborator provide me with a unique frame of reference for solving technical
                    problems and adapting to dynamic environments.
                </p>
            </Card>

            <Card>
                <h2 className="card-title">Database Operations and Management</h2>
                <p>My projects have featured both relational and non-relational databases, in particular 
                    PostgreSQL and MongoDB. I also have experience with various methods of connecting these
                    to front-end applications.</p>
            </Card>
        </div>
    )
}

export const Education = {
    title: "Education",
    jsx: (
        <div className="about-gallery">
            <Card>
                <h2 className="card-title">Bachelors of Arts, Music</h2>
                <h3>Southern Methodist University, 2014 - 2017</h3>
                <p><strong>Concentrations:</strong> Piano Performance, Music Composition, Music Theory</p>
                <p><strong>Minor:</strong> French Language and Culture</p>
            </Card>

            <Card>
                <h2 className="card-title">Self Directed Study, Web Engineering</h2>
                <h3>2021 - present</h3>
                <p>Codecademy Pro, Front End Engineer Career Path</p>
                <p><strong>Concentrations:</strong> React, Redux, Express, PostgreSQL</p>
            </Card>
        </div>
    )
}

const MetazuConcepts = [
    "UI/UX design", "Pair Programming", "REST APIs", "Database management", "Consulting with Clients"
]

const MusicExperiences = [
    "Avant Chamber Ballet", "Dallas Symphony Orchestra", "Boston University", "National Public Radio"
]

export const Employment = {
    title: "Employment",
    jsx: (
        <div className="about-gallery">
            <Card>
                <h2 className="card-title">Web Design Consultant</h2>
                <h3>Metazu Studio | Nashville, TN <br/>Mar 2022 - present</h3>
                <p><strong>Relevant Duties:</strong> collaboration on the design and production of responsive web apps, including:</p>
                <div className="chip-section">
                    { MetazuConcepts.map(each => <Chip key={v4()} label={each} /> ) }
                </div>
            </Card>

            <Card>
                <h2 className="card-title">Singer-Songwriter, Composer</h2>
                <h3>
                    Contract, Independent
                    <br/>
                    2010 - present
                </h3>
                <p>
                    Multi-instrumentalist, singer-songwriter, and producer, well-versed in a number of musical idioms
                    and music technologies.
                </p>
                <div className="chip-section">
                    { MusicExperiences.map(each => <Chip key={v4()} label={each} /> ) }
                </div>
            </Card>

            <Card>
                <h2 className="card-title">Barista, Barista Trainer</h2>
                <h3>Starbucks Coffee Co.<br/>2017 - 2021</h3>
                <p>
                    <strong>Relevant Duties:</strong> collaboration, problem-solving, streamlined execution of a process,
                    attention to detail, adhering to standardized safety protocols, observing best practices, training new hires.
                </p>
            </Card>
        </div>
    )
}

export const Community = {
    title: "Community",
    jsx: (
        <>
        </>
    )
}