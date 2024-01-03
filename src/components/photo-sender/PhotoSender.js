import { useState } from "react";
import { getBase64 } from "../../utils/ConverterToBase64";
import { PhotoConstructor } from "../../utils/PhotoConstructor";
import './photoSender.css'

import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { addPhotoToFirestore } from "../../firebase/firebaseApp";

export const PhotoSender = () => {
  const [imageFile, setImageFile] = useState();
  const [altText, setAltText] = useState("");
  const [position, setPosition] = useState(0);
  const [architect, setArchitect] = useState("");
  const [place, setPlace] = useState("");
  const [company, setCompany] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageChange = async (event) => {
    const newPhoto = await getBase64(event.target.files[0])
    if (newPhoto !== null && newPhoto !== undefined) await setImageFile(newPhoto);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!imageFile || !altText || !position || !architect || !place || !company) {
      setErrorMessage("Todos os campos precisam estar preenchidos.")
    }
    const photoData = PhotoConstructor(imageFile, altText, position, architect, place, company)
    console.log('payload', photoData)
    await addPhotoToFirestore(photoData);
    // Here you can handle the form submission, e.g., send data to the server
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <Box sx={{ width: '100%' }}>
        <TextField
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          variant="outlined"
          label="Image File"
        />
      </Box>
      <TextField
        type="text"
        value={altText}
        onChange={(e) => setAltText(e.target.value)}
        variant="outlined"
        label="Alt Text"
      />
      <TextField
        type="number"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        variant="outlined"
        label="Position"
      />
      <TextField
        type="text"
        value={architect}
        onChange={(e) => setArchitect(e.target.value)}
        variant="outlined"
        label="Architect"
      />
      <TextField
        type="text"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        variant="outlined"
        label="Place"
      />
      <TextField
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        variant="outlined"
        label="Company"
      />
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </Box>
  );

};

