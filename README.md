# Nail Art Customizer

Welcome to the Nail Art Customizer, a web application that allows users to create custom nail art using 3D models. This project leverages React, Three.js, and Framer Motion to provide an interactive and dynamic customization experience.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn

### Running the Application

To start the application, run:

```sh
npm start
```

## Project Structure
### Directory Descriptions

- **public/**: This directory contains static files such as the `index.html` file.
- **src/**: This is the main source directory for the project's code.
  - **assets/**: Contains assets like images, fonts, etc.
  - **canvas/**: Contains components related to the canvas rendering.
    - `Backdrop.jsx`: Component for the backdrop.
    - `CameraRig.jsx`: Component for camera rig configuration.
    - `index.jsx`: Main entry for canvas components.
    - `Nail.jsx`: Component representing a nail.
    - `NailScene.jsx`: Scene component for nails.
  - **components/**: Contains reusable UI components.
    - `ColorPicker.js`: Component for color selection.
    - `CustomButton.js`: Custom button component.
    - `FilePicker.js`: Component for file selection.
    - `Tab.js`: Tab component.
  - **config/**: Configuration files and helpers.
    - `constants.js`: File for constants used throughout the project.
    - `config.js`: Main configuration file.
    - `helpers.js`: Helper functions.
    - `motion.js`: Configuration for motion/animation.
  - **store/**: Redux store configuration.
    - `index.js`: Main store setup.
  - **pages/**: Contains different pages of the application.
    - `Home.js`: Home page component.
    - `Customizer.js`: Customizer page component.
  - `App.js`: Main application component.
  - `index.js`: Entry point for the application.

### Root Files

- **.gitignore**: Specifies files and directories to be ignored by Git.
- **package.json**: Contains project dependencies and scripts.
- **README.md**: Project documentation.



## Dependencies
The project relies on the following main dependencies:
- **react**: A JavaScript library for building user interfaces.
- **three**: A library that makes WebGL simpler.
- **framer-motion**: A library to power animations.
- **valtio**: A proxy state management library for React.
- **@react-three/fiber**: A React renderer for Three.js.

## Features
### Home Page
Introduction Section: A welcoming message with a button to start customizing.
- **Logo**: Clickable logo to refresh the page.
  
### Customization Page
- **Color Picker**: Allows users to choose colors for different parts of the nail model.
- **File Picker**: Users can upload images to use as decals on the nails.
- **Tabs**: Editor tabs for different customization tools and filter tabs for applying different textures.
- **Download Button**: Allows users to download an image of their customized nail art.
- **3D Model**: Interactive 3D model rendered using Three.js and @react-three/fiber.

## Usage

## License
