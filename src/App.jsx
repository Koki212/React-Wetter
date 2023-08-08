/* src/App.jsx */
import { TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function App() {
    const [location, setLocation] = useState("");
    const [results, setResults] = useState([]);
    const navigate = useNavigate();
    return (
        // Stack for nice looking -> Button and Textfield are the same high
        <Box
            sx={{
                width: "100%",
                maxWidth: 360,
            }}
        >
            <Stack direction="row" spacing={2}>
                <TextField
                    label="Standort"
                    onChange={(event) => {
                        setLocation(event.target.value);
                    }}
                    value={location}
                />
                <Button
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    onClick={async () => {
                        // Try-Catch Block für error handling
                        try {
                            // function encodeURIComponent für URL-taugliche Umwandlung der Eingabe (Ort)
                            const cleanLocation = encodeURIComponent(
                                location.trim()
                            );
                            // fetch function für die Abfrage auf den Server
                            const response = await fetch(
                                `https://geocoding-api.open-meteo.com/v1/search?name=${cleanLocation}`
                            );
                            // Ergebnis soll als JSON interpretiert werden
                            const data = await response.json();
                            setResults(data.results);
                        } catch (err) {
                            console.error(err);
                        }
                    }}
                >
                    Senden
                </Button>
            </Stack>
            <List>
                {results.map((location) => {
                    return (
                        <ListItem key={location.id}>
                            <ListItemButton>
                                <ListItemText
                                    primary={location.name}
                                    secondary={
                                        location.admin1
                                            ? `${location.admin1}, ${location.country}`
                                            : location.country
                                    }
                                    onClick={() => {
                                        const lat = location.latitude
                                            .toString()
                                            .replace(".", "_");
                                        const lng = location.longitude
                                            .toString()
                                            .replace(".", "_");
                                        navigate(`/${lat}/${lng}`);
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
}
