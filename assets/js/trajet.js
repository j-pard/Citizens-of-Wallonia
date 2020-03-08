
const getData = async (url) => {
    const RESPONSE = await fetch(url);
    const DATA = await RESPONSE.json();

    document.getElementById("tovalide1").textContent= DATA[0].tovalide[0];
    document.getElementById("tovalide2").textContent= DATA[0].tovalide[1];
}

getData("../ressources/users.json")

document.getElementById("true1").addEventListener("click", () => {
    document.getElementById("b1").innerHTML= "";
})

document.getElementById("false1").addEventListener("click", () => {
    document.getElementById("b1").innerHTML= "";
    document.getElementById("user1").innerHTML= "";
})

document.getElementById("true2").addEventListener("click", () => {
    document.getElementById("b2").innerHTML= "";
})

document.getElementById("false2").addEventListener("click", () => {
    document.getElementById("b2").innerHTML= "";
    document.getElementById("user2").innerHTML= "";
})