import { Button, Drawer, List, ListItem } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import '../sass/Navbar.scss';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
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

            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <List component="nav">

                    <ListItem button
                        selected={selected===0}
                        onClick={() => setSelected(0)}>
                            Home
                    </ListItem>

                    <ListItem button
                        selected={selected===1}
                        onClick={() => setSelected(1)}>
                            About me
                    </ListItem>

                    <ListItem button
                        selected={selected===2}
                        onClick={() => setSelected(2)}>
                            My Projects
                    </ListItem>

                    <ListItem button
                        selected={selected===3}
                        onClick={() => setSelected(3)}>
                            My Technologies
                    </ListItem>

                    <ListItem button
                        selected={selected===4}
                        onClick={() => setSelected(4)}>
                            Links
                    </ListItem>

                    <ListItem button
                        selected={selected===5}
                        onClick={() => setSelected(5)}>
                            My Creative Work
                    </ListItem>
                </List>
            </Drawer>
        </header>
    )
}