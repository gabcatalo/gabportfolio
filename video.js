
let listVideo = document.querySelectorAll('.vidlist .vid');
let mainVideo = document.querySelector('.mainvid video');
let title = document.querySelector('.mainvid .title ');

listVideo.forEach(video =>{
    video.onclick = () =>{
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if(video.classList.contains('active')){
                let src = video.children[0].getAttribute('src');
                mainVideo.src = src
                let text = video.children[1].innerHTML;
                title.innerHTML = text;
        };
    };

});
