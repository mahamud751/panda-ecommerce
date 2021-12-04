document.getElementById('backpack').style.backgroundColor = 'tomato';
document.getElementsByTagName('h1');


const shoe = document.getElementById('shoes');
// shoe.style.textAlign = 'center';
// shoe.style.marginLeft = '50px';
// shoe.innerText = 'sss';


const tagNam = document.getElementsByTagName('h1');
for (const tagName of tagNam) {
    tagName.style.color = 'lightblue';
};

const card = document.getElementsByClassName('card');
for (const cardChange of card) {
    cardChange.style.borderRadius = '30px';
}

document.getElementById('changeImg').addEventListener('mouseenter', function () {

    document.getElementById('changeImg').src = 'xbox.png';
});

document.getElementById('double').addEventListener('dblclick', function () {
    this.style.backgroundColor = 'red';
    this.style.width = '100%';
});

document.getElementById('buy').addEventListener('click', function () {
    console.log('click me');
});


document.getElementById('lastBtn').addEventListener('click', function () {

    const newLi = document.createElement('card');

    newLi.classList.add('btn');

    const ul = document.getElementById('item-container');
    ul.appendChild(newLi);

    document.getElementById('item-container').addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
})

// document.getElementById('newBtn').addEventListener('click', function () {

//     const newLi = document.createElement('li');
//     newLi.innerText = 'new vai';
//     newLi.classList.add('btn');

//     const ul = document.getElementById('item-container');
//     ul.appendChild(newLi);
// });

// document.getElementById('item-container').addEventListener('click', function (event) {
//     event.target.parentNode.removeChild(event.target);
// })


document.getElementById('input').addEventListener('keyup', function (e) {

    const dlt = document.getElementById('delete');

    if (e.target.value == 'email') {
        dlt.removeAttribute('disabled');
    }
    else {
        dlt.setAttribute('disabled', true);
    }
})
// document.getElementById('input').addEventListener('keyup', function (event) {

//     const deleteB = document.getElementById('deleteBtn');

//     if (event.target.value == 'email') {
//         deleteB.removeAttribute('disabled');
//     }
//     else {
//         deleteB.setAttribute('disabled', true);
//     }

// });


