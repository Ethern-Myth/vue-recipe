import { createRouter, createWebHistory } from "vue-router";
import Recipes from "../components/Recipes.vue";
import RecipeForm from "../components/RecipeForm.vue";
import SingleRecipe from "../components/SingleRecipe.vue";

const routes = [
	{ path: "/", name: "Home", component: Recipes },
	{ path: "/save/:id", name: "Save", component: RecipeForm },
	{ path: "/recipe/:id", name: "SingleRecipe", component: SingleRecipe },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
