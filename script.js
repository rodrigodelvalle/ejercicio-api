document.addEventListener('DOMContentLoaded', () => {
    let URL = 'https://jsonplaceholder.typicode.com/users';

    function mostrarData(users) {
        let container = "";
        users.forEach(elemento => {
            container += `
            <h1>${elemento.name}</h1><br>
                <p>${elemento.username}<br>${elemento.email}<br>${elemento.id}</p>
            
            `
        })
        document.getElementById('container').innerHTML = container;

    };

    fetch(URL)
        .then(response => response.json())
        .then(data => mostrarData(data));
});