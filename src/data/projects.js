// src/data/projects.js
// You can import images here or use URLs
// import project1Image from '../assets/project1.jpg';

const projects = [
    {
      id: 1,
      title: "Mancala Game",
      description: "This is a digital take on the classic Mancala board game, built with a clean UI and responsive gameplay.",
      imageUrl: "/images/mancala.JPG",
      tags: ["AI", "Mancala", "Python"],
      githubUrl: "https://github.com/galactikos4/mancala", // Optional link to repo
      
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "The very website you are looking at, built with React and Vite.",
      tags: ["React", "Vite", "CSS"],
      githubUrl: "https://github.com/galactikos4/Portfolio"
    },
    {
        id: 3,
        title: "Robocup Project",
        description: "This project showcases an autonomous robot navigating through a physical challenge course featuring stairs, axe gates, fast tracks, and a golf-like obstacle. The robot uses sensor-based logic to follow white lines, avoid obstacles, and complete tasks without human control. Check out the full demo on YouTube and explore the code on GitHub.",
        imageUrl: "/images/aksel.jpg", // Put images in the public/images folder
        tags: ["Robotics", "Computer Vision", "C++"],
        githubUrl: "https://github.com/galactikos4/Robocup", // Optional link to repo
        videoUrl: "https://www.youtube.com/watch?v=hSNSIAkDGJc" // Optional YouTube embed URL
      },
      {
        id: 4,
        title: "Thesis Project",
        description: "This thesis explores the use of Deep Reinforcement Learning to train an autonomous drone within a high-fidelity 3D environment using PEDRA and Unreal Engine (AirSim). I modeled the interior of a wind turbine blade, where the drone learns to navigate the confined, low-light space through trial and error. The agent was trained using DQN, PPO, and REINFORCE algorithms in TensorFlow, and was able to successfully navigate both the original environment and similar unseen structures. The project combines advanced RL techniques with realistic simulation to bridge the gap between virtual training and real-world deployment. Check out the demo to see the agent in action!",
        imageUrl: "/images/drone1.JPG",
        tags: ["Reinforcement Learning", "Computer Vision", "Python", "Unreal Engine", "Airsim"],
        githubUrl: "https://github.com/galactikos4/PEDRA_THESIS", // Optional link to repo
        videoUrl: "https://www.youtube.com/watch?v=P_QeuRTwWQI" // Optional YouTube embed URL
      },
      {
        id: 5,
        title: "3D Gaussian Splatting",
        description: "I assisted in the reconstruction of a static 3D hospital room using video footage and the creation of dynamic human animations from Mixamo as part of a deep learning simulation. We constructed the point cloud with structure-from-motion through COLMAP, and then trained the 3D Gaussian Splatting models to result in photorealistic renders. I took the photorealistic renders and animated blending into Unity for real-time visualization and to simulate lifelike human movement.",
        tags: ["Gaussian Splatting", "Unity", "Pytorch"],
        githubUrl: "https://github.com/galactikos4/GaussianSplattingExample", // Optional link to repo
        videoUrl: "https://www.youtube.com/watch?v=daRZ9eir8FE" // Optional YouTube embed URL
      },
      {
        id: 6,
        title: "Detect AI generated text",
        description: "As part of a small team, I worked on building a text classification pipeline using DistilBERT to detect whether essays were written by students or generated by large language models (LLMs). We went through the full machine learning process from cleaning the dataset and fine-tuning the model, to testing its performance and preparing it for deployment.I used tools like DVC to version data and models, MLflow to track training runs, Docker for keeping environments consistent, and Hugging Face’s Trainer API to simplify training and evaluation",
        tags: ["Docker", "DVC", "MLOPS"],
        githubUrl: "https://github.com/galactikos4/ml_ops_detect_ai_generated_text", // Optional link to repo
      },
  ];
  
  export default projects;