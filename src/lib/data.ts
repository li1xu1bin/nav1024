
export type Website = {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  imageUrl?: string;
};

export type Category = {
  id: string;
  name: string;
};

export const categories: Category[] = [
  {id: 'ai-chat', name: 'AI对话'},
  {id: 'ai-programming', name: 'AI编程'},
  {id: 'ai-design', name: 'AI设计'},
  {id: 'ai-image', name: 'AI图像'},
  {id: 'ai-video', name: 'AI视频'},
  {id: 'ai-dev-platform', name: 'AI开发平台'},
  {id: 'ai-design-tool', name: 'AI设计工具'},
  {id: 'image-processing', name: '图片处理工具'},
  {id: 'website-hosting', name: '网站托管工具'},
];

export const websites: Website[] = [
  
  {
    id: 'doubao',
    title: '豆包',
    description: '字节跳动推出的AI智能助手',
    url: 'https://www.doubao.com/',
    category: 'AI对话',
    imageUrl: '/doubao-icon.png',
  },
  {
    id: 'deepseek',
    title: 'DeepSeek',
    description: '深度求索推出的AI智能助手',
    url: 'https://chat.deepseek.com/',
    category: 'AI对话',
    imageUrl: '/deepseek-icon.png',
  },
  {
    id: 'yuanbao',
    title: '元宝',
    description: '腾讯推出的AI智能助手',
    url: 'https://yuanbao.tencent.com/',
    category: 'AI对话',
    imageUrl: '/yuanbao-icon.png'
  },
  {
    id: 'tongyi',
    title: '千问',
    description: '阿里推出的AI智能助手',
    url: 'https://www.qianwen.com/',
    category: 'AI对话',
    imageUrl: '/tongyi-icon.png'
  },
  {
    id: 'chatgpt',
    title: 'ChatGPT',
    description: 'OpenAI推出的AI智能助手',
    url: 'https://chat.openai.com/',
    category: 'AI对话',
    imageUrl:'/chatgpt-icon.png',
  },
  {
    id: 'gemini',
    title: 'Gemini',
    description: 'Google推出的AI智能助手',
    url: 'https://gemini.google.com/',
    category: 'AI对话',
    imageUrl: '/gemini-icon.png',
  },
  {
    id: 'kimi',
    title: 'Kimi',
    description: '月之暗面推出的AI智能助手',
    url: 'https://kimi.moonshot.cn/',
    category: 'AI对话',
    imageUrl: '/kimi-icon.png'
  },
  {
    id: 'Grok',
    title: 'Grok',
    description: '马斯克旗下xAI推出的人工智能助手',
    url: 'https://grok.com/',
    category: 'AI对话',
    imageUrl: '/xai-icon.png'
  },
  {
    id: 'meitushejishi',
    title: '美图设计室',
    description:'AI图像创作和设计平台',
    url: 'https://www.designkit.cn/',
    category: 'AI设计',
    imageUrl: '/meitu-ai-ppt.jpg',
  },
  {
    id: 'modao',
    title: '墨刀AI',
    description:'AI产品原型设计助手',
    url: 'https://modao.cc/feature/ai',
    category: 'AI设计',
    imageUrl: '/modao-icon.png',
  },
  {
    id: 'duiyou',
    title: '堆友AI',
    description:'专为设计师打造的AI设计服务平台',
    url: 'https://d.design/',
    category: 'AI设计',
    imageUrl: '/d-design-ai-icon.png',
  },
  {
    id: 'jimeng',
    title: '即梦',
    description:
      '抖音旗下免费AI图片视频创作工具',
    url: 'https://jimeng.jianying.com/',
    category: 'AI设计',
    imageUrl: '/jimeng-logo-1.png',
  },

  {
    id: 'Nano Banana',
    title: 'Nano Banana',
    description:
      '谷歌推出的图像生成与编辑模型',
    url: 'https://deepmind.google/models/gemini-image/pro/',
    category: 'AI图像',
    imageUrl: '/Nano-Banana-icon.png',
  },
  
  {
    id: 'roboneo',
    title: 'RoboNeo',
    description: '美图推出的图像设计AI Agent',
    url: 'https://www.roboneo.com/home',
    category: 'AI图像',
    imageUrl: '/roboneo-icon.png'
  },
  {
    id: 'stablediffusion',
    title: 'Stable Diffusion',
    description:
      'StabilityAI推出的文本到图像生成AI',
    url: 'https://stability.ai/',
    category: 'AI图像',
    imageUrl: '/stability-ai-icon.png',
  },
  {
    id: 'midjourney',
    title: 'Midjourney',
    description:
      'AI图像和插画生成工具',
    url: 'https://www.midjourney.com/',
    category: 'AI图像',
    imageUrl: '/midjourney-icon.png',
  },
  {
    id: 'Sora',
    title: 'Sora',
    description:
      'OpenAI推出的AI视频生成模型',
    url: 'https://sora.chatgpt.com/explore',
    category: 'AI视频',
    imageUrl: '/chatgpt-icon.png',
  },
  {
    id: 'keling',
    title: '可灵',
    description: '快手推出的AI图像和视频创作平台',
    url: 'https://app.klingai.com/cn/',
    category: 'AI视频',
    imageUrl: '/klingai-logo.png',
  },
  {
    id: 'pika',
    title: 'Pika',
    description: 'Pika Labs推出的AI视频生成和编辑工具',
    url: 'https://pika.art/',
    category: 'AI视频',
    imageUrl: '/pika-icon.png',
  },
  {
    id: 'runway',
    title: 'Runway',
    description: 'AI视频工具，绿幕抠除、视频生成、动态捕捉等功能',
    url: 'https://runwayml.com/',
    category: 'AI视频',
    imageUrl: '/runwayml-icon.png',
  },
  {
    id: 'cursor',
    title: 'Cursor',
    description: 'Anysphere推出的AI代码编辑器',
    url: 'https://cursor.sh/',
    category: 'AI编程',
    imageUrl: '/cursor-logo.png',
  },
  {
    id: 'trae',
    title: 'Trae',
    description: '字节跳动推出的AI编程工具',
    url: 'https://www.trae.cn',
    category: 'AI编程',
    imageUrl: '/trae.ai-logo.png',
  },
  {
    id: 'Qoder',
    title: 'Qoder',
    description: '阿里巴巴推出的 AI Agentic 编程工具',
    url: 'https://qoder.com/',
    category: 'AI编程',
    imageUrl: '/qoder-logo.png',
  },
  {
    id: 'v0',
    title: 'v0.dev',
    description: 'Vercel推出的AI全栈应用构建工具',
    url: 'https://v0.dev',
    category: 'AI编程',
    imageUrl: '/v0.app-logo.png'
  },
  {
    id: 'gemini-code-assist',
    title: 'Gemini Code Assist',
    description: 'Google推出的AI编程辅助工具',
    url: 'https://codeassist.google/',
    category: 'AI编程',
    imageUrl: '/gemini-icon.png',
  },
  {
    id: 'codebuddy-ide',
    title: 'CodeBuddy',
    description: '腾讯推出的AI智能编程伙伴',
    url: 'https://copilot.tencent.com/',
    category: 'AI编程',
    imageUrl:'/CodeBuddy-logo.png'
  },
  {
    id: 'claude-code',
    title: 'Claude Code',
    description: 'Anthropic 推出的AI编程工具',
    url: 'https://www.anthropic.com/claude-code',
    category: 'AI编程',
    imageUrl:'/Claude-Code-logo1.png'
  },
  {
    id: 'coze',
    title: '扣子空间',
    description:
      '字节跳动推出的零代码AI应用开发平台',
    url: 'https://space.coze.cn',
    category: 'AI开发平台',
    imageUrl: '/coze-ai-icon.png',
  },
  {
    id: 'nocode-platform',
    title: 'NoCode',
    description:
      '美团推出的零代码AI应用开发平台',
    url: 'https://nocode.cn/',
    category: 'AI开发平台',
    imageUrl: '/nocode-logo.png',
  },
  {
    id: 'dify',
    title: 'Dify',
    description: '开源的大语言模型应用开发平台',
    url: 'https://dify.ai/',
    category: 'AI开发平台',
    imageUrl: '/Dify-logo.png',
  },
  {
    id: 'stitch',
    title: 'Stitch',
    description: 'Google推出的AI原型设计工具',
    url: 'https://stitch.withgoogle.com/',
    category: 'AI设计工具',
    imageUrl: '/google-ai-icon.png'
  },
  {
    id: 'miaoduo',
    title: '妙多',
    description: '猿辅导旗下推出的AI界面设计工具',
    url: 'https://www.miaoduo.com/',
    category: 'AI设计工具',
    imageUrl: '/motiff-icon.png'
  },
  {
    id: 'figma-ai',
    title: 'Figma AI',
    description: 'Figma推出的原生AI设计工具',
    url: 'https://www.figma.com/ai/',
    category: 'AI设计工具',
    imageUrl: '/figma-icon.png'
  },
  {
    id: 'mastergo-ai',
    title: 'MasterGo AI',
    description: 'MasterGo推出的智能UI设计助手',
    url: 'https://mastergo.com/',
    category: 'AI设计工具',
    imageUrl: '/mastergo-ai-icon.png'
  },
  {
    id: 'clipdrop',
    title: 'Clipdrop',
    description: 'StabilityAI推出的AI图片处理系列工具',
    url: 'https://clipdrop.co',
    category: '图片处理工具',
    imageUrl: '/clipdrop-icon.png'
  },
  {
    id: 'tinypng',
    title: 'TinyPNG',
    description: '在线图片压缩工具',
    url: 'https://tinypng.com/',
    category: '图片处理工具',
  },
  {
    id: 'imageresizer',
    title: 'ImageResizer',
    description: '在线图片大小调整工具',
    url: 'https://imageresizer.com/',
    category: '图片处理工具',
  },
  {
    id: 'github',
    title: 'GitHub',
    description: '全球领先的软件开发和版本控制平台',
    url: 'https://github.com/',
    category: '网站托管工具',
    imageUrl: '/github-icon.png'

  },
  {
    id: 'vercel',
    title: 'Vercel',
    description: '为前端开发者提供的网站托管和部署平台',
    url: 'https://vercel.com/',
    category: '网站托管工具',
    imageUrl: '/vercel-icon.png'

  },
  {
    id: 'cloudflare',
    title: 'Cloudflare',
    description: '全球网络云平台，提供安全、性能和可靠性服务',
    url: 'https://www.cloudflare.com/',
    category: '网站托管工具',
  }
];
