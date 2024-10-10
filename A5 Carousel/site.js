const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

//  add or subtract when btns are clicked
const btnNext = document.querySelector('#next')
btnNext.addEventListener('click', () => { 
    currentImage++;
    currentImage %= urls.length; 
    showImages();
     console.log('Next Button clicked') });

const preBtn = document.querySelector('#prev')
preBtn.addEventListener('click', () => {
    currentImage--;
    currentImage %= urls.length; 
    showImages();
    console.log('Previous Button clicked')} );

//  times that add +1 every 5 seconds 
    setInterval(() => {
        currentImage++;
        currentImage %= urls.length; 
        showImages();
    }, 5000)