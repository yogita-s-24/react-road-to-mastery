// fetch('https://jsonplaceholder.typicode.com/todos')
// .then((res) => res.json())
// .then((data) => console.log(data))

async function getAllData (){
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");

    const data = await res.json();

    console.log(data);
}

const todo = console.log(getAllData());
