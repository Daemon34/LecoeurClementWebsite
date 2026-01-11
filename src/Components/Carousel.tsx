import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
  const projects = [
    { title: "Just Dance", img: '', tech: "C# / Unity" },
    { title: "The Crew", img: '', tech: "C# / DevOps" },
    { title: "Unreal Engine GAS Survival", img: '', tech: "C++ / Unreal Engine" },
    { title: "Unity ECS Project", img: '', tech: "C# / Unity" },
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
                  sx={{ objectFit: 'cover' }}
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