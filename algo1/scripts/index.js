/*--------- Create Filter List Element arrays for Ingredients,Appliances & Ustensils ----------*/
//one for looping inside ingredients array
let ingredientSearch = [];
let ingredientArray = [];


const ingredientElements = () => {
    ingredientArray = [];
    for (var i = 0; i < selectedElements.length; i++) {
        ingredientSearch = selectedElements[i].ingredients;
        for (var i2 = 0; i2 < ingredientSearch.length; i2++) {
            let ingredientProducts = ingredientSearch[i2].ingredient.toLowerCase();
            if (ingredientArray.includes(ingredientProducts))
                break;
            else
                ingredientArray.push(ingredientProducts);
        }
    }
};


let applianceArray = [];

const applianceElements = () => {
    applianceArray = [];
    for (var i = 0; i < selectedElements.length; i++) {
        let applianceProducts = selectedElements[i].appliance.toLowerCase();
        if (applianceArray.includes(applianceProducts)){
            break;
        } else {
            applianceArray.push(applianceProducts);
        }
    }
};

//one for looping inside ustensils array
let ustensileSearch = [];
let ustensilArray = [];

const ustensilesElements = () => {
    ustensilArray = [];
    for (var i = 0; i < selectedElements.length; i++) {
        ustensileSearch = selectedElements[i].ustensils;
        for (var i2 = 0; i2 < ustensileSearch.length; i2++) {
            let ustensileProduct = ustensileSearch[i2].toLowerCase();
            if (!ustensilArray.includes(ustensileProduct))
                ustensilArray.push(ustensileProduct);
        }
    }
};

/*------- Name Array and Preparation Array for Inserted Value search --------*/

let nameArray = [];

const nameElement = async () => {
    for (var i = 0; i < recipes.length; i++){
        let firstNameArray = recipes[i].name;
        nameArray.push(firstNameArray);
    }
};

let preparationArray = [];

const preparationElement = async () => {
    for (var i = 0; i < recipes.length; i++){
        let firstPreparationArray = recipes[i].description;
        preparationArray.push(firstPreparationArray);
    }
};
/*---- get filter list elements ----*/

let filterIngredientDiv = document.getElementById("ingredients");
let filterApplianceDiv = document.getElementById("appliances");
let filterUstensilDiv = document.getElementById("ustensiles");

/*---- Ingredient Input display element list eventListener ---*/

let ingredientInput = document.getElementById("ingredientsInput");
let displayIngredientDiv = filterIngredientDiv.children[3];


filterIngredientDiv.onclick = function()
{
    const displayIngredientDiv = filterIngredientDiv.children[3];
    if (displayIngredientDiv.style.display != "")
    {
        displayIngredientDiv.style.display = "";
        filterIngredientDiv.children[2].className="fa-solid fa-angle-down icon";
        ingredientInput.placeholder="Ingredients";
    }
    else
    {
        displayIngredientDiv.style.display = "grid";
        document.forms["filterForm"].ingredientsFilter.focus();
        filterIngredientDiv.children[2].className="fa-solid fa-angle-up icon";
        ingredientInput.placeholder="Recherchez une recettes";
        displayIngredientDiv.style.cursor = "pointer";
    }
};

/*---- Appliance Input display element list eventListener---*/

let applianceInput = document.getElementById("appliancesInput");

filterApplianceDiv.onclick = function ()
{
    const displayApplianceDiv = filterApplianceDiv.children[3];
    if (displayApplianceDiv.style.display != "")
    {
        displayApplianceDiv.style.display = "";
        filterApplianceDiv.children[2].className = "fa-solid fa-angle-down icon";
        applianceInput.placeholder = "Appareils";
    }
    else
    {
        displayApplianceDiv.style.display = "grid";
        filterApplianceDiv.children[2].className = "fa-solid fa-angle-up icon";
        applianceInput.placeholder = "Recherchez une recette";
        displayApplianceDiv.style.cursor = "pointer";
    }
};

/*---- Ustensil Input display element list eventListener ---*/

