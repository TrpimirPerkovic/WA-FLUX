<template>
  <div class="first">
    <FormCard>
      <div class="blob">
        <h2 id="who-am-i-text">Who are we?</h2>
        <div class="moreinfo" v-show="visible">
          <button @click="toggleVisible">Learn more</button>
          <ul class="wholi" ref="contentSection">
            <li id="typ">Students and eccentrics</li>
            <li id="typ1">Knowledge seekers</li>
            <li id="typ2">Loveable bunch of people</li>
            <li id="typ3">G00d peeps</li>
          </ul>
        </div>
        <button v-show="!visible" @click="toggleVisible">Learn more</button>
      </div>
    </FormCard>
  </div>
  <div class="second">
    <FormCard>
      <div class="explain">
        <h1>Let's talk about us</h1>
        <ul>
          <li>It's actually just one person</li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            fugiat. Dicta beatae explicabo iste aspernatur eligendi, aliquid
            totam vitae, tempora sint ullam corrupti nostrum numquam corporis
            non laborum obcaecati quo!
          </li>
          <li>I don't care about money or fame</li>
          <li>
            "Daleko putujem, vjetar nudi neke rime, kupujem, pristaju uz tvoje
            ime, dva-tri stiha na dar."
          </li>
        </ul>
      </div>
    </FormCard>
  </div>
  <div class="third">
    <FormCard>
      <h1>Our goals?</h1>
      <ul class="list" ref="contentSection">
        <li id="typ">To let people learn for free</li>
        <li id="typ1">To make a world better place</li>
        <li id="typ2">To rediscover ourselves</li>
        <li id="typ3">To become intellectual beings</li>
      </ul>
    </FormCard>
  </div>
  <social-club></social-club>
</template>

<script>
import FormCard from "../components/FormCard.vue";

export default {
  name: "AboutUs",
  components: {
    FormCard,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style scoped>
/* First */
@import url("https://fonts.googleapis.com/css2?family=Dhurjati&family=Ephesis&family=Smooch+Sans:wght@200;300;500&family=Space+Mono&display=swap");
.form-card {
  background-color: #453b32;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px 50px;
  margin-top: 50px;
}
.form-card:hover {
  filter: drop-shadow(0 0 0.2em #5902aaaa) !important;
  transition: all 0.5s ease-in-out;
}

#who-am-i-text {
  text-align: center;
  font-family: Dhurjati;
  color: white;
}

#who-am-i-text:hover {
  filter: drop-shadow(0 0 0.2em #db8300aa);
  transition: all 0.5s ease-in-out;
}
button {
  border-radius: 5px;
  padding: 5px;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  font-family: monospace;
  margin-left: 43.5%;
}
.wholi {
  background-color: whitesmoke;
  color: black;
  font-family: "Dhurjati", sans-serif;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInAnimation 2s ease-in-out forwards;
  margin-top: 10px;
  font-size: 1.5rem;
  border-radius: 20px;
}

.wholi:hover {
  filter: drop-shadow(0 0 0.2em #30606eaa);
  transition: all 0.5s ease-in-out;
}

.wholi li {
  list-style-type: none;
  margin: 5px 0;
  text-align: center;
}

.wholi li:hover {
  filter: drop-shadow(0 0 0.2em #000000aa);
  transition: all 0.3s ease-in;
}
@keyframes fadeInAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/* -------------------------------------------------------------------------- */
.second .form-card {
  background-color: rgb(225, 225, 225) !important;
}
.second .form-card:hover {
  filter: drop-shadow(0 0 0.2em #00ff04aa) !important;
  transition: all 0.5s ease-in-out;
}
.explain h1 {
  font-family: Dhurjati;
  text-align: center;
  color: Black;
}

.explain h1:hover {
  filter: drop-shadow(0 0 0.2em #db8300aa);
  transition: all 0.5s ease-in-out;
}
.explain ul {
  text-align: center;
  list-style: none;
  display: block;
  font-family: "Courier New", Courier, monospace;
}
.explain li {
  padding: 5px;
}

/* ------------------------------------------------------------- */

.third .form-card {
  background-color: rgb(33, 45, 46) !important;
}
.third .form-card:hover {
  filter: drop-shadow(0 0 0.2em #00ff04aa) !important;
  transition: all 0.5s ease-in-out;
}

.third h1 {
  color: white;
  text-align: center;
  font-family: Dhurjati;
  font-size: 3rem;
}
.third h1:hover {
  filter: drop-shadow(0 0 0.2em #db8300aa);
  transition: all 0.5s ease-in-out;
}

.list {
  background-color: rgb(212, 243, 255);
  color: rgb(87, 140, 255);
  font-family: "Dhurjati", sans-serif;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInAnimation 2s ease-in-out forwards;
  margin-top: 10px;
  font-size: 1.5rem;
  border-radius: 20px;
  list-style: none;
}

#typ {
  color: rgb(159, 103, 0);
}
#typ1 {
  color: rgb(33, 45, 46);
}
#typ2 {
  color: rgb(159, 103, 0);
}
#typ3 {
  color: rgb(33, 45, 46);
}
</style>
