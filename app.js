const image = [
    {
        id: 1,
        img: "./images/doraemon.jpg",
        title: "DORAEMON stand by me 2",
    },
    {
        id: 2,
        img: "./images/birdbox.jpg",
        title: "Birdbox",
    },
    {
        id: 3,
        img: "./images/bossbaby.jpg",
        title: "Bossbaby",
    },
    {
        id: 4,
        img: "./images/extraction.jpg",
        title: "Extraction 2",
    },
    {
        id: 5,
        img: "./images/Jhoot.jpg",
        title: "Tu Jhoothi Main Makkaar",
    },
    {
        id: 6,
        img: "./images/popes.jpg",
        title: "the Popes Exorcist",
    },
];

window.addEventListener("DOMContentLoaded", function () {
    // Map through the image array and create the HTML for each item
    const displayBox = image.map(function (item) {
        return ` 
            <div class="img-box">
                <img src="${item.img}" alt="">
                <span>
                  ${item.title}
                </span>
            </div>
        `;
    }).join(""); // Use join() to concatenate the mapped HTML strings

    // Insert the HTML into the image-container (section-two)
    const imageContainer = document.querySelector(".section-two");
    imageContainer.innerHTML = displayBox;
});

