<script setup>
import { ref, onMounted } from "vue";
import Recipe from "../components/Recipe.vue";
import { GET_Recipes } from "../controllers/controller";

const recipes = ref([]);
const search = ref("");
onMounted(async () => {
    recipes.value = await GET_Recipes();
})

const filteredList = () => {
    return recipes.value.filter((recipe) => recipe.title.toLowerCase().indexOf(search.value.toLowerCase()) !== -1)
}

</script>

<template>
    <div class="row">
        <div class="col">
            <h3>Recipes</h3>
        </div>
        <div class="col hstack justify-content-end">
            <router-link to="/save/0" class="btn btn-primary">Create</router-link>
        </div>
    </div>
    <div class="form-group mt-4">
        <input type="text" name="search" id="search" class="form-control" v-model="search" placeholder="Search here"
            aria-describedby="helpId">
    </div>

    <!-- Recipe List -->
    <div class="mt-4">
        <Recipe :filterList="filteredList" />
    </div>
</template>

<style scoped></style>