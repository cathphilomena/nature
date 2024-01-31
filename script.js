const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () => {
  nav.style.display = 'flex';
  openNavBtn.style.display = 'none';
  closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
  nav.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav);

if(document.body.clientWidth < 1024) {
  nav.querySelectorAll('li a').forEach(navLink => {
  navLink.addEventListener('click', closeNav);
})
}

const aboutButtons = document.querySelectorAll('.about__item');
const aboutDetails = document.querySelector('.about__right');

const getAbout = (category) => {
  const details = aboutData.find(item => item.category === category);
  aboutDetails.innerHTML = `<h3>${details.title}</h3>${details.description.map(paragraph => '<p>' + paragraph + '</p>').join('')}`
}

const removeActiveClass = () => {
  aboutButtons.forEach(button => {
    button.classList.remove('active');
  })
}

aboutButtons.forEach(item => {
  item.addEventListener('click', () => {
    removeActiveClass();
    const aboutClass = item.classList[1];
    getAbout(aboutClass)
    item.classList.add('active')
  })
})

const chart = document.querySelector("#chart").getContext('2d');

new Chart(chart, {
  type: 'line',
  data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
          {
              label: 'Natural Material Output',
              data: [73761, 67713, 67113, 77134, 78134, 77471, 77731, 71342, 71144, 67134, 74711, 77113],
              borderColor: 'rgb(131, 157, 151)',
              borderWidth: 2 
          }
      ]
  },
  options: {
      responsive: true
  }
})

const containerEl = document.querySelector('.info__container')
var mixer = mixitup(containerEl, {
    animation: {
        enable: false
    }
})

mixer.filter('*');
