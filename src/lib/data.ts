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
  Bot,
  Layers,
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
  Bot,
  Layers,
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
  {id: 'ai-chat', name: 'AI对话'},
  {id: 'ai-image', name: 'AI图像'},
  {id: 'ai-programming', name: 'AI编程'},
  {id: 'ai-dev-platform', name: 'AI开发平台'},
  {id: 'news', name: 'News'},
];

export const websites: Website[] = [
  {
    id: 'chatgpt',
    title: 'ChatGPT',
    description: 'A powerful language model by OpenAI for conversations.',
    url: 'https://chat.openai.com/',
    category: 'AI对话',
    imageUrl: '/chatgpt-icon.png',
  },
  {
    id: 'doubao',
    title: '豆包',
    description: 'An AI chatbot from ByteDance.',
    url: 'https://www.doubao.com/',
    category: 'AI对话',
    imageUrl: '/doubao-icon.png',
  },
  {
    id: 'gemini',
    title: 'Gemini',
    description: 'Google\'s largest and most capable AI model.',
    url: 'https://gemini.google.com/',
    category: 'AI对话',
    imageUrl: '/gemini-icon.png',
  },
  {
    id: 'deepseek',
    title: 'DeepSeek',
    description: 'An advanced AI model for code generation and more.',
    url: 'https://www.deepseek.com/',
    category: 'AI对话',
    imageUrl: '/deepseek-icon.png',
  },
  {
    id: 'kimi',
    title: 'Kimi',
    description: 'Kimi是月之暗面(Moonshot AI)推出的一款智能助手',
    url: 'https://kimi.moonshot.cn/',
    category: 'AI对话',
    imageUrl: '/kimi-icon.png'
  },
  {
    id: 'yuanbao',
    title: '腾讯元宝',
    description: '腾讯出品的AI智能助手',
    url: 'https://yuanbao.tencent.com/',
    category: 'AI对话',
    imageUrl: '/yuanbao-icon.png'
  },
  {
    id: 'tongyi',
    title: '通义',
    description: '阿里出品的AI智能助手',
    url: 'https://tongyi.aliyun.com/',
    category: 'AI对话',
    imageUrl: '/tongyi-icon.png'
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
    id: 'v0',
    title: 'v0.dev',
    description: 'Generate UI with simple text prompts.',
    url: 'https://v0.dev',
    category: 'AI编程',
    imageUrl: '/v0-icon.png'
  },
  {
    id: 'coze',
    title: '扣子空间',
    description:
      '新一代AI Bot开发平台，快速搭建你的专属Bot',
    url: 'https://space.coze.cn',
    category: 'AI开发平台',
    imageUrl: '/coze-icon.png',
  },
  {
    id: 'nocode-platform',
    title: 'NoCode',
    description:
      'Build powerful apps without code.',
    url: 'https://www.bubble.io',
    category: 'AI开发平台',
    imageUrl: '/nocode-icon.png',
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
