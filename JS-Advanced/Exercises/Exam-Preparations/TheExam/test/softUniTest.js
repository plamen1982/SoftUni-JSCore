let SoftUniFy =  require('../softunify');
let assert = require('chai').assert;

describe('this.allSongs', () => {

    it('test', () => {
        let softuni = new SoftUniFy();
        assert.isExtensible(softuni.allSongs);
    });

});

describe('downloadSong(artist, song, lyrics)', () => {

    it(`•	downloadSong(artist, song, lyrics) adds the given information to the allSongs in
     format: artist: {rate: 0, votes: 0, songs: []}.`, () => {
        let sofunify = new SoftUniFy();

        sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        assert.equal(sofunify.allSongs['Eminem'].songs, 'Venom - Knock, Knock let the devil in...');
    });

    it(`return the whole class`, () => {
       let sofunify = new SoftUniFy();

       let newClass = sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
       assert.equal(newClass.constructor.name, 'SoftUniFy');
   });
   it('when we do not have even one song', () => {
    let sofunify = new SoftUniFy();
    let song = 'Venom';
    let result = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`;
    let expectedSong = sofunify.playSong(song);
    assert.equal(expectedSong, result);
   });
});

describe('playSong(song)', () => {
    it('searches all one downloaded', () => {
       let sofunify = new SoftUniFy();
       sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
    sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');

        let venomSong = sofunify.playSong('Venom');
        assert.equal(venomSong, `Eminem:\nVenom - Knock, Knock let the devil in...\n`)
    });
});

describe('•	songsList()', () => {
    it('should list all songs', () => {
       let sofunify = new SoftUniFy();
       sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
       sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
        let allSongReal = sofunify.songsList;
        let songsListStub = `Venom - Knock, Knock let the devil in...\n`
        songsListStub += `Phenomenal - IM PHENOMENAL...`;
        assert.equal(allSongReal, songsListStub);
    });
    it('should show error message if no songs are imported', () => {
        let sofunify = new SoftUniFy();
         let allSongReal = sofunify.songsList;
         let songsListStub = `Your song list is empty`;
         assert.equal(allSongReal, songsListStub);

     });
});

describe('•	rateArtist()', () => {
    it('should sum all rates', () => {
        let sofunify = new SoftUniFy();
        sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        sofunify.rateArtist('Eminem', 50);
        assert.equal(sofunify.rateArtist('Eminem', 50), 50)
    });
});
