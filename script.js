const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

//song titles
const songs = [
	'1-Guruji - Swami Shivendra Puriji - Shrimad Bhagwat Katha Haridwar 2008',
	'2-Guruji - Swami Shivendra Puriji - Shrimad Bhagwat Katha Haridwar 2008',
	'3-Guruji - Swami Shivendra Puriji - Shrimad Bhagwat Katha Haridwar 2008',
	'4-Guruji - Swami Shivendra Puriji - Shrimad Bhagwat Katha Haridwar 2008',
	'5-Guruji - Swami Shivendra Puriji - Shrimad Bhagwat Katha Haridwar 2008',
	'6-Guruji - Swami Shivendra Puriji - Shrimad Bhagwat Katha Haridwar 2008',
	'7-Guruji - Swami Shivendra Puriji - Shrimad Bhagwat Katha Haridwar 2008',
	'8-Guruji - Swami Shivendra Puriji - Shrimad Bhagwat Katha Haridwar 2008',
	'9-Guruji - Swami Shivendra Puriji - Shrimad Bhagwat Katha Haridwar 2008',
	'10-Guruji - Swami Shivendra Puriji - Shrimad Bhagwat Katha Haridwar 2008',
	'11-Guruji - Swami Shivendra Puriji - Shrimad Bhagwat Katha Haridwar 2008',
	'12-Guruji - Swami Shivendra Puriji - Shrimad Bhagwat Katha Haridwar 2008',
	'13-Guruji - Swami Shivendra Puriji - Shrimad Bhagwat Katha Haridwar 2008',
	'14-Guruji - Swami Shivendra Puriji - Shrimad Bhagwat Katha Haridwar 2008',
	'15-Guruji - Swami Shivendra Puriji - Shrimad Bhagwat Katha Haridwar 2008',
	'16-Guruji - Swami Shivendra Puriji - Shrimad Bhagwat Katha Haridwar 2008',
	'17-Guruji - Swami Shivendra Puriji - Shrimad Bhagwat Katha Haridwar 2008',
	'18-Guruji - Swami Shivendra Puriji - Shrimad Bhagwat Katha Haridwar 2008'
];

//keep track of songs
let songIndex = 0;

//initially load the songs into the DOM
loadSong(songs[songIndex]);

//update the songs details
function loadSong(song) {
	title.innerText = song;
	audio.src = `./music/${song}.mp3`;
	cover.src = `./images/cover.jpg`;
}

function playSong() {
	musicContainer.classList.add('play');
	playBtn.querySelector('i.fa').classList.remove('fa-play');
	playBtn.querySelector('i.fa').classList.add('fa-pause');
	audio.play();
}

function pauseSong() {
	musicContainer.classList.remove('play');
	playBtn.querySelector('i.fa').classList.add('fa-play');
	playBtn.querySelector('i.fa').classList.remove('fa-pause');
	audio.pause();
}

function prevSong() {
	songIndex--;
	if (songIndex < 0) {
		songIndex = songs.length - 1;
	}
	loadSong(songs[songIndex]);
	playSong();
}

function nextSong() {
	songIndex++;
	if (songIndex > songs.length - 1) {
		songIndex = 0;
	}
	loadSong(songs[songIndex]);
	playSong();
}

function updateProgress(e) {
	const { duration, currentTime } = e.srcElement;
	const progressPercent = (currentTime / duration) * 100;
	progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
	const width = this.clientWidth;
	const clickX = e.offsetX;
	console.log(clickX);
	const duration = audio.duration;
	audio.currentTime = (clickX / width) * duration;
}

//event listeners
playBtn.addEventListener('click', () => {
	const isPlaying = musicContainer.classList.contains('play');
	if (isPlaying) {
		pauseSong();
	} else {
		playSong();
	}
});

//change songs events
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
audio.addEventListener('ended', nextSong);
