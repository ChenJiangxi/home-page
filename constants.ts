import { Profile, NewsItem, Publication, Experience } from './types';

export const PROFILE: Profile = {
  name: "Jiangxi Chen",
  chineseName: "陈姜希",
  title: "Ph.D. Candidate (3rd Year)",
  affiliation: "Shanghai Jiao Tong University (SJTU)",
  email: "chen731925@sjtu.edu.cn",
  avatarUrl: "assets/avatar.jpg", // Ensure this path matches your folder structure exactly
  bio: `
    I am a Ph.D. candidate (Direct Track) in the Department of Industrial Engineering and Management at Shanghai Jiao Tong University (SJTU). 
    I received my Bachelor's degree from SJTU in 2023, majoring in Industrial Engineering with a minor in Economics.
    My research interests lie in Deep Reinforcement Learning, Intelligent Manufacturing, and Graph Neural Networks, 
    with a specific focus on maintenance optimization and scheduling in complex systems.
  `,
  researchInterests: [
    "Deep Reinforcement Learning", 
    "Intelligent Manufacturing",
    "Graph Neural Networks",
    "Quantitative Finance"
  ],
  socials: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=hzanzkYAAAAJ&hl=zh-CN&oi=ao" },
    { label: "GitHub", url: "http://github.com/ChenJiangxi" },
  ]
};

export const NEWS: NewsItem[] = [
  {
    date: "Dec 2025",
    title: "Paper on MHGNN-PPO accepted by Reliability Engineering & System Safety (RESS).",
  },
  {
    date: "Oct 2025",
    title: "Won First Prize at AI for Science Hackathon (Shanghai Station).",
  },
  {
    date: "Mar 2025",
    title: "Paper on MHGNN-PPO submitted to Reliability Engineering & System Safety (RESS).",
  },
  {
    date: "Jan 2025",
    title: "Completed Quantitative Strategy Internship at Shanghai Qilin Investment.",
  },
  {
    date: "Sep 2023",
    title: "Started Ph.D. journey at Shanghai Jiao Tong University.",
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "p1",
    title: "Multi-dependence manufacturing system intelligent maintenance optimization based on graph structure and reinforcement learning (MHGNN-PPO)",
    authors: ["Jiangxi Chen", "Xiaojun Zhou"],
    venue: "Reliability Engineering & System Safety",
    year: 2025,
    highlight: true,
    abstract: "Proposed the MHGNN-PPO framework to model unified economic, degradation, and resource dependencies using hypergraphs and directed graphs, significantly improving maintenance strategies.",
    links: [
      { label: "Paper", url: "https://www.sciencedirect.com/science/article/abs/pii/S0951832025012864" }
    ]
  },
  {
    id: "p2",
    title: "Maintenance scheduling of flexible multi-machine manufacturing systems with different interaction degradation based on deep reinforcement learning (IDAPPO)",
    authors: ["Jiangxi Chen", "Xiaojun Zhou"],
    venue: "Reliability Engineering & System Safety",
    year: 2025,
    highlight: true,
    abstract: "Proposed IDAPPO algorithm to adapt to non-stationary environments and multi-component dependencies in flexible manufacturing systems, using GNN for spatial degradation correlations.",
    links: [
      { label: "Paper", url: "https://www.sciencedirect.com/science/article/abs/pii/S0951832025002194" }
    ]
  },
  {
    id: "p3",
    title: "Urban community green space extraction based on semantic segmentation",
    authors: ["Jiangxi Chen", "Siyu Shao", "Yifei Zhu", "Yu Wang", "Fujie Rao", "Xilei Dai", "Dayi Lai"],
    venue: "Land",
    year: 2022,
    abstract: "Improved HRNetV2 for extracting urban green spaces in Shanghai, mapping them to satellite imagery and achieving higher IoU compared to traditional methods.",
    links: [
      { label: "Paper", url: "https://www.mdpi.com/2073-445x/11/6/905" }
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Quant Strategy Research Intern",
    company: "Shanghai Qilin Investment Management Co., Ltd.",
    period: "2024.10 - 2025.1",
    description: "Mid-frequency futures trading based on Deep Reinforcement Learning. Constructed backtesting frameworks and designed RL environments."
  },
  {
    role: "Quant Strategy Research Intern",
    company: "Shanghai Wenbo Investment Management Co., Ltd.",
    period: "2023.3 - 2023.8",
    description: "Machine learning feature construction, factor mining, and BARRA risk control optimization for stock selection strategies."
  },
  {
    role: "Ph.D. Candidate",
    company: "Shanghai Jiao Tong University",
    period: "2023.9 - Present",
    description: "Department of Industrial Engineering and Management."
  },
  {
    role: "Undergraduate Student",
    company: "Shanghai Jiao Tong University",
    period: "2019.9 - 2023.6",
    description: "Industrial Engineering and Management. Minor in Economics."
  }
];

export const HONORS = [
  "AI for Science Hackathon | Shanghai Station First Prize (2025.10)",
  "Rongchang Technology Innovation Scholarship Nomination Award (2022.11)",
  "2021 Mathematical Contest In Modeling: Finalist (2021.4)"
];