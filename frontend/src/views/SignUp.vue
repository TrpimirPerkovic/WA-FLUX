<template>
  <FormCard>
    <div class="about">
      <h1>Sign Up</h1>

      <div class="row">
        <div class="col"></div>
        <div class="col">
          <form>
            <div class="form-group" id="mail">
              <label for="exampleInputEmail1">Email address</label>
              <input
                v-model="username"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1" id="pass">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword2" id="pass"
                >Repeat Password</label
              >
              <input
                v-model="passwordRepeat"
                type="password"
                class="form-control"
                id="exampleInputPassword2"
                placeholder="Password"
              />
            </div>
            <button type="button" @click="signup" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </FormCard>
  <social-club></social-club>
</template>

<script>
import FormCard from "../components/FormCard.vue";

export default {
  name: "SignUp",
  components: {
    FormCard,
  },
  data() {
    return {
      email: "",
      password: "",
      passwordRepeat: "",
    };
  },
  methods: {
    async signup() {
      try {
        const response = await fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
            passwordRepeat: this.passwordRepeat,
          }),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        console.log("User signed up successfully");
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-family: monospace;
}
h1:hover {
  filter: drop-shadow(0 0 0.2em #2e0423aa);
  transition: all 0.5s ease-in-out;
}
.btn-primary {
  margin-top: 15px;
  background-color: black;
  margin-left: 32.5%;
  font-family: monospace;
}
.btn-primary:hover {
  filter: drop-shadow(0 0 0.2em #2e0423aa);
  transition: all 0.5s ease-in-out;
}

#mail {
  margin-top: 10px;
  font-family: monospace;
}
#pass {
  margin-top: 10px;
  font-family: monospace;
}
</style>
