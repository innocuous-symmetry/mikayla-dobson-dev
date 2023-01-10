import { useState, useEffect, useRef } from 'react';
import { projectsArray } from '../components/ProjectsArray';
import { Divider } from '@mui/material';
import '../sass/pages/Projects.scss';

export default function Projects() {
    const [results, setResults] = useState();
    const [search, setSearch] = useState(null);
    const [text, setText] = useState();

    const searchInput = useRef();

    useEffect(() => {
        let result = new Set();

        if (!search) {
            setResults(projectsArray.map(card => card.jsx));
        }

        if (search && text) {
            for (let entry of text) {
                for (let field of entry.text) {
                    if (field.toLowerCase().includes(search)) {
                        result.add(projectsArray[entry.projectID]);
                    }
                }
            }
        }

        if (search && result.size == 0) {
            setResults(
                <p>No results found for search "{search}"</p>
            )
        }

        setResults(Array.from(result).map(card => card.jsx));
    }, [search]);

    useEffect(() => {
        function unpack(element) {
            if (typeof element == "string") return element;

            if (typeof element.props.children != "string") {
                if (Array.isArray(element.props.children)) {
                    let composite = "";

                    for (let each of element.props.children) {
                        composite += unpack(each);
                    }

                    return composite;
                }

                return unpack(element.props.children);
            }
            
            return element.props.children;
        }

        let projectText = [];
        let i = 0;
        while (i < projectsArray.length) {
            let project = {
                projectID: i,
                text: []
            }

            let newText;

            for (let each of projectsArray[i].jsx.props.children) {
                newText = unpack(each);
                project.text.push(newText);
            }

            projectText.push(project);
            i++;
        }

        setText(projectText);
        setResults(projectsArray.map(card => card.jsx));
    }, [])

    const handleReset = () => {
        setSearch(null);
        searchInput.current.value = null;
    }

    return (
        <div className="page projects-page">
            <h1 className="projects-section-header mobile-hide">Check out these projects from my portfolio!</h1>
            <h1 className="projects-section-header mobile-show">A selection of my projects:</h1>

            <section className="filter-panel">
                <h2>Filter by:</h2>
                <div className="filter-controls">
                    <input
                        ref={searchInput} type="text"
                        onChange={(e) => setSearch(e.target.value.toLowerCase())}
                        placeholder="Enter a search term">
                    </input>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </section>

            <Divider orientation="horizontal" className="divider" />

            <div className="project-cards">
                {results}
            </div>
        </div>
    )
}