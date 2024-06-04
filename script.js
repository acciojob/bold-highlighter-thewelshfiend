const texts = document.getElementsByTagName('strong');

function highlight() {
    //Write your code here
    for (let x of texts)
    {
        x.style.color = 'green';
    }
}

function return_normal() {
    //Write your code here
    for (let x of texts)
    {
        x.style.color = '';
    }
}