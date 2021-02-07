const getFood = () => {
    document.getElementById("top-side-food").style.display = "none";
    const food = document.getElementById("search-input").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
        .then(res => res.json())
        .then(data => foodDetails(data.meals))
        .catch(err => {
            const error = document.getElementById("error").innerText = `I’m Sorry.I have Eaten This Snack Last Night. I’m an Idiot...`;
        })
    document.getElementById("error").innerText = "";
};

const foodDetails = (foods) => {
    document.getElementById("all-food").innerHTML = "";
    const allFood = document.getElementById("all-food");
    foods.forEach(food => {
        const foodDiv = document.createElement("div");
        foodDiv.className = "all-foods";
        foodDiv.innerHTML = `
                            <img onclick="getIngredients('${food.strMeal}')" class="rounded-top" src="${food.strMealThumb}">
                            <h4 onclick="getIngredients('${food.strMeal}')" class="text-center p-2">${food.strMeal}</h4>
        `;
        allFood.appendChild(foodDiv);
    });
};


const getIngredients = (foodName) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => foodIngredient(data.meals[0]))
};
const foodIngredient = (ingredients) => {
    const topSideFood = document.getElementById("top-side-food");
    topSideFood.innerHTML = `
                            <img src="${ingredients.strMealThumb}">
                            <h2>${ingredients.strMeal}</h2> 
                            <p class="fw-bolder mt-5 mb-3">Ingredients</p> 
                            <p>${ingredients.strMeasure1}  ${ingredients.strIngredient1}</p>
                            <p>${ingredients.strMeasure2}  ${ingredients.strIngredient2}</p> 
                            <p>${ingredients.strMeasure3}  ${ingredients.strIngredient3}</p> 
                            <p>${ingredients.strMeasure4}  ${ingredients.strIngredient4}</p> 
                            <p>${ingredients.strMeasure5}  ${ingredients.strIngredient5}</p> 
                            <p>${ingredients.strMeasure6}  ${ingredients.strIngredient6}</p> 
                            <p>${ingredients.strMeasure7}  ${ingredients.strIngredient7}</p> 
                            <p>${ingredients.strMeasure8}  ${ingredients.strIngredient8}</p> 
                            <p>${ingredients.strMeasure9}  ${ingredients.strIngredient9}</p> 
                            <p>${ingredients.strMeasure10}  ${ingredients.strIngredient10}</p> 
                            <p>${ingredients.strMeasure11}  ${ingredients.strIngredient11}</p> 
                            <p>${ingredients.strMeasure12}  ${ingredients.strIngredient12}</p> 
                            <p>${ingredients.strMeasure13}  ${ingredients.strIngredient13}</p> 
                            <p>${ingredients.strMeasure14}  ${ingredients.strIngredient14}</p> 
    `;
    document.getElementById("top-side-food").style.display = "block"; 
}
