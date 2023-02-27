<script>
export default {
    name: 'Recipe',
    props: {
        filterList: Function
    }
}
</script>

<template>
    <router-link v-for="recipe in filterList()" :to="`/recipe/${recipe.id}`" class="recipe_card card mb-4" :key="recipe.id">
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <h4 class="card-title">{{ recipe.title }}</h4>
                </div>
            </div>
            <p class="card-text">{{ recipe.tags }}</p>
            <div class="card-footer text-muted"><i>Created at {{ recipe.created_at }} </i></div>
        </div>
    </router-link>
</template>

<style scoped>
.recipe_card {
    text-decoration: none;
    color: black;
    transition: 0.3s ease-in-out;
}

.recipe_card:hover {
    transform: scale(1.05);
    box-shadow: 1px 1px 0 0 lightgray;
}
</style>