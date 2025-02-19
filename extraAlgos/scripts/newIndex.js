/*create Tag Array to store the Tags */ 
let tagArray = [];


function Tag(text, color)
{
	this.text = text;
	this.color = color;
};

function findTag(text, color)
{
	let index = -1;
	for(let i=0; i< tagArray.length; i++)
	{
		if((tagArray[i].text == text) && (tagArray[i].color == color))
		{
			index = i;
			break;
		}
	}
	return index;
}

/* get elements for lists */

let ingredientsArray = [];

function createIngredientFilter() {
    let ingredientInputValue = document.querySelector("#ingredientsInput");
    let ingredientFilterDiv = document.querySelector(".ingredient_filter");
    let ingredientFilterList = document.createElement("ul");
    ingredientFilterList.className = "list_display";
    ingredientFilterDiv.style.cursor = "pointer";
    ingredientFilterDiv.appendChild(ingredientFilterList);
    ingredientsArray = [];

    recipes.forEach((recipe) => {
        recipe.ingredients.forEach((ingredient) => {
            const newIngr = ingredient.ingredient.toLowerCase();
            if (!ingredientsArray.includes(newIngr)) {
                ingredientsArray.push(newIngr);
                let m = document.createElement("li");
                m.innerText = newIngr;
                ingredientFilterList.appendChild(m);
                m.onclick = function (){
                    ingredientFilterList.removeChild(m);
                    tagArray.push(new Tag(newIngr, "blue"));
                    populateTags(newIngr, "blue", ingredientsArray);
                }
            }
        });
    });

}

let appliancesArray = [];

function createApplianceFilter(){
    let applianceInputValue = document.querySelector("#appliancesInput");
    let applianceFilterDiv = document.querySelector(".appliances_filter");
    let applianceFilterList = document.createElement("ul");
    applianceFilterList.className = "list_display";
    applianceFilterDiv.style.cursor = "pointer";
    applianceFilterDiv.appendChild(applianceFilterList);
    
    recipes.forEach((recipe) => {
        const newApp = recipe.appliance.toLowerCase();
        if (!appliancesArray.includes(newApp)){
            appliancesArray.push(newApp);
            let m = document.createElement("li");
            m.innerText = newApp;
            applianceFilterList.appendChild(m);
            m.onclick = function (){
                applianceFilterList.removeChild(m);
                tagArray.push(new Tag(newApp, "green"));
                populateTags(newApp, "green", appliancesArray);
            }
        }
    });
}

let ustensilsArray = [];

function createUstensileFilter(){
    let ustensilInputValue = document.querySelector("#ustensilesInput");
    let ustensilFilterDiv = document.querySelector(".ustensiles_filter");
    let ustensilFilterList = document.createElement("ul");
    ustensilFilterList.className = "list_display";
    ustensilFilterDiv.style.cursor = "pointer";
    ustensilFilterDiv.appendChild(ustensilFilterList);

    recipes.forEach((recipe) => {
        recipe.ustensils.forEach((ustensil) => {
            const newUst = ustensil.toLowerCase();
            if (!ustensilsArray.includes(newUst)){
                ustensilsArray.push(newUst);
                let m = document.createElement("li");
                m.innerText = newUst;
                ustensilFilterList.appendChild(m);
                m.onclick = function (){
                    tagArray.push(new Tag(newUst, "red"));
                    ustensilFilterList.removeChild(m);
                    populateTags(newUst, "red", ustensilsArray);   
                }
            }
        });
    });
}


let keyWords = document.querySelector(".key_words");

function populateTags(elem,color,array) {

    let keyWordsDiv = document.createElement("div");
    keyWordsDiv.className =  color+ " tag_container_div";
    let keyWordsTag = document.createElement("p");
    keyWordsTag.style.paddingRight = "4px";
    keyWordsTag.innerText = elem;
    if(!tagArray.includes(elem))
    {
        tagArray.push(elem);
    }
    let removeIcon = document.createElement("i");
    removeIcon.className = "fa-regular fa-circle-xmark fa-lg";
    keyWordsDiv.append(keyWordsTag, removeIcon);
    keyWords.appendChild(keyWordsDiv);

    removeIcon.onclick = function () {
        let index = tagArray.indexOf(elem) - 1;
        if (array == ingredientsArray)
            createIngredientFilter();
        if (array == appliancesArray)
            createApplianceFilter();
        if (array == ustensilsArray)
            createUstensileFilter();
        keyWords.removeChild(keyWordsDiv);
        console.log(index);
        console.log(tagArray.length);
/*        if (tagArray.length < 0){
            recipeFactory(recipes);
            console.log("After removing : \n");
        }*/
        tagArray.splice(index,1);
        console.log(tagArray.length);
        console.log(tagArray);
    };
    filteringArray();
}

