/*--------- Create Filter List Element arrays for Ingredients,Appliances & Ustensils ----------*/

let ingredientSearch = [];
let ingredientArray = [];


const ingredientElements = async () => {
    for (var i = 0; i < recipes.length; i++) {
        ingredientSearch = recipes[i].ingredients;
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


const applianceElements = async () => {
    
    for (var i = 0; i < recipes.length; i++)
    {
        let applianceProducts = recipes[i].appliance.toLowerCase();
        if (!applianceArray.includes(applianceProducts))
            applianceArray.push(applianceProducts);
    }
};

let ustensileSearch = [];
let ustensilArray = [];

const ustensilesElements = async () => {

    for (var i = 0; i < recipes.length; i++) {
        ustensileSearch = recipes[i].ustensils;
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
/*---- display filter list elements ----*/

let filterIngredientDiv = document.getElementById("ingredients");
let filterApplianceDiv = document.getElementById("appliances");
let filterUstensilDiv = document.getElementById("ustensiles");

/*---- create Ingredient Input ---*/

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

/*---- create Appliance Input ---*/

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

/*---- Create Ustensil Input ---*/

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

function refreshIngredientList(){
    const displayIngredientDiv = filterIngredientDiv.children[3];
    displayIngredientDiv.innerHTML = "";
    populateIngredientList();
}

/*------ Populate Ingredients Filter Div list ----*/
let deletedElements = [];

function populateIngredientList() {
    displayIngredientDiv.innerHTML = "";
    displayIngredientDiv.className = "filter_options_list";
    let ingredientUListElement = document.createElement("ul");
    ingredientUListElement.className = "list_display";
    displayIngredientDiv.appendChild(ingredientUListElement);
    let deletedElements = [];
    for (var k=0; k < tagArray.length;k++)
    {
        if (tagArray[k].color == "blue"){
            deletedElements.push(tagArray[k].text.toString());
        }
    }

    for (var i = 0; i < ingredientArray.length; i++) {
        
        if (!deletedElements.includes(ingredientArray[i])) {
            let ingredientListElement = document.createElement("li");
            ingredientListElement.innerText = ingredientArray[i];
            ingredientUListElement.appendChild(ingredientListElement);
            ingredientListElement.onmousedown = function () {
                ingredientInput.value = "";
                ingredientUListElement.removeChild(ingredientListElement);
                populateTags(this, "blue");
            }.bind(ingredientArray[i]);
        }
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
    let deletedElements = [];
    for (var k=0; k < tagArray.length;k++)
    {
        if (tagArray[k].color == "green"){
            deletedElements.push(tagArray[k].text.toString());
        }
    }
   
    for(var i = 0; i < applianceArray.length;i++)
    {
        if (!deletedElements.includes(applianceArray[i])) {
            let applianceListElement = document.createElement("li");
            applianceListElement.innerText = applianceArray[i];
            applianceUListElement.appendChild(applianceListElement);
            applianceListElement.onmousedown = function () {
                applianceInput.value = "";
                applianceUListElement.removeChild(applianceListElement);
                populateTags(this, "green");
            }.bind(applianceArray[i]);
        }
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
    let deletedElements = [];
    for (var k=0; k < tagArray.length;k++)
    {
        if (tagArray[k].color == "red"){
            deletedElements.push(tagArray[k].text.toString());
        }
    }


    for(var i = 0; i < ustensilArray.length;i++)
    {
        if (!deletedElements.includes(ustensilArray[i]))
        {
            let ustencilListElement = document.createElement("li");
            ustencilListElement.innerText = ustensilArray[i];
            ustencilUListElement.appendChild(ustencilListElement);
            ustencilListElement.onmousedown = function (){
                ustensilesInput.value = "";
                ustencilUListElement.removeChild(ustencilListElement);
                populateTags(this, "red");

        }.bind(ustensilArray[i]);
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
    recipeTime.style.fontSize = "1.4rem";
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
        if (insertedValue.length >= 3)
        {
            if (ingredientArray.toString().toLowerCase().includes(insertedValue) ||
                applianceArray.toString().toLowerCase().includes(insertedValue) ||
                ustensilArray.toString().toLowerCase().includes(insertedValue) ||
                nameArray.toString().toLowerCase().includes(insertedValue) ||
                preparationArray.toString().toLowerCase().includes(insertedValue))
                {
                    populateTags(insertedValue , "gray");
                    document.getElementById("search_input").value = "";
            }
            else
            {
                alert("element not included in recipes");
            }
        }
    }
}

/*-------- Get Filter Values -----------*/

function GetIngredientFilterValue(e) {
    let ingredientFilterValue = document.getElementById("ingredientsInput").value;
    if (e.code == "Enter") {
        if (ingredientFilterValue.length >= 3) {
            for (var e = 0; e < ingredientArray.length; e++) {
                if (ingredientArray[e].toLowerCase().includes(ingredientFilterValue.toLowerCase())) {
                    populateTags(ingredientFilterValue, "blue");
                    document.getElementById("ingredientsInput").value = "";
                }
            }
        } else {
            console.log("not enough arguments");
        }
    }
};

function GetApplianceFilterValue(e) {
    let applianceFilterValue = document.getElementById("appliancesInput").value;
    if (e.code == "Enter") {
        if (applianceFilterValue.length >= 3) {
            if (applianceArray.toLowerCase().includes(applianceFilterValue.toLowerCase())) {
                populateTags(applianceFilterValue, "green");
                document.getElementById("appliancesInput").value = "";
            }
        }
    } else {
        console.log("not enough arguments");
    }
};

function GetUstensilFilterValue(e) {
    let ustensilFilterValue = document.getElementById("ustensilesInput").value;
    if (e.code == "Enter") {
        if (ustensilFilterValue.length >= 3) {

            if (ustensilArray.toLowerCase().includes(ustensilFilterValue.toLowerCase())) {
                populateTags(ustensilFilterValue, "red");
                document.getElementById("ustensilesInput").value = "";
            }
        }
    } else {
        console.log("not enough arguments");
    }
}; 
/*-------- Create Key Word Tags --------*/

let keyWords = document.querySelector(".key_words");
let tagArray = [];

function Tag(text, color)
{
	this.text = text;
	this.color = color;
}

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

function populateTags(text,color)
{
	if(findTag(text, color) >= 0)
	{
		return;
	}
		
	let keyWordsDiv = document.createElement("div");
	keyWordsDiv.className =  color+ " tag_container_div";
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
			tagArray.splice(index,1);
			keyWords.removeChild(keyWordsDiv);
            switch(color){
                case "blue":
                    populateIngredientList();
                    break;
                case "green":
                    populateAppliancesList();
                    break;
                case "red":
                    populateUstensilesList();
                    break;
            }
            if (tagArray.length == 0){
                for (var i = 0; i < recipes.length; i++){
                    createRecipeDiv(recipes[i]);
                }
            }
            else
            {
			    removeTagfilterRecipes();
                return;
            }
	};
	filterRecipes();
}

/*------- Research recipe with ---------*/

function insideIngredients(e, index){
    for(var i =0;i < recipes[index].ingredients.length;i++){
        if (recipes[index].ingredients[i].ingredient.toString().toLowerCase().includes(e.toLowerCase())){
            return 1;
        }
    }
    return 0;
};

function recipeSearch(e){
    recipeSection.innerHTML = "";
    for(var i = 0; i < recipes.length;i++){

        if(recipes[i].name.toLowerCase().includes(e.toLowerCase()) ||
         recipes[i].description.toLowerCase().includes(e.toLowerCase()) ||
         recipes[i].appliance.toLowerCase().includes(e.toLowerCase()) || insideIngredients(e, i)){
             if (!selectedElements.includes(recipes[i])){
                selectedElements.push(recipes[i]);}
        }
    }   
}

function filterRecipes() {
    recipeSection.innerHTML = "";
    let newSelectedElements = [];
    if (tagArray.length == 1) {
        selectedElements = [];
        for (let i = 0; i < recipes.length; i++) {
            for (let k = 0; k < tagArray.length; k++) {
                let text = tagArray[k].text.toLowerCase();
                let color = tagArray[k].color;

                switch (color) {
                    case "gray":
                        recipeSearch(text);
                        break;
                    case "blue":
                        for (let i2 = 0; i2 < recipes[i].ingredients.length; i2++) {
                            if (recipes[i].ingredients[i2].ingredient.toLowerCase().includes(text)) {
                                if (!selectedElements.includes(recipes[i])) {
                                    selectedElements.push(recipes[i]);
                                }
                            }
                        }
                        break;
                    case "green":
                        if (recipes[i].appliance.toLowerCase().includes(text)) {
                            if (!selectedElements.includes(recipes[i])) {
                                selectedElements.push(recipes[i]);
                            }
                        }
                        break;
                    case "red":
                        for (i3 = 0; i3 < recipes[i].ustensils.length; i3++) {
                            if (recipes[i].ustensils[i3].toLowerCase().includes(text)) {
                                if (!selectedElements.includes(recipes[i])) {
                                    selectedElements.push(recipes[i]);
                                }
                            }
                        }
                        break;
                }
            }
        }
    } else {
        for (var s = 0; s < selectedElements.length; s++) {
            var k = tagArray.length - 1;
            let text = tagArray[k].text.toLowerCase();
            let color = tagArray[k].color;

            switch (color) {
                case "gray":
                    recipeSearch(text);
                    for (let print = 0; print < selectedElements.length; print++) {
                        createRecipeDiv(selectedElements[print]);
                    }
                    return;
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
            if (newSelectedElements.length != 0) {
                console.log("new selected : " + newSelectedElements);
                selectedElements = newSelectedElements;
            } else {
                alert("Sorry, no match was found, but here are some ideas");
                for (let q = 0; q < recipes.length; q++) {

                    createRecipeDiv(recipes[q]);
                }
                return;
            }
        }
    }
    console.log(selectedElements);
    for (let print = 0; print < selectedElements.length; print++) {
        createRecipeDiv(selectedElements[print]);
    }
};


function removeTagfilterRecipes() {
    selectedElements = [];
    if (tagArray.length == 1) {
        filterRecipes();
        return;
    }
    for (var i = 0; i < recipes.length; i++) {
        let elementFound = 0;
        for (var e = 0; e < tagArray.length; e++) {
            let text = tagArray[e].text.toLowerCase();
            let color = tagArray[e].color;
            switch (color) {
                case "gray":
                    recipeSearch(text);
                    break;
                case "blue":
                    for (var i2 = 0; i2 < recipes[i].ingredients.length; i2++) {
                        if (recipes[i].ingredients[i2].ingredient.toLowerCase().includes(text)) {
                            elementFound += 1;
                        }
                    }
                    break;
                case "green":
                    if (recipes[i].appliance.toLowerCase().includes(text)) {
                        elementFound += 1;
                    }
                    break;
                case "red":
                    for (var i3 = 0; i3 < recipes[i].ustensils.length; i3++) {
                        if (recipes[i].ustensils[i3].ustensil.toLowerCase().includes(text)) {
                            elementFound += 1;
                        }
                    };
                    break;
            }

        }
        console.log("elementFound = " + elementFound + " //tagArray: " + tagArray.length);
        if (elementFound === tagArray.length) {
            if (!selectedElements.includes(recipes[i])) {
                selectedElements.push(recipes[i]);
            }
        }
    }
    for (var a = 0; a < selectedElements.length; a++) {
        createRecipeDiv(recipes[a]);
    };
};

function searchByIngredients(tag,s){
        for (var s2 = 0; s2 < selectedElements[s].ingredients.length;s2++)
        {
            if (selectedElements[s].ingredients[s2].ingredient.toLowerCase().includes(tag))
                return 1;
        }
    return 0;
};

function searchByAppliance(tag,s) {
        if (selectedElements[s].appliance.toLowerCase().includes(tag))
            return 1;
    return 0;
};

function searchByUstensils(tag, s){
        for (var s2 = 0; s2 < selectedElements[s].ustensils.length;s2++)
        {
            if (selectedElements[s].ustensils[s2].toLowerCase().includes(tag))
                return 1;
        }
    return 0;
};

const init = async () => {
    ingredientElements();
    populateIngredientList();
    applianceElements();
    populateAppliancesList();
    ustensilesElements();
    populateUstensilesList();
    nameElement();
    preparationElement();
    for (var i = 0; i < recipes.length; i++)
        createRecipeDiv(recipes[i]);
};

/*---- onload, creation of list elements array ---*/

window.onload = () => {
    init(); 
};