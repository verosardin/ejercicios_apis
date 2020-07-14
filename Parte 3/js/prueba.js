window.addEventListener("load", function(){


fetch("https://api.giphy.com/v1/gifs/random?api_key=dvJhj95M3MsOyozZJl3b0iiO35E3dJUc&tag=&rating=g")
    .then(function(response){
        return response.json();
    })
    .then(function(information){

        console.log(information);

        let nombre = information.data.title
        let url = information.data.image_url

        document.querySelector("h1").innerHTML = nombre;
        document.querySelector("img").src = url;

        let btnGif = document.querySelector('button')

        btnGif.addEventListener('click', function(){
            window.location.href = 'file:///C:/Users/TOSHIBA/Desktop/PROGRAMACION/13.07%20AJAX%20y%20Storage/Ejercitaci%C3%B3n/prueba.html'
        })

    })
    .catch(function(e){
        console.log(e)
    });









})