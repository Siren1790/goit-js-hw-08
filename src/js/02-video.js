// +1. Ознайомся з документацією бібліотеки Vimeo плеєра.
// +2. Додай бібліотеку як залежність проекту через npm.
// +3. Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
// +4. Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// 5. Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
// 6. Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
// 7. Додай до проекту бібілотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.


import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const player = new Player(document.querySelector("#vimeo-player"));
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(({seconds}) => {
   localStorage.setItem(LOCALSTORAGE_KEY , JSON.stringify(seconds))
}, 1000));

player.setCurrentTime().then(function(seconds) {
    // seconds = the actual time that the player seeked to
   seconds = Number(localStorage.getItem(LOCALSTORAGE_KEY));
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});



