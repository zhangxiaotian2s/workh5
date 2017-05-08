function Player(el, src) {
    this.el = el;
    this.isPlay = false;
    this.playnumber = 0;
    if (src == undefined) {
        src = '';
    }
    this.init(src);
}
Player.prototype = {
    init: function (src) {
        var _this = this,
            attr = {
                loop: true,
                preload: "auto",
                src: src
            };
        this._audio = new Audio;
        for (var i in attr) {
            attr.hasOwnProperty(i) && i in this._audio && (this._audio[i] = attr[i]);
        }
        document.addEventListener('DOMContentLoaded', function () {
            function audioAutoPlay() {
                _this._play();
                document.addEventListener("WeixinJSBridgeReady", function () {
                    _this._play();
                }, false);
            }
            audioAutoPlay()
        });

        // this._audio.addEventListener('canplay', function () {
        //     _this._isplay();
        //     _this._play();
        // }, false)

        $(this._audio).on('ended', function () {
            // 播放结束
            _this._audio.currentTime = 0;
            _this.isPlay = false;
            _this._play();
        });
        if (src != '') {
            this._audio.load();
        }
        document.querySelector('#btn_play_music').addEventListener('click', function () {
            _this._play();
        }, false)
        // this.el.on('touchstart', function () {
        //     if (canClick === true) {
        //         canClick = false
        //         _this._play();

        //     }
        //     setTimeout(function () {
        //         canClick = true
        //     }, 500)
        // });
    },
    _load: function () {
        this._audio.load();
    },
    _src: function (src) {
        this._audio['src'] = src;
    },
    _isplaynumber: function () {
        return this.playnumber;
    },
    _isplay: function () {
        if (this._audio.paused) {
            this.isPlay = false
        } else {
            this.isPlay = true

        }
        return this.isPlay;
    },
    _play: function () {
        if (!this.isPlay) {

            this._audio.play();
            this._isplay()
        } else {
            this._audio.pause();
            this._isplay()
        }
        if (!this.isPlay) {
            this.el.removeClass('c_btn_play_music_playing');
            this.el.addClass('c_btn_play_music_paused');
        } else {
            this.playnumber++;
            this.el.removeClass('c_btn_play_music_paused');
            this.el.addClass('c_btn_play_music_playing');
        }

    },
    _volume: function (num) {
        this._audio.volume = num;
    }
}