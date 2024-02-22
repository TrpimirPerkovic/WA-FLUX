<template>
  <FormCard>
    <div class="about">
      <h1>Login</h1>

      <div class="row">
        <div class="col"></div>
        <div class="col">
          <form>
            <div class="form-group" id="mail">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group" id="pass">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </FormCard>
  <social-club></social-club>
</template>

<script>
import FormCard from "@/components/FormCard.vue";

export default {
  components: { FormCard },
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
