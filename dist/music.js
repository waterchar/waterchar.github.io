const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "归去来兮",
        artist: '花粥',
        url: 'http://m8.music.126.net/20190911134302/e748d6dfbc11a307f01035322ee5e0ff/ymusic/510f/5659/510b/fe1f2bda3ca3bd68ad48fa2b82f1d7a1.mp3',
		cover:'',
		},
      {
        name: '芒种',
        artist: '音阙诗听',
        url: 'http://m8.music.126.net/20190911134015/70674e61ff01152ec8107c7533170b78/ymusic/0152/055a/5308/681ef6f50f20971ac5bddb07161fc6b5.mp3',
        cover: '',
      },
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: '',
      }
    ]
});