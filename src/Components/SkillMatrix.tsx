import { Grid, Card, CardContent, Typography, Box, Chip, Divider } from '@mui/material';
import { Skills } from '../Database';

const SkillMatrix = () => {
  const getLevelDetails = (value: number) => {
    if (value >= 80) return { label: 'Expert', color: '#1b5e20' };       
    if (value >= 60) return { label: 'Advanced', color: '#4caf50' };     
    if (value >= 40) return { label: 'Intermediate', color: '#fbc02d' }; 
    if (value >= 20) return { label: 'Beginner', color: '#ef6c00' };         
    return { label: 'Base Only', color: '#d32f2f' };                      
  };

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Grid container spacing={3}>
        {Skills.map((item) => (
          <Grid size={{xs: 12, sm: 6, md: 3}} key={item.category}>
            <Card variant="outlined" sx={{ height: '100%', borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {item.category}
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {item.skills.map((skill) => (
                    <Box 
                      key={skill.name} 
                      sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        {skill.name}
                      </Typography>
                      <Chip 
                        label={`${getLevelDetails(skill.level).label}`} 
                        size="small"
                        sx={{ 
                          backgroundColor: getLevelDetails(skill.level).color, 
                          color: skill.level >= 40 ? '#fff' : '#000', // Better contrast for yellow
                          fontWeight: 'bold',
                          width: '50%'
                        }} 
                      />
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillMatrix;