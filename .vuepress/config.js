module.exports = {
  title: 'Modkit',
  description: 'Official MTB Dirt Modkit',
  base: '/',

  head: [
    [
      'meta',
      {
        property: 'og:title',
        content: 'MTB Dirt Modkit',
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: 'Official MTB Dirt Modkit',
      },
    ],
    [
      'meta',
      {
        property: 'og:type',
        content: 'website',
      },
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://modkit.mtb-dirt.com',
      },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap',
        rel: 'stylesheet',
        type: 'text/css',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: '/open-graph-img.png',
      },
    ],
    /*[
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    [
      'script',
      {},
      `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-W7WKJZ7');
      `,
    ],
    [
      'script',
      {},
      `
        (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1913500,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `,
    ],*/
    [
      'link',
      {
        href: 'https://cdn.wpcc.io/lib/1.0.2/cookieconsent.min.css',
        rel: 'stylesheet',
        type: 'text/css',
      },
    ],
    [
      'script',
      {
        src: 'https://cdn.wpcc.io/lib/1.0.2/cookieconsent.min.js',
      },
    ],
    [
      'script',
      {},
      `
        window.addEventListener("load", function(){window.wpcc.init({"corners":"small","colors":{"popup":{"background":"#f4f4f4","text":"#000000","border":"#555555"},"button":{"background":"#eb5e42","text":"#ffffff"}},"position":"bottom-right","padding":"small","margin":"large","transparency":"5","content":{"href":"https://modkit.mtb-dirt.com/1.x/legal/privacy.html"}})});
      `,
    ],
  ],

  themeConfig: {
    // logo: '/logo.png',
    displayAllHeaders: false,
    sidebarDepth: 1,

    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/mtb-game/modkit',
      },
      {
        text: 'Legal',
        link: '/1.x/legal/imprint.html',
      },
    ],

    sidebar: {
      '/': [
        {
          title: 'Prologue',
          collapsable: false,
          children: prefix('prologue', [
            'changelog',
            'contributions',
          ]),
        },
        {
          title: 'Getting Started',
          collapsable: false,
          children: prefix('getting-started', [
            'introduction',
            'installation',
          ]),
        },
        {
          title: 'Legal',
          collapsable: false,
          children: prefix('legal', [
            'imprint',
            'privacy',
          ]),
        },
      ],
    },
  },

  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-204664217-2', // UA-00000000-0
      },
    ],
  ],
};

function prefix(prefix, children) {
  return children.map(child => `/1.x/${prefix}/${child}`);
}
