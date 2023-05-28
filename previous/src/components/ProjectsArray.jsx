import { Card } from "@mui/material";
import { v4 } from 'uuid';

export const projectsArray = [
    {
        name: "Express Spice Shop",
        languages: ["TypeScript", "React", "PERN", "REST_API"],
        inProgress: true,
        jsx: (
            <Card key={v4()}>
                <h1><a target="_blank" rel="noreferrer" href="https://github.com/innocuous-symmetry/e-commerce">Express Spice Shop</a></h1>
                <p>A sample, fully-featured e-commerce platform</p>
                <p>Built in React with TypeScript, Node/Express, and PostgreSQL</p>
                <p>Payment processing supported through Stripe (in progress)</p>
                <p>API documentation with Swagger</p>
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
            <Card key={v4()}>
                <h1>Procedural Music Generation</h1>
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
            <Card key={v4()}>
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
            <Card key={v4()}>
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
        name: "Password Game",
        languages: ["React", "MongoDB", "MERN", "React", "REST_API", "Socket.io", "Sass", "MaterialUI"],
        inProgress: true,
        jsx: (
            <Card key={v4()}>
                <h1>Password Game</h1>
                <p>As part of a mentorship program hosted by Metazu Studio</p>
                <p>Implemented using MongoDB, React, and Node/Express, styled with Material UI/SCSS.</p>
                <p>In progress, building in collaboration with others at Metazu Studio.</p>
            </Card>
        )
    },
    {
        name: "Splendor Clone",
        languages: ["React", "TypeScript"],
        inProgress: true,
        jsx: (
            <Card key={v4()}>
                <h1><a target="_blank" rel="noreferrer" href="https://github.com/innocuous-symmetry/splendor-clone">Splendor</a> -- a clone of the board game by Marc André</h1>
                <p>A clone of a popular card-based resource gathering game</p>
                <p>Local multiplayer, with plans to build out online multiplayer and solo vs. CPU</p>
                <p>In progress. Using React, Node/Express, and PostgreSQL.</p>
            </Card>
        )
    },
    {
        name: "Recipin",
        languages: ["React", "TypeScript", "PERN"],
        inProgress: true,
        jsx: (
            <Card key={v4()}>
                <h1><a target="_blank" rel="noreferrer" href="https://github.com/innocuous-symmetry/recipe-manager">Recipin</a> -- a home recipe management solution</h1>
                <p>Manage a collection of your own commonly-used recipes</p>
                <p>Features a full user-auth workflow and enables the sharing of recipes between users</p>
                <p>Allows the user to build shopping lists from collections of their recipes</p>
                <p>Built using full end-to-end TypeScript for the React front end and the Express server</p>
            </Card>
        )
    },
    {
        name: "Photosorting with VGG16",
        languages: ["Python", "TensorFlow", "PostgreSQL"],
        inProgress: true,
        jsx: (
            <Card key={v4()}>
                <h1>Photosorting with VGG16</h1>
                <p>A tool written in Python for sorting photos based on the output of VGG16, the pre-trained image recognition model included with TensorFlow.</p>
                <p>The user may also integrate the results of their photo sort into a PostgreSQL database.</p>
                <p>The repository may be found <a target="_blank" rel="noreferrer" href="https://github.com/innocuous-symmetry/vgg16-image-recognition">here!</a></p>
            </Card>
        )
    },
    {
        name: "About Mikayla",
        languages: ["React", "Sass", "MaterialUI"],
        inProgress: true,
        jsx: (
            <Card key={v4()}>
                <h1>And, last but not least, the site you see here!</h1>
                <p>This site is built using React, Material UI, and SCSS, and is hosted with Netlify.</p>
                <a target="_blank" rel="noreferrer" href="https://github.com/innocuous-symmetry/MikaylaDobsonDev">View the site repo here!</a>
            </Card>
        )
    }
]