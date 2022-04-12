/* get elements for lists */
let ingredientsArray = [];

function createIngredientFilter() {
    let ingredientFilterDiv = document.querySelector(".ingredient_filter");
    let ingredientFilterList = document.createElement("ul");
    ingredientFilterList.className = "list_display";
    ingredientFilterDiv.appendChild(ingredientFilterList);

    recipes.forEach((recipe) => {
        recipe.ingredients.forEach((ingredient) => {
            const newIngr = ingredient.ingredient;
            if (!ingredientsArray.includes(newIngr)) {
                ingredientsArray.push(newIngr);
                let m = document.createElement("li");
                m.innerText = newIngr;
                ingredientFilterList.appendChild(m);
            }
        });
    });

}

let appliancesArray = [];

function createApplianceFilter(){
    let applianceFilterDiv = document.querySelector(".appliances_filter");
    let applianceFilterList = document.createElement("ul");
    applianceFilterList.className = "list_display";
    applianceFilterDiv.appendChild(applianceFilterList);
    
    recipes.forEach((recipe) => {
        const newApp = recipe.appliance;
        if (!appliancesArray.includes(newApp)){
            appliancesArray.push(newApp);
            let m = document.createElement("li");
            m.innerText = newApp;
            applianceFilterList.appendChild(m);
        }
    });
}

let ustensilsArray = [];

function createUstensileFilter(){
    let ustensilFilterDiv = document.querySelector(".ustensiles_filter");
    let ustensilFilterList = document.createElement("ul");
    ustensilFilterList.className = "list_display";
    ustensilFilterDiv.appendChild(ustensilFilterList);

    recipes.forEach((recipe) => {
        recipe.ustensils.forEach((ustensil) => {
            let newUst = ustensil;
            if (!ustensilsArray.includes(newUst)){
                ustensilsArray.push(newUst);
                let m = document.createElement("li");
                m.innerText = newUst;
                ustensilFilterList.appendChild(m);
            }
        });
    });
}

function displayElement(e){
    let element = e.children[3];
    let elementIcon = e.children[2];
    if (element.style.display == "none"){
        element.style.display = "grid";
        elementIcon.className = "fa-solid fa-angle-up icon";
    }else{
        element.style.display = "none";
        elementIcon.className = "fa-solid fa-angle-down icon";
    }
}
window.onload = () => {
    createIngredientFilter();
    createApplianceFilter();
    createUstensileFilter();
};