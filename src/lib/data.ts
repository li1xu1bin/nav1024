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
  icon: IconName;
};

export type Category = {
  id: string;
  name: string;
};

export const categories: Category[] = [
  {id: 'productivity', name: '常用'},
  {id: 'design', name: 'Design'},
  {id: 'development', name: 'Development'},
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
    icon: 'BrainCircuit',
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
    id: 'figma',
    title: 'Figma',
    description:
      'The collaborative interface design tool. For brainstorming, designing, and building.',
    url: 'https://figma.com',
    category: 'Design',
    icon: 'LayoutTemplate',
  },
  {
    id: 'dribbble',
    title: 'Dribbble',
    description:
      'Dribbble is the world’s leading community for creatives to share, grow, and get hired.',
    url: 'https://dribbble.com',
    category: 'Design',
    icon: 'Palette',
  },
  {
    id: 'behance',
    title: 'Behance',
    description:
      'The leading online platform to showcase & discover creative work.',
    url: 'https://www.behance.net/',
    category: 'Design',
    icon: 'ShoppingBag',
  },
  {
    id: 'github',
    title: 'GitHub',
    description:
      'Where the world builds software. Millions of developers and companies build, ship, and maintain their software on GitHub.',
    url: 'https://github.com',
    category: 'Development',
    icon: 'Github',
  },
  {
    id: 'vscode',
    title: 'VS Code',
    description:
      'Code editing. Redefined. Free. Built on open source. Runs everywhere.',
    url: 'https://code.visualstudio.com/',
    category: 'Development',
    icon: 'Code2',
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
