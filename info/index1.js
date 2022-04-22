/*--------- Create Filter List Element arrays for Ingredients,Appliances & Ustensils ----------*/

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
/*
let newIngredientForm = document.createElement("form");

let newIngredientInput = document.createElement("input");
newIngredientInput.className = "blue";
newIngredientInput.name = "ingredients";
newIngredientInput.id = "ingredients";
newIngredientForm.appendChild(newIngredientInput);
*/
let ingredientInput = document.getElementById("ingredientsInput");
let displayIngredientDiv = filterIngredientDiv.children[3];

filterIngredientDiv.onmouseover = function()
{
    displayIngredientDiv.style.display = "grid";
    filterIngredientDiv.children[2].className="fa-solid fa-angle-up icon";
    ingredientInput.placeholder="Recherchez une recette";
    displayIngredientDiv.style.cursor = "pointer";
    populateIngredientList();
};

filterIngredientDiv.onmouseout = function()
{
    displayIngredientDiv.style.display = "";
    filterIngredientDiv.children[2].className="fa-solid fa-angle-down icon";
    ingredientInput.placeholder="Ingredients";
};


/*older version
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
};*/


/*---- create Appliance Input ---*/
/*
let newApplianceForm = document.createElement("form");
//newApplianceForm.setAttribute("autocomplete", "on");

let newApplianceInput = document.createElement("input");
newApplianceInput.className = "green";
newApplianceInput.name = "appliances";
newApplianceInput.id = "appliances";
newApplianceForm.appendChild(newIngredientInput);
*/
let applianceInput = document.getElementById("appliancesInput");

filterApplianceDiv.onmouseover = function () {
    const displayApplianceDiv = filterApplianceDiv.children[3];
    displayApplianceDiv.style.display = "grid";
    filterApplianceDiv.children[2].className = "fa-solid fa-angle-up icon";
    applianceInput.placeholder = "Recherchez une recette";
    displayApplianceDiv.style.cursor = "pointer";
    populateAppliancesList();
};

filterApplianceDiv.onmouseout = function() {
    const displayApplianceDiv = filterApplianceDiv.children[3];
    displayApplianceDiv.style.display = "";
    filterApplianceDiv.children[2].className = "fa-solid fa-angle-down icon";
    applianceInput.placeholder = "Appareils";

};

/*---- Create Ustensil Input ---*/
/*
let newUstensilForm = document.createElement("form");

let newUstensilInput = document.createElement("input");
newUstensilInput.className = "red";
newUstensilInput.name = "ingredients";
newUstensilInput.id = "ingredients";
newUstensilForm.appendChild(newUstensilInput);
*/
let ustensilesInput = document.getElementById("ustensilesInput");
const displayUstensilDiv = filterUstensilDiv.children[3];

filterUstensilDiv.onmouseover = function(){
    displayUstensilDiv.style.display = "grid";
    document.forms["filterForm"].ustensilesFilter.focus();
    filterUstensilDiv.children[2].className="fa-solid fa-angle-up icon";
    ustensilesInput.placeholder = "Recherchez une recette";
    displayUstensilDiv.style.cursor = "pointer";
    populateUstensilesList();
};

filterUstensilDiv.onmouseout = function(){
    displayUstensilDiv.style.display = "";
    filterUstensilDiv.children[2].className="fa-solid fa-angle-down icon";
    ustensilesInput.placeholder = "Ustensiles";       
};

function refreshIngredientList(){
    const displayIngredientDiv = filterIngredientDiv.children[3];
    displayIngredientDiv.innerHTML = "";
    populateIngredientList();
}

/*------ Populate Ingredients Filter Div list ----*/

