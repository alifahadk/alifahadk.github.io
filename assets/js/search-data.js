// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Tinkering around, pretending to know what I am doing",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-work",
          title: "work",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/work/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-we-will-be-presenting-a-poster-on-our-work-palette-generating-representative-microservice-benchmarks-with-distributed-traces-at-sosp-2026",
          title: 'We will be presenting a poster on our work, Palette: Generating Representative Microservice...',
          description: "",
          section: "News",},{id: "news-presented-palette-as-a-poster-at-cmmrs-2026",
          title: 'Presented Palette as a poster at CMMRS 2026.',
          description: "",
          section: "News",},{id: "news-presented-my-master-s-seminar-on-palette",
          title: 'Presented my Master’s seminar on Palette.',
          description: "",
          section: "News",},{id: "projects-beetle",
          title: 'Beetle',
          description: "Senior year project (Bachelor&#39;s)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Beetle/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6C%69%66%61%68%61%64%6B%68%61%6E%6C%6F%64%68%69@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/alifahadk", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/alifahadkhan", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
