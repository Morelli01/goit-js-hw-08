import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new VimeoPlayer('vimeo-player', {
  id: 236203659,
});

player.on('timeupdate', throttle(function(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}