function populateIngredientList() {
    displayIngredientDiv.innerHTML = "";
    displayIngredientDiv.className = "filter_options_list";
    let ingredientUListElement = document.createElement("ul");
    ingredientUListElement.className = "list_display";
    displayIngredientDiv.appendChild(ingredientUListElement);

    for (var i = 0; i < ingredientArray.length; i++) {
        
        let ingredientListElement = document.createElement("li");
        ingredientListElement.innerText = ingredientArray[i];
        ingredientUListElement.appendChild(ingredientListElement);
        ingredientListElement.onmousedown= function(){
            ingredientInput.value = this;
//            populateTags(this, "blue");
//            recipeSearch(this);
        }.bind(ingredientArray[i]);
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
        applianceListElement.onmouseover= function (){
            applianceInput.value = this;
//            populateTags(this, "green");
//            recipeSearch(this);
        }.bind(applianceArray[i]);
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
        let ustencilListElement = document.createElement("li");
        ustencilListElement.innerText = ustensilArray[i];
        ustencilUListElement.appendChild(ustencilListElement);
        ustencilListElement.onmousedown = function (){
            ustensilesInput.value = this;
//            populateTags(this, "red");
//            recipeSearch(this);
        }.bind(ustensilArray[i]);
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
        if (insertedValue.length >= 3) {
            if (ingredientArray.toString().toLowerCase().includes(insertedValue) ||
                applianceArray.toString().toLowerCase().includes(insertedValue) ||
                ustensilArray.toString().toLowerCase().includes(insertedValue) ||
                nameArray.toString().toLowerCase().includes(insertedValue) ||
                preparationArray.toString().toLowerCase().includes(insertedValue)) {
                populateTags(insertedValue , "gray");
                document.getElementById("search_input").value = "";
                recipeSearch(insertedValue);
                console.log(selectedElements);
                
            }else{
                alert("element not included in recipes");
            }
        }
    }
}

/*-------- Get Filter Values -----------*/

let ingredientFIlteredArray = [];

function GetIngredientFilterValue(e) {
    console.log("SE length: " + selectedElements.length);
    let ingredientFilterValue = document.getElementById("ingredientsInput").value;
    if (e.code == "Enter") {
        if (selectedElements.length == 0) {
            if (ingredientFilterValue.length >= 3) {

                if (ingredientArray.toString().toLowerCase().includes(ingredientFilterValue.toLowerCase())) {
                    populateTags(ingredientFilterValue,"blue");
                    document.getElementById("ingredientsInput").value = "";
                    ingredientArray.splice(ingredientArray.indexOf(ingredientFilterValue), 1);
                    refreshIngredientList();
                    recipeSearch(ingredientFilterValue);
                }
                else {
                    alert("Ingredient not found");
                }
            } else {
                console.log("not enough arguments");
            }
        } else {
            if (ingredientFilterValue.length >= 3) {
                if (ingredientArray.toString().toLowerCase().includes(ingredientFilterValue.toLowerCase())) {
                    recipeSection.innerHTML = "";
                    populateTags(ingredientFilterValue, "blue");
                    document.getElementById("ingredientsInput").value = "";
                    for (var i = 0; i < selectedElements.length; i++) {
                        for (var k = 0; k < selectedElements[i].ingredients.length; k++) {

                            if (selectedElements[i].ingredients[k].ingredient.toLowerCase().includes(ingredientFilterValue.toLowerCase())) {
                                console.log("selectedElement[i]: " + selectedElements[i].ingredients[k].ingredient.toLowerCase() + " ,ingredient value: " + ingredientFilterValue);
                               
                                createRecipeDiv(selectedElements[i]);
                                ingredientFIlteredArray.push(selectedElements[i]);
                            }
                        }
                    }
                }
            } else {
                console.log("not enough arguments");
            }
            if (ingredientFIlteredArray.length > 0) {
                console.log(selectedElements);
                selectedElements = ingredientFIlteredArray;
                console.log(selectedElements);
            } else {
                console.log("no match found");
            }
        }
    }
}

let applianceFilteredArray = [];

