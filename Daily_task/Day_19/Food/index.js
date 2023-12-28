fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
    .then((data) => data.json())
    .then((foodSource) => {

        let foodNames = [];

        let cardDisplay = document.getElementById("cardDisplay");
        // let inputresult = inputvalue;

        for (i = 0; i < foodSource.meals.length; i++) {
            foodNames.push(foodSource.meals[i].strMeal)
        }
        //    console.log(foodNames)

        for (let i = 0; i < foodSource.meals.length; i++) {
            displayCard(i)
        }
        function displayCard(i) {
            // let cardDisplay = document.getElementById("cardDisplay");
            let card = document.createElement("div");
            card.innerHTML = `<div class="card" style="width: 18rem;">
                <img src="${foodSource.meals[i].strMealThumb}" class="card-img-top" alt="..." ;>
                <div class="card-body">
                  <h5 class="card-title">${foodSource.meals[i].strMeal}</h5>
                  <a href="${foodSource.meals[i].strYoutube}" class="btn btn-primary">Watch video</a>
                </div>
              </div>`;
            cardDisplay.appendChild(card);

        }
        let selectfood = document.getElementById("selectfood");

        selectfood.onclick = function slectedfoods() {
            let inputvalue = document.getElementById("input");

            inputvalue.onkeyup = function (){
                if (inputvalue.value == ""){
                    cardDisplay.innerHTML = "";
                    for (let i = 0; i < foodSource.meals.length; i++) {
                        displayCard(i)}
                }
            }
            cardDisplay.innerHTML = "";
            for (ele of foodNames) {
                
                if (ele.toLowerCase().includes(inputvalue.value.toLowerCase())) {
                    let index = foodNames.indexOf(ele)
                    displayCard(index);
                }
                
            }
        }

    })









