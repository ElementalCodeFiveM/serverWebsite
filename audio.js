function Main() {
    const audio = new Audio();

    return {
        musicAutoplay: true,
        musicVolume: 0.1,
        musicList: [
            { label: 'First Day Out', author: 'Kodak Black', src: 'audio/firstdayout.mp3' },
        ],
        isMusicPlaying: false,
        musicOpen: false,
        currentSong: 0,
        listen() {
            if (this.musicAutoplay) {
                setTimeout(() => { this.play(); }, 100);
            }
        },
        play() {
            audio.src = this.musicList[this.currentSong].src;
            audio.load();
            audio.play();
            audio.volume = this.musicVolume;
            this.isMusicPlaying = true;
        },
        pause() {
            audio.pause();
            this.isMusicPlaying = false;
        },
        next() {
            if (this.isMusicPlaying) {
                audio.pause();
            }
            if (this.currentSong < this.musicList.length - 1) {
                this.currentSong++;
            } else {
                this.currentSong = 0;
            }
            audio.src = this.musicList[this.currentSong].src;
            audio.load();
            audio.play();
            this.isMusicPlaying = true;
        },
        prev() {
            if (this.isMusicPlaying) {
                audio.pause();
            }
            if (this.currentSong !== 0) {
                this.currentSong = this.currentSong - 1;
            } else {
                this.currentSong = this.musicList.length - 1;
            }
            audio.src = this.musicList[this.currentSong].src;
            audio.load();
            audio.play();
            this.isMusicPlaying = true;
        },
    };
}