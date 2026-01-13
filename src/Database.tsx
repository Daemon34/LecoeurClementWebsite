import JustDance2022 from './assets/JustDance2022.png';
import JustDance2023 from './assets/JustDance2023.png';
import JustDance2024 from './assets/JustDance2024.jpg';
import TheCrewMotorfest from './assets/TheCrewMotorfest.png';
import TheCrew2 from './assets/TheCrew2.jpg';
import CPURaytracer from './assets/3DCPURaytracer.png';
import VulkanRenderer from './assets/VulkanRenderer.png';
import WebGLRenderer from './assets/WebGLRenderer.png';
import UnityECS from './assets/UnityECS.png';
import UnityMultiplayerFPS from './assets/UnityMultiplayerFPS.png';
import UnrealGASSurvival from './assets/UnrealGASSurvival.png';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import UbisoftParisLogo from './assets/UbisoftParis.jpg';
import UbisoftIVTLogo from './assets/UbisoftIvoryTower.jpg';
import UniversiteLimoges from './assets/UniversiteLimoges.jpg';
import ForwardDigitalLogo from './assets/ForwardDigitalIcon.png';

export const Projects = [
    { 
      title: "Just Dance 2022",
      img: JustDance2022,
      tech: "C# / Unity / Cloud / DevOps",
      description: "As my first professional project in the video game industry, I was in charge of the Cloud Build Farm using Ubisoft internal Cloud based on OpenStack, and the Build System using QuickBuild. I was making scripts in Groovy, or with an internal tool using C#.",
      skills: ["C#", "Unity", "OpenStack", "QuickBuild", "Windows"],
      video: "https://www.youtube.com/embed/Vnab1gHwJeY?si=nRpDMc4fca_GZvbV",
      github: ""
    },
    { 
      title: "Just Dance 2023",
      img: JustDance2023,
      tech: "C# / Unity / Cloud / DevOps",
      description: "After Just Dance 2022, I worked on Just Dance 2023 using the same tech as the previous opus. I added more tools using C# or React and NodeJS to ease pipeline for Gameplay Programmer, Content Teams or Producer, while still maintaining the cloud build farm and the build system.",
      skills: ["C#", "Unity", "OpenStack", "QuickBuild", "Windows", "React", "NodeJS"],
      video: "https://www.youtube.com/embed/N_5pIQ8Ka6s?si=6nFv19rDd6YzY2PS",
      github: ""
    },
    { 
      title: "Just Dance 2024",
      img: JustDance2024,
      tech: "C# / Unity / Cloud / DevOps",
      description: "After Just Dance 2023, I worked on Just Dance 2024. To improve build system stability and scalability, I started to migrate some criticals pipeline from QuickBuild to TeamCity, while still maintaining and improving existing tools from previous opus.",
      skills: ["C#", "Unity", "OpenStack", "QuickBuild", "TeamCity", "React", "NodeJS", "Windows"],
      video: "https://www.youtube.com/embed/Rphxj3TKM5o?si=aTVZwyZVISYeVQzR",
      github: ""
    },
    { 
      title: "The Crew 2",
      img: TheCrew2,
      tech: "C# / Cloud / DevOps",
      description: "After working on Just Dance, I've moved to The Crew project, where I was in charge of the build system that was using QuickBuild and C# scripts, and the hybrid cloud and physical build farm. I also converted a HTML / PHP web dashboard to React for the frontend and a NodeJS API for the backend that was linked to different MySQL database or externals API. I then increased scalability and availability by hosting it to a Kubernetes cluster. Finaly, the role also had some live experience for deploying live game server on AWS.",
      skills: ["C#", "OpenStack", "QuickBuild", "React", "NodeJS", "Docker", "Kubernetes", "AWS"],
      video: "https://www.youtube.com/embed/MXN1nmL-DQU?si=giArMwR92prEqiTh",
      github: ""
    },
    { 
      title: "The Crew Motorfest",
      img: TheCrewMotorfest,
      tech: "C# / Cloud / DevOps",
      description: "After The Crew 2, I worked on The Crew Motorfest. Maintaining the build system based on QuickBuild and C# script, and the hybrid build farm that was using OpenStack and Windows. I also made a central web dashboard for different purposes in the production using React, NodeJS and MySQL, and hosted it on Azure Kubernetes Service. Finaly, the role also had some live experience for deploying live game server on AWS.",
      skills: ["C#", "OpenStack", "QuickBuild", "React", "NodeJS", "Docker", "Kubernetes", "AWS", "Azure"],
      video: "https://www.youtube.com/embed/ugKIELPN8mI?si=YWXt0naZGJ8lxhXN",
      github: ""
    },
    { 
      title: "Unreal Engine GAS Survival",
      img: UnrealGASSurvival,
      tech: "C++ / Unreal Engine",
      description: "A personal project with the goal to improve my skills on Unreal Engine and the Gameplay Ability System framework. This is a solo survival RPG game where waves of AI Enemies try to kill you and you have to survive all the waves.",
      skills: ["C++", "Unreal Engine", "GAS"],
      video: "https://www.youtube.com/embed/3_a6VTYY8Bc?si=d-LVKclvOmQWF5jf",
      github: "https://github.com/Daemon34/GAS-Survival-ARPG"
    },
    { 
      title: "Unity ECS Project",
      img: UnityECS,
      tech: "C# / Unity",
      description: "A personal project with the goal to learn the Entity Component System of Unity to improve my optimization skills on this game engine. This is a survival game where you play as a tank and you are attacked by hundreds of drones. Your goal : survive as much as possible.",
      skills: ["C#", "Unity", "Optimization"],
      video: "https://www.youtube.com/embed/xtyd3DcIDG8?si=7TNVxfklHdovMjKR",
      github: ""
    },
    { 
      title: "Unity Multiplayer Project",
      img: UnityMultiplayerFPS,
      tech: "C# / Unity",
      description: "A personal project with the goal to learn Networking on Unity. This is a multiplayer FPS game made with this game engine.",
      skills: ["C#", "Unity", "Networking"],
      video: "https://www.youtube.com/embed/IaYTCdynk0w?si=yNNutzGdDRQWqnjR",
      github: ""
    },
    { 
      title: "Vulkan RealTime 3D Renderer",
      img: VulkanRenderer,
      tech: "C++ / Vulkan",
      description: "A personal project with the goal to learn Vulkan. This is a real time 3D renderer made with C++.",
      skills: ["C++", "Vulkan"],
      video: "",
      github: "https://github.com/Daemon34/VulkanRenderer"
    },
    { 
      title: "WebGL RealTime 3D PBR",
      img: WebGLRenderer,
      tech: "JavaScript / WebGL",
      description: "A project made during my master degrees where I had to create a WebGL realtime 3D Physically Based Renderer. The user can choose different PBR models and select different parameters.",
      skills: ["JavaScript", "WebGL", "Mathematics"],
      video: "",
      github: "https://github.com/Daemon34/WebGL-PBR-Renderer"
    },
    { 
      title: "3D CPU Raytracer Renderer",
      img: CPURaytracer,
      tech: "C++ / OpenGL",
      description: "A project made during my master degrees where I had to create a C++ Offline Raytracer Renderer on CPU. This use extensive optimization methods to be able to render the scene only using CPU without needing several weeks to do it.",
      skills: ["C++", "OpenGL", "Mathematics", "Optimization"],
      video: "",
      github: "https://github.com/Daemon34/3D-Render-Engine"
    },
];