function GetApplianceFilterValue(e) {
    let applianceFilterValue = document.getElementById("appliancesInput").value;
    if (e.code == "Enter" ) {
        if (selectedElements.length == 0) {

            if (applianceFilterValue.length >= 3) {
                if (applianceArray.toString().toLowerCase().includes(applianceFilterValue.toLowerCase())) {

                    populateTags(applianceFilterValue, "green");
                    document.getElementById("appliancesInput").value = "";
                    recipeSearch(applianceFilterValue);
                } else {
                    alert("appliance not found");
                }
            } else {
                console.log("not enough arguments");
            }

        } else {
            if (applianceFilterValue.length >= 3) {
                if (applianceArray.toString().toLowerCase().includes(applianceFilterValue.toLowerCase())) {
                    recipeSection.innerHTML = "";
                    populateTags(applianceFilterValue, "green");
                    document.getElementById("appliancesInput").value = "";
                    for (var i = 0; i < selectedElements.length; i++) {

                        if (selectedElements[i].appliance.toLowerCase().includes(applianceFilterValue.toLowerCase())) {
                            console.log("selectedElement[i]: " + selectedElements[i].appliance.toLowerCase() + " ,appliance value: " + applianceFilterValue);
                            
                            createRecipeDiv(selectedElements[i]);
                            applianceFilteredArray.push(selectedElements[i]);
                        }
                    }
                }
            } else {
                console.log("selecte Elements empty, not enough arguments in appliances");
            }
            if (applianceFilteredArray.length > 0) {
                console.log(selectedElements);
                selectedElements = applianceFilteredArray;
                console.log(selectedElements);
            } else {
                console.log("no match found");
            }
        }
    }
}

let ustensilesFilteredArray = [];

function GetUstensilFilterValue(e) {
    let ustensilFilterValue = document.getElementById("ustensilesInput").value;
    if (e.code == "Enter") {
        if (selectedElements.length == 0) {
            if (ustensilFilterValue.length >= 3) {

                if (ustensilArray.toString().toLowerCase().includes(ustensilFilterValue.toLowerCase())) {
                    populateTags(ustensilFilterValue, "red");
                    document.getElementById("ustensilesInput").value = "";
                    recipeSearch(ustensilFilterValue);
                } else {
                    alert("Ustensil not found");
                }
            }
        } else {
            if (ustensilFilterValue.length >= 3) {
                if (ustensilArray.toString().toLowerCase().includes(ustensilFilterValue.toLowerCase())) {
                    recipeSection.innerHTML = "";
                    populateTags(ustensilFilterValue,"red");
                    for (var i = 0; i < selectedElements.length; i++) {
                        document.getElementById("ustensilesInput").value = "";
                        for (var k = 0; k < selectedElements[i].ustensils.length; k++) {
                            console.log("selectedElement[i]: " + selectedElements[i].ustensils[k].toLowerCase() + " ,ustensil value: " + ustensilFilterValue);
                            if (selectedElements[i].ustensils[k].toLowerCase().includes(ustensilFilterValue.toLowerCase())) {
                                console.log("selectedElement[i]: " + selectedElements[i].ustensils[k].toLowerCase() + " ,ustensil value: " + ustensilFilterValue);
                                createRecipeDiv(selectedElements[i]);
                                ustensilesFilteredArray.push(selectedElements[i]);
                            }
                        }
                    }
                }
            }
            if (ustensilesFilteredArray.length > 0) {
                console.log(selectedElements);
                selectedElements = ustensilesFilteredArray;
                console.log(selectedElements);
            } else {
                console.log("no match found");
            }
        }
    }
}
/*-------- Create Key Word Tags --------*/

let keyWords = document.querySelector(".key_words");
let tagArray = [];

function populateTags(elem,color) {

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
        let index = tagArray.indexOf(elem);
        tagArray.splice(index,1);
        keyWords.removeChild(keyWordsDiv);
        console.log("clicked " + tagArray);
        filterRecipes(color);
    };
    console.log(tagArray);
}

/*------- Research recipe with ---------*/

function insideIngredients(e, index){
    for(var i =0;i < recipes[index].ingredients.length;i++){
        if (recipes[index].ingredients[i].ingredient.toString().toLowerCase().includes(e.toLowerCase())){
            return 1;
        }
    }
    return 0;
}

function filterRecipes(color){
    let e = 0;
    console.log(color);
    if (color == "blue")
        e = "ingredients";
    if (color == "green")
        e = "appliance";
    if (color == "red")
        e = "ustensils";
        console.log(e);
    for (var i = 0; i < tagArray.length;i++)
    {
        for(var i2 = 0; i2 < recipes.length; i2++)
        {
            console.log(recipes[i2].e);
            if(recipes[i2].e.toString().toLowerCase().includes(tagArray[i].toLowerCase()))
                createRecipeDiv(recipes[k]);
        }
    }

}


