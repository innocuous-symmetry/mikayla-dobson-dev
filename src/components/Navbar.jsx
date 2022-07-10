import { Button, Drawer, List, ListItem } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import { SidebarStyle } from "../styles/Style";
import '../sass/Navbar.scss';
import { v4 } from "uuid";

const { background, list, listItem } = SidebarStyle;

const navOptions = [
    "Home",
    "About Me",
    "My Projects",
    "My Technologies",
    "Links",
    "Creative Work"
]

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        setOpen(false);
        switch (selected) {
            case 0:
                navigate('/');
                break;
            case 1:
                navigate('/about-me');
                break;
            case 2:
                navigate('/projects');
                break;
            case 3:
                navigate('/technologies');
                break;
            case 4:
                navigate('/links');
                break;
            case 5:
                navigate('/creative-works');
                break;
            default:
                navigate('/');
                break;
        }
    }, [selected, navigate]);

    return (
        <header className="app-navbar">
            <div className="navbar-left">
                <a href="/" className="my-name">Mikayla Dobson</a>
                <h2>Web Design Contractor</h2>
            </div>

            <div className="navbar-right">
                <Button onClick={() => setOpen(!open)}>
                    <MenuIcon />
                </Button>
            </div>

            <Drawer
                anchor="right"
                onClose={() => setOpen(false)}
                open={open}
            >

                <List sx={list} component="nav">

                    {
                        navOptions.map(each => {
                            let idx = navOptions.indexOf(each);
                            return (
                                <ListItem button
                                    sx={listItem}
                                    key={v4()}
                                    selected={selected === idx}
                                    onClick={() => setSelected(idx)}>
                                        {each}
                                </ListItem>
                            )
                        })
                    }

                </List>
            </Drawer>
        </header>
    )
}