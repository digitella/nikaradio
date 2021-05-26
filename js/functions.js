/*
	When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
	play the song.
*/
let bandcampLinks = document.getElementsByClassName('bandcamp-link');

for( var i = 0; i < bandcampLinks.length; i++ ){
	bandcampLinks[i].addEventListener('click', function(e){
		e.stopPropagation();
	});
}


let songElements = document.getElementsByClassName('song');

for( var i = 0; i < songElements.length; i++ ){
	/*
		Ensure that on mouseover, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseover', function(){
		this.style.backgroundColor = '#00A0FF';

		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

		if( !this.classList.contains('amplitude-active-song-container') ){
			this.querySelectorAll('.play-button-container')[0].style.display = 'block';
		}

		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'block';
		this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
	});

	/*
		Ensure that on mouseout, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseout', function(){
		this.style.backgroundColor = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#272726';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
		this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
	});

	/*
		Show and hide the play button container on the song when the song is clicked.
	*/
	songElements[i].addEventListener('click', function(){
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
	});
}

/*
	Initializes AmplitudeJS
*/
Amplitude.init({
	continue_next: false,
	callbacks: {
		song_change: function(){
			alert = function() {};
		}
	},
	"songs": [
		{
			"name": "AFR",
			"artist": "ancientfaith.com",
			"album": "ancientfaith.com",
			"url": "https://ancientfaith.streamguys1.com/music",
			"cover_art_url": "./album-art/afr.jpg"
		},
		{
			"name": "BEREG",
			"artist": "BEREG",
			"album": "BEREG",
			"url": "http://radio-tochka.com:6135/;stream.mp3",
			"cover_art_url": "./album-art/bereg.jpg"
		},
		{
			"name": "BLAGO",
			"artist": "BLAGO",
			"album": "BLAGO",
			"url": "http://live.radioblago.ru:3281/broadwavehigh.mp3",
			"cover_art_url": "./album-art/blago.jpg"
		},
		{
			"name": "Благовещение",
			"artist": "Благовещение",
			"album": "Благовещение",
			"url": "http://radio-blagoveshchenie.ru:10000/stream",
			"cover_art_url": "./album-art/blagovest.jpg"
		},
		{
			"name": "ВЕРА",
			"artist": "Светлое радио онлайн",
			"album": "radiovera.ru",
			"url": "http://radiovera.hostingradio.ru:8007/radiovera_128",
			"cover_art_url": "./album-art/vera.jpg"
		},
		{
			"name": "ГЛАГОЛЪ",
			"artist": "radio-glagol.ru",
			"album": "radio-glagol.ru",
			"url": "https://radioglagol.s02.radio-tochka.com:4145/radio",
			"cover_art_url": "./album-art/glagol.jpg"
		},
		{
			"name": "Новая жизнь",
			"artist": "Новая жизнь",
			"album": "Новая жизнь",
			"url": "https://ic2.sslstream.com/nlradio",
			"cover_art_url": "./album-art/newlife.jpg"
		},
		{
			"name": "ТрансСвітове Радіо",
			"artist": "ТрансСвітове Радіо",
			"album": "ТрансСвітове Радіо",
			"url": "http://37.57.185.173:8000/live2",
			"cover_art_url": "./album-art/transworld.jpg"
		}
	]
});