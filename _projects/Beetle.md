---
layout: page
title: Beetle
description: Senior year project (Bachelor's)
img: assets/img/Beetle/beetle-1.jpg
importance: 1
category: studies
related_publications: false
---

<div class="row">
    <div class="col-sm-8 offset-md-3 mt-3 mt-md-4">
        {% include figure.liquid loading="eager" path="assets/img/Beetle/beetle-2.jpg" title="example image" class="img-fluid rounded z-depth-1"%}
    </div>
</div>

A fully sustainable agri-tech platform designed to bring Pakistan’s farmers online, tailored to the local agricultural context. The platform comprises three interconnected components:

- **Crop Advisory via Machine Learning:**  
  - Provides disease detection and actionable recommendations for major crops in Pakistan.  
  - **My contribution:** Trained state-of-the-art CNN (Convolutional Neural Network) models on local crop datasets using transfer learning and data augmentation.

- **Discussion Forum:**  
  - A dedicated forum for farmers to discuss agricultural issues and share solutions.  
  - **My contribution:** Designed and implemented a microservices-based backend using Django and MongoDB, supporting storage and retrieval of text, audio, and image media for both web and mobile applications.

- **Specialized B2C E-Commerce Platform:**  
  - Enables businesses to sell agricultural products such as tools, seeds, fertilizers, and pesticides.  
  - **My contribution:** Developed backend services and built a remedy suggestion system that recommends products based on detected crop diseases using TF-IDF and Cosine Similarity.

The three components are tightly integrated to enhance user experience. For example, a farmer identifying a crop disease through the advisory module receives product recommendations from the e-commerce platform and can seek further guidance through the discussion forum. This synergy ensures seamless support, actionable solutions, and community engagement for the stakeholders engaged in the economic sector.



<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/Beetle/beetle-4.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/Beetle/beetle-3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Awarded 2nd place in the senior year project competition for the Faculty of Computer Science | Right: Showcase at the Industrial Open House
</div>
