// var box = document.querySelector(".box");

// console.log(box);

// box.addEventListener("change",(event)=>{
//     if(event.target.checked){
//  console.log("Checkbox  is in checked status");
//     }
//    else {
//     console.log("checkbox is in unchecked status");
//    }
// })





samir singh kshatriya
11:27
https://rapidapi.com/letscrape-6bRBa3QguO5/api/real-time-amazon-data/playground/endpoint_a4f4da9b-bba3-417e-a2ef-78ee66d6cd4a

samir singh kshatriya
11:58
// input -> type = checkbox / radio...

// type -> checkbox = default -> unchecked -> user action(click) -> status -> checked, unchecked..


//Task -> user -> checked -> terminal (msg-> user clicked on checkbox) -> unchecked -> termminal(msg-. unchecked status)..

//input -> checkbox/radio -> action in addevent -> "change",  event-> checked (boolean -> T = checked  or F = unchecked)
var container = document.querySelector(".dataContain");
var box = document.querySelector(".box");

console.log(box);

function createCard(element){

    var img = document.createElement('img');
    img.setAttribute("src", element.review_author_avatar);
    
    var p1 = document.createElement('p');
    p1.textContent = "id -> " + element.review_id;

    var p2 = document.createElement("p");
    p2.textContent = element.review_title;

    var p3 = document.createElement('p');
    p3.textContent = element.review_star_rating;

    var card = document.createElement('div');

    card.appendChild(img);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);

    console.log(card);

    container.appendChild(card);
}

box.addEventListener("change", (event) => {
    if (event.target.checked) {
        console.log("checkbox is in checked status");
        fetch("https://real-time-amazon-data.p.rapidapi.com/top-product-reviews?asin=B07ZPKN6YR&country=US&rapidapi-key=0e21a599b2mshbf0013281d25382p11e101jsnab8a18423bff")
            .then((response) => response.json())
            .then((data1) => {
                // console.log(data1.data.reviews);
                data1.data.reviews.forEach(element => {
                    // console.log(element.review_author_avatar);
                    // console.log(element.review_id);
                    // console.log(element.review_title);
                    // console.log(element.review_star_rating);
                    createCard(element);
                });
            })
    }
    else {
        console.log("checkbox is in unchecked status");
    }
})

//Task -> given link -> user -> checkbox -> status -> checked -> html page -> card format(image, id, title, rating and link).....

