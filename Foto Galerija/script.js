let slike = ['slike/slika1.jpg', 'slike/slika2.jpg', 'slike/slika3.jpg', 'slike/slika4.jpg', 'slike/slika5.jpg', 'slike/slika6.jpg', 'slike/slika7.jpg', 'slike/slika8.jpg', 'slike/slika9'];
let slika = document.querySelector('#slika');
function prikaz(i) {
    slika.src = slike[i-1];
}