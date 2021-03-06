const gameLinks = document.querySelectorAll(".link-button");
const gameDescription = document.querySelector("#game-description");
const aboutGame = gameDescription.querySelector("#about-game");

function changeModal(gameId) {
    aboutGame.innerHTML = `
        <div class="modal-menu">
            <button class="close-btn"><i class="fa-solid fa-xmark"></i></button>
        </div>
        
        <div class="game-banner">
            <img  src="${gamesList[gameId].gameBanner}" alt="">
        </div>

        <div class="game-titles">
            <h2 id="game-title">${gamesList[gameId].gameTitle}</h2>
            <h3 id="game-date">${gamesList[gameId].gameYear}</h3>
            <h3 id="game-dev">${gamesList[gameId].gameProducer}</h3>
            <h3>Gêneros</h3>
            <p>${gamesList[gameId].gameGenders}</p>
        
            <h3>Plataformas</h3>
            <p>
                ${gamesList[gameId].gamePlatforms}
            </p>  

            <div class="flex-container">
                <a href="#game-description" class="link-button"><i class="fa-solid fa-cart-plus"></i> adicionar ao carrinho</a>
            </div>
            
        </div>

        <div class="game-detail">
            <h4>Descrição</h4>
            <p class="game-description">${gamesList[gameId].gameDescriptions}</p>
        </div>
    `;
}

let currentId;
let gamesList = [
    {
        gameTitle: "Sonic Adventure",
        gameYear: "23 Dez, 1998",
        gameProducer: "Sonic Team",
        gameGenders: "Aventura, Plataforma, Exploração",
        gamePlatforms: "Dreamcast",
        gameDescriptions: "Sonic Adventure é um jogo eletrônico de plataforma desenvolvido pela Sonic Team e publicado pela Sega. É um título principal da série Sonic the Hedgehog e foi lançado para Dreamcast em dezembro de 1998 no Japão e em setembro do ano seguinte no resto do mundo.",
        gameBanner: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1upl.png"
    }, {
        gameTitle: "Battlefield 1",
        gameYear: "21 Out, 2016",
        gameProducer: "EA Digital Illusions CE",
        gameGenders: "FPS, Guerra, Ação",
        gamePlatforms: "Xbox One, Playstation 4, PC (Microsoft Windows)",
        gameDescriptions: "Battlefield 1 é um jogo eletrônico de tiro em primeira pessoa ambientado na Primeira Guerra Mundial, desenvolvido pela DICE e publicada pela Electronic Arts. É o décimo quarto jogo da franquia Battlefield. Foi lançado em outubro de 2016 para Microsoft Windows, PlayStation 4 e Xbox One.",
        gameBanner: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2n9d.png"
    }, {
        gameTitle: "Need for Speed: Heat",
        gameYear: "08 Nov, 2019",
        gameProducer: "Ghost Games",
        gameGenders: "Aventura, Corrida, Esporte",
        gamePlatforms: "Xbox One, Playstation 4, PC (Microsoft Windows)",
        gameDescriptions: "Need for Speed Heat é um jogo eletrônico de corrida desenvolvido pela Ghost Games e publicado pela Electronic Arts para Microsoft Windows, PlayStation 4 e Xbox One. Esse é o vigésimo-quarto jogo de série Need for Speed e irá comemorar o aniversário de 25 anos da série.",
        gameBanner: "https://images.igdb.com/igdb/image/upload/t_cover_big/co209t.png"
    }
];

for (let i = 0; i < gameLinks.length; i++) {
    gameLinks[i].dataset = "id";
    gameLinks[i].dataset.id = i;
}

gameLinks.forEach((gameLink) => {
    gameLink.addEventListener("click", (currentLink) => {
        currentId = currentLink.target.dataset.id;
        changeModal(currentId);
        
        if (!gameDescription.classList.contains("shown")) {
            gameDescription.classList.add("shown");
        }
    });
});