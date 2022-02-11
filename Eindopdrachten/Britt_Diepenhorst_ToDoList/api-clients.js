// Standard Url
const API_URL = "http://localhost:3000/";

// GET request
async function getTodo() {
    try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Content-Type": 'application/json',
            },
        })
        const data = await response.json();
        console.log(data);
        addToDo();
        return data;
    } catch (error) {
        console.log("Error: ", error);
    }
};

// POST request
async function postTodo(Todo) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(Todo),
        })
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("Error: ", error);
    }
};

// DELETE request
async function deleteTodo(todo) {
    try {
        const response = await fetch(API_URL + { id_of_the_item }, {
            method: "DELETE",
            headers: {
                "Content-Type": 'application/json',
            },
            body: null,
        })
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("Error: ", error);
    }
};