let ustensilesInput = document.getElementById("ustensilesInput");

filterUstensilDiv.onclick = function()
{
    const displayUstensilDiv = filterUstensilDiv.children[3];
    if (displayUstensilDiv.style.display != "")
    {
        displayUstensilDiv.style.display = "";
        filterUstensilDiv.children[2].className="fa-solid fa-angle-down icon";
        ustensilesInput.placeholder = "Ustensiles";    
    }
    else
    {
        displayUstensilDiv.style.display = "grid";
        filterUstensilDiv.children[2].className="fa-solid fa-angle-up icon";
        ustensilesInput.placeholder = "Recherchez une recette";
        displayUstensilDiv.style.cursor = "pointer";
    }
};

/*------ Populate Ingredients Filter Div list ----*/

//create empty array to stock momentarily deleted tags
let deletedElements = [];

function populateIngredientList(list) {
    displayIngredientDiv.innerHTML = "";
    displayIngredientDiv.className = "filter_options_list";
    let ingredientUListElement = document.createElement("ul");
    ingredientUListElement.className = "list_display";
    displayIngredientDiv.appendChild(ingredientUListElement);
    let deletedElements = [];
    for (var k = 0; k < tagArray.length; k++) {
        if (tagArray[k].color == "blue") {
            deletedElements.push(tagArray[k].text.toString());
        }
    }

    for (var i = 0; i < list.length; i++) {

        if (!deletedElements.includes(list[i])) {
            let ingredientListElement = document.createElement("li");
            ingredientListElement.innerText = list[i];
            ingredientUListElement.appendChild(ingredientListElement);
            ingredientListElement.onmousedown = function () {
                ingredientInput.value = "";
                populateIngredientList(ingredientArray);
                ingredientUListElement.removeChild(ingredientListElement);
                populateTags(this, "blue");
            }.bind(list[i]);
        }
    }
}

/*------ Populate Appliance Filter Div list ----*/

function populateAppliancesList(list) {
    const displayApplianceDiv = filterApplianceDiv.children[3];
    displayApplianceDiv.innerHTML = "";
    displayApplianceDiv.className = "filter_options_list";
    let applianceUListElement = document.createElement("ul");
    applianceUListElement.className = "list_display";
    displayApplianceDiv.appendChild(applianceUListElement);
    let deletedElements = [];
    for (var k = 0; k < tagArray.length; k++) {
        if (tagArray[k].color == "green") {
            deletedElements.push(tagArray[k].text.toString());
        }
    }

    for (var i = 0; i < list.length; i++) {
        if (!deletedElements.includes(list[i])) {
            let applianceListElement = document.createElement("li");
            applianceListElement.innerText = list[i];
            applianceUListElement.appendChild(applianceListElement);
            applianceListElement.onmousedown = function () {
                applianceInput.value = "";
                populateAppliancesList(applianceArray);
                applianceUListElement.removeChild(applianceListElement);
                populateTags(this, "green");
            }.bind(list[i]);
        }
    }
}

/*------ Populate Ustensils Filter Div list ----*/

function populateUstensilesList(list) {
    const displayUstensilDiv = filterUstensilDiv.children[3];
    displayUstensilDiv.innerHTML = "";
    displayUstensilDiv.className = "filter_options_list";
    let ustencilUListElement = document.createElement("ul");
    ustencilUListElement.className = "list_display";
    displayUstensilDiv.appendChild(ustencilUListElement);
    let deletedElements = [];
    for (var k = 0; k < tagArray.length; k++) {
        if (tagArray[k].color == "red") {
            deletedElements.push(tagArray[k].text.toString());
        }
    }


    for (var i = 0; i < list.length; i++) {
        if (!deletedElements.includes(list[i])) {
            let ustencilListElement = document.createElement("li");
            ustencilListElement.innerText = list[i];
            ustencilUListElement.appendChild(ustencilListElement);
            ustencilListElement.onmousedown = function () {
                ustensilesInput.value = "";
                populateUstensilesList(ustensilArray);
                ustencilUListElement.removeChild(ustencilListElement);
                populateTags(this, "red");

            }.bind(list[i]);
        }
    }
}


