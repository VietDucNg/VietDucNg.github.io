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
          description: "Get a glimpse of my academic adventures 😆",
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
        },{id: "projects-tree-attribute-from-point-cloud",
          title: 'Tree attribute from point cloud',
          description: "Estimating individual tree attributes (tree height, DBH, and crown area) based on LiDAR data using R",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rs_10_treeAttribute_from_pc/";
            },},{id: "projects-metashape-photogrammetry",
          title: 'Metashape photogrammetry',
          description: "Metashape step-by-step tutorial for creating point clouds, orthomosaic, DEM and meshed model from arial images",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rs_1_metashape_photogrammetry/";
            },},{id: "projects-python-programm-estimating-tree-biomass-using-allometry",
          title: 'Python programm: estimating tree biomass using allometry',
          description: "A Python program for estimating above-ground biomass at a single tree level using allometric equations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rs_2_treeBiomass-from-allometry/";
            },},{id: "projects-random-forest-classification",
          title: 'Random Forest classification',
          description: "Mapping species in Neukalen, Germany from 2020 to 2022 using Python based on Random Forest classifier and UAV multispectral images",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rs_3_RF_classification/";
            },},{id: "projects-clustering-land-cover-change-trajectory",
          title: 'Clustering land cover change trajectory',
          description: "Clustering land cover change trajectory using sequences analysis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rs_4_LC_trajectory/";
            },},{id: "projects-classify-forest-tiles-by-lidar-height-metrics",
          title: 'Classify forest tiles by LiDAR height metrics',
          description: "Study on clustering and classify forest tiles using height metrics calculated from LiDAR data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rs_5_classify_forest_height/";
            },},{id: "projects-mapping-forest-biomass-from-mean-top-of-canopy-height",
          title: 'Mapping forest biomass from mean top-of-canopy height',
          description: "The study aims to create a forest biomass map based on mean top-of-canopy height (TCH) raster model",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rs_6_biomass-from-TCH/";
            },},{id: "projects-dsm-from-point-cloud",
          title: 'DSM from point cloud',
          description: "Tutorial for creating Digital Surface Model from LiDAR data in R",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rs_7_DSM_from_pointCloud/";
            },},{id: "projects-burn-severity-indices-and-forest-post-fire-assessment",
          title: 'Burn severity indices and forest post-fire assessment',
          description: "Comparison of burn severity indices and post-fire assessment of vegetation regeneration using Sentinel-2",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rs_8_burnSeverity/";
            },},{id: "projects-tree-and-stand-level-biomass-from-allometry-bcefs",
          title: 'Tree- and stand-level biomass from allometry, BCEFs',
          description: "Tree- and Stand- Level Biomass Estimation for Scots Pine in Poland with Allometric Equations, Biomass Conversion and Expansion Factors",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rs_9_treeBiomass-from-allometry-R/";
            },},{id: "projects-cv-builder",
          title: 'CV Builder',
          description: "a responsive-designed React application that allows users to create, edit, reorder, and preview a professional CV in real time.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/web_1_cvBuilder/";
            },},{id: "projects-library-app",
          title: 'Library app',
          description: "A simple library app with form validation and localStorage",
          section: "Projects",handler: () => {
              window.location.href = "/projects/web_2_library/";
            },},{id: "projects-restaurant-website",
          title: 'Restaurant website',
          description: "A responsive-designed restaurant website with dynamic page loading",
          section: "Projects",handler: () => {
              window.location.href = "/projects/web_3_restaurant/";
            },},{id: "projects-annual-landcover-baltic-sea-region",
          title: 'Annual Landcover Baltic Sea Region',
          description: "An interactive webmap for land cover visualization, and temporal comparison using OpenLayers + React",
          section: "Projects",handler: () => {
              window.location.href = "/projects/webgis_1_bsrlc/";
            },},{id: "projects-forest-in-3d-point-cloud",
          title: 'Forest in 3D point cloud',
          description: "3D LiDAR data of Mollergrab marteloscope forest in Eberswalde, Germany",
          section: "Projects",handler: () => {
              window.location.href = "/projects/webgis_2_treeAttribute_from_pc/";
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
