let ingredientArray = [];

const   ingredientTag = () =>{
    const a = recipes.ingredients;
    for (i = 0; i < a.length; i++){
        ingredientArray[i] = a.ingredient;
        console.log(ingredientArray[i]);
    }
}

const init = async () => {
    console.log(recipes);
};

window.onload = () => {
    init();
    ingredientTag();
}