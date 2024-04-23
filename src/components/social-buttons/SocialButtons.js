import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './socialButtons.css';


export const SocialButtons = () => {
  return <div id="social-buttons">
    <IconButton href="https://wa.me/21985901516" sx={{ color: '#fff', '&:hover': { fontWeight: "bolder" } }}>
      <WhatsAppIcon sx={{ fontSize: 32 }} />
      <div className='icon-text'>
        (21) 98591-1516
      </div>
    </IconButton>

    <IconButton href="https://instagram.com/mca_estudio" sx={{ color: '#fff', '&:hover': { fontWeight: "bolder" } }}>
      <InstagramIcon sx={{ fontSize: 32 }} />
      <div className='icon-text'>
        @mca_estudio
      </div>
    </IconButton>

    <IconButton href="mailto:estudio@mcaestudio.com.br" sx={{ color: '#fff', '&:hover': { fontWeight: "bolder" } }}>
      <MailOutlineIcon sx={{ fontSize: 32 }} />
      <div className='icon-text'>
        estudio@mcaestudio.com.br
      </div>
    </IconButton>
  </div>
}
