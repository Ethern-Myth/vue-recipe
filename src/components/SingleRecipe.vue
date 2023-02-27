<script>
import { ref, onMounted } from "vue";
import { GET_Recipe_BY_id } from "../controllers/controller";

export default {
    data() {
        return {
            recipe: {},
            id: 0,
        }
    },
    created() {
        this.id = this.$route.params.id;
        console.log(this.id);
        GET_Recipe_BY_id(this.id).then((res) => this.recipe = res)
        console.log(this.recipe);
    }
}

</script>

<template>
    <div class="row">
        <div class="col">
            <h3>{{ recipe.title }}</h3>
            <small>{{ recipe.tags }}</small>
            <small><i>{{ recipe.created_at }}</i></small>
        </div>
        <div class="col hstack gap-2 justify-content-end">
            <router-link to="/save" class="btn btn-secondary">Edit</router-link>
            <button class="btn btn-danger">Delete</button>
        </div>
        <div class="mt-4">
            <p></p>{{ recipe.body }}
        </div>
    </div>
</template>

<style scoped></style>