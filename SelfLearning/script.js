var myClickFunction = document.querySelector('p');
myClickFunction.addEventListener('mousemove', setUserName)
    function setUserName() 
    {
    var name = prompt('Please type any name');
    myClickFunction.textContent = name + ', thanks for clicking';
    }
