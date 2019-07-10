var healthyMeals = [
  "Oatmeal with Flax Seeds and Banana",
  "Avocado on Whole Grain Toast",
  "Egg White Omelette with Veggies",
  "Fresh Berry Smoothie with Chia Seeds",
  "Peanut Butter and Celery Sticks"
];

var cheatMeals = [
  "Everything Bagel with Cream Cheese",
  "Triple Cheese Quesadilla",
  "Mac and Cheese with Mashed Potatoes",
  "Chicken Cheesesteak Hoagie",
  "Spicy Buffalo Wings"
];

window.onload = function() {
  var eatHealthy = document.querySelector(".healthButton");
  var eatWhatever = document.querySelector(".cheatButton");
  var decidedMeal = document.querySelector(".lunch");

  eatHealthy.addEventListener("click", appendHealthyMeals);
  eatWhatever.addEventListener("click", appendCheatMeals);

  function appendHealthyMeals() {
    var random = Math.floor(Math.random() * healthyMeals.length);
    var healthyMeal = healthyMeals[random];
    decidedMeal.innerText = healthyMeal;
  }

  function appendCheatMeals() {
    var random = Math.floor(Math.random() * cheatMeals.length);
    var cheatMeal = cheatMeals[random];
    decidedMeal.innerText = cheatMeal;
  }
};
