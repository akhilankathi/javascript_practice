const divelement = document.getElementById('challenge-list');
const paragraph = document.createElement('p');
paragraph.textContent = "This is a new paragraph added to the challenge list.";
divelement.appendChild(paragraph);
const button = document.createElement('button');
button.textContent = "Click Me";
button.addEventListener('click', () => {
    alert("Button was clicked!");
});
divelement.appendChild(button);

const inputElement = document.createElement('input');
inputElement.type = 'text';
inputElement.placeholder = 'Type something...';
divelement.appendChild(inputElement);

inputElement.addEventListener('input', () => {
    console.log(`Input value: ${inputElement.value}`);

});


const debounceInput = document.createElement('input');
debounceInput.type = 'text';
debounceInput.placeholder = 'Type with debounce...';
divelement.appendChild(debounceInput);

let debounceTimeout;
let inputvalue = "";
let list = [];
debounceInput.addEventListener('input', () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        console.log(`Debounced input value: ${debounceInput.value}`);
        inputvalue = debounceInput.value;
        getdata(inputvalue);
    }, 1000);
});

const getdata = async (inputvalue) => {
    await fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data => {
            const listElement = document.createElement('ul');
            listElement.innerHTML = `Fetched Users: ${data?.map(user => user.name).join(', ')}`;
            divelement.appendChild(listElement);
            // list.push(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
