
const progressBar = document.querySelector('#progress');

document.onscroll = () => {

    const distanceTop = window.pageYOffset;
    const pageHeight = document.body.scrollHeight - window.innerHeight;
    console.log(distanceTop);
    console.log(pageHeight);
    console.log((distanceTop / pageHeight) * 100);
    progressBar.style.width = (distanceTop / pageHeight) * 100 + '%';
}
