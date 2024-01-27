const form = document.getElementById('nilaiForm');
const nilai = document.getElementById('nilai');
const hasilValue = document.getElementById('hasil-value');
const bilValue = document.getElementById('bil-value');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (nilai.value < 0 || nilai.value > 100) {
        hasilValue.textContent = "";
        bilValue.textContent = "Masukkan nilai antara 0 - 100!";
    } else {
        bilValue.textContent = "";
    
    if (nilai.value > 84) {
        hasilValue.textContent = "Kamu Mendapatkan Nilai A!"; /* 85-100 */
    } else if (nilai.value > 74) {
        hasilValue.textContent = "Kamu Mendapatkan Nilai B!"; /* 75-84 */
    } else if (nilai.value > 59) {
        hasilValue.textContent = "Kamu Mendapatkan Nilai C!"; /* 60-74 */
    } else if (nilai.value >= 0) {
        hasilValue.textContent = "Kamu Mendapatkan Nilai D!"; /* 0-59 */
    }}

if(nilai.value % 2 === 0){
    bilValue.textContent += " Nilai tersebut adalah bilangan genap.";
} else {
    bilValue.textContent += " Nilai tersebut adalah bilangan ganjil.";
}

});

const toggleDarkMode = document.getElementById("toggle-dark-mode");

toggleDarkMode.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    toggleDarkMode.classList.toggle("dark-mode");
});

/*
berikut skala nilai menurut huruf:
 85-100= A
 75-84 = B
 60-74 = C
 0-59 = D
*/