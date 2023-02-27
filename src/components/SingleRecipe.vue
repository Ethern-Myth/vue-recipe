<script>
import { GET_Recipe_BY_id, DELETE_Recipe } from "../controllers/controller";

export default {
    data() {
        return {
            recipe: {},
            id: 0,
        }
    },
    created() {
        this.id = this.$route.params.id;
        GET_Recipe_BY_id(this.id).then((res) => this.recipe = res)
    },
    methods: {
        handleDelete(id) {
            DELETE_Recipe(id)
            setTimeout(() => { window.location.href = "/"; }, 1000);
        }
    }
}

</script>

<template>
    <div class="row">
        <div class="col vstack">
            <h3>{{ recipe.title }}</h3>
            <small>{{ recipe.tags }}</small>
            <small><i>{{ recipe.created_at }}</i></small>
        </div>
        <div class="col hstack gap-2 justify-content-end">
            <router-link :to="`/save/${recipe.id}`" class="btn btn-secondary">Edit</router-link>
            <button type="button" @click="handleDelete(recipe.id)" class="btn btn-danger">Delete</button>
            <router-link to="/" class="btn btn-primary">Back</router-link>
        </div>
        <div class="mt-4">
            <p>{{ recipe.body }}</p>
        </div>
    </div>
</template>

<style scoped></style>