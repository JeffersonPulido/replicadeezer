const accordion = document.getElementsByClassName('container');

document.getElementById("first-faq").click();

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
