// способи запитів
// XMLHttpRequest -> не юзабіліті
//  fetch -> синтаксичний цукор
// ky
// axios
// методи запросів
// GET
// POST
// PATCH
// PUT
// DELETE
//  endpoint -> URL  (https://jsonplaceholder.typicode.com/users)
const API_USER = 'https://jsonplaceholder.typicode.com/users'

async function fetchDisplayUsers() {
    const newUser = {
        name: 'Kapkan',
        email: 'electrica@example.com'
    };
    try {
        const response = await fetch(API_USER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser) // ето не я делал
        });
        if(!response.ok) {
            throw new Error("Error fetch" +  response.status);
        }
        const users = await response.json();
        const li = 'users.json'
        API_USER.textContent = li
    }catch(error) {
        console.log("error" + error);
    }
} //Мой говно код
fetchDisplayUsers()

