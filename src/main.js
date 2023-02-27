import { createApp } from "vue";
import router from "./router/index";
import "./style.css";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";

createApp(App).use(router).mount("#app");
