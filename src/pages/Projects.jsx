import { useState, useEffect, useRef, useCallback } from 'react';
import { DocumentStyle } from '../styles/Style';
import { projectsArray } from '../components/ProjectsArray';
import { Divider } from '@mui/material';
import '../App.scss';

const { htmlTheme, dividerStyle } = DocumentStyle;

const defaultFilter = {
    language: '',
    searchTerm: '',
    inProgress: false
}

export default function Projects() {
    const [results, setResults] = useState();
    const [filter, setFilter] = useState(defaultFilter);
    const [panelStyle, setPanelStyle] = useState('');

    const searchInput = useRef();
    const languageFilter = useRef();
    const projectPage = useRef();

    useEffect(() => {
        if (!filter) setResults(projectsArray.map(each => each.jsx));

        if (filter) {
            let result = projectsArray;
            if (filter.searchTerm) {
                let termLower = filter.searchTerm.toLowerCase();
                result = result.filter(obj => obj.name.toLowerCase().includes(termLower));
            }
            if (filter.language) {
                let adjustedLang = ((filter.language === 'PostgreSQL' || filter.language === "Express") ? "PERN" : filter.language);
                result = result.filter(obj => obj.languages.includes(adjustedLang));
            }

            if (filter.inProgress) result = result.filter(obj => !obj.inProgress);
            
            setResults(result.map(each => each.jsx));
        }
    }, [filter]);

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

    useEffect(() => {
        const handleScroll = (e) => {
            let position = window.scrollY;

            if (position > 150) {
                setPanelStyle("filter-anim-one");
            } else {
                setPanelStyle("");
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        console.log(panelStyle);
    }, [panelStyle]);

    return (
        <div className="projects-page" style={htmlTheme}>
            <h1>Check out these projects from my portfolio!</h1>

            <section className={`filter-panel ${panelStyle}`}>
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