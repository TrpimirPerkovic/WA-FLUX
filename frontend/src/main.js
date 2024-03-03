import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import NavBar from "./components/NavBar.vue";
import SocialClub from "./components/SocialClub.vue";

const app = createApp(App);
app.component("nav-bar", NavBar);
app.component("social-club", SocialClub);
app.use(router);
app.mount("#app");
