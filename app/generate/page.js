"use client";

import { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

export default function Generate() {
  const [text, setText] = useState(""); // Recieves a string
  const [flashCards, setFlashCards] = useState([]); // Recieves an array

  const handleSubmit = async () => {};

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography
          sx={{ typography: { xs: "h5", sm: "h4" } }}
          component="h1"
          gutterBottom
        >
          Generate flashCards
        </Typography>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          label="Enter text"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
        >
          Generate flashCards
        </Button>
      </Box>
    </Container>
  );
}