function recipeSearch(e){
    recipeSection.innerHTML = "";
    selectedElements = [];
    for(var i = 0; i < recipes.length;i++){
        //console.log(recipes[i].name);
        if(recipes[i].name.toLowerCase().includes(e.toLowerCase()) ||
         recipes[i].description.toLowerCase().includes(e.toLowerCase()) ||
         recipes[i].appliance.toLowerCase().includes(e.toLowerCase()) || insideIngredients(e, i)){
            createRecipeDiv(recipes[i]);
            selectedElements.push(recipes[i]);
        }
    }   
}

const init = async () => {
    ingredientElements();
    applianceElements();
    ustensilesElements();
    nameElement();
    preparationElement();
    for (var i = 0; i < recipes.length; i++)
        createRecipeDiv(recipes[i]);
};

/*---- onload, creation of list elements array ---*/

window.onload = () => {
    init(); 
};



/* OLD CODE */

/*
function filterRecipes()
{	
    console.log(selectedElements);
    if (selectedElements.length == 0) {
        console.log("selected elements length = " + selectedElements.length);
        recipeSection.innerHTML = "";
        for (let i = 0; i < recipes.length; i++) {
            let showRecipe = false;
            for (let j = 0; j < tagArray.length; j++) {
                let text = tagArray[j].text.toLowerCase();
                let color = tagArray[j].color;

                switch (color) {
                    case "gray":
                        {
                            recipeSearch(text);
                            break;
                        }
                    case "blue":
                        {
                            for (let k = 0; k < recipes[i].ingredients.length; k++) {
                                if (recipes[i].ingredients[k].ingredient.toLowerCase().includes(text))
                                    showRecipe = true;
                                //                            createRecipeDiv(recipes[i]);
                            }
                            console.log("blue case in switch in filterRecipes: " + color + recipes[i]);
                            break;
                        }
                    case "green":
                        {
                            if (recipes[i].appliance.toLowerCase().includes(text)) {
                                showRecipe = true;
                                //                        createRecipeDiv(recipes[i]);
                                console.log("green case in switch in filterRecipes: " + color + recipes[i]);
                            }
                            break;
                        }
                    case "red":
                        {
                            for (let u = 0; u < recipes[i].ustensils.length; u++) {
                                if (recipes[i].ustensils[u].toLowerCase().includes(text)) {
                                    showRecipe = true;
                                    //                            createRecipeDiv(recipes[i]);
                                    console.log("red case in switch in filterRecipes: " + color + recipes[i]);
                                }
                            }
                            break;
                        }
                }
                
            }
            if (showRecipe) {
                createRecipeDiv(recipes[i]);
                selectedElements.push(recipes[i]);
            }
        }
    }
    else {
        recipeSection.innerHTML = "";
        console.log("selected elements length = " + selectedElements.length);
        for (let i = 0; i < selectedElements.length; i++) {
            //let showRecipe = true;
            for (let j = 0; j < tagArray.length; j++) {
                let text = tagArray[j].text.toLowerCase();
                let color = tagArray[j].color;

                switch (color) {
                    case "gray":
                        {
                            recipeSearch(text);
                            break;
                        }
                    case "blue":
                        {
                            for(let k = 0; k < selectedElements[i].ingredients.length; k++)
                            {
                                if (!selectedElements[i].ingredients[k].ingredient.toLowerCase().includes(text)) {
                                    selectedElements.splice(i, 1);
                                }
                            }
                            console.log("blue case in switch in filterRecipes: " + color + selectedElements[i]);
                            break;
                        }
                    case "green":
                        {
                            if (!selectedElements[i].appliance.toLowerCase().includes(text)) {
                                selectedElements.splice(i, 1);
                                console.log("green case in switch in filterRecipes: " + color + selectedElements[i]);
                            }
                            break;
                        }
                    case "red":
                        {
                            for (let u = 0; u < selectedElements[i].ustensils.length; u++) {
                                if (!selectedElements[i].ustensils[u].toLowerCase().includes(text)) {
                                    console.log("red case in switch in filterRecipes: " + color + selectedElements[i]);
                                }
                            }
                            break;
                        }
                }
            }
        }
        for (var j = 0; j < selectedElements.length; j++) {
            createRecipeDiv(selectedElements[j]);
        }
    }

}
*/

