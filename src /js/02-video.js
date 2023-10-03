import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const KEY_STORAGE = 'videoplayer-current-time';
const player = new Player(iframe);
const currentTime = Number(localStorage.getItem(KEY_STORAGE));

player.on('timeupdate', throttle(playTime, 1000));

function playTime(evt) {
  localStorage.setItem(KEY_STORAGE, evt.seconds);
}

player.setCurrentTime(currentTime);


