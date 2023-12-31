import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const SocialButtons = () => {
  return <div id="social-buttons">
    <IconButton href="https://wa.me/yournumber" sx={{ color: '#fff', '&:hover': { color: 'darkgreen' } }}>
      <WhatsAppIcon sx={{ fontSize: 32 }} />
    </IconButton>
    <IconButton href="https://instagram.com/yourusername" sx={{ color: '#fff', '&:hover': { color: 'darkpurple' } }}>
      <InstagramIcon sx={{ fontSize: 32 }} />
    </IconButton>
    <IconButton href="mailto:youremail@example.com" sx={{ color: '#fff', '&:hover': { color: 'darkred' } }}>
      <MailOutlineIcon sx={{ fontSize: 32 }} />
    </IconButton>
  </div>
}
