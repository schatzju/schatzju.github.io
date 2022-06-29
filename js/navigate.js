document.getElementById('art_button').onclick = function(event) {
   location.href = 'art.html';
}

document.getElementById('research_button').onclick = function(event) {
   location.href = 'research.html';
}


document.getElementById('teaching_button').onclick = function(event) {
   location.href = 'teaching.html'
}

        var images = [
            "img/personal/grad_1.JPG",
            "img/personal/pers5.jpg",             
            "img/personal/pers6.jpg", 
            "img/personal/pers10.jpg",
            "img/personal/pers3.jpg", 
            "img/personal/pers7.jpg",
            "img/personal/pers2.jpg", 
            "img/personal/pers8.jpg", 
        ];

        var imageIndex = 0;

document.getElementById('front_image').onclick = function(event) {
            imageIndex = imageIndex + 1;
            imageIndex = imageIndex % images.length;
    $("#front_image").attr('src', images[imageIndex]);
}