import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "animate.css";
/* Add font awesome library */
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronDown, faCopyright, faBars, faDatabase, faEarthAmericas, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faBtc } from "@fortawesome/free-brands-svg-icons";
library.add(faBtc, faChevronDown, faCopyright, faBars, faDatabase, faEarthAmericas, faFileCode);
dom.watch();

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(store).use(router).mount("#app")
