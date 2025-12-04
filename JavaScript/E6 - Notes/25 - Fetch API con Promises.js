// Fetch API con Promises
const url = 'https://jsonplaceholder.typicode.com/comments'

fetch(url)
    .then((response) => {
        console.log(response);
        if(response.status == 200) {
            return response.json()
        }
        throw new Error('Hubo un error...')
    })
    .then(data => console.log(data))
    .catch(error => console.log(error.message))