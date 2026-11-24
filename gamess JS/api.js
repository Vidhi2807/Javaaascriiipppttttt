// var btn = document.querySelector(".btn");
// var para = document.querySelector('p');
// var container = document.querySelector(".image");

// function loadApi(){
//     fetch('https://www.themdb.com/api/json/v1/1/categories.php')
//     .then((response)=> response.json())
//     .then((data)=>{
//         console.log(data);
//         para.textContent = data.categories[7].strCategoryDescription;
//         para.style.color = "red";
//     })
//     .catch((error)=>{
//         var img = document.createElement('img');
//         img.setAttribute("src", "https://www.themealdb.com/images/category/pork.png");

//         container.appendChild(img);
//         para.textContent = "check you're given url";
//         para.style.color = "green";
//     })
// }
// btn.addEventListener("click", loadApi);
// onx-qzxa-sao


//  var btn = document.querySelector(".btn");
// var para = document.querySelector('p');
// var container = document.querySelector(".card");

// function createCard(data){
//     console.log(data);
//     var div = document.createElement('div');

//     var img= document.createElement('img');
//     img.setAttribute("src", data.strCategoryThumb);

//     var p1 = document.createElement('p');
//     p1.textContent = `id: ${data.idCategory}`;

//     var p2 = document.createElement('p');
//     p2.textContent =` meal: ${data.strCategory}`;

//     var p3 = document.createElement('p');
//     p3.textContent = `description: ${data.strCategoryDescription}`;     

//     div.appendChild(img);
//     div.appendChild(p1);
//     div.appendChild(p2);
//     div.appendChild(p3);

//     container.appendChild(div);
//     console.log(div);
// }

// function loadApi(){
//     fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
//     .then((response)=> response.json())
//     .then((data)=>{
//       card.innerHtMl= ("")
//       console.log(data.meals)
//       for(let i=0;i<=13;i++){
//         setTimeout(cardmaker(data.meals[i]))
//         createCard(data.categories[i]);
//       }
//       } )
// }
// btn.addEventListener("click", loadApi);



// var btn = document.querySelector('.btn');
// var card = document.querySelector(".card");
// var input = document.querySelector(".text");
// var count = 0;
// var arr = [10,20,30,40];

// // -> out of bound (boundary)
// function loadApi(){
//     var txt = parseInt(input.value);
//     console.log(typeof(txt));
//     try{
//         // piece of code (risky)
//         if(txt >= 4) throw "Such index is not present";
//         console.log(arr[txt]);
//     }
//     catch(error){
//         console.log("user defined error is ->" + error);
//         p1.textcontent = error ;
//     }
//     finally {

//     console.log("finally block is been executed");

//     }
//   }





var searchBtn = document.querySelector("#searchBtn");
var allMealBtn = document.querySelector("#allMealBtn");
var searchInput = document.querySelector("#searchInput");
var container = document.querySelector(".card");

function createCard(data) {
    var div = document.createElement("div");

    var img = document.createElement("img");
    img.src = data.strCategoryThumb;

    var p1 = document.createElement("p");
    p1.textContent = `ID: ${data.idCategory}`;

    var p2 = document.createElement("p");
    p2.textContent = `Meal: ${data.strCategory}`;

    var p3 = document.createElement("p");
    p3.textContent = `Description: ${data.strCategoryDescription.slice(0, 80)}...`;

    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    container.appendChild(div);
}

// Load ALL Categories
function loadAllMeals() {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response => response.json())
        .then(data => {
            container.innerHTML = "";
            data.categories.forEach(c => createCard(c));
        });
}

// Search Meal By Name
function searchMeal() {
    let mealName = searchInput.value.trim();

    if (mealName === "") {
        alert("Please enter meal name");
        return;
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(response => response.json())
        .then(data => {
            container.innerHTML = "";

            if (!data.meals) {
                container.innerHTML = "<h3>No meal found</h3>";
                return;
            }

            data.meals.forEach(meal => {
                createCard({
                    strCategoryThumb: meal.strMealThumb,
                    idCategory: meal.idMeal,
                    strCategory: meal.strMeal,
                    strCategoryDescription: meal.strInstructions
                });
            });
        });
}

allMealBtn.addEventListener("click", loadAllMeals);
searchBtn.addEventListener("click", searchMeal);
