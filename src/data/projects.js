export const projects = [
    {
        slug: "portfolio",
        title: "Portfolio Website",
        date: "May 2026",
        summary: "Personal portfolio built to showcase my skills and talents.",
        tech: ["React", "Vite", "Bootstrap"],
        github: "https://github.com/kuchekalikurosh/kuchekalikurosh.github.io",
        live: "https://kuchekalikurosh.github.io/",

        blocks: [
            {
                type: "image",
                src: "/screenshots/ss_port_1.png",
                alt: "Homepage of the website",
                caption: "Early iteration of the homepage"

            },


            {
                type: "text",
                heading: "Portfolio Website: a necessary evil",
                body: `These days, having a portfolio website almost feels mandatory, which was one of the main motivations as to why this one exists.
                Up to this point, I had never done anything relating to frontend development. Most of my work focused on applications,
                services, systems programming, and even the occasional web apps. 
                Ironically, my first introduction to HTML as a language was through my Intro to Cybersecurity
                class, which had a unit on web security. 
                I always knew having a portfolio site would eventually become important, but getting started took a while. 
                The first iteration of this site was all the way back in 2023. At the time, I knew almost nothing about frontend
                development, so the site consisted of little more than basic HTML and a single image.`
            },

            {
                type: "image",
                src: "/screenshots/ss_port_2.png",
                alt: "First iteration",
                caption: "What the homepage of my website looked like in the beginning"

            },


            {
                type: "text",
                heading: "Learning React",
                body: `React is awesome, and the reason why I chose React in the first place was due to it's widespread adoption.
                I wanted to understand the tools and workflows that drive the internet today, plus it was literally everywhere. I recently learned
                while working on this project that even Netflix, Reddit, and BBC use React for their sites. Before React,
                I actually spent some time working with Angular CLI. One of the things I appreciated about Angular was how structured
                everything felt out of the box. The framework enchouraged organization and a more opinionated architecuture, which was a bit
                difficult to grasp coming from systems programming using C/C++. Often times, I felt like I was fighting Angular than working with it.
                Ultimately, React felt more natural to me. It was approachable, flexible, and more importantly reusable which is important for a site like this.
                Over time, I became more comfortable with concepts like component composition, routing, and dynamic rendering, which completely changed how I approached building websites.`
            }, 

            {
                type: "text",
                heading: "Moving Forward",
                body: `This project has now become larger than what I intended. It's much more personal to me now than a portfolio site,
                even though one of it's primary functions is that of a portfolio site. I plan on honing my technical and design skills overtime,
                and I hope to use this site as a testbed for all of the new technologies I learn and build new projects.`
            }
        ]
    },

    {
        slug: "geowar",
        title: "Geometry Wars",
        date: "Sept 2024",
        summary: "A small browser-based arcade game, my first step in game development.",
        tech: ["Javascript", "HTML", "CSS"],
        github: "https://github.com/kuchekalikurosh/geo-wars",

        blocks: [

            {
                type: "text",
                heading: "Geometry Wars: The First Step",
                body: `Geometry Wars was my first real step into game development and interactive software. I've always
                been interested in games, having been playing video games ever since the release of the Nintedo DS Lite.
                Most of my exprience has been in systems programming, applications, and backend-oriented software, so this
                project was a way for me to explore a more creative side of programming.`
            },

            {
                type: "image",
                src: "/screenshots/ss_gw_1.png",
                alt: "Early Build: Title",
                caption: "Early Build: Title Screen"
            },

            {
                type: "image",
                src: "/screenshots/ss_gw_4.png",
                alt: "Early Build: Gameplay",
                caption: "Early Build: Gameplay"
            },

            {
                type: "text",
                heading: "Game Development Journey",
                body: `The game was built using p5.js and vanilla JavaScript. Although the project was relatively small in 
                scope, it taught me a great deal about game development concepts such as object interactions, 
                input systems, collision logic, and enemy pathfinding behavior. 
                There is still plenty of room for improvement, but for a first attempt at building a game, 
                I was happy with how much I learned and how many ideas I was able to bring to life. 
                This project ultimately became my first real step into game development.
                A live demo can be played below.`
            },


            {
                type: "text",
                body: `Controls: WASD to move and J to shoot/select. Make sure to click on the embed!`
            },


            {
                type: "iframe",
                src: "https://editor.p5js.org/kuchekalikurosh/full/CeEouZiut",
                caption: "Playable demo hosted through p5.js Web Editor"
            },

        ]
    },
]