<script setup>
import { ref, onMounted } from "vue";
import { POST_Recipe } from "../controllers/controller";

const title = ref('');
const tags = ref('');
const body = ref('');
const recipe_id = ref(0);

const saveRecipe = async (e) => {
    e.preventDefault();
    const recipe = {
        title: title.value,
        tags: tags.value,
        body: body.value
    }
    // TODO: Implement UPDATE with POST by ID
    POST_Recipe(recipe);
    setTimeout(() => { window.location.href = "/"; }, 3000);
}
</script>

<template>
    <h3>New Recipe</h3>
    <form v-on:submit="saveRecipe">
        <div class="vstack gap-4">
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" name="title" id="title" class="form-control" placeholder="title"
                            aria-describedby="helpId" v-model="title" required>
                        <small id="helpId" class="text-muted">e.g Chicken with Mushroom</small>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="tags" class="form-label">Tags</label>
                        <input type="text" name="tags" id="tags" class="form-control" placeholder="tags"
                            aria-describedby="helpId" v-model="tags">
                        <small id="helpId" class="text-muted">e.g Chicken, Mushroom, Cream</small>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="instructions" class="form-label">Instructions</label>
                <textarea name="instructions" id="instructions" cols="30" rows="15" class="form-control" v-model="body"
                    required></textarea>
            </div>
            <div class="hstack gap-2 justify-content-end">
                <button type="submit" class="btn btn-primary">Save</button>
                <router-link to="/" class="btn btn-danger">Cancel</router-link>
            </div>
        </div>
    </form>
</template>

<style scoped></style>