// i can also do it with chaining like .then()and .then method but I prefer async await function 

const url = "https://randomuser.me/api/";
const btn = document.querySelector("#btn");
const data = document.querySelector("#data");

const getData = async () => {
    let response = await fetch(url);
    let Dresult = await response.json();
    console.log(Dresult);
    let randomIndex = Math.floor(Math.random() * Dresult.results.length);
    let user = Dresult.results[randomIndex];
    let userinfo = `
        <p>Name: ${user.name.first} ${user.name.last}</p>
        <p>Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}</p>
        <p>Email: ${user.email}</p>
        <p>DOB: ${user.dob.date}</p>
        <p>Age: ${user.dob.age}</p>
        <img src="${user.picture.medium}" alt="User Picture">
    `;
    data.innerHTML = userinfo;
};

btn.addEventListener('click', getData);



