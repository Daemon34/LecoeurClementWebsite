import { useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Dialog, Button, Chip, DialogContent, Grid, IconButton, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import JustDance2022 from '../assets/JustDance2022.png';
import JustDance2023 from '../assets/JustDance2023.png';
import JustDance2024 from '../assets/JustDance2024.jpg';
import TheCrewMotorfest from '../assets/TheCrewMotorfest.png';
import TheCrew2 from '../assets/TheCrew2.jpg';
import CPURaytracer from '../assets/3DCPURaytracer.png';
import VulkanRenderer from '../assets/VulkanRenderer.png';
import WebGLRenderer from '../assets/WebGLRenderer.png';
import UnityECS from '../assets/UnityECS.png';
import UnityMultiplayerFPS from '../assets/UnityMultiplayerFPS.png';
import UnrealGASSurvival from '../assets/UnrealGASSurvival.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject]: [any, any] = useState(null);
  
  const projects = [
    { 
      title: "Just Dance 2022",
      img: JustDance2022,
      tech: "C# / Unity / Cloud / DevOps",
      description: "As my first professional project in the video game industry, I was in charge of the Cloud Build Farm using Ubisoft internal Cloud based on OpenStack, and the Build System using QuickBuild. I was making scripts in Groovy, or with an internal tool using C#.",
      skills: ["C#", "Unity", "OpenStack", "QuickBuild", "Windows"],
      video: "",
      github: ""
    },
    { 
      title: "Just Dance 2023",
      img: JustDance2023,
      tech: "C# / Unity / Cloud / DevOps",
      description: "After Just Dance 2022, I worked on Just Dance 2023 using the same tech as the previous opus. I added more tools using C# or React and NodeJS to ease pipeline for Gameplay Programmer, Content Teams or Producer, while still maintaining the cloud build farm and the build system.",
      skills: ["C#", "Unity", "OpenStack", "QuickBuild", "Windows", "React", "NodeJS"],
      video: "",
      github: ""
    },
    { 
      title: "Just Dance 2024",
      img: JustDance2024,
      tech: "C# / Unity / Cloud / DevOps",
      description: "After Just Dance 2023, I worked on Just Dance 2024. To improve build system stability and scalability, I started to migrate some criticals pipeline from QuickBuild to TeamCity, while still maintaining and improving existing tools from previous opus.",
      skills: ["C#", "Unity", "OpenStack", "QuickBuild", "TeamCity", "React", "NodeJS", "Windows"],
      video: "",
      github: ""
    },
    { 
      title: "The Crew 2",
      img: TheCrew2,
      tech: "C# / Cloud / DevOps",
      description: "",
      skills: ["C#", "OpenStack", "QuickBuild"],
      video: "",
      github: ""
    },
    { 
      title: "The Crew Motorfest",
      img: TheCrewMotorfest,
      tech: "C# / Cloud / DevOps",
      description: "",
      skills: ["C#", "OpenStack", "QuickBuild"],
      video: "",
      github: ""
    },
    { 
      title: "Unreal Engine GAS Survival",
      img: UnrealGASSurvival,
      tech: "C++ / Unreal Engine",
      description: "A personal project with the goal to improve my skills on Unreal Engine and the Gameplay Ability System framework. This is a solo survival RPG game where waves of AI Enemies try to kill you and you have to survive all the waves.",
      skills: ["C++", "Unreal Engine"],
      video: "",
      github: ""
    },
    { 
      title: "Unity ECS Project",
      img: UnityECS,
      tech: "C# / Unity",
      description: "A personal project with the goal to learn the Entity Component System of Unity to improve my optimization skills on this game engine. This is a survival game where you play as a tank and you are attacked by hundreds of drones. Your goal : survive as much as possible.",
      skills: ["C#", "Unity", "Optimization"],
      video: "",
      github: ""
    },
    { 
      title: "Unity Multiplayer Project",
      img: UnityMultiplayerFPS,
      tech: "C# / Unity",
      description: "A personal project with the goal to learn Networking on Unity. This is a multiplayer FPS game made with this game engine.",
      skills: ["C#", "Unity", "Networking"],
      video: "",
      github: ""
    },
    { 
      title: "Vulkan RealTime 3D Renderer",
      img: VulkanRenderer,
      tech: "C++ / Vulkan",
      description: "A personal project with the goal to learn Vulkan. This is a real time 3D renderer made with C++.",
      skills: ["C++", "Vulkan"],
      video: "",
      github: ""
    },
    { 
      title: "WebGL RealTime 3D PBR",
      img: WebGLRenderer,
      tech: "JavaScript / WebGL",
      description: "A project made during my master degrees where I had to create a WebGL realtime 3D Physically Based Renderer. The user can choose different PBR models and select different parameters.",
      skills: ["JavaScript", "WebGL", "Mathematics"],
      video: "",
      github: ""
    },
    { 
      title: "3D CPU Raytracer Renderer",
      img: CPURaytracer,
      tech: "C++ / OpenGL",
      description: "A project made during my master degrees where I had to create a C++ Offline Raytracer Renderer on CPU. This use extensive optimization methods to be able to render the scene only using CPU without needing several weeks to do it.",
      skills: ["C++", "OpenGL", "Mathematics", "Optimization"],
      video: "",
      github: ""
    },
  ];

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
        {projects.map((proj, index) => (
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
                <Grid columns={{xs: 12, md:activeProject?.video == "" ? 6 : 12}} sx={{ margin: 'auto'}}>
                  {activeProject.video ? (
                    <Box sx={{ position: 'relative', pt: '56.25%', borderRadius: '12px', overflow: 'hidden' }}>
                      <iframe
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
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