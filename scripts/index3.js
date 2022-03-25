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
//    console.log(ustensilArray);
}

/*---- display filter tags ----*/

let filterIngredientDiv = document.getElementById("ingredients");
let filterIngredientSpan = filterIngredientDiv.children[0];

let filterApplianceDiv = document.getElementById("appliances");

let filterUstensilDiv = document.getElementById("ustensiles");


/*---- create Ingredient Input ---*/

let newIngredientForm = document.createElement("form");

let newIngredientInput = document.createElement("input");
newIngredientInput.className = "bg-primary";
newIngredientInput.name = "ingredients";
newIngredientInput.id = "ingredients";
newIngredientForm.appendChild(newIngredientInput);

function deactivateIngredientsFilter()
{
	const displayIngredientDiv = filterIngredientDiv.children[2];
	displayIngredientDiv.style.display = "";
};

filterIngredientDiv.onclick = function()
{
	document.forms["filterForm"].ingredientsFilter.focus();
	populateIngredientList();
	
	//change(filterIngredientDiv,newIngredientForm);
};

/*---- create Appliance Input ---*/

let newApplianceForm = document.createElement("form");
//newApplianceForm.setAttribute("autocomplete", "on");

let newApplianceInput = document.createElement("input");
newApplianceInput.className = "bg-success";
newApplianceInput.name = "appliances";
newApplianceInput.id = "appliances";
newApplianceForm.appendChild(newIngredientInput);

function deactivateApplianceFilter()
{
    const displayApplianceDiv = filterApplianceDiv.children[2];
    displayApplianceDiv.style.display = "";
}

filterApplianceDiv.onclick = function()
{
    document.forms["filterForm"].appliancesFilter.focus();
    populateAppliancesList();
};


/*---- create Ustensil Input ---*/

let newUstensilForm = document.createElement("form");
//newUstensilForm.setAttribute("autocomplete", "on");

let newUstensilInput = document.createElement("input");
newUstensilInput.className = "bg-danger";
newUstensilInput.name = "ingredients";
newUstensilInput.id = "ingredients";
newUstensilForm.appendChild(newUstensilInput);

function deactivateUstensileFilter(){
    const displayUstensilesDiv = filterUstensilDiv.childer[2];
    displayUstensilesDiv.style.display = "";
}

filterUstensilDiv.onclick = function(){
    document.forms["filterForm"].ustensilesFilter.focus();
    populateUstensilesList();
}

function populateIngredientList(){
	const displayIngredientDiv = filterIngredientDiv.children[2];
	displayIngredientDiv.innerHTML = "";
	displayIngredientDiv.style.display = "flex";
	for(var i = 0; i < ingredientArray.length;i++)
	{
		let ingredientListElement = document.createElement("p");
		ingredientListElement.onclick = function()
		{
			console.log(applianceArray[i]);
		};
		ingredientListElement.innerText = ingredientArray[i];
		displayIngredientDiv.appendChild(ingredientListElement);
	}
}

function populateAppliancesList(){
    let displayApplianceDiv = document.createElement("div");
    displayApplianceDiv.className = "container bg-success flex_box";
    displayApplianceDiv.style.height ="250px";
    filterApplianceDiv.appendChild(displayApplianceDiv);
    for(var i = 0; i < applianceArray.length;i++)
    {
        let applianceListElement = document.createElement("p");
        applianceListElement.innerText = applianceArray[i];
        displayApplianceDiv.appendChild(applianceListElement);
    }

}

function populateUstensilesList(){
    let displayUstensilDiv = document.createElement("div");
    displayUstensilDiv.className = "container bg-danger flex_box";
    displayUstensilDiv.style.height ="250px";
    filterUstensilDiv.appendChild(displayUstensilDiv);
    for(var i = 0; i < ustensilArray.length;i++)
    {
        let ustencilListElement = document.createElement("p");
        ustencilListElement.innerText = ustensilArray[i];
        displayUstensilDiv.appendChild(ustencilListElement);
    }
}

const init = async () => {
    ingredientTag();
    applianceTag();
    ustensilesTag();
    console.log(recipes);
    createRecipeDiv(recipes[1]);
};

//

window.onload = () => {
    init(); 
};

let recipeSection = document.querySelector(".recipes");
recipeSection.className = "flex_box";

function createRecipeDiv(e){
    let recipeContainerDiv = document.createElement("article");
    recipeContainerDiv.className = "flex_box";
    recipeSection.appendChild(recipeContainerDiv);

    let recipeName = document.createElement("p");
    recipeName.innerHTML = e.name;
    recipeName.appendChild(recipeContainerDiv);

    let recipeIngredients = document.createElement("p");
    recipeIngredients.innerHTML = e.recipeIngredients;
    recipeIngredients.appendChild(recipeContainerDiv);

    let recipeTime = document.createElement("span");
    recipeTime.innerHTML = e.time;
    recipeTime.appendChild(recipeContainerDiv);

    let recipePreparationDiv = document.createElement("div");
    recipePreparationDiv.appendChild(recipeContainerDiv);

    let recipePreparation = document.createElement("p");
    recipePreparation.innerHTML = e.descripion;
    recipePreparationDiv.appendChild(recipePreparation);
    console.log("end of create recipe");
    return (recipeContainerDiv);
}

let selectedElements = [];

let insertedValue = document.getElementById("search_input");
insertedValue.addEventListener("onkeypress", function(event){
    var newText = insertedValue.value;
    if (event.keyCode == 13){
        selectedElements.push(newText);
    }
});

let keyWords = document.getElementsByClassName("key_words");
for (var i = 0; i < selectedElements.length;i++){
    let keyWordsDiv = document.createElement("div");
    keyWordsDiv.className("container");
    keyWords.innerText = selectedElements[i];
} 

console.log(selectedElements);