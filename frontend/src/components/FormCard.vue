<template>
  <div class="form-card">
    <div class="form-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormCard",
};
</script>

<style>
.form-card {
  background-color: whitesmoke;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px 50px;
  margin-top: 50px;
}

.form-content {
  padding: 50px;
}

.form-card:hover {
  filter: drop-shadow(0 0 0.2em #db0ba4aa);
  transition: all 0.5s ease-in-out;
}
</style>