/*--------- Recipe creation factory ------*/


let recipeSection = document.querySelector(".section_recipes");

function createRecipeDiv(e){

    let recipeContainerDiv = document.createElement("div");
    recipeContainerDiv.className = "recipe_container";

    let emptyImageContainer = document.createElement("div");
    emptyImageContainer.className= "empty_image_container";

    let recipeTextContainer = document.createElement("div");
    recipeTextContainer.className = "recipe_text_container";
    
    recipeContainerDiv.appendChild(emptyImageContainer);
    recipeContainerDiv.appendChild(recipeTextContainer);
    
    recipeSection.appendChild(recipeContainerDiv);

    let firstLine = document.createElement("div");
    firstLine.className = "first_line_recipe";
    recipeTextContainer.appendChild(firstLine);
    
    let recipeName = document.createElement("p");
    recipeName.style.fontSize= "1.4rem";
    recipeName.style.maxWidth = "60%";
    recipeName.innerText = e.name;
    firstLine.appendChild(recipeName);

    let timeIcon = document.createElement("i");
    timeIcon.className = "fa-regular fa-clock fa-xl";
  
    let recipeTime = document.createElement("span");
    recipeTime.style.fontWeight = "600";
    recipeTime.style.fontSize = "0.8rem";
    recipeTime.style.paddingLeft = "20px";
    recipeTime.innerText = e.time + " min";
    firstLine.appendChild(timeIcon);
    timeIcon.appendChild(recipeTime);

    let secondLine = document.createElement("div");
    secondLine.className = "second_line";
    recipeTextContainer.appendChild(secondLine);

    let recipeIngredientsContainerDiv = document.createElement("div");
    recipeIngredientsContainerDiv.className = "recipe_ingredients_container";
    let recIng = e.ingredients;
    let recipeIngredients = [];
    let recipeQuantity = [];
    let recipeUnit = [];
    for (var i = 0; i < recIng.length;i++)
    {
        recipeIngredients[i] = recIng[i].ingredient;
        if (recIng[i].quantity){
            recipeQuantity[i] = recIng[i].quantity;
        }else {
            recipeQuantity[i] = "";
        }
        if (recIng[i].unit){
            recipeUnit[i] = recIng[i].unit;
        }else{
            recipeUnit[i] = "";
        }
    }
    for (var i = 0; i <recipeIngredients.length; i++)
    {
        let RT = document.createElement("p");
        RT.style.padding = "0";
        RT.innerHTML += "<b>" + recipeIngredients[i] + "</b>";
        if (recipeQuantity[i] || recipeUnit[i])
        {
            RT.innerHTML += ":" + recipeQuantity[i] + recipeUnit[i];
        }
        recipeIngredientsContainerDiv.appendChild(RT);
    }
    secondLine.appendChild(recipeIngredientsContainerDiv);

    let recipePreparationDiv = document.createElement("div");
    recipePreparationDiv.className = "recipe_div_preparation";
    let recipePreparation = document.createElement("p");
    recipePreparation.innerText = e.description;
    recipePreparationDiv.appendChild(recipePreparation);
    secondLine.appendChild(recipePreparationDiv);
}

/*------- Get inserted research values -------*/

let selectedElements = [];

function GetInsertedValue(e) {
    let insertedValue = document.getElementById("search_input").value.toLowerCase();
    if (e.code == "Enter") {
        if (insertedValue.length >= 3) {
            if (ingredientArray.toString().toLowerCase().includes(insertedValue) ||
                applianceArray.toString().toLowerCase().includes(insertedValue) ||
                ustensilArray.toString().toLowerCase().includes(insertedValue) ||
                nameArray.toString().toLowerCase().includes(insertedValue) ||
                preparationArray.toString().toLowerCase().includes(insertedValue)) {
                populateTags(insertedValue, "gray");
                document.getElementById("search_input").value = "";
            }
            else {
                alert("element not included in recipes");
            }
        }
    }
}

