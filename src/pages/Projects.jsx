import { useState, useEffect, useRef, useCallback } from 'react';
import { DocumentStyle } from '../styles/Style';
import { projectsArray } from '../components/ProjectsArray';
import { Divider } from '@mui/material';
import '../sass/pages/Projects.scss';

const { htmlTheme, dividerStyle } = DocumentStyle;

const defaultFilter = {
    language: '',
    searchTerm: '',
    inProgress: false
}

export default function Projects() {
    const [results, setResults] = useState();
    const [filter, setFilter] = useState(defaultFilter);
    const [text, setText] = useState();

    const searchInput = useRef();
    const languageFilter = useRef();

    useEffect(() => {
        let result = [];

        if (filter === defaultFilter) {
            setResults(projectsArray.map(each => each.jsx));
            return;
        }

        if (filter.searchTerm) {
            let termLower = filter.searchTerm.toLowerCase();

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
        } else if (filter.inProgress) {
            result = result.filter(obj => !obj.inProgress);
        }

        setResults(result.map(each => each.jsx));
    }, [filter]);

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

    const handleChange = (e) => {
        e.preventDefault();
        setFilter({
            ...filter,
            language: e.target.value
        })
    }

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
                        onChange={(e) => setFilter({...filter, searchTerm: e.target.value})}
                        placeholder="Enter a search term">
                    </input>
                    <select ref={languageFilter} onChange={handleChange} name="language" id="language">
                        <option value="">- Language -</option>
                        <option value="Express">Express</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="MaterialUI">Material UI</option>
                        <option value="MongoDB">MongoDB</option>
                        <option value="PostgreSQL">PostgreSQL</option>
                        <option value="Python">Python</option>
                        <option value="React">React</option>
                        <option value="Redux">Redux</option>
                        <option value="REST_API">REST API</option>
                        <option value="Sass">Sass</option>
                        <option value="SQLite">SQLite</option>
                        <option value="TypeScript">TypeScript</option>
                    </select>
                    <button onClick={() => setFilter({...filter, inProgress: !filter.inProgress})}>
                            {filter.inProgress ? "Show" : "Hide"} in-progress
                        </button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </section>

            <Divider orientation="horizontal" sx={dividerStyle} />

            <div className="project-cards">
                {results}
            </div>
        </div>
    )
}