const  horrorNetflix = [
    {
        id: 1,
        img: "./horror/burn.jpg",
        title: "Brightburn",
    },
    {
        id: 2,
        img: "./horror/forest.jpg",
        title: "The forest",
    },
    {
        id: 3,
        img: "./horror/invitation.jpg",
        title: "the Invitation",
    },
    {
        id: 4,
        img: "./horror/old.jpg",
        title: "Old",
    },
    {
        id: 5,
        img: "./horror/scream.jpg",
        title: "Scream",
    },
    {
        id: 6,
        img: "./horror/virupaksha.jpg",
        title: "Virupaksha",
    },
];

window.addEventListener("DOMContentLoaded", function () {
    // Map through the image array and create the HTML for each item
    const displayBoxs = horrorNetflix.map(function (item) {
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
    const imageContainer = document.querySelector(".section-two-horror");
    imageContainer.innerHTML = displayBoxs;
});