/*-------- Get Filter Values -----------*/

function GetIngredientFilterValue(e) {
    let value = document.getElementById("ingredientsInput").value.toLowerCase();
    const temp = [];
    for (let i = 0; i < ingredientArray.length; i++) {
        if (ingredientArray[i].toLowerCase().indexOf(value) >= 0) {
            temp.push(ingredientArray[i]);
        }
    }
    populateIngredientList(temp);
}

function GetApplianceFilterValue(e) {
    let value = document.getElementById("appliancesInput").value;
    const temp = [];
    for (let i = 0; i < applianceArray.length; i++) {
        if (applianceArray[i].toLowerCase().indexOf(value) >= 0) {
            temp.push(applianceArray[i]);
        }
    }

    populateAppliancesList(temp);
}

function GetUstensilFilterValue(e) {
    let value = document.getElementById("ustensilesInput").value;
    const temp = [];
    for (let i = 0; i < ustensilArray.length; i++) {
        if (ustensilArray[i].toLowerCase().indexOf(value) >= 0) {
            temp.push(ustensilArray[i]);
        }
    }

    populateUstensilesList(temp);
}

/*-------- Create Key Word Tags --------*/

let keyWords = document.querySelector(".key_words");
let tagArray = [];

function Tag(text, color) {
    this.text = text;
    this.color = color;
}

function findTag(text, color) {
    let index = -1;
    for (let i = 0; i < tagArray.length; i++) {
        if ((tagArray[i].text == text) && (tagArray[i].color == color)) {
            index = i;
            break;
        }
    }
    return index;
}

function populateTags(text, color) {
    if (findTag(text, color) >= 0) {
        return;
    }

    let keyWordsDiv = document.createElement("div");
    keyWordsDiv.className = color + " tag_container_div";
    let keyWordsTag = document.createElement("p");
    keyWordsTag.style.paddingRight = "4px";
    keyWordsTag.innerText = text;

    tagArray.push(new Tag(text, color));

    let removeIcon = document.createElement("i");
    removeIcon.className = "fa-regular fa-circle-xmark fa-lg";
    keyWordsDiv.append(keyWordsTag, removeIcon);
    keyWords.appendChild(keyWordsDiv);

    removeIcon.onclick = function () {
        let index = findTag(text, color);
        tagArray.splice(index, 1);
        keyWords.removeChild(keyWordsDiv);

        if (tagArray.length == 0) {
            selectedElements = [...recipes];
            displaySelectedRecipes();
        }
        else {
            removeTagfilterRecipes();
        }

        // update list of options
        ingredientElements();
        populateIngredientList(ingredientArray);
        applianceElements();
        populateAppliancesList(applianceArray);
        ustensilesElements();
        populateUstensilesList(ustensilArray);

    };

    filterRecipes();

    // update list of options
    ingredientElements();
    populateIngredientList(ingredientArray);
    applianceElements();
    populateAppliancesList(applianceArray);
    ustensilesElements();
    populateUstensilesList(ustensilArray);

}

/*------- Research recipe with ---------*/

function insideIngredients(e, index){
	e = e.toLowerCase();
    for(var i =0;i < selectedElements[index].ingredients.length;i++){
        if (selectedElements[index].ingredients[i].ingredient.toLowerCase().includes(e)){
            return 1;
        }
    }
    return 0;
};

function recipeSearch(tag, s) {
    tag = tag.toLowerCase();
    if (selectedElements[s].name.toLowerCase().includes(tag) ||
        selectedElements[s].description.toLowerCase().includes(tag) ||
        selectedElements[s].appliance.toLowerCase().includes(tag) ||
        insideIngredients(tag, s)) {
        return 1;
    }
    return 0;
}


function filterRecipes() {
    recipeSection.innerHTML = "";
    let newSelectedElements = [];
    var k = tagArray.length - 1;
    let text = tagArray[k].text.toLowerCase();
    let color = tagArray[k].color;

    for (var s = 0; s < selectedElements.length; s++) {
        switch (color) {
            case "gray":
                if (recipeSearch(text, s) === 1) {
                    if (!newSelectedElements.includes(selectedElements[s])) {
                        newSelectedElements.push(selectedElements[s]);
                    }
                }
                break;
            case "blue":
                if (searchByIngredients(text, s) === 1) {
                    if (!newSelectedElements.includes(selectedElements[s])) {
                        newSelectedElements.push(selectedElements[s]);
                    }
                }
                break;
            case "green":
                if (searchByAppliance(text, s) === 1) {
                    if (!newSelectedElements.includes(selectedElements[s])) {
                        newSelectedElements.push(selectedElements[s]);
                    }
                }
                break;
            case "red":
                if (searchByUstensils(text, s) === 1) {
                    if (!newSelectedElements.includes(selectedElements[s])) {
                        newSelectedElements.push(selectedElements[s]);
                    }
                }
                break;
        }
    }
    if (newSelectedElements.length != 0) {
        selectedElements = newSelectedElements;
        console.log(selectedElements);
    } else if (newSelectedElements.length == 0) {
        selectedElements = [];
        alert("Sorry, no match was found, but here are some ideas");
        return;
    }
    displaySelectedRecipes();
};


function displaySelectedRecipes() {
    recipeSection.innerHTML = "";
    for (let print = 0; print < selectedElements.length; print++) {
        createRecipeDiv(selectedElements[print]);
    }
}


function removeTagfilterRecipes() {
    selectedElements = [...recipes];

    const newElements = [];
    for (var i = 0; i < selectedElements.length; i++) {
        let elementFound = 0;
        for (var e = 0; e < tagArray.length; e++) {
            let text = tagArray[e].text.toLowerCase();
            let color = tagArray[e].color;
            switch (color) {
                case "gray":
                    if (recipeSearch(text, i) === 1) {
                        elementFound++;
                    }
                    break;
                case "blue":
                    for (var i2 = 0; i2 < selectedElements[i].ingredients.length; i2++) {
                        if (selectedElements[i].ingredients[i2].ingredient.toLowerCase().includes(text)) {
                            elementFound++;
                            break;
                        }
                    }
                    break;
                case "green":
                    if (selectedElements[i].appliance.toLowerCase().includes(text)) {
                        elementFound++;
                    }
                    break;
                case "red":
                    for (var i3 = 0; i3 < selectedElements[i].ustensils.length; i3++) {
                        if (selectedElements[i].ustensils[i3].ustensil.toLowerCase().includes(text)) {
                            elementFound++;
                            break;
                        }
                    };
                    break;
            }
        }
        if (elementFound === tagArray.length) {
            if (!newElements.includes(selectedElements[i])) {
                newElements.push(selectedElements[i]);
            }
        }
    }

    selectedElements = newElements;

    displaySelectedRecipes();
};

function searchByIngredients(tag, s) {
    for (var s2 = 0; s2 < selectedElements[s].ingredients.length; s2++) {
        if (selectedElements[s].ingredients[s2].ingredient.toLowerCase().includes(tag))
            return 1;
    }
    return 0;
};

function searchByAppliance(tag, s) {
    if (selectedElements[s].appliance.toLowerCase().includes(tag))
        return 1;
    return 0;
};

function searchByUstensils(tag, s) {
    for (var s2 = 0; s2 < selectedElements[s].ustensils.length; s2++) {
        if (selectedElements[s].ustensils[s2].toLowerCase().includes(tag))
            return 1;
    }
    return 0;
};

const init = async () => {
	selectedElements = [...recipes];

    ingredientElements();
    populateIngredientList(ingredientArray);
    applianceElements();
    populateAppliancesList(applianceArray);
    ustensilesElements();
    populateUstensilesList(ustensilArray);
    nameElement();
    preparationElement();	
	displaySelectedRecipes();
};

/*---- onload, creation of list elements array ---*/

window.onload = () => {
    init(); 
};