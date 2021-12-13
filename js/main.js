// Array
const base = [
  {
    id: 1,
    name: 'Adam Smith',
    job: 'Web Developer',
    img: 'img/720x600.png',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: 2,
    name: 'Marsel Prasolov',
    job: 'Tester',
    img: 'img/man.jpg',
    text: 'Soluta cupiditate molestias consequuntur doloremque quae est maxime assumenda at, voluptatem non?'
  },
  {
    id: 3,
    name: 'Suzanna Ignatova',
    job: 'CEO',
    img: 'img/woman.jpg',
    text: 'quae est maxime assumenda at, voluptatem non?'
  }
];

const titleName = document.getElementById("title--name");
const titleJob = document.getElementById("title--job");
const titleText = document.getElementById("title--text");
const titleImg = document.getElementById("title--img");

const btnNext = document.getElementById('btn--next');
const btnPrev = document.getElementById('btn--prev');
const btnRand = document.getElementById('btn--rnd');

let currentItem = 0;

function showPerson() {
  const item = base[currentItem];
  titleName.textContent = item.name;
  titleJob.textContent = item.job;
  titleText.textContent = item.text;
  titleImg.src = item.img;
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

btnNext.addEventListener('click', function(){
  currentItem++;
  if (currentItem > base.length - 1) {
    currentItem = 0;
  }
  console.log(currentItem);
  showPerson();
})

btnPrev.addEventListener('click', function(){
  currentItem--;
  if (currentItem < 0) {
    currentItem = base.length - 1;
  }
  console.log(currentItem);
  showPerson();
})

btnRand.addEventListener('click', function(){
  currentItem = randomInteger(0, base.length - 1);
  console.log(currentItem);
  showPerson();
})

