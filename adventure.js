const  adventureNetflix = [
    {
        id: 1,
        img: "./adventure/65.jpg",
        title: "65",
    },
    {
        id: 2,
        img: "./adventure/bahubali.jpg",
        title: "Bahubali 2",
    },
    {
        id: 3,
        img: "./adventure/godzilla.jpg",
        title: "Godzilla vs Kong",
    },
    {
        id: 4,
        img: "./adventure/intersellar.jpg",
        title: "Interstellar",
    },
    {
        id: 5,
        img: "./adventure/red notice.jpg",
        title: "Red Notice",
    },
    {
        id: 6,
        img: "./adventure/troll.jpg",
        title: "Troll",
    },
];

window.addEventListener("DOMContentLoaded", function () {
    // Map through the image array and create the HTML for each item
    const displayBoxs = adventureNetflix.map(function (item) {
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
    const imageContainer = document.querySelector(".section-two-adventure");
    imageContainer.innerHTML = displayBoxs;
});

