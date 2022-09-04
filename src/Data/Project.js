class tempDataStorage {
    constructor() {
        /*******************************************************************************************************************
         * Temporary
         * move all of this data to a server later (using SQL) to allow for dynamic addition and removal of projects
         *******************************************************************************************************************/
        this.titles = [
            "RBRADT.GITHUB.IO",
            "TICTACTOE ONLINE",
            "MLB TRIP PLANNER",
            "MESSENGER",
            "RASM"
        ];

        this.descriptions = [
            "This website. 100% local for now, but I plan on implementing a RESTful api with Spring Boot (ideally with" +
            " Docker and Kubernates to create microservices).",

            "A minimalistic client/server application that allows users to play and spectate games of tic-tac-toe online. Within the app, players can" +
            " create accounts to have their match history/statistics recorded, while administrative users can" +
            " delete users and end active matches. The creation of this app involved numerous design patterns, including the" +
            " observer, factory method, adapter and singleton patterns. The server-side app runs off of multiple microservices" +
            " that I built from the ground up (using Java threading and socketing) to independently handle database management" +
            " and game logic, while the client-side application utilizes a pruning minimax algorithm for the tic-tac-toe AI.",

            "A niche application that assists MLB superfans in planning optimized trips to" +
            " any number of the MLB stadiums in the United States. Utilizing my implementations of A*, Dijkstra's and Kruskal's algorithms on both" +
            " adjacency-list and adjacency-matrix graph structures, the app is able" +
            " to determine optimal paths for any trip. Additionally, the app features Huffman Coding to compress necessary stadium and location data, skip lists for psuedo-randomization and heap" +
            " sorts to increase the efficiency of the app, thus, providing a quality user experience.",

            "As the name not-so-subtly implies, messenger is a simple client/server messaging application that emulates AOL's Instant Messenger service." +
            " Involving multithreading, networking" +
            " and database management, the app provides a basic online messenging service, allowing users to send messages/images, join chats, and view the history of chat rooms.",

            "My Raspberry Assembly (RASM) projects are a series of reusable, optimized data structures and algorithms written" +
            " in ARM Assembly Language."
        ];
        
        this.languages = [
            "- JavaScript, HTML, CSS, React, TypeScript, NPM, FontAwesome -",
            "- Java, JavaFX, CSS, MySQL -",
            "- C++, QT GUI, CSS, SQL, Excel -",
            "- Java, JavaFX, CSS, MySQL -",
            "- ARM Assembly, C++, Linux, Raspberry Pi -"
        ];
        
        this.icons = [
            ['js', 'html', 'css', 'react'].map(elem => {return new projectIcon(elem, '')}),
            ['java', 'css', 'sql'].map(elem => {return new projectIcon(elem, '')}),
            ['cpp', 'css', 'sql'].map(elem => {return new projectIcon(elem, '')}),
            ['java', 'css', 'sql'].map(elem => {return new projectIcon(elem, '')}),
            ['assembly', 'cpp', 'linux', 'pi'].map(elem => {return new projectIcon(elem, '')})
        ];

        this.images = [
            ["https://i.imgur.com/JhVrUSu.png", "https://i.imgur.com/AfHCDR2.png", "https://i.imgur.com/uCqSFEW.png?1", "https://i.imgur.com/KLG4OeG.png"],
            ["https://i.redd.it/bbflzw8lmfoz.png"],
            ["https://i.redd.it/bbflzw8lmfoz.png"],
            ["https://i.redd.it/bbflzw8lmfoz.png"],
            ["https://i.redd.it/bbflzw8lmfoz.png"]
        ];

        this.linkToSrc = [
            "https://github.com/rbradt/rbradt.github.io",
            "https://github.com/basbelg/Tic-Tac-Toe/tree/Game_Riley",
            "https://github.com/cs1d-baseballproject/Baseball-Project---CS1D",
            "https://github.com/basbelg/MessageServerCS4B/tree/master/src",
            "https://github.com/rbradt/RASM4"
        ]

        let i = 0;
        this.projects = this.titles.map(title => {return new project(title, this.descriptions[i], this.languages[i], this.icons[i], this.images[i], this.linkToSrc[i++])});
        /*******************************************************************************************************************/
    }

    getProjectsList() {
        return this.projects;
    }
}


class project {
    constructor(title, description, languages, icons, images, linkToSrc) {
        this.title = title;
        this.description = description;
        this.languages = languages;
        this.icons = icons;
        this.images = images;
        this.linkToSrc = linkToSrc;
    }
}

class projectIcon {
    constructor(name, link) {
        this.name = name;
        this.link = link;
    }
}

export {project, projectIcon, tempDataStorage};