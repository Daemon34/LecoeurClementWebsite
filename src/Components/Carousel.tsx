import { useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Dialog, Button, Chip, DialogContent, Grid, IconButton, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Projects } from '../Database.tsx'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject]: [any, any] = useState(null);

  const handleOpen = (project: any) => {
    setActiveProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ py: 5, backgroundColor: 'transparent' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: true }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{ 900: { slidesPerView: 2.5 } }}
        style={{
          "--swiper-navigation-color": "#5a463d",
          "--swiper-pagination-color": "#5a463d",
          padding: '20px 0 50px 0'
        } as React.CSSProperties}
      >
        {Projects.map((proj, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <Card 
                onClick={() => handleOpen(proj)}
                sx={{ 
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: isActive ? 'scale(1)' : 'scale(0.85)',
                  opacity: isActive ? 1 : 0.6,
                  borderRadius: '16px',
                  boxShadow: isActive ? 12 : 2,
                  overflow: 'hidden',
                  '&:hover': { transform: isActive ? 'scale(1.03)' : 'scale(0.88)' }
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={proj.img}
                  alt={proj.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{proj.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{proj.tech}</Typography>
                </CardContent>
              </Card>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- DETAIL MODAL --- */}
      <Dialog 
        open={open} 
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{ sx: { borderRadius: '24px', p: 1 } }}
      >
        {activeProject && (
          <>
            <IconButton
              onClick={handleClose}
              sx={{ position: 'absolute', right: 16, top: 16, zIndex: 1, bgcolor: 'rgba(255,255,255,0.8)' }}
            >
              <CloseIcon />
            </IconButton>

            <DialogContent>
              <Grid container spacing={3}>
                <Grid columns={{xs: 12, md:activeProject?.video == "" ? 6 : 12}} sx={{ margin: 'auto', width: '100%'}}>
                  {activeProject.video ? (
                    <Box sx={{ position: 'relative', borderRadius: '12px', width: '100%' }}>
                      <iframe
                        style={{ position: 'relative', height: '400px', border: 0, width: '100%' }}
                        src={activeProject.video}
                        title="Project Video"
                        allowFullScreen
                      />
                    </Box>
                  ) : (
                    <CardMedia
                      component="img"
                      image={activeProject.img}
                      sx={{ borderRadius: '12px', maxHeight: '400px', objectFit: 'cover' }}
                    />
                  )}
                </Grid>

                <Grid columns={{xs:12, md:activeProject?.video ? 6 : 12}}>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {activeProject.title}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, color: 'text.secondary' }}>
                    {activeProject.description}
                  </Typography>

                  <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>Technologies Used:</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                    {activeProject.skills.map((skill: string) => (
                      <Chip key={skill} label={skill} size="small" variant="outlined" color="primary" />
                    ))}
                  </Box>

                  <Stack direction="row" spacing={2}>
                    {activeProject.github && (
                      <Button 
                        variant="contained" 
                        startIcon={<GitHubIcon />}
                        href={activeProject.github}
                        target="_blank"
                        sx={{ borderRadius: '10px', textTransform: 'none' }}
                      >
                        View Source
                      </Button>
                    )}
                    <Button 
                      variant="outlined" 
                      startIcon={<CloseIcon />}
                      onClick={handleClose}
                      sx={{ borderRadius: '10px', textTransform: 'none' }}
                    >
                      Close
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Carousel;