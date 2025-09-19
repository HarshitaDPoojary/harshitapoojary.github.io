"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const withBase = (p) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${p}`


const projectsData = [
  {
    id: 1,
    title: "Generating Images from Speech",
    description: "Currenty implementing specialized projectors for aligning speech and image embeddings, along-side mathematical operations for effective model training. In evaluation, our Speech-CLIP encoder model demonstrates commendable efficacy in gen- erating images from speech prompts, although slightly falling short of the text diffusion model’s performance.",
    image: withBase("/images/projects/GenerateImageFromSpeech.png"),
    tag: ["All", "NLP", "Computer Vision"],
    gitUrl: "/",
    previewUrl: "/",
    techArray: ["Python", "SpeechCLIP", "HuBERT"]
  },
  {
    id: 2,
    title: "Multimodal Semantic Search",
    description: "This project implements a multimodal retrieval system for educational video content, allowing users to search within videos using both text and visual cues. The system uses the BridgeTower model to generate embeddings for both textual and visual data, which are then indexed for fast retrieval.",
    image: withBase("/images/projects/SemanticModel.png"),
    tag: ["All", "Computer Vision"],
    gitUrl: "https://docs.google.com/presentation/u/1/d/1gKB5bTHx_jB24v3w9XJRyK3HHvlUH6aOcllk3BOKZN8/edit?slide=id.g33bc5ad686c_1_26#slide=id.g33bc5ad686c_1_26",
    previewUrl: "/",
    techArray: ["Python", "LangChain", "Streamlit", "Pinecone", "Llama"]
  },
  {
    id: 3,
    title: "Attention Pruning for Classification in Konkani Language",
    description: "A hybrid architecture for idiom and metaphor detection in Konkani, integrating Multilingual BERT (mBERT), a BiLSTM layer, and a linear classifier, along with a novel gradient-based attention head pruning strategy.",
    image: withBase("/images/projects/AttentionPruning.png"),
    tag: ["All", "NLP"],
    gitUrl: "https://anonymous.4open.science/r/Konkani_Idiom_Detection-FBE1/README.md",
    previewUrl: "/",
    techArray: [ "Python", "PyTorch", "Data Analysis", "scikit learn", "plotly"]  //["React", "MongoDB", "Express.js", "JWT Authentication"]
  },
  {
    id: 4,
    title: "Knowledge Distillation on GSM8k dataset",
    description: "Comparison of Model Performance with Knowledge Distillation and 4-bit Quantization)",
    image: withBase("/images/projects/KnowledgeDistillationGSM8k.png"),
    tag: ["All", "NLP"],
    gitUrl: "https://github.com/HarshitaDPoojary/Knowledge-Distillation-GSM8k/tree/main/Code",
    previewUrl: "/",
    techArray: ["Python", "Data analysis", "RunPods", "Knowledge Distillation", "plotly"]
  },
  {
    id: 5,
    title: "Person ReIdentification",
    description: "Currently working on intergrating DeepSORT, yolo models for people tracking, reidentification and counting in sports video",
    image: withBase("/images/projects/Person ReIdentification.png"),
    tag: ["All", "Computer Vision"],
    gitUrl: "https://github.com/HarshitaDPoojary/Person-ReIdentification",
    previewUrl: "/",
    techArray: ["Python", "DeepSORT", "YOLO", "OpenCV"]
  },
  {
    id: 6,
    title: "Facial Keypoint Detection",
    description: "Facial keypoints include points around the eyes, nose, and mouth on a face and are used in many applications. These applications include: facial tracking, facial pose recognition, facial filters, and emotion recognition. The code is able to look at any image, detect faces, and predict the locations of facial keypoints on each face.",
    image: withBase("/images/projects/Facial Keypoint.png"),
    tag: ["All", "Computer Vision"],
    gitUrl: "https://github.com/HarshitaDPoojary/Facial-KeyPoint-Detection",
    previewUrl: "/",
    techArray: ["", "", ""]
  },
  {
    id: 7,
    title: "Photoslider",
    description: "A Web application with CRUD operations for posts along with authentication using Nodejs and Mongodb",
    image: withBase("/images/projects/PhotoSlider.png"),
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/HarshitaDPoojary/photoslider/",
    previewUrl: "/",
    techArray: ["Node.js", "Javascript", "Ejs", "MongoDB", "MySQL", "Redis", "JWT Authentication"]
  },
  {
    id: 8,
    title: "Image Captioning",
    description: "The project involves using a Convolutional Neural Network (CNN) encoder, like ResNet, to extract image features and a Recurrent Neural Network (RNN) decoder, often using LSTM cells, to generate the caption sequence.It also includes usign attention for generating similar outcome",
    image: withBase("/images/projects/ImageCaptioning.png"),
    tag: ["All", "Computer Vision"],
    gitUrl: "https://github.com/HarshitaDPoojary/Image-Captioning/",
    previewUrl: "/",
    techArray: ["Python", "PyTorch", "Attention", "Data Analysis"]
  },
  {
    id: 9,
    title: "Sentiment Analysis with Sagemaker",
    description: "The application performs sentiment analysis on movie reviews through a simple web page which interacts with the deployed endpoint. This project is implemented in Amazon EC2 instance incorporating techniques using XGBoost, Lamba functions, API gateways.",
    image: withBase("/images/projects/Sagemaker.png"),
    tag: ["All", "NLP", "Full Stack"],
    gitUrl: "https://github.com/HarshitaDPoojary/deployment-sagemaker/tree/master/Project",
    previewUrl: "/",
    techArray: ["Python", "Amazon EC2", "HTML", "CSS", "Lambda Functions", "Web Hosting"]
  }
];


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="NLP"
          isSelected={tag === "NLP"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Computer Vision"
          isSelected={tag === "Computer Vision"}
        />
          <ProjectTag
          onClick={handleTagChange}
          name="Full Stack"
          isSelected={tag === "Full Stack"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Games"
          isSelected={tag === "Games"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          // where you render each card
          <motion.li
            key={index}
            className="min-w-0"             // ⟵ allows children to truncate instead of overflowing
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >

            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              techStack={project.techArray}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
