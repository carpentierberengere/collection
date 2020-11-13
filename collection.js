const collection = [
    
    { //-----------------------------------------SHINING-------------------------------//
        title: 'The Shining',
        author: 'Stanley Kubrick',
        category: ['Horror'],
        genre: ['Psycho'],
        link: 'https://www.youtube.com/watch?v=5Cb3ik6zP2I',
        description: 'Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.',
    },
    
    { //-------------------------------------BACK TO THE FUTURE-----------------------//
        title: 'Back To The Future',
        author: 'Robert Zemeckis',
        category: ['Sci-Fi'],
        genre: ['Comedy'],
        link: 'https://www.youtube.com/watch?v=qvsgGtivCgs',
        description: 'Marty travels back in time using an eccentric scientists time machine. However, he must make his high-school-aged parents fall in love in order to return to the present.',
    },
    
    { //------------------------------------STAR WARS---------------------------------//
        title: 'Star Wars EpIV: A New Hope',
        author: 'George Lucas',
        category: ['Sci-Fi'],
        genre: ['Space Opera'],
        link: 'https://www.youtube.com/watch?v=1g3_CFmnU7k',
        description: 'After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire',
    },
    
    { //------------------------------------CHARLIE & THE CHOCOLATE FACTORY------------//
        title: 'Charlie & The Chocolate Factory',
        author: 'Tim Burton',
        category: ['Fantasy'],
        genre: ['Comedy'],
        link: 'https://www.youtube.com/watch?v=OFVGCUIXJls',
        description: 'Charlie, a young boy from an impoverished family, and four other kids win a tour of an amazing chocolate factory run by an imaginative chocolatier, Willy Wonka, and his staff of Oompa-Loompas',
    },
    
    { //------------------------------------AMERICAN MURDER-----------------------------//
        title: 'Americaan Murder: The Family Next Door',
        author: 'NETFLIX',
        category: ['Documentary'],
        genre: ['Murder'],
        link: 'https://www.youtube.com/watch?v=ep8iKiQNSrY',
        description: 'American Murder: The Family Next Door is an American true crime documentary film directed by Jenny Popplewell. The film tells the story of the 2018 Watts family murders, which took place in Frederick, Colorado',
    },
    
    { //----------------------------------BOLEYN GIRL----------------------------------//
        title: 'The Other Boleyn Girl',
        author: 'Justin Chadwick',
        category: ['Drama'],
        genre: ['History'],
        link: 'https://www.youtube.com/watch?v=M44ZHmPoLSU',
        description: 'Centred on the the court of Henry VIII, this historical drama presents a calculating Anne, who usurps her older sister Mary as the kings mistress and ultimately desires to be his new queen',
    },
    
    { //---------------------------------SPIRITED AWAY--------------------------------//
        title: 'Spirited Away',
        author: 'Hayao Miyazaki',
        category: ['Fantasy'],
        genre: ['Anime'],
        link: 'https://www.youtube.com/watch?v=ByXuk9QqQkk',
        description: 'During her familys move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.'

    },
    
    { //--------------------------------SOCIAL DILEMMA-------------------------------//
        title: 'The Social Dilemma',
        author:'NETFLIX',
        category: ['Documentary'],
        genre: ['Society'],
        link:'https://www.youtube.com/watch?v=uaaC57tcci0',
        description: 'Tech experts sound the alarm on the dangerous human impact of social networking',
    },
    
    { //--------------------------------MEANING OF LIFE-----------------------------//
        title: 'The Meaning Of Life',
        author: 'Monty Python',
        category: ['Satire'],
        genre: ['Comedy'],
        link: 'https://www.youtube.com/watch?v=vabfV4HRvRY',
        description: 'The stages of life are told through multiple sketches and songs by the British comedy troupe. The seven parts of life cover birth, growing up, war, middle age, organ transplants, old age and death.',
    },
    
    { //------------------------------------LIFE---------------------------------//
        title: 'LIFE',
        author: 'Daniel Espinosa',
        category: ['Sci-Fi'],
        genre: ['Horror'],
        link: 'https://www.youtube.com/watch?v=cuA-xqBw4jE',
        description:'As astronauts discover the first evidence of extra-terrestrial life on Mars, they begin realising that the life form is extremely intelligent and hostile',
    }

]

const deleteAll = document.querySelectorAll(".column")
deleteAll.forEach(function (banane) {
    banane.innerHTML = "";
});

for (let element of collection) {
    const columns = document.querySelector(".columns")

    const mainContainer = document.querySelector('.column')
    mainContainer.className = "column is-3";

    const card = document.createElement("div");
    card.className = 'card';
    card.style.height = '700px'
    card.style.marginBottom = '30px'

    const large = document.createElement("div");
    large.className = "large"

    const divImg = document.createElement("div")
    divImg.className ="level-item has-text-centered card-content is-flex is-horizontal-center"

    const figureImg = document.createElement("figure")
    figureImg.className = "is-justify-content-center"

    const img = document.createElement("img")
    img.src = element.image

    const media = document.createElement("div")
    media.className = "media"

    const cardContent = document.createElement("div")
    cardContent.className = "card-content"

    const mediaContent = document.createElement("div")
    mediaContent.className = "media-content"

    const title = document.createElement("h1")
    title.className = "title is-4"
    title.textContent = element.title;

    const genre = document.createElement("span")
    genre.className = "tag is-link"
    genre.textContent = element.genre;

    const category = document.createElement("span")
    category.className = "tag is-success"
    category.textContent = element.category

    const author = document.createElement("h5")
    author.className = "has-text-black"
    author.textContent = element.author

    const content = document.createElement("p");
    content.className = "content"
    content.textContent = element.description

    const footer = document.createElement("footer")
    footer.className = "card-footer"

    const aLink = document.createElement("a")
    aLink.className = "card-footer-item has fa-2x"
    aLink.href = element.link
    aLink.target = "_blank"

    const link = document.createElement("i")
    link.className = "fab fa-youtube-square";


    columns.appendChild(mainContainer);
    mediaContent.appendChild(category);
    mediaContent.appendChild(genre);
    mediaContent.appendChild(title);
    mainContainer.appendChild(card);
    card.appendChild(large);
    card.appendChild(media);
    card.appendChild(cardContent);
    cardContent.appendChild(media);
    cardContent.appendChild(content);
    cardContent.appendChild(footer);
    footer.appendChild(link)
    media.appendChild(mediaContent);
    mediaContent.appendChild(author);
    large.appendChild(divImg);
    divImg.appendChild(figureImg);
    figureImg.appendChild(img);
    footer.appendChild(aLink);
    aLink.appendChild(link);
   
}





