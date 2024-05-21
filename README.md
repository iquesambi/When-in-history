![logo](https://gits-15.sys.kth.se/storage/user/23872/files/ebf8ba95-f26c-476d-bfed-79f7ebdfb9d0)

#### [Published version URL](https://when-in-history.web.app/)  |  [Prototype URL](https://www.figma.com/proto/iy8EdzCj7QQ8Fvg3ReJifj/history-game-design?page-id=0%3A1&type=design&node-id=284-236&viewport=1469%2C-4597%2C0.5&t=Cj4sOZu1vdjR8Her-1&scaling=scale-down&starting-point-node-id=266%3A529&mode=design)
![Gravação de Tela 2024-05-18 às 19 20 18 (1)](https://gits-15.sys.kth.se/storage/user/23872/files/74da33d5-8519-45d0-80b5-ba7576a81511)

---

#### Made by: 
Daniel Marklund <br>
Henrique Sambi

#### Description:
The app is a card game based on a history facts API, the API gives facts, and they are presented to the user in the wrong order. Users get a higher score depending on how many cards they put in the right position, the time they took to do it, and the hardness level. 
The game has two modes, one where users can choose how many cards they want, and the other where they can choose the theme (the default number of cards for the theme game cards, but it can change depending on the availability from the API). Hardness level changes the years between the cards, a higher hardness, means cards with facts divided with a maximum of 10 years between them.


### Architecture: 

For this project we decide to use the same Model-View-Presenter that we learned during the lectures.
Or model is divided into two files, gameLogic.js and gamemodel.js the first one holds methods to calculate the score and to select the years, and the second contains information about the state of the interface, and information that will be rendered for some of the views later.

Views and presenters were created acording to the pages, and we have one view and one presenter for each screen

### User consultation: 
We divided our user consultation into two steps, one for prototype, and a second one with a working app, where we did both heatmapping using a usability tool, and in-person interviews

##### Prototype Consultation:
The first step was made via Zoom and in person, with 4 people. Besides small improvements like changing the position of buttons, a main improvement that we decided on in this step, was to change the score page, to contain more information, one of the users talked about a Netflix game called Universe Trivia, and that she liked that they have a streak bonus, what we implemented.

![set cards](https://gits-15.sys.kth.se/storage/user/23872/files/f1dc223d-d317-431c-8863-2ecdf888e6b2)
First Version

![set cards-1](https://gits-15.sys.kth.se/storage/user/23872/files/7d51a71b-1bc0-4025-950b-cc8e9d93c772)
New version, after user consultation

##### Working version Consultation:

During this phase, we used the maze app to create a usability test, where we got good answers. and a great task completion score. Besides that, we did usability tests with users, and we decided to create the accessibility version. It was not directly communicated by any of the users, but some of them complained about the dragging function working on different browsers, so we created a version that works with clicks.

![maze_screenshot_interaction (1)](https://gits-15.sys.kth.se/storage/user/23872/files/7e974098-985d-4af4-ae5b-005874b1f40d)
screen shot from the maze heatmap



### Feature Highlights:

##### Acessibility Mode:
The game uses a lot of drag functions, that aren't the easiest ones for the user with disabilities, to solve that, we created an accessible mode, possible to toggle in the side menu, or during the games, that allows the user to play the game using clicks, and even disable the drag, to avoid problems with miss usage.

##### Favourite amout of cards:
every time a player plays the game, we persist the number of cards they are using for a favourite array. After that, we can use this same information, to craft the experience. Next time this user starts to set a new game, they will see as default in number of cards, the amount they played the most. 

##### Favourite hardness:
every time a player plays the game, we persist the number of cards they are using for a favourite array. After that, we can use this same information, to craft the experience. Next time this user starts to set a new game, they will see as default in number of cards, the amount they played the most.

##### Shared blockList:
The API we are using has some years that don't contain any information. To bypass that, we created an array called ForbiddenYear, which is also persisted and shared with all the users. Every time players start a game and find a year that doesn't return anything, the system persists it, and will never try to fetch information regarding this year for any other user.

##### 3rd party component:
We are using a roulet component on the theme. After spinning it generates a theme for the user. We decided to use it to avoid users Typing themes wrong, or even themes that don't have anything.

##### Leaderboard:
Our leaderboard shows the high score for all the players, so you can compare yourself with others.

##### Live Update from persistence:
We decided that two fields were important to use live update, the Leaderboard and the Shared blocklist ( aka Forbidden Years) so the person doesn't need to refresh before every game.



