let url = 'https://rickandmortyapi.com/api/character';

let container = document.getElementById('cont');

fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data.results);

    const result = data.results.map((item) => {
        let divCont = document.createElement('div');

        let Name = document.createElement('h1');
        Name = data.results.name;
        divCont.appendChild(Name);

        let photo = document.createElement('img');
        photo = data.results.url;
        divCont.appendChild(photo);

        container.appendChild(divCont);

    })
    

});