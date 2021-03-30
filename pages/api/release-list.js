
export default function handler(req, res) {
  res.status(200).json({ releases })
};

const releases = [
    {
        name: 'Das Giddy',
        year: 2015,
        artwork: '/das_giddy.jpg',
        id: 1,
        spotify: 'https://open.spotify.com/album/1d0rMgWlr6HsrHU9aUVLky',
        soundcloud: 'https://soundcloud.com/the-stetsons-electric/sets/das-giddy',
        bandcamp: 'https://stetsons.bandcamp.com/album/das-giddy'
    },
    {
        name: 'The Shotman',
        year: 2015,
        artwork: '/shotman.jpg',
        id: 2,
        spotify: '',
        soundcloud: '',
        bandcamp: 'https://stetsons.bandcamp.com/track/the-shotman',
        isFree: true
    },
    {
        name: 'Two Tickets',
        year: 2016,
        artwork: '/two_tickets.jpg',
        id: 3,
        spotify: 'https://open.spotify.com/album/1q9a50qiTTFxOGbrBl5URv',
        soundcloud: 'https://soundcloud.com/the-stetsons-electric/two-tickets-to-stetsonsmania',
        bandcamp: 'https://stetsons.bandcamp.com/track/two-tickets-to-stetsonsmania'
    },
    {
        name: 'No Ball Games',
        year: 2017,
        artwork: '/no_ball_games.jpg',
        id: 4,
        spotify: 'https://open.spotify.com/album/6MCS47qmmf6MvQZ0QM5Pz1',
        soundcloud: 'https://soundcloud.com/the-stetsons-electric/no-ball-games',
        bandcamp: 'https://stetsons.bandcamp.com/track/no-ball-games'
    },
    {
        name: 'Oh! Glittery Stetson',
        year: 2017,
        artwork: '/glittery_stetson.jpg',
        id: 5,
        spotify: 'https://open.spotify.com/track/3Sm67izvChtBVlrAIPfPDv',
        soundcloud: '',
        bandcamp: 'https://stetsons.bandcamp.com/track/oh-glittery-stetson'
    }, 
    {
        name: 'Dirty Ripper',
        year: 2018,
        artwork: '/dirty_ripper.jpg',
        id: 6,
        spotify: 'https://open.spotify.com/track/0G37AtkdWAryWOCLEg6HJL?si=Sxz3QmPmQ8W2r-MrbrGKag',
        soundcloud: 'https://soundcloud.com/the-stetsons-electric/dirty-ripper',
        bandcamp: 'https://stetsons.bandcamp.com/track/dirty-ripper'
    },
    {
        name: 'Japan',
        year: 2018,
        artwork: '/japan.jpg',
        id: 7,
        spotify: 'https://open.spotify.com/album/1BApXcvyjZ6C8V9bF8V585?si=jbMOR-3-ST-2FkdlQBBmfg',
        soundcloud: null,
        bandcamp: null
    },
    {
        name: 'Last Chance',
        year: 2018,
        artwork: "/last_chance.jpg",
        id: 8,
        spotify: 'https://open.spotify.com/album/6wvPPPqH0TYQBK3APEYVVe?si=9bnqUgrCTdiDwdGaoxZ0VQ',
        soundcloud: null,
        bandcamp: null
    },

];
