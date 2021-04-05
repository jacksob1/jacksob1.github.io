var rhit = rhit || {};

rhit.main = () => {
    let footer = document.querySelector("footer");

    footer.onclick = (event) => {
        let body = document.querySelector("body");
        body.style.backgroundImage = "repeating-radial-gradient(#800000, #000000 15%)";
    }
}

rhit.main();