/*
function GetIngredientFilterValue(e) {
    console.log("SE length: " + selectedElements.length);
    let ingredientFilteredArray = [];

    let ingredientFilterValue = document.getElementById("ingredientsInput").value;
    if (e.code == "Enter") {
        if (tagArray.length == 1)                //if (selectedElements.length == 0)
        {
            if (ingredientFilterValue.length >= 3)
            {
                for (var e = 0; e < ingredientArray.length; e++){
                    if (ingredientArray[e].toLowerCase().includes(ingredientFilterValue.toLowerCase()))
                    {
                        populateTags(ingredientFilterValue,"blue");
                        document.getElementById("ingredientsInput").value = "";
                    }
                }
            }
            else
            {
                console.log("not enough arguments");
            }
        }
        else
        {
            if (ingredientFilterValue.length >= 3)
            {
                if (ingredientArray.toLowerCase().includes(ingredientFilterValue.toLowerCase()))
                {
                    let ingredientFilteredArray = [];
                    populateTags(ingredientFilterValue, "blue");
                    document.getElementById("ingredientsInput").value = "";
                    for (var i = 0; i < selectedElements.length; i++)
                    {
                        for (var k = 0; k < selectedElements[i].ingredients.length; k++)
                        {

                            if (selectedElements[i].ingredients[k].ingredient.toLowerCase().includes(ingredientFilterValue.toLowerCase()))
                            {
                                console.log("selectedElement[i]: " + selectedElements[i].ingredients[k].ingredient.toLowerCase() + " ,ingredient value: " + ingredientFilterValue);
                                ingredientFilteredArray.push(selectedElements[i]);
                                console.log(ingredientFilteredArray);
                            }
                        }
                    }
                }
            }
            else
            {
                console.log("not enough arguments");
            }
            if (ingredientFilteredArray.length > 0) {

                selectedElements = ingredientFilteredArray;
 
 //               recipeSection.innerHTML = "";
                for (var v = 0; v <selectedElements.length;v++)
                    createRecipeDiv(selectedElements[v]);
            } else {
                console.log("no match found");
            }
            
        }
    }
}

let applianceFilteredArray = [];

function GetApplianceFilterValue(e) {
    let applianceFilterValue = document.getElementById("appliancesInput").value;
    if (e.code == "Enter" ) {
        if (selectedElements.length == 0) {

            if (applianceFilterValue.length >= 3) {
                if (applianceArray.toString().toLowerCase().includes(applianceFilterValue.toLowerCase()))
                {
                    populateTags(applianceFilterValue, "green");
                    document.getElementById("appliancesInput").value = "";
                    recipeSearch(applianceFilterValue);
                } else {
                    alert("appliance not found");
                }
            } else {
                console.log("not enough arguments");
            }

        } else {
            if (applianceFilterValue.length >= 3) {
                if (applianceArray.toString().toLowerCase().includes(applianceFilterValue.toLowerCase())) {
                    recipeSection.innerHTML = "";
                    populateTags(applianceFilterValue, "green");
                    document.getElementById("appliancesInput").value = "";
                    for (var i = 0; i < selectedElements.length; i++) {

                        if (selectedElements[i].appliance.toLowerCase().includes(applianceFilterValue.toLowerCase())) {
                            console.log("selectedElement[i]: " + selectedElements[i].appliance.toLowerCase() + " ,appliance value: " + applianceFilterValue);
                            
                            createRecipeDiv(selectedElements[i]);
                            applianceFilteredArray.push(selectedElements[i]);
                        }
                    }
                }
            } else {
                console.log("selecte Elements empty, not enough arguments in appliances");
            }
            if (applianceFilteredArray.length > 0) {
                selectedElements = applianceFilteredArray;
            } else {
                console.log("no match found");
            }
        }
    }
}

let ustensilesFilteredArray = [];

function GetUstensilFilterValue(e) {
    let ustensilFilterValue = document.getElementById("ustensilesInput").value;
    if (e.code == "Enter") {
        if (selectedElements.length == 0) {
            if (ustensilFilterValue.length >= 3) {

                if (ustensilArray.toString().toLowerCase().includes(ustensilFilterValue.toLowerCase())) {
                    populateTags(ustensilFilterValue, "red");
                    document.getElementById("ustensilesInput").value = "";
                    recipeSearch(ustensilFilterValue);
                } else {
                    alert("Ustensil not found");
                }
            }
        } else {
            if (ustensilFilterValue.length >= 3) {
                if (ustensilArray.toString().toLowerCase().includes(ustensilFilterValue.toLowerCase())) {
                    recipeSection.innerHTML = "";
                    populateTags(ustensilFilterValue,"red");
                    for (var i = 0; i < selectedElements.length; i++) {
                        document.getElementById("ustensilesInput").value = "";
                        for (var k = 0; k < selectedElements[i].ustensils.length; k++) {
                            console.log("selectedElement[i]: " + selectedElements[i].ustensils[k].toLowerCase() + " ,ustensil value: " + ustensilFilterValue);
                            if (selectedElements[i].ustensils[k].toLowerCase().includes(ustensilFilterValue.toLowerCase())) {
                                console.log("selectedElement[i]: " + selectedElements[i].ustensils[k].toLowerCase() + " ,ustensil value: " + ustensilFilterValue);
                                createRecipeDiv(selectedElements[i]);
                                ustensilesFilteredArray.push(selectedElements[i]);
                            }
                        }
                    }
                }
            }
            if (ustensilesFilteredArray.length > 0) {
                console.log(selectedElements);
                selectedElements = ustensilesFilteredArray;
                console.log(selectedElements);
            } else {
                console.log("no match found");
            }
        }
    }
}*/

