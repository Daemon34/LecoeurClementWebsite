import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
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
  const projects = [
    { title: "Just Dance 2022", img: JustDance2022, tech: "C# / Unity / Cloud / DevOps" },
    { title: "Just Dance 2023", img: JustDance2023, tech: "C# / Unity / Cloud / DevOps" },
    { title: "Just Dance 2024", img: JustDance2024, tech: "C# / Unity / Cloud / DevOps" },
    { title: "The Crew 2", img: TheCrew2, tech: "C# / Cloud / DevOps" },
    { title: "The Crew Motorfest", img: TheCrewMotorfest, tech: "C# / Cloud / DevOps" },
    { title: "Unreal Engine GAS Survival", img: UnrealGASSurvival, tech: "C++ / Unreal Engine" },
    { title: "Unity ECS Project", img: UnityECS, tech: "C# / Unity" },
    { title: "Unity Multiplayer Project", img: UnityMultiplayerFPS, tech: "C# / Unity" },
    { title: "Vulkan RealTime 3D Renderer", img: VulkanRenderer, tech: "C++ / Vulkan" },
    { title: "WebGL RealTime 3D PBR", img: WebGLRenderer, tech: "JS / WebGL" },
    { title: "3D CPU Raytracer Renderer", img: CPURaytracer, tech: "C++ / OpenGL" },
  ];

  return (
    <Box sx={{ py: 5, backgroundColor: 'transparent' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
            900: {
              slidesPerView: 2.5,
            },
        }}
        style={{
          "--swiper-navigation-color": "#5a463d",
          "--swiper-pagination-color": "#5a463d",
          padding: '20px 0 50px 0'
        } as React.CSSProperties}
      >
        {projects.map((proj, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <Card sx={{ 
                transition: 'transform 0.3s ease-in-out',
                transform: isActive ? 'scale(1)' : 'scale(0.85)',
                opacity: isActive ? 1 : 0.6,
                borderRadius: '16px',
                boxShadow: isActive ? 10 : 2,
                overflow: 'hidden'
              }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={proj.img}
                  alt={proj.title}
                  sx={{ objectFit: 'fill' }}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ fontFamily: "'Playfair Display', serif" }}>
                    {proj.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {proj.tech}
                  </Typography>
                </CardContent>
              </Card>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;