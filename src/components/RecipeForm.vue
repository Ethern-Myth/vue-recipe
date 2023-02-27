<script>
import { GET_Recipe_BY_id, POST_Recipe, PUT_Recipe } from "../controllers/controller";

export default {
    data() {
        return {
            title: '',
            tags: '',
            body: '',
            recipe_id: 0,
        }
    },
    created() {
        this.recipe_id = this.$route.params.id;
        if (this.recipe_id > 0) {
            GET_Recipe_BY_id(this.recipe_id).then((res) => {
                this.title = res.title;
                this.tags = res.tags;
                this.body = res.body;
            })
        }
    },
    methods: {
        async saveRecipe(e) {
            e.preventDefault();
            const recipe = {
                title: this.title,
                tags: this.tags,
                body: this.body
            }
            if (this.recipe_id > 0) {
                PUT_Recipe(this.recipe_id, recipe);
                setTimeout(() => { window.location.href = `/recipe/${this.recipe_id}`; }, 1500);
            } else {
                POST_Recipe(recipe);
                setTimeout(() => { window.location.href = "/"; }, 1500);
            }
        }
    }
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