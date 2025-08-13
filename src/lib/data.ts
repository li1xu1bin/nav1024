import type {ElementType} from 'react';
import {
  LayoutTemplate,
  MessageSquare,
  FolderKanban,
  BrainCircuit,
  Newspaper,
  Twitter,
  Github,
  Mail,
  Video,
  BookOpen,
  ShoppingBag,
  Palette,
  Code2,
  type LucideIcon,
} from 'lucide-react';

export const icons = {
  LayoutTemplate,
  MessageSquare,
  FolderKanban,
  BrainCircuit,
  Newspaper,
  Twitter,
  Github,
  Mail,
  Video,
  BookOpen,
  ShoppingBag,
  Palette,
  Code2,
} as const;

export type IconName = keyof typeof icons;

export type Website = {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  icon?: IconName;
  imageUrl?: string;
};

export type Category = {
  id: string;
  name: string;
};

export const categories: Category[] = [
  {id: 'productivity', name: '常用'},
  {id: 'ai-image', name: 'AI图像'},
  {id: 'ai-programming', name: 'AI编程'},
  {id: 'social', name: 'Social'},
  {id: 'news', name: 'News'},
];

export const websites: Website[] = [
  {
    id: 'chatgpt',
    title: 'ChatGPT',
    description: 'A powerful language model by OpenAI for conversations.',
    url: 'https://chat.openai.com/',
    category: '常用',
    icon: 'BrainCircuit',
  },
  {
    id: 'doubao',
    title: '豆包',
    description: 'An AI chatbot from ByteDance.',
    url: 'https://www.doubao.com/',
    category: '常用',
    imageUrl: '/doubao-icon.png',
  },
  {
    id: 'gemini',
    title: 'Gemini',
    description: 'Google\'s largest and most capable AI model.',
    url: 'https://gemini.google.com/',
    category: '常用',
    icon: 'BrainCircuit',
  },
  {
    id: 'deepseek',
    title: 'DeepSeek',
    description: 'An advanced AI model for code generation and more.',
    url: 'https://www.deepseek.com/',
    category: '常用',
    icon: 'BrainCircuit',
  },
  {
    id: 'jimeng',
    title: '即梦',
    description:
      'AI-powered image generation service for creating stunning visuals.',
    url: 'https://jimeng.ai/',
    category: 'AI图像',
    imageUrl: '/jimeng-logo-1.png',
  },
  {
    id: 'stablediffusion',
    title: 'Stable Diffusion',
    description:
      'A powerful open-source text-to-image model by Stability AI.',
    url: 'https://stability.ai/',
    category: 'AI图像',
    imageUrl: '/stability-ai-icon.png',
  },
  {
    id: 'midjourney',
    title: 'Midjourney',
    description:
      'An independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species.',
    url: 'https://www.midjourney.com/',
    category: 'AI图像',
    imageUrl: '/midjourney-icon.png',
  },
  {
    id: 'cursor',
    title: 'Cursor',
    description: 'The AI-first code editor.',
    url: 'https://cursor.sh/',
    category: 'AI编程',
    imageUrl: '/cursor-icon.png',
  },
  {
    id: 'codegpt',
    title: 'CodeGpt',
    description: 'AI pair programmer for busy developers.',
    url: 'https://codegpt.co/',
    category: 'AI编程',
    imageUrl: '/codegpt-icon.png',
  },
  {
    id: 'codeium',
    title: 'Codeium',
    description: 'The modern coding superpower.',
    url: 'https://codeium.com/',
    category: 'AI编程',
    imageUrl: '/codeium-icon.png',
  },
  {
    id: 'twitter',
    title: 'X (Twitter)',
    description:
      'From breaking news and entertainment to sports and politics, get the full story with all the live commentary.',
    url: 'https://twitter.com',
    category: 'Social',
    icon: 'Twitter',
  },
  {
    id: 'youtube',
    title: 'YouTube',
    description:
      'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.',
    url: 'https://youtube.com',
    category: 'Social',
    icon: 'Video',
  },
  {
    id: 'gmail',
    title: 'Gmail',
    description:
      'Gmail is email that’s intuitive, efficient, and useful. 15 GB of storage, less spam, and mobile access.',
    url: 'https://mail.google.com',
    category: 'Social',
    icon: 'Mail',
  },
  {
    id: 'techcrunch',
    title: 'TechCrunch',
    description:
      'TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.',
    url: 'https://techcrunch.com',
    category: 'News',
    icon: 'Newspaper',
  },
  {
    id: 'medium',
    title: 'Medium',
    description:
      'Medium is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic.',
    url: 'https://medium.com',
    category: 'News',
    icon: 'BookOpen',
  },
];