function displayElement(e){
    let element = e.children[3];
    let elementIcon = e.children[2];
    if (element.style.display == "none"){
        element.style.display = "grid";
        elementIcon.className = "fa-solid fa-angle-up icon";
        e.children[1].placeholder = "Chercher une recette"
    } else {
        element.style.display = "none";
        elementIcon.className = "fa-solid fa-angle-down icon";
        if (e.className === "filter_container blue"){
            e.children[1].placeholder = "Ingredients";
        }
        if (e.className === "filter_container green"){
            e.children[1].placeholder = "Appareils";
        }
        if (e.className === "filter_container red"){
            e.children[1].placeholder = "Ustensiles";
        }
    }
}

let recipeSection = document.querySelector(".section_recipes");
let selectedRecipes = [];

function filteringArray() {
    if (tagArray.length > -1) {
        console.log(tagArray.text);
        tagArray.forEach((tag) => {
            if (tag.color ===  "blue"){
                    console.log("key: " + tag.text);
                    recipes.forEach((recipe) => {
                        recipe.ingredients.forEach((ingredient) => {
                            if (ingredient.ingredient.toLowerCase().includes(tag.text.toLowerCase()))
                                selectedRecipes.push(recipe);
                        });
                    });
                }
            if (tag.color === "green"){
                    console.log("recipes.appliance");
                    recipes.forEach((recipe) => {
                        if (recipe.appliance.toLowerCase().includes(tag.text.toLowerCase()))
                            selectedRecipes.push(recipe);
                    });
                }
            if (tag.color === "red"){
                    console.log(recipes.ustensil);
                    recipes.forEach((recipe) => {
                        recipe.ustensils.forEach((ustensil) => {
                            if (ustensil.toLowerCase().includes(tag.text.toLowerCase()))
                                selectedRecipes.push(key.toLowerCase());
                        });
                    });
                }
            });
    }
    console.log(selectedRecipes);
    recipeFactory(selectedRecipes);
};


function recipeFactory(array) {
    recipeSection.innerHTML = "";
    array.forEach((array) => {
        let recipeContainerDiv = document.createElement("div");
        recipeContainerDiv.className = "recipe_container";

        let emptyImageContainer = document.createElement("div");
        emptyImageContainer.className = "empty_image_container";

        let recipeTextContainer = document.createElement("div");
        recipeTextContainer.className = "recipe_text_container";

        recipeContainerDiv.appendChild(emptyImageContainer);
        recipeContainerDiv.appendChild(recipeTextContainer);

        recipeSection.appendChild(recipeContainerDiv);

        let firstLine = document.createElement("div");
        firstLine.className = "first_line_recipe";
        recipeTextContainer.appendChild(firstLine);

        let recipeName = document.createElement("p");
        recipeName.style.fontSize = "1.4rem";
        recipeName.style.maxWidth = "60%";
        recipeName.innerText = array.name;
        firstLine.appendChild(recipeName);

        let timeIcon = document.createElement("i");
        timeIcon.className = "fa-regular fa-clock fa-xl";

        let recipeTime = document.createElement("span");
        recipeTime.style.fontWeight = "600";
        recipeTime.style.fontSize = "1.4rem";
        recipeTime.style.paddingLeft = "20px";
        recipeTime.innerText = array.time + " min";
        firstLine.appendChild(timeIcon);
        timeIcon.appendChild(recipeTime);

        let secondLine = document.createElement("div");
        secondLine.className = "second_line";
        recipeTextContainer.appendChild(secondLine);

        let recipeIngredientsContainerDiv = document.createElement("div");
        recipeIngredientsContainerDiv.className = "recipe_ingredients_container";
        let recIng = array.ingredients;
        let recipeIngredients = [];
        let recipeQuantity = [];
        let recipeUnit = [];
        for (var i = 0; i < recIng.length; i++) {
            recipeIngredients[i] = recIng[i].ingredient;
            if (recIng[i].quantity) {
                recipeQuantity[i] = recIng[i].quantity;
            } else {
                recipeQuantity[i] = "";
            }
            if (recIng[i].unit) {
                recipeUnit[i] = recIng[i].unit;
            } else {
                recipeUnit[i] = "";
            }
        }
        for (var i = 0; i < recipeIngredients.length; i++) {
            let RT = document.createElement("p");
            RT.style.padding = "0";
            RT.innerHTML += "<b>" + recipeIngredients[i] + "</b>";
            if (recipeQuantity[i] || recipeUnit[i]) {
                RT.innerHTML += ":" + recipeQuantity[i] + recipeUnit[i];
            }
            recipeIngredientsContainerDiv.appendChild(RT);
        }
        secondLine.appendChild(recipeIngredientsContainerDiv);

        let recipePreparationDiv = document.createElement("div");
        recipePreparationDiv.className = "recipe_div_preparation";
        let recipePreparation = document.createElement("p");
        recipePreparation.innerText = array.description;
        recipePreparationDiv.appendChild(recipePreparation);
        secondLine.appendChild(recipePreparationDiv);
    });
}

window.onload = () => {
    createIngredientFilter();
    createApplianceFilter();
    createUstensileFilter();
    recipeFactory(recipes);
};