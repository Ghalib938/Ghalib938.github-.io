// Get the buttons
const playSongButton = document.getElementById('play-song');
const showGalleryButton = document.getElementById('show-gallery');

// Add event listeners to the buttons
playSongButton.addEventListener('click', playWeddingSong);
showGalleryButton.addEventListener('click', showPhotoGallery);

// Function to play the wedding song
function playWeddingSong() {
    // Play a wedding song (you can replace this with your own song)
    const song = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.wav');
    song.play();
}

// Function to show the photo gallery
function showPhotoGallery() {
    // Create a modal window to display the photo gallery
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal