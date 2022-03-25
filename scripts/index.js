/*--------- Create Filter List Element arrays for Ingredients,Applainces & Ustensils ----------*/

let ingredientSearch = [];
let ingredientArray = [];


const ingredientElements = async () => {
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
};

let applianceArray = [];


const applianceElements = async () => {
    
    for (var i = 0; i < recipes.length; i++)
    {
        let applianceProducts = recipes[i].appliance;
        if (!applianceArray.includes(applianceProducts))
            applianceArray.push(applianceProducts);
    }
    //console.log(applianceArray);
};

let ustensileSearch = [];
let ustensilArray = [];

const ustensilesElements = async () => {

    for (var i = 0; i < recipes.length; i++) {
        ustensileSearch = recipes[i].ustensils;
        for (var i2 = 0; i2 < ustensileSearch.length; i2++) {
            let ustensileProduct = ustensileSearch[i2];
            if (!ustensilArray.includes(ustensileProduct))
                ustensilArray.push(ustensileProduct);
        }
    }
};

/*---- display filter list elements ----*/

let filterIngredientDiv = document.getElementById("ingredients");
let filterApplianceDiv = document.getElementById("appliances");
let filterUstensilDiv = document.getElementById("ustensiles");

/*---- create Ingredient Input ---*/

let newIngredientForm = document.createElement("form");

let newIngredientInput = document.createElement("input");
newIngredientInput.className = "blue";
newIngredientInput.name = "ingredients";
newIngredientInput.id = "ingredients";
newIngredientForm.appendChild(newIngredientInput);

let ingredientInput = document.getElementById("ingredientsInput");

filterIngredientDiv.onclick = function()
{
    const displayIngredientDiv = filterIngredientDiv.children[3];
    if (displayIngredientDiv.style.display != ""){
        displayIngredientDiv.style.display = "";
        filterIngredientDiv.children[2].className="fa-solid fa-angle-down icon";
        ingredientInput.placeholder="Ingredients";
    }else{
        displayIngredientDiv.style.display = "grid";
        document.forms["filterForm"].ingredientsFilter.focus();
        filterIngredientDiv.children[2].className="fa-solid fa-angle-up icon";
        ingredientInput.placeholder="Recherchez une recettes";
	    populateIngredientList();}
};

/*---- create Appliance Input ---*/

let newApplianceForm = document.createElement("form");
//newApplianceForm.setAttribute("autocomplete", "on");

let newApplianceInput = document.createElement("input");
newApplianceInput.className = "green";
newApplianceInput.name = "appliances";
newApplianceInput.id = "appliances";
newApplianceForm.appendChild(newIngredientInput);

let applianceInput = document.getElementById("appliancesInput");
filterApplianceDiv.onclick = function()
{
    const displayApplianceDiv = filterApplianceDiv.children[3];
    if (displayApplianceDiv.style.display != ""){
        displayApplianceDiv.style.display = "";
        applianceInput.placeholder="Appareils";
    }else{
        displayApplianceDiv.style.display = "flex";
        document.forms["filterForm"].appliancesFilter.focus();
        applianceInput.placeholder = "Recherchez une recette";
        populateAppliancesList();
    }
};

/*---- Create Ustensil Input ---*/

let newUstensilForm = document.createElement("form");

let newUstensilInput = document.createElement("input");
newUstensilInput.className = "red";
newUstensilInput.name = "ingredients";
newUstensilInput.id = "ingredients";
newUstensilForm.appendChild(newUstensilInput);

let ustensilesInput = document.getElementById("ustensilesInput");

filterUstensilDiv.onclick = function(){
    const displayUstensilDiv = filterUstensilDiv.children[3];
    if (displayUstensilDiv.style.display != ""){
        displayUstensilDiv.style.display = "";
        ustensilesInput.placeholder = "Ustensiles";
    }else{
        displayUstensilDiv.style.display = "flex";
        document.forms["filterForm"].ustensilesFilter.focus();
        ustensilesInput.placeholder = "Recherchez une recette";
        populateUstensilesList();
    }
};


/*------ Populate Ingredients Filter Div list ----*/

function populateIngredientList() {
    const displayIngredientDiv = filterIngredientDiv.children[3];
    displayIngredientDiv.innerHTML = "";
    displayIngredientDiv.className = "filter_options_list";
    let ingredientUListElement = document.createElement("ul");
    ingredientUListElement.className = "list_display";
    displayIngredientDiv.appendChild(ingredientUListElement);

    for (var i = 0; i < ingredientArray.length; i++) {
        
        let ingredientListElement = document.createElement("li");
        ingredientListElement.innerText = ingredientArray[i];
        ingredientUListElement.appendChild(ingredientListElement);
    }
}

/*------ Populate Appliance Filter Div list ----*/

function populateAppliancesList() {
    const displayApplianceDiv = filterApplianceDiv.children[3];
    displayApplianceDiv.innerHTML = "";
    displayApplianceDiv.className = "filter_options_list";
    let applianceUListElement = document.createElement("ul");
    applianceUListElement.className = "list_display";
    displayApplianceDiv.appendChild(applianceUListElement);
   
    for(var i = 0; i < applianceArray.length;i++)
    {
        let applianceListElement = document.createElement("li");
        applianceListElement.innerText = applianceArray[i];
        applianceUListElement.appendChild(applianceListElement);
    }
}

/*------ Populate Ustensils Filter Div list ----*/

function populateUstensilesList() {
    const displayUstensilDiv = filterUstensilDiv.children[3];
    displayUstensilDiv.innerHTML = "";
    displayUstensilDiv.className = "filter_options_list";
    let ustencilUListElement = document.createElement("ul");
    ustencilUListElement.className = "list_display";
    displayUstensilDiv.appendChild(ustencilUListElement);

    for(var i = 0; i < ustensilArray.length;i++)
    {
        let ustencilListElement = document.createElement("p");
        ustencilListElement.innerText = ustensilArray[i];
        ustencilUListElement.appendChild(ustencilListElement);
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
    recipeName.style.fontSize= "16pt";
    recipeName.style.marginRight="10%";
    recipeName.innerText = e.name;
    firstLine.appendChild(recipeName);

    let timeIcon = document.createElement("i");
    timeIcon.className = "fa-regular fa-clock fa-xl";
  
    let recipeTime = document.createElement("span");
    recipeTime.style.fontWeight = "600";
    recipeTime.style.fontSize = "16pt";
    recipeTime.innerText = e.time + " min";
    firstLine.appendChild(timeIcon);
    firstLine.appendChild(recipeTime);

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
            selectedElements.push(insertedValue);
            populateTags(insertedValue);
            // recipeSearch(insertedValue);
        }
    }
    else {
        console.log(insertedValue);
    }
}

/*-------- Get Filter Values -----------*/

function GetIngredientFilterValue(e) {
    let ingredientFilterValue = document.getElementById("ingredientsInput").value ;
    if (e.code == "Enter") {
        if (ingredientFilterValue.length >= 3){
            console.log(ingredientFilterValue);
            selectedElements.push(ingredientFilterValue);
            console.log(selectedElements);
            populateTags(ingredientFilterValue);
            let lowerCaseIngredients = [];
            lowerCaseIngredients = ingredientArray.toString();
            lowerCaseIngredients.toLowerCase();
            console.log(lowerCaseIngredients);
            if (lowerCaseIngredients.includes(ingredientFilterValue)){
                alert("in there");
                removeFilter(ingredientArray, ingredientFilterValue);
                populateIngredientList();
            }
            // recipeSearch(insertedValue);
        }else{
            console.log("not enough arguments");
        }
    }
}

function removeFilter(array, value){
    let newArray = array.filter(function(e){
        return e!== value;
    });
}

function GetApplianceFilterValue(e) {
    let applianceFilterValue = document.getElementById("appliancesInput").value ;
    if (e.code == "Enter") {
        if (applianceFilterValue.length >= 3){
            selectedElements.push(applianceFilterValue);
            console.log(selectedElements);
            populateTags(applianceFilterValue);
            // recipeSearch(applianceFilterValue);
        }else{
            console.log("not enough arguments");
        }
    }
}

function GetUstensilFilterValue(e) {
    let ustensilFilterValue = document.getElementById("ustensilesInput").value;
    if (e.code == "Enter") {
        if (ustensilFilterValue.length >= 3){
            console.log(ustensilFilterValue);
            selectedElements.push(ustensilFilterValue);
            console.log(selectedElements);
            populateTags(ustensilFilterValue);
            // recipeSearch(ustensilFilterValue);
        }else{
            console.log("not enough arguments");
        }
    }
}
/*-------- Create Key Word Tags --------*/

let keyWords = document.querySelector(".key_words");

function populateTags(elem) {

    let keyWordsDiv = document.createElement("div");
    keyWordsDiv.className = "tag_container_div blue";
    let keyWordsTag = document.createElement("p");
    keyWordsTag.style.paddingRight = "4px";
    keyWordsTag.innerText = elem;

    let removeIcon = document.createElement("i");
    removeIcon.className = "fa-regular fa-circle-xmark fa-lg";
    keyWordsDiv.append(keyWordsTag, removeIcon);
    keyWords.appendChild(keyWordsDiv);

    removeIcon.onclick = function () {
        keyWords.removeChild(keyWordsDiv);
    }
}

console.log(selectedElements);

const init = async () => {
    ingredientElements();
    applianceElements();
    ustensilesElements();
    for (var i = 0; i < 7;i++){
        createRecipeDiv(recipes[i]);
    } // just a test for now
};

/*---- onload, creation of list elements array ---*/

window.onload = () => {
    init(); 
};