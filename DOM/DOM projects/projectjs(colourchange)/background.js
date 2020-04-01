const colourbtn = document.querySelector('.btn1');
const bodybcg = document.querySelector('body');

const colors = ['yellow','red','#7FCDCD','green','Hex #C3447A','Hex #98B4D4'];

colourbtn.addEventListener('click',changecolor);


function changecolor() {

    let random = Math.floor(Math.random() * colors.length);
    bodybcg.style.backgroundColor = colors[random];
}