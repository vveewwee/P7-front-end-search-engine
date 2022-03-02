/*--------- create filter tags arrays ----------*/

let ingredientSearch = [];
let ingredientArray = [];

const ingredientTag = async () => {
    for (var i = 0; i < recipes.length; i++) {
        ingredientSearch = recipes[i].ingredients;
        for (var i2 = 0; i2 < ingredientSearch.length; i2++) {
            let ingredientProducts = ingredientSearch[i2].ingredient;
            if (ingredientArray.includes(ingredientProducts))
                break;
            else
                ingredientArray.push(ingredientProducts);
        }
    }
}

let applianceArray = [];

const applianceTag = async () => {
    
    for (var i = 0; i < recipes.length; i++)
    {
        let applianceProducts = recipes[i].appliance;
        if (!applianceArray.includes(applianceProducts))
            applianceArray.push(applianceProducts);
    }
    //console.log(applianceArray);
}

let ustensileSearch = [];
let ustensilArray = [];

const ustensilesTag = async () => {

    for (var i = 0; i < recipes.length; i++) {
        ustensileSearch = recipes[i].ustensils;
        for (var i2 = 0; i2 < ustensileSearch.length; i2++) {
            let ustensileProduct = ustensileSearch[i2];
            if (!ustensilArray.includes(ustensileProduct))
                ustensilArray.push(ustensileProduct);
        }
    }
}

/*---- display filter tags ----*/
let filterIngredientBtn = document.querySelector("#ingredient_btn");
let filterApplianceBtn = document.querySelector("#appliances_btn");
let filterUstensilBtn = document.querySelector("#ustensiles_btn");

filterIngredientBtn.onfocus = () => {
    let 
}

const init = async () => {
 //   console.log(recipes);
};

window.onload = () => {
    init();
    ingredientTag();
    applianceTag();
    ustensilesTag();
}