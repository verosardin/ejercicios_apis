window.addEventListener("load", function(){

    let resultados = prompt('Cuántos resultados desea ver?');

fetch(`https://api.giphy.com/v1/gifs/trending?api_key=dvJhj95M3MsOyozZJl3b0iiO35E3dJUc&limit=${resultados}&rating=g`)

    .then(function(response){
        return response.json();
    })
    .then(function(information){

        console.log(information);

        for (let i = 0; i<information.data.length; i++){

            console.log(information.data[i].title);
            console.log(information.data[i].images.original.url)
            document.querySelector('body').innerHTML += `<h2> ${information.data[i].title} </h2>`
            document.querySelector('body').innerHTML += `<img src="${information.data[i].images.original.url}">`

        }
/*
        let nombre = information.data.title
        let url = information.data.image_url

        document.querySelector("h2").innerHTML = nombre;
        document.querySelector("img").src = url;

        let btnGif = document.querySelector('button')

        btnGif.addEventListener('click', function(){
            window.location.href = 'file:///C:/Users/TOSHIBA/Desktop/PROGRAMACION/13.07%20AJAX%20y%20Storage/Ejercitaci%C3%B3n/prueba.html'
        })
*/
    })
    .catch(function(e){
        console.log(e)
    });









})