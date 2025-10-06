// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Get a glimpse of my academic adventures – from groundbreaking publications to eye-catching posters 😆",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of my hopefully-cool projects 😁",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-github",
          title: "Github",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/github/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-tree-attribute-from-point-cloud",
          title: 'Tree attribute from point cloud',
          description: "Estimating individual tree attributes (tree height, DBH, and crown area) based on LiDAR data using R",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gis_10_treeAttribute_from_pc/";
            },},{id: "projects-metashape-photogrammetry",
          title: 'Metashape photogrammetry',
          description: "Metashape step-by-step tutorial for creating point clouds, orthomosaic, DEM and meshed model from arial images",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gis_1_metashape_photogrammetry/";
            },},{id: "projects-python-programm-estimating-tree-biomass-using-allometry",
          title: 'Python programm: estimating tree biomass using allometry',
          description: "A Python program for estimating above-ground biomass at a single tree level using allometric equations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gis_2_treeBiomass-from-allometry/";
            },},{id: "projects-random-forest-classification",
          title: 'Random Forest classification',
          description: "Mapping species in Neukalen, Germany from 2020 to 2022 using Python based on Random Forest classifier and UAV multispectral images",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gis_3_RF_classification/";
            },},{id: "projects-clustering-land-cover-change-trajectory",
          title: 'Clustering land cover change trajectory',
          description: "Clustering land cover change trajectory using sequences analysis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gis_4_LC_trajectory/";
            },},{id: "projects-classify-forest-tiles-by-lidar-height-metrics",
          title: 'Classify forest tiles by LiDAR height metrics',
          description: "Study on clustering and classify forest tiles using height metrics calculated from LiDAR data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gis_5_classify_forest_height/";
            },},{id: "projects-mapping-forest-biomass-from-mean-top-of-canopy-height",
          title: 'Mapping forest biomass from mean top-of-canopy height',
          description: "The study aims to create a forest biomass map based on mean top-of-canopy height (TCH) raster model",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gis_6_biomass-from-TCH/";
            },},{id: "projects-dsm-from-point-cloud",
          title: 'DSM from point cloud',
          description: "Tutorial for creating Digital Surface Model from LiDAR data in R",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gis_7_DSM_from_pointCloud/";
            },},{id: "projects-burn-severity-indices-and-forest-post-fire-assessment",
          title: 'Burn severity indices and forest post-fire assessment',
          description: "Comparison of burn severity indices and post-fire assessment of vegetation regeneration using Sentinel-2",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gis_8_burnSeverity/";
            },},{id: "projects-tree-and-stand-level-biomass-from-allometry-bcefs",
          title: 'Tree- and stand-level biomass from allometry, BCEFs',
          description: "Tree- and Stand- Level Biomass Estimation for Scots Pine in Poland with Allometric Equations, Biomass Conversion and Expansion Factors",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gis_9_treeBiomass-from-allometry-R/";
            },},{id: "projects-rock-paper-scissors-game",
          title: 'Rock-paper-scissors game',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/web_1_rockPaperScissor/";
            },},{id: "projects-etch-a-sketch-game",
          title: 'Etch-a-Sketch game',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/web_2_etch-a-sketch/";
            },},{id: "projects-forest-in-3d-point-cloud",
          title: 'Forest in 3D point cloud',
          description: "3D LiDAR data of Mollergrab marteloscope forest in Eberswalde, Germany",
          section: "Projects",handler: () => {
              window.location.href = "/projects/webgis_1_treeAttribute_from_pc/";
            },},{id: "projects-annual-landcover-baltic-sea-region",
          title: 'Annual Landcover Baltic Sea Region',
          description: "Webmap presenting annual land cover dataset for the Baltic Sea Region with crop types and peat bogs at 30 m from 2000 to 2022",
          section: "Projects",handler: () => {
              window.location.href = "/projects/webgis_2_bsrlc/";
            },},{id: "projects-geographic-distance-calculation",
          title: 'Geographic distance calculation',
          description: "WebGIS application to calculate the geographic distance between 2 points on the Earth surface",
          section: "Projects",handler: () => {
              window.location.href = "/projects/webgis_3_distanceCalculator/";
            },},{id: "projects-real-time-us-precipitation-and-weather-alert",
          title: 'Real-time US precipitation and weather alert',
          description: "Real-time US precipitation and weather alert: data from National Weahter Service",
          section: "Projects",handler: () => {
              window.location.href = "/projects/webgis_4_precipitation/";
            },},{
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