/*

function filterRecipes() {
    recipeSection.innerHTML = "";
    if (selectedElements.length == 0) {
        for (let i = 0; i < recipes.length; i++) {
            for (let k = 0; k < tagArray.length; k++) {
                let text = tagArray[k].text.toLowerCase();
                let color = tagArray[k].color;

                switch (color) {
                    case "gray":
                        if (recipes[i].name.toLowerCase().includes(text) ||
                            recipes[i].description.toLowerCase().includes(text) ||
                            recipes[i].appliance.toLowerCase().includes(text) || insideIngredients(text, i)) {
                            selectedElements.push(recipes[i]);
                        }
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
 //                           console.log(recipes[i].appliance);
                        }
                        break;
                    case "red":
                        for (i3 = 0; i3 < recipes[i].ustensils.length; i3++) {
                            if (recipes[i].ustensils[i3].toLowerCase().includes(text)) {
                                if (!selectedElements.includes(recipes[i])) {
                                    selectedElements.push(recipes[i]);
                                }
 //                               console.log(recipes[i].ustensils[i3]);
                            }
                        }
                        break;
                }
            }
        }
    }
    else {
        for (let k = 0; k < tagArray.length; k++) {
            let text = tagArray[k].text.toLowerCase();
            let color = tagArray[k].color;
            for (let s = 0; s < selectedElements.length; s++) {
 //               console.log(text + " " + color);
                switch (color) {
                    case "gray":
                        // recipeSearch(text);
                        break;
                    case "blue":
                        for (let i2 = 0; i2 < selectedElements[s].ingredients.length; i2++) {
                            if (selectedElements[s].ingredients[i2].ingredient.toLowerCase().includes(text)) {
//                                console.log(selectedElements[s] + "text :" + text);
                            } else {
                                selectedElements.splice(s, 1);
 //                               console.log(selectedElements);
                                break;
                            }
                        }
                        break;
                    case "green":
                        if (!selectedElements[s].appliance.toLowerCase().includes(text)) {
                            selectedElements.splice(s, 1);
                        }
                        break;
                    case "red":
                        for (i3 = 0; i3 < recipes[i].ustensils.length; i3++) {
                            if (!selectedElements[s].ustensils[i3].toLowerCase().includes(text)) {
                                selectedElements.splice(s, 1);
                            }
                        }
                }
                break;
            }
        }
    }
    for (let print = 0; print < selectedElements.length; print++){
        createRecipeDiv(selectedElements[print]);
    }
};
*/