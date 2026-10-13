export interface SiteContent {
  lang: 'en' | 'ar';
  dir: 'ltr' | 'rtl';
  otherLangUrl: string;
  otherLangLabel: string;
  otherLangTitle: string;
  dock: {
    id: string;
    vault: string;
    logs: string;
  };
  system: {
    status: string;
    online: string;
  };
  profile: {
    name: string;
    arabicName: string;
    badge: string;
    bio: string;
    typewriterPrefix: string;
    typewriterText: string;
    pills: string[];
  };
  links: {
    header: string;
    auth: string;
    github: {
      title: string;
      subtitle: string;
      tag: string;
      url: string;
    };
    discord: {
      title: string;
      status: string;
      handle: string;
      id: string;
      open: string;
      url: string;
    };
    ctf: {
      title: string;
      subtitle: string;
      tag: string;
      url: string;
    };
  };
  specs: {
    title: string;
    items: { label: string; value: string }[];
  };
  vault: {
    header: string;
    status: string;
    comingSoon: string;
    title: string;
    desc: string;
    cmd: string;
  };
  logs: {
    header: string;
    status: string;
    comingSoon: string;
    title: string;
    desc: string;
    cmd: string;
  };
}

export const siteContent: Record<'en' | 'ar', SiteContent> = {
  en: {
    lang: 'en',
    dir: 'ltr',
    otherLangUrl: '/ar',
    otherLangLabel: 'AR',
    otherLangTitle: 'Switch to Arabic',
    dock: {
      id: '// 01.ID',
      vault: '// 02.VAULT',
      logs: '// 03.LOGS',
    },
    system: {
      status: 'TTY1: erm@archbox',
      online: 'ONLINE',
    },
    profile: {
      name: 'ERM / Metwally',
      arabicName: '(متولي)',
      badge: 'ROOT',
      bio: 'a humble highschooler with interesting hobbies',
      typewriterPrefix: 'root@box:~#',
      typewriterText: 'digital_forensics // ctf_player',
      pills: ['OS: ARCH LINUX', 'CTF: PLAYER', 'FOSS ENTHUSIAST'],
    },
    links: {
      header: '// VERIFIED IDENTITIES & LINKS',
      auth: 'AUTH: OK',
      github: {
        title: 'GitHub',
        subtitle: 'github.com/real-erm // Code, tools & repos',
        tag: 'SOURCE',
        url: 'https://github.com/real-erm',
      },
      discord: {
        title: 'Discord Profile',
        status: 'ONLINE',
        handle: '@erm',
        id: '1261253325551304718',
        open: 'OPEN',
        url: 'https://discord.com/users/1261253325551304718',
      },
      ctf: {
        title: 'CTFtime Profile',
        subtitle: 'ctftime.org/user/276029 // Forensics, Reverse & Crypto',
        tag: 'PLAYER',
        url: 'https://ctftime.org/user/276029',
      },
    },
    specs: {
      title: 'SYS_CONFIG // WORKSTATION',
      items: [
        { label: 'OS', value: 'Arch Linux (Zen Kernel)' },
        { label: 'SHELL', value: 'Fish Shell' },
        { label: 'DESKTOP', value: 'KDE Plasma (Wayland)' },
        { label: 'ARCH', value: 'Haswell x86_64' },
      ],
    },
    vault: {
      header: '// PROJECTS & REPOSITORIES',
      status: 'STATUS: 204',
      comingSoon: 'COMING SOON',
      title: 'VAULT UNDER INITIALIZATION',
      desc: 'Repositories, tools, and scripts are being curated. Check back soon.',
      cmd: 'root@box:~# ls -la /vault/ > [STATUS: COMING SOON]',
    },
    logs: {
      header: '// WRITEUPS & LOGS',
      status: '0 ENTRIES',
      comingSoon: 'COMING SOON',
      title: 'LOGS & WRITEUPS',
      desc: 'CTF writeups, forensic analysis notes, and articles will be published here.',
      cmd: 'root@box:~# cat /var/log/writeups > [STATUS: COMING SOON]',
    },
  },
  ar: {
    lang: 'ar',
    dir: 'rtl',
    otherLangUrl: '/',
    otherLangLabel: 'EN',
    otherLangTitle: 'التبديل إلى الإنجليزية',
    dock: {
      id: '// ٠١.الهوية',
      vault: '// ٠٢.المشاريع',
      logs: '// ٠٣.السجلات',
    },
    system: {
      status: 'الطرفية: erm@archbox',
      online: 'متصل الآن',
    },
    profile: {
      name: 'ERM / متولي',
      arabicName: '(Metwally)',
      badge: 'ROOT',
      bio: 'طالب ثانوية عامة, لاعب CTFs',
      typewriterPrefix: 'root@box:~#',
      typewriterText: 'تحليل_جنائي_رقمي // لاعب_CTF',
      pills: ['نظام: ARCH LINUX', 'لاعب: CTF', 'محب للبرمجيات الحرة FOSS'],
    },
    links: {
      header: '// الروابط والحسابات الموثقة',
      auth: 'موثق: نعم',
      github: {
        title: 'جيتهب',
        subtitle: 'github.com/real-erm // الأكواد والمشاريع المفتوحة',
        tag: 'المصدر',
        url: 'https://github.com/real-erm',
      },
      discord: {
        title: 'حساب ديسكورد',
        status: 'نشط',
        handle: '@erm',
        id: '1261253325551304718',
        open: 'فتح',
        url: 'https://discord.com/users/1261253325551304718',
      },
      ctf: {
        title: 'حساب CTFtime',
        subtitle: 'ctftime.org/user/276029 // التحليل الجنائي والهندسة العكسية',
        tag: 'لاعب',
        url: 'https://ctftime.org/user/276029',
      },
    },
    specs: {
      title: 'تهيئة النظام // بيئة العمل',
      items: [
        { label: 'النظام', value: 'Arch Linux (Zen Kernel)' },
        { label: 'الطرفية', value: 'Fish Shell' },
        { label: 'الواجهة', value: 'KDE Plasma (Wayland)' },
        { label: 'المعمارية', value: 'Haswell x86_64' },
      ],
    },
    vault: {
      header: '// المشاريع والمستودعات',
      status: 'الحالة: 204',
      comingSoon: 'قريباً',
      title: 'المستودع قيد التجهيز',
      desc: 'يتم تجهيز المستودعات والأدوات والسكربتات حالياً. ترقبوا الإطلاق قريباً.',
      cmd: 'root@box:~# ls -la /vault/ > [الحالة: قريباً]',
    },
    logs: {
      header: '// الشروحات والسجلات',
      status: '٠ سجلات',
      comingSoon: 'قريباً',
      title: 'السجلات والشروحات',
      desc: 'شروحات تحديات الـ CTF والمقالات الأمنية ستُنشر هنا قريباً.',
      cmd: 'root@box:~# cat /var/log/writeups > [الحالة: قريباً]',
    },
  },
};
