let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

function changeImages(category) {
    const images = document.querySelectorAll('.item');
    
    let imageUrls = [];
    
    switch(category) {
        case 'home':
            imageUrls = [
                'pic (1).jpg',
                'pic (1).jpeg',
                'pic (1).png',
                'pic (2).jpg',
                'pic (3).jpg',
                'pic 7.png'
            ];
            break;
        case 'favourites':
            imageUrls = [
                'fav (1).jpg',
                'fav (1).jpeg',
                'fav (2).jpg',
                'fav (3).jpg',
                'fav (4).jpg',
                'fav (5).jpg'
            ];
            break;
        case 'camera':
            imageUrls = [
                'cam (1).jpg',
                'cam (1).png',
                'cam (2).jpg',
                'cam (3).jpg',
                'cam (4).jpg',
                'cam (5).jpg'
            ];
            break;
        case 'downloaded':
            imageUrls = [
                'batman (5).jpeg',
                'batman (1).jpg',
              'batman (2).jpeg',
              'batman (2).jpg',
               'batman (3).jpg',
               'batman (4).jpg'
            ];
            break;
        default:
            break;
    }

    images.forEach((item, index) => {
        if (imageUrls[index]) {
            item.style.backgroundImage = `url('${imageUrls[index]}')`;
        }
    });
}


