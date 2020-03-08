

// MAPS AGENDA

const getData = async (url) => {
    const RESPONSE = await fetch(url);
    const DATA = await RESPONSE.json();

    document.getElementById("todo1").textContent= DATA[0].todo[0];
    document.getElementById("todo2").textContent= DATA[0].todo[1];
}

getData("../ressources/users.json")