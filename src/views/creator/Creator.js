import { useState } from 'react';
import { Card } from '../../components/photo-card/Card';
import './creator.css'

export const Creator = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const HandleSubmit = (event) => {
    event.preventDefault();
  }

  const HandleFilesChange = (event) => {
    const files = event.target.files;
    const names = [];
    const promises = []; // Array to store file reading promises

    for (const file of files) {
      const reader = new FileReader();
      names.push(file.name);

      const promise = new Promise((resolve, reject) => {
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
      promises.push(promise);
    }

    Promise.all(promises) // Wait for all file reading promises to resolve
      .then((previews) => {
        const images = [];
        let i = 0;
        for (const p of previews) {
          images.push(ImageConstructor(names[i], p))
          i++;
        }

        setSelectedFiles([...selectedFiles, ...images]); // Update after previews are ready
      })
      .catch((error) => {
        console.error('Error reading files:', error);
      });
  }

  const ImageConstructor = (name, base64) => {
    return { name, base64 }
  }

  console.log(selectedFiles, "alii");
  return <div id='creator-container'>
    <form id='creator-form' onSubmit={HandleSubmit}>
      <input type='file' multiple onChange={HandleFilesChange} />
      <input type='submit' />
    </form>
    <div id='upload-preview'>
      {selectedFiles.map((image, i) => <Card key={i} uri={image.base64} text={image.name} />)}
    </div>
  </div>
}
