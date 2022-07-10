import { Card } from "@mui/material";

export const projectsArray = [
    {
        name: "Mikayla's E-Commerce Store",
        languages: ["TypeScript", "React", "PERN", "REST_API"],
        inProgress: true,
        jsx: (
            <Card>
                <h1>Mikayla's E-Commerce Store</h1>
                <p>A fully-featured e-commerce platform</p>
                <p>Built in React with TypeScript, Node/Express, and PostgreSQL</p>
                <p>Payment processing supported through Stripe</p>
                <p>REST API fully documented in Swagger</p>
                <p>IN PROGRESS</p>
            </Card>
        )
    },
    {
        name: "Procedural Drones",
        languages: ["JavaScript", "HTML/CSS"],
        inProgress: true,
        deployed: true,
        jsx: (
            <Card>
                <h1>Procedural Drones</h1>
                <p>An experimental space for building out procedural music generation using vanilla JavaScript</p>
                <p>Uses Tone.js to interact with the Web Audio API</p>
                <p>Features a plain HTML/CSS front end to interact with the program</p>
                <div className="links">
                    <a target="_blank" rel="noreferrer" href="https://github.com/innocuous-symmetry/procedural-drones-01">GitHub Repo</a>
                    <a target="_blank" rel="noreferrer" href="https://innocuous-symmetry.github.io/procedural-drones-01/">Deployed version</a>
                </div>
            </Card>
        )
    },
    {
        name: "Reddit, but it's all cats",
        languages: ["React", "Redux"],
        inProgress: false,
        deployed: true,
        jsx: (
            <Card>
                <h1>Reddit, but it's all cats</h1>
                <p>A read-only Reddit client -- this site fetches data from Reddit and displays a curated feed.</p>
                <p>This was built on Reddit's JSON API, using React/Redux and CSS.</p>
                <p>And yes, it's all cats.</p>
                <div className="links">
                    <a target="_blank" rel="noreferrer" href="https://github.com/innocuous-symmetry/cat-reddit">GitHub Repo</a>
                    <a target="_blank" rel="noreferrer" href="https://reddit-but-all-cats.netlify.app/">Deployed version</a>
                </div>
            </Card>
        )
    },
    {
        name: "Personal Timestamp Generator",
        languages: ["Python", "SQLite"],
        inProgress: false,
        jsx: (
            <Card>
                <h1>Personal Timestamp Generator</h1>
                <p>A small-scale timestamp/productivity management tool for individual use and logging of 
                    time, including compartmentalization by task and some aggregate functions based on queries.
                </p>
                <p>Command-line interface built on Python with a SQLite Database.</p>
                <a href="https://github.com/innocuous-symmetry/timestamp_project" target="_blank" rel="noreferrer">View the repo here!</a>
            </Card>
        )
    },
    {
        name: "Musical Counterpoint Bot",
        languages: ["HTML/CSS", "JavaScript"],
        inProgress: true,
        jsx: (
            <Card>
                <h1>Musical Counterpoint Bot</h1>
                <p>A web-based program with functionality to evaluate sample solutions of problems in 
                    species-based counterpoint, as detailed by Johann Fux in <em>Gradus ad Parnassum.</em></p>
                <p>This project is intended to be used as a practical application of linked lists and 
                    other compound data structures in JavaScript.</p>
                <p>In progress. Using vanilla HTML/CSS/JS.</p>
            </Card>
        )
    },
    {
        name: "Password Game",
        languages: ["React", "MongoDB", "MERN", "React", "REST_API", "Socket.io", "Sass", "MaterialUI"],
        inProgress: true,
        jsx: (
            <Card>
                <h1>Password Game</h1>
                <p>As part of a mentorship program hosted by Metazu Studio</p>
                <p>Implemented using MongoDB, React, and Node/Express, styled with Material UI/SCSS.</p>
                <p>In progress, building in collaboration with others at Metazu Studio.</p>
            </Card>
        )
    },
    {
        name: "Splinter",
        languages: ["React", "PERN", "Socket.io"],
        inProgress: true,
        jsx: (
            <Card>
                <h1>Splinter</h1>
                <p>A clone of a popular card-based resource gathering game</p>
                <p>Local multiplayer, with plans to build out online multiplayer and solo vs. CPU</p>
                <p>In progress. Using React, Node/Express, and PostgreSQL.</p>
            </Card>
        )
    },
    {
        name: "Carenest",
        languages: ["React"],
        inProgress: false,
        jsx: (
            <Card>
                <h1>Carenest</h1>
                <p>Designed in collaboration with Faith Magras, Elvis Hernandez, and Daytreon Dean 
                    as a submission for #HACKTN in March 2022.</p>
                <p>Produced using React. View the repo <a target="_blank" rel="noreferrer" href="https://github.com/Team-Carenest/carenest">here!</a></p>
            </Card>
        )
    },
    {
        name: "This Site",
        languages: ["React", "Sass", "MaterialUI"],
        inProgress: true,
        jsx: (
            <Card>
                <h1>And, last but not least, the site you see here!</h1>
                <p>This site is built using React, Material UI, and SCSS, and is hosted with Netlify.</p>
                <a target="_blank" rel="noreferrer" href="https://github.com/innocuous-symmetry/about-mikayla">View the site repo here!</a>
            </Card>
        )
    }
]