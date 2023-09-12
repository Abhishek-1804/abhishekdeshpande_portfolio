# Abhishek Deshpande's Portfolio Website

Welcome to my personal portfolio website! You can access the live site [here](https://abhishek-1804.github.io/abhishekdeshpande_portfolio/).

## Table of Contents

- [About](#About)
- [Features](#Features)
- [Inspiration](#Inspiration)
- [Usage](#Usage)
- [Contributing](#Contributing)

## About

This website serves as a showcase of my work, skills, and experiences as a creative full-stack developer. It's designed to provide you with insights into my expertise, projects, and how to get in touch with me for potential collaborations.

## Features

- Home: Get to know me, my name, and what I specialize in.
- Download CV: Easily download my CV (resume) for more detailed information.
- Hire Me: Connect with me via email for potential job opportunities or collaborations
- Social Links: Access my GitHub and LinkedIn profiles to stay updated with my work and connect professionally

## Inspiration

- React Fortawesome
- React-Bootstrap
- Framer-motion

## Usage

1. Clone or fork the project
2. Install required dependencies with npm install
3. Remove homepage entirely from package.json or set it to single dot
```
// package.json
{
  "homepage": "https://abhishek-1804.github.io/abhishekdeshpande_portfolio",  <--- remove/edit this
  "name": "website_portfolio",
  ...
}
```
4. npm start project and customize it
5. Deploy on github-pages using npm run deploy command

```
⚠️ Note that:
- if you want to have portfolio on different repository than `{username}.github.io`, 
set `homepage` in `package.json` to `https://{username}.github.io/{repository-name}/` 
before deploying portfolio.
- if you want to run it locally with npm run start, make sure that you have edited 
homepage property or json data won't load.
```

## Contributing
This portfolio is a personal project, but I appreciate feedback and suggestions. If you have any ideas for improvements or spot any issues, please create an issue or submit a pull request.

