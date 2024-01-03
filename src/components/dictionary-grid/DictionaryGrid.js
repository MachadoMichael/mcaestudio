import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CardMedia from '@mui/material/CardMedia';

export const DictionaryGrid = ({ dictionaries, selectDictionary, deleteDictionary }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {dictionaries.map((dict, index) => (
        <Card key={index} sx={{ maxWidth: 200, m: 2 }} onClick={() => selectDictionary(dict)}>
          <CardMedia
            component="img"
            height="140"
            // image={`data:image/png;base64,${dict.img}`}
            image={dict.img}
            alt={dict.alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {dict.alt}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {dict.architect} - {dict.place} - {dict.company}
            </Typography>
            <IconButton edge="end" color="inherit" onClick={(e) => { e.stopPropagation(); deleteDictionary(dict); }}>
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
