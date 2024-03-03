<template>
  <div class="social">
    <a href="https://github.com/kruzni"
      ><img src="../assets/github.png" alt="git" class="gith"
    /></a>
    <a href="https://github.com/kruzni"
      ><img src="../assets/insta.png" alt="inst" class="insta"
    /></a>
    <a href="https://github.com/kruzni"
      ><img src="../assets/linkedin.png" alt="inst" class="linked"
    /></a>
  </div>
</template>

<script>
export default {
  name: "SocialClub",
};
</script>

<style scoped>
.social {
  display: inline;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 10px;
}
.social img {
  margin-left: 5px;
  margin-bottom: 5px;
}
.gith {
  height: 35px;
  width: 35px;
}

.insta {
  height: 35px;
  width: 35px;
}

.linked {
  height: 35px;
  width: 35px;
}
</style>
