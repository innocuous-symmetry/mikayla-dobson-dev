import { useState, useEffect, useRef } from 'react';
import { DocumentStyle } from '../styles/Style';
import { projectsArray } from '../components/ProjectsArray';
import { Divider } from '@mui/material';
import '../sass/pages/Projects.scss';

const { htmlTheme } = DocumentStyle;

const defaultFilter = {
    language: '',
    searchTerm: '',
    inProgress: false
}

export default function Projects() {
    const [results, setResults] = useState();
    const [search, setSearch] = useState('');
    const [text, setText] = useState();

    const searchInput = useRef();
    const languageFilter = useRef();

    useEffect(() => {
        let result = [];

        if (!search) {
            setResults(projectsArray.map(each => each.jsx));
            return;
        }

        if (search) {
            let termLower = search.toLowerCase();

            let i = 0;
            while (i < text.length) {
                for (let field of text[i].text) {
                    if (field.includes(termLower)) {
                        result.push(projectsArray[i]);
                        break;
                    } else {
                        continue;
                    }
                }
                i++;
            }
        }

        setResults(result.map(each => each.jsx));
    }, [search]);

    useEffect(() => {
        let projectText = [];
        let i = 0;
        while (i < projectsArray.length) {
            let project = {
                projectID: i,
                text: []
            }

            for (let each of projectsArray[i].jsx.props.children) {
                if (Array.isArray(each.props.children)) {
                    for (let nested of each.props.children) {
                        if (typeof nested === 'string') {
                            const newText = nested.toLowerCase();
                            project.text.push(newText);
                        } else {
                            const newText = nested.props.children.toLowerCase();
                            project.text.push(newText);
                        }
                    }
                } else {
                    const newText = each.props.children.toLowerCase();
                    project.text.push(newText);
                }
            }

            projectText.push(project);
            i++;
        }
        setText(projectText);
    }, [])

    const handleReset = () => {
        setFilter(defaultFilter);
        searchInput.current.value = '';
        languageFilter.current.value = '';
    }

    return (
        <div className="projects-page" style={htmlTheme}>
            <h1>Check out these projects from my portfolio!</h1>

            <section className={`filter-panel`}>
                <h2>Filter by:</h2>
                <div className="filter-controls">
                    <input
                        ref={searchInput} type="text"
                        onChange={(e) => setSearch(e.target.value)}
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