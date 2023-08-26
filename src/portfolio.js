const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: '"https://bellasalathe.github.io"',
    title: 'Bella.',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Bella Salathé',
    role: 'A student with a passion for computer science',
    description:
      'Hello! My name is Bella Salathé, and I am a rising junior at Haverford College pursuing a degree in Computer Science. ',
    resume: 'https://example.com',
    social: {
      linkedin: 'https://linkedin.com'
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'BSP, JPMorgan Chase & Co.',
      description:
        'I worked collaboratively on a Business Sprint Project with a team on a data-driven business proposal presented to the Chief Executives of Citizen’s Trust Bank. I processed and analyzed census data, resulting in impactful visualizations. Additionally, I contributed to enhancing user-friendliness by developing a new website for the bank.',
      stack: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'React', 'JavaScript'],
    //   sourceCode: 'https://github.com', //get rid
    //   livePreview: 'https://github.com', //get rid
    },
    {
      name: 'Evaluating a Deep Neural Network',
      description:
        'This project focused on the application of neural networks to the Fashion MNIST dataset. I created a wide and deep perceptron model using TensorFlow libraries and explored various model configurations, including Multi-Layer Perceptron and Wide and Deep architectures with different depths and activation functions. My aim was to evaluate their performance in terms of accuracy and overfitting tendencies.',
      stack: ['Python', 'TensorFlow', 'Matplotlib', 'NumPy'],
    //   sourceCode: 'https://github.com', //get rid
    //   livePreview: 'https://github.com', //get rid
    },
    {
      name: 'Boston Housing Price Prediction',
      description:
        'I performed an in-depth analysis of the Boston Housing dataset, assessing the performance of linear regression and Adaboost algorithms. Through this analysis, I evaluated the strengths and weaknesses of each algorithm, determined their respective efficacies, and identified key features that played a significant role. Finally, I created a scientific report of my findings.',
      stack: ['Python', 'Pandas', 'NumPy'],
    //   sourceCode: 'https://github.com', //get rid
    //   livePreview: 'https://github.com', //get rid
    },
    {
      name: 'COMPAS Recidivism Algorithm Evaluation',
      description:
        'I replicated ProPublica\'s investigation into the COMPAS algorithm, a tool used to predict recidivism among criminal defendants. By employing Java, I uncovered the algorithm\'s inherent unreliability and bias, particularly evident in its predictions for black defendants. Through this project, I delved into the realm of ethical concerns within computing, highlighting the significance of addressing bias and fairness in algorithmic decision-making processes. This endeavor provided me with insights into the intricate interplay between technology and ethical considerations in the modern world.',
      stack: ['Python', 'Pandas', 'NumPy'],
    //   sourceCode: 'https://github.com', //get rid
    //   livePreview: 'https://github.com', //get rid
    },
    {
      name: 'COMPAS Recidivism Algorithm Evaluation',
      description:
        'I recreated The New York Times’ game using a comparison algorithm that incorporates user input and Binary Search Tree sorting',
      stack: ['Python', 'Pandas', 'NumPy'],
    //   sourceCode: 'https://github.com', //get rid
    //   livePreview: 'https://github.com', //get rid
      },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'Python',
    'Java',
    'C/C++',
    'HTML',
    'CSS',
    'SQL',
    'R',
    'Pandas',
    'Numpy',
    'JavaScript',
    'React',
    'LaTex',
    'Japanese',
    'Public Speaking',
    'Debate'
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'irsalathe@gmail.com',
  }
  
  export { header, about, projects, skills, contact }
  