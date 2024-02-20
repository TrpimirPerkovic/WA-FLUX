<template>
  <div class="welcome">
    <h3>Welcome to</h3>

    <div class="blob">
      <h2 id="who-am-i-text">F L U X</h2>
      <p class="ime">Your way into knowledge</p>
      <div class="moreinfo" v-show="visible">
        <button @click="toggleShowMore">What now?</button>
        <ul class="wholi" ref="contentSection">
          <li id="typ">Check Out Books</li>
          <li id="typ1">See Reviews</li>
          <li id="typ2">Find New Literature</li>
          <li id="typ3">Live, Love, Laugh</li>
        </ul>
      </div>
      <button v-show="!visible" @click="toggleShowMore">What now?</button>
    </div>
  </div>
  <SocialClub></SocialClub>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import SocialClub from "@/components/SocialClub.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    SocialClub,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    toggleShowMore() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dhurjati&family=Ephesis&family=Smooch+Sans:wght@200;300;500&family=Space+Mono&display=swap");
#who-am-i-text {
  overflow: hidden;
  border-right: 0.15em solid #453709;
  white-space: nowrap;
  margin: 0;
  animation: typing 2s steps(20, end);
  color: #464e47;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
#who-am-i-text:hover {
  filter: drop-shadow(0 0 0.2em #240119aa);
  transition: all 0.5s ease-in-out;
}
button {
  border-radius: 5px;
  padding: 5px;
  background-color: #464e47;
  color: white;
  font-family: monospace;
}
#typ {
  overflow: hidden;
  border-right: 0.15em solid orange; /* Cursor effect */
  white-space: nowrap;
  margin: 0;
  animation: typing 2s steps(30, end); /* Change animation duration as needed */
}
#typ1 {
  overflow: hidden;
  border-right: 0.15em solid rgb(134, 93, 18); /* Cursor effect */
  white-space: nowrap;
  margin: 0;
  animation: typing 2s steps(30, end); /* Change animation duration as needed */
}

#typ2 {
  overflow: hidden;
  border-right: 0.15em solid rgb(220, 91, 4); /* Cursor effect */
  white-space: nowrap;
  margin: 0;
  animation: typing 2s steps(30, end); /* Change animation duration as needed */
}

#typ3 {
  overflow: hidden;
  border-right: 0.15em solid rgb(134, 18, 18); /* Cursor effect */
  white-space: nowrap;
  margin: 0;
  animation: typing 2s steps(30, end); /* Change animation duration as needed */
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.ime {
  opacity: 0;
  animation: fadeInAnimation 2s ease-in-out forwards;
  font-family: Dhurjati;
  font-size: 1.25rem;
  opacity: 0;
  animation: fadeInAnimation 2s ease-in-out forwards;
  color: black;
}

@keyframes fadeInAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.wholi {
  background-color: whitesmoke;
  color: black;
  font-family: "Dhurjati", sans-serif;
  padding: 0; /* Remove default padding */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */

  margin-top: 10px;
  font-size: 1.5rem;
}

.wholi:hover {
  filter: drop-shadow(0 0 0.2em #30606eaa);
  transition: all 0.5s ease-in-out;
}

.wholi li {
  list-style-type: none;
  margin: 5px 0; /* Add margin for spacing between items */
  text-align: center;
}

.wholi li:hover {
  filter: drop-shadow(0 0 0.2em #000000aa);
  transition: all 0.3s ease-in;
}

.welcome {
  background-color: whitesmoke;
  color: black;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-left: 27%;
  margin-right: 27%;
  margin-top: 5%;
  padding: 50px 50px;
  border-radius: 10px;
  display: block;
  text-align: center;
  max-width: 1000px;
}
.welcome h3 {
  font-family: Dhurjati;
  font-size: 2rem;
}
.welcome h1 {
  font-family: Dhurjati;
  font-size: 3rem;
}

.welcome:hover {
  filter: drop-shadow(0 0 1em #062129aa);
  transition: all 0.5s ease-in-out;
}
</style>
