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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/CV_Djordje_Batic.pdf";
          },
        },{id: "news-i-ve-completed-my-phd-work-under-msca-itn-marie-curie-fellowship-and-will-be-starting-a-new-position-as-postdoctoral-researcher-university-of-strathclyde",
          title: 'I’ve completed my PhD work under MSCA ITN Marie Curie Fellowship and will...',
          description: "",
          section: "News",},{id: "news-our-paper-geodemographic-aware-electric-vehicle-charging-location-planning-for-equitable-placement-using-graph-neural-networks-case-study-of-scotland-metropolitan-areas-energy-got-accepted-in-elsevier-energy",
          title: 'Our paper “Geodemographic Aware Electric Vehicle Charging Location Planning for Equitable Placement using...',
          description: "",
          section: "News",},{id: "news-pleased-to-announce-that-i-ve-succesfully-defended-my-phd-thesis-i-would-like-to-thank-my-supervisors-vladimir-and-lina-stankovic-for-their-support-as-well-as-my-external-examiners-nikos-deligiannis-and-johannes-norheim-for-their-valuable-input-insightful-discussion-and-the-time-dedicated-to-my-work",
          title: 'Pleased to announce that I’ve succesfully defended my PhD thesis! I would like...',
          description: "",
          section: "News",},{id: "news-our-paper-interpretability-and-reliability-driven-knowledge-distillation-for-non-intrusive-load-monitoring-on-the-edge-got-accepted-in-elsevier-expert-systems-with-applications",
          title: '🚀 Our paper “Interpretability and Reliability-driven Knowledge Distillation for Non-intrusive Load Monitoring on...',
          description: "",
          section: "News",},{id: "news-i-ve-open-sourced-my-work-on-carbon-intensity-of-5-million-ev-charging-sessions-in-scotland-check-out-this-github-repo-and-the-associated-huggingface-dataset",
          title: '⚡🔌 I’ve open sourced my work on carbon intensity of 5+ million EV...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%6A%6F%72%64%6A%65%62%61%74%69%63@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/djordjebatic", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/djordjebatic", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=N7Xwzs4AAAAJ", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@djordjebatic4510", "_blank");
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
