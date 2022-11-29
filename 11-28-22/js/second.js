document.addEventListener('DOMContentLoaded', function(){
    const captains = ['Kirk', 'Picard', 'Sisko','Pike'];

    function render(){

    const $names = document.getElementById('names');

    const captainsHTML = captains.map(function(name){
        return `<li> ${name} </li>`
    }).join('');
    console.log(captainsHTML);
    $names.innerHTML = `<ul> ${captainsHTML} </ul>`
    document.getElementById('name').value = '';

    }
    


    document.getElementById('add-name').addEventListener('click',function(){
        const name = document.getElementById('name').value;
        captains.push(name);
        console.log(captains);
        render();

    });


});
