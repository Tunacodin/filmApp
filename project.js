const form = document.getElementById("film-form"); // form kısmını seçtik ve form değişlenine atadık
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.getElementById("url");

// UI Objesini başlatma

const ui = new UI();

//Tüm elementleri yükleme

EventListeners();

function EventListeners() {
    form.addEventListener("submit",addFilm);

}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const urlElement = urlElement.value;
  
    if (tittle === "" || directory === "" || url === "") {
        //hata
    }
    else {
        //yeni bir film
        const newFilm = new Film(title, directory, url);
          ui.addFilmToUI(newFilm); // Arayüze film ekler
    }
  
    ui.clearInputs(titleElement,urlElement,directorElement);
  
    e.preventDefault();
}