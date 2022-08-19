import { Film } from '../types/types';

const films: Film[] = [
  {
    src: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    id: 1,
    isFavourite: true,
    date: 1990,
    genre: 'Comedy',
    description: 'someDescription',
    director: 'someDirector',
    staring: 'someActors',
    runTime: 120,
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    reviews: [
      {
        id:1,
        author: 'someAuthor',
        text: 'great',
        date: '12.08.2022',
        rating: 9.8,
      }
    ]
  },
  {
    src: 'img/bohemian-rhapsody.jpg',
    title: 'Bohemian Rhapsody',
    id: 2,
    isFavourite: false,
    date: 1990,
    genre: 'Crime',
    description: 'someDescription',
    director: 'someDirector',
    staring: 'someActors',
    runTime: 120,
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    reviews: [
      {
        id:1,
        author: 'someAuthor',
        text: 'great',
        date: '12.08.2022',
        rating: 9.8,
      },
    ]
  },
  {
    src: 'img/macbeth.jpg',
    title: 'Macbeth',
    id: 3,
    isFavourite: false,
    date: 1990,
    genre: 'Documentary',
    description: 'someDescription',
    director: 'someDirector',
    staring: 'someActors',
    runTime: 120,
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    reviews: [
      {
        id:1,
        author: 'someAuthor',
        text: 'great',
        date: '12.08.2022',
        rating: 9.8,
      }
    ]
  },
  {
    src: 'img/aviator.jpg',
    title: 'Aviator',
    id: 4,
    isFavourite: false,
    date: 1990,
    genre: 'Drama',
    description: 'someDescription',
    director: 'someDirector',
    staring: 'someActors',
    runTime: 120,
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    reviews: [
      {
        id:1,
        author: 'someAuthor',
        text: 'great',
        date: '12.08.2022',
        rating: 9.8,
      }
    ]
  },
  {
    src: 'img/we-need-to-talk-about-kevin.jpg',
    title: 'We need to talk about Kevin',
    id: 5,
    isFavourite: false,
    date: 1990,
    genre: 'Horror',
    description: 'someDescription',
    director: 'someDirector',
    staring: 'someActors',
    runTime: 120,
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    reviews: [
      {
        id:1,
        author: 'someAuthor',
        text: 'great',
        date: '12.08.2022',
        rating: 9.8,
      }
    ]
  },
  {
    src: 'img/what-we-do-in-the-shadows.jpg',
    title: 'What We Do in the Shadows',
    id: 6,
    isFavourite: false,
    date: 1990,
    genre: 'Kids&Family',
    description: 'someDescription',
    director: 'someDirector',
    staring: 'someActors',
    runTime: 120,
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    reviews: [
      {
        id:1,
        author: 'someAuthor',
        text: 'great',
        date: '12.08.2022',
        rating: 9.8,
      }
    ]
  },
  {
    src: 'img/revenant.jpg',
    title: 'Revenant',
    id: 7,
    isFavourite: false,
    date: 1990,
    genre: 'Romance',
    description: 'someDescription',
    director: 'someDirector',
    staring: 'someActors',
    runTime: 120,
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    reviews: [
      {
        id:1,
        author: 'someAuthor',
        text: 'great',
        date: '12.08.2022',
        rating: 9.8,
      }
    ]
  },
  {
    src: 'img/johnny-english.jpg',
    title: 'Johnny English',
    id: 8,
    isFavourite: false,
    date: 1990,
    genre: 'Sci-Fi',
    description: 'someDescription',
    director: 'someDirector',
    staring: 'someActors',
    runTime: 120,
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    reviews: [
      {
        id:1,
        author: 'someAuthor',
        text: 'great',
        date: '12.08.2022',
        rating: 9.8,
      }
    ]
  },
  {
    src: 'img/shutter-island.jpg',
    title: 'Shutter Island',
    id: 9,
    isFavourite: false,
    date: 1990,
    genre: 'Thriller',
    description: 'someDescription',
    director: 'someDirector',
    staring: 'someActors',
    runTime: 120,
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    reviews: [
      {
        id:1,
        author: 'someAuthor',
        text: 'great',
        date: '12.08.2022',
        rating: 9.8,
      }
    ]
  },
  {
    src: 'img/pulp-fiction.jpg',
    title: 'Pulp Fiction',
    id: 10,
    isFavourite: false,
    date: 1990,
    genre: 'Comedy',
    description: 'someDescription',
    director: 'someDirector',
    staring: 'someActors',
    runTime: 120,
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    reviews: [
      {
        id:1,
        author: 'someAuthor',
        text: 'great',
        date: '12.08.2022',
        rating: 9.8,
      }
    ]
  },
  {
    src: 'img/no-country-for-old-men.jpg',
    title: 'No Country for Old Men',
    id: 11,
    isFavourite: false,
    date: 1990,
    genre: 'Crime',
    description: 'someDescription',
    director: 'someDirector',
    staring: 'someActors',
    runTime: 120,
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    reviews: [
      {
        id:1,
        author: 'someAuthor',
        text: 'great',
        date: '12.08.2022',
        rating: 9.8,
      }
    ]
  },
  {
    src: 'img/snatch.jpg',
    title: 'Snatch',
    id: 12,
    isFavourite: false,
    date: 1990,
    genre: 'Documentary',
    description: 'someDescription',
    director: 'someDirector',
    staring: 'someActors',
    runTime: 120,
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    reviews: [
      {
        id:1,
        author: 'someAuthor',
        text: 'great',
        date: '12.08.2022',
        rating: 9.8,
      }
    ]
  },
  {
    src: 'img/moonrise-kingdom.jpg',
    title: 'Moonrise Kingdom',
    id: 13,
    isFavourite: false,
    date: 1990,
    genre: 'Drama',
    description: 'someDescription',
    director: 'someDirector',
    staring: 'someActors',
    runTime: 120,
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    reviews: [
      {
        id:1,
        author: 'someAuthor',
        text: 'great',
        date: '12.08.2022',
        rating: 9.8,
      }
    ]
  },
  {
    src: 'img/seven-years-in-tibet.jpg',
    title: 'Seven Years in Tibet',
    id: 14,
    isFavourite: false,
    date: 1990,
    genre: 'Horror',
    description: 'someDescription',
    director: 'someDirector',
    staring: 'someActors',
    runTime: 120,
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    reviews: [
      {
        id:1,
        author: 'someAuthor',
        text: 'great',
        date: '12.08.2022',
        rating: 9.8,
      }
    ]
  },
  {
    src: 'img/midnight-special.jpg',
    title: 'Midnight Special',
    id: 15,
    isFavourite: false,
    date: 1990,
    genre: 'Kids&Family',
    description: 'someDescription',
    director: 'someDirector',
    staring: 'someActors',
    runTime: 120,
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    reviews: [
      {
        id:1,
        author: 'someAuthor',
        text: 'great',
        date: '12.08.2022',
        rating: 9.8,
      }
    ]
  },
  {
    src: 'img/war-of-the-worlds.jpg',
    title: 'War of the Worlds',
    id: 16,
    isFavourite: false,
    date: 1990,
    genre: 'Romance',
    description: 'someDescription',
    director: 'someDirector',
    staring: 'someActors',
    runTime: 120,
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    reviews: [
      {
        id:1,
        author: 'someAuthor',
        text: 'great',
        date: '12.08.2022',
        rating: 9.8,
      }
    ]
  },
  {
    src: 'img/dardjeeling-limited.jpg',
    title: 'Dardjeeling Limited',
    id: 17,
    isFavourite: false,
    date: 1990,
    genre: 'Sci-Fi',
    description: 'someDescription',
    director: 'someDirector',
    staring: 'someActors',
    runTime: 120,
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    reviews: [
      {
        id:1,
        author: 'someAuthor',
        text: 'great',
        date: '12.08.2022',
        rating: 9.8,
      }
    ]
  },
  {
    src: 'img/orlando.jpg',
    title: 'Orlando',
    id: 18,
    isFavourite: false,
    date: 1990,
    genre: 'Thriller',
    description: 'someDescription',
    director: 'someDirector',
    staring: 'someActors',
    runTime: 120,
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    reviews: [
      {
        id:1,
        author: 'someAuthor',
        text: 'great',
        date: '12.08.2022',
        rating: 9.8,
      }
    ]
  },
  {
    src: 'img/mindhunter.jpg',
    title: 'Mindhunter',
    id: 19,
    isFavourite: true,
    date: 1990,
    genre: 'Comedy',
    description: 'someDescription',
    director: 'someDirector',
    staring: 'someActors',
    runTime: 120,
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    reviews: [
      {
        id:1,
        author: 'someAuthor',
        text: 'great',
        date: '12.08.2022',
        rating: 9.8,
      }
    ]
  },
  {
    src: 'img/midnight-special.jpg',
    title: 'Midnight Special',
    id: 20,
    isFavourite: false,
    date: 1990,
    genre: 'Crime',
    description: 'someDescription',
    director: 'someDirector',
    staring: 'someActors',
    runTime: 120,
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    reviews: [
      {
        id:1,
        author: 'someAuthor',
        text: 'great',
        date: '12.08.2022',
        rating: 9.8,
      }
    ]
  },
];

export {films};