// HTTP METHODS
/* 
- GET: Retrieve data (200)
- POST: Creating or adding new data (201)
- PUT: Update an existing data (200)
- PATCH: Update an existing data (200)
- DELETE: Delete data (200)
*/



// Implementing a post request.

// NOTE
/* 
By default, fetch() make a GET request.
*/
const myRecipe = {
    name: "Orange Flavour Recipe",
    prepTimeMinutes: "15mins"
}

async function addRecipe(apiUrl, newRecipe) {
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRecipe)
        });

        if (!response.ok) throw new Error(`Unable to add recipe: ${response.status}`);

        const data = await response.json();
        return data;
    } catch(err) {
        console.log(err);
    }
}

async function handleAddRecipe() {
    try {
        const data = await addRecipe("https://dummyjson.com/recipes/add", myRecipe);
        console.log(data);
    } catch(err) {
        console.log(err);
    }
}

handleAddRecipe();


