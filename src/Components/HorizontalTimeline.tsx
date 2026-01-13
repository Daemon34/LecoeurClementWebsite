import { Box, Typography, Avatar, Divider } from '@mui/material';
import { Experiences } from '../Database';

const HorizontalTimeline = () => {
    return (
      <Box sx={{ py: 10, width: '100%', overflowX: 'auto' }}>
        <Box sx={{ 
          display: 'inline-flex', 
          minWidth: 'max-content', 
          px: 4,
          position: 'relative',
          alignItems: 'flex-start'
        }}>
          <Divider sx={{ 
            position: 'absolute', 
            top: 30, 
            left: 0, 
            right: 0, 
            borderColor: '#5a463d', 
            borderBottomWidth: 2,
            zIndex: 0 
          }} />
  
          {Experiences.map((exp, index) => (
            <Box key={index} sx={{ 
              width: 300, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              textAlign: 'center',
              zIndex: 1,
              px: 2
            }}>
              <Avatar sx={{ 
                bgcolor: 'white', 
                color: '#5a463d',
                border: '2px solid #5a463d',
                width: 60, 
                height: 60,
                mb: 2,
                boxShadow: 3
              }}>
                <img src={exp.icon} alt="logo" style={{ width: '100%' }} />
              </Avatar>
              {exp.typeIcon}
              <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'text.secondary' }}>
                {exp.date}
              </Typography>
              <Typography variant="h6" sx={{ fontFamily: "'Playfair Display', sans-serif", mt: 1 }}>
                {exp.title}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                {exp.sub}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    );
};

export default HorizontalTimeline;