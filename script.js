const nameInput = document.getElementById('nameInput');  
const addButton = document.getElementById('addButton');  
const friendList = document.getElementById('friendList');  
const drawButton = document.getElementById('drawButton');  
const result = document.getElementById('result');  

let friends = [];  

// Función para agregar amigos a la lista  
addButton.addEventListener('click', () => {  
    const friendName = nameInput.value.trim();  
    
    // Validar si el campo está vacío  
    if (friendName === '') {  
        alert('Por favor, ingresa un nombre válido.');  
    } else {  
        // Añadir el nombre a la lista y actualizar la visualización  
        friends.push(friendName);  
        updateFriendList();  
        nameInput.value = ''; // Limpiar el campo de entrada  
    }  
});  

// Función para actualizar la lista visible de amigos  
function updateFriendList() {  
    friendList.innerHTML = ''; // Limpiar la lista actual  
    friends.forEach(friend => {  
        const li = document.createElement('li');  
        li.textContent = friend;  
        friendList.appendChild(li);  
    });  
}  

// Función para sortear un amigo  
drawButton.addEventListener('click', () => {  
    if (friends.length === 0) {  
        alert('No hay amigos en la lista para sortear.');  
    } else {  
        const randomIndex = Math.floor(Math.random() * friends.length);  
        result.textContent = `¡Tu amigo secreto es: ${friends[randomIndex]}!`;  
    }  
});