export const Experiences = [
    {
        title: "Bachelor's Degree in Computer Science",
        sub: "Faculty of Science & Technology, Limoges's University, France",
        date: "2016 - 2019",
        typeIcon: <SchoolIcon />,
        icon: UniversiteLimoges,
        color: "#8d7b72"
    },
    {
      title: "Web Developer Intern",
      sub: "Forward Digital, France",
      date: "2019",
      typeIcon: <WorkIcon />,
      icon: ForwardDigitalLogo,
      color: "#8d7b72"
    },
    {
        title: "Master's Degree in Computer Science, Image Synthesis and Graphic Design",
        sub: "Faculty of Science & Technology, Limoges's University, France",
        date: "2019 - 2021",
        typeIcon: <SchoolIcon />,
        icon: UniversiteLimoges,
        color: "#8d7b72"
    },
    {
        title: "Junior Release & Build Specialist",
        sub: "Ubisoft Paris, France",
        date: "2021 - 2023",
        typeIcon: <WorkIcon />,
        icon: UbisoftParisLogo,
        color: "#5a463d"
    },
    {
        title: "Release & Build Specialist",
        sub: "Ubisoft Ivory Tower, France",
        date: "2023 - Present",
        typeIcon: <WorkIcon />,
        icon: UbisoftIVTLogo,
        color: "#5a463d"
    }
];

export const Skills = [
    {
      category: "Languages",
      skills: [
        { name: "C# / .NET", level: 80 },
        { name: "TypeScript", level: 80 },
        { name: "Java", level: 60 },
        { name: "C++", level: 60 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 60 },
        { name: "Python", level: 40 },
      ]
    },
    {
      category: "Frameworks / Softwares",
      skills: [
        { name: "React", level: 80 },
        { name: "NodeJS", level: 80 },
        { name: "Unity", level: 60 },
        { name: "Unreal Engine", level: 40 },
        { name: "Windows", level: 80 },
        { name: "Linux", level: 60 },
      ]
    },
    {
      category: "Cloud Platforms",
      skills: [
        { name: "OpenStack", level: 80 },
        { name: "AWS", level: 60 },
        { name: "Azure", level: 40 },
      ]
    },
    {
      category: "DevOps",
      skills: [
        { name: "GitLab CI", level: 80 },
        { name: "Docker", level: 80 },
        { name: "TeamCity", level: 60 },
        { name: "Kubernetes", level: 60 },
        { name: "QuickBuild", level: 100 },
      ]
    }
];