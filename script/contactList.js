// Name: Mohit Kataria, Student Number: 8820649
document
    .querySelector('#btn-add-contact')
    .addEventListener('click', function(){
        const inputName = document.querySelector('#name-input');
        addContact(inputName.value);
        inputName.value = "";
    })

function addContact(fullName){
    // Check for the empty data from the UI and if found, throw error
    if(!fullName || !fullName.trim()) {
        alert("Please insert contact name first and try again.");
        return;
    };

    const contactDiv = document.createElement('div');
    contactDiv.className = "contact-entry";

    // Double click event is added to remove the contact div
    contactDiv.addEventListener('dblclick', function(){
        contactDiv.remove();
    })

    const nameInitialDiv = document.createElement('div');
    nameInitialDiv.className = 'name-initial';
    nameInitialDiv.textContent = fullName.charAt(0);
    nameInitialDiv.style.backgroundColor = randomColor();
    
    const fullNameDiv = document.createElement('div');
    fullNameDiv.className = 'full-name';
    fullNameDiv.textContent = fullName;

    // append in order
    contactDiv.append(nameInitialDiv);
    contactDiv.append(fullNameDiv);
    document.querySelector('#contacts-list').append(contactDiv);
}

// RandomColor function is created in which hex color are stored in array and return a code randomly 
function randomColor(){
    const colors = [
        '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
    ];

    return colors[Math.floor(Math.random() * colors.length)];
}
