let field = document.querySelector('#field');
let button = document.querySelector('#button');
let list = document.querySelector('#list');

let guests = JSON.parse(localStorage.getItem('guests')) || [];

function saveGuests() {

    localStorage.setItem("guests", JSON.stringify(guests));
}

field.focus();

//keypress é um evento pra capturar tecla precionada.
field.addEventListener('keypress', function(event){

    if (event.keyCode === 13) {

        if (!field.value) return;

        register();
    
    }

});

document.querySelectorAll('input').forEach(($input) => {

    const field = $input.dataset.js; 

    $input.addEventListener('input', (e) => {

        e.target.value = masks[field](e.target.value);

    }, false)

})


function showGuests() {

    list.innerHTML = '';

    for (const guest of guests) {

        let elLi = document.createElement('li');
        let elName = document.createTextNode(guest.name);

        let elDelete = document.createElement('a');
        elDelete.addEventListener('click', function(){

            guests = guests.filter(function(item){

                return item.name !== guest.name;

            });

            saveGuests();
            showGuests();

        });

        elDelete.setAttribute('href', '#');
        elDelete.setAttribute('class', 'delete');
        let elTextDelete =document.createTextNode('- Delete'); 
      
        elLi.appendChild(elName);
        elLi.appendChild(elDelete);
        list.appendChild(elLi);
        elDelete.appendChild(elTextDelete);

    }

}

showGuests();

function register() {
    
    let name = field.value;
    if (name && name !== undefined) {

        guests.push({name: name});
        field.value = '';
        saveGuests();
        showGuests();

    } else {

        alert('Typing a name');
        field.focus();

    }

}

button.addEventListener('click', register);   
    