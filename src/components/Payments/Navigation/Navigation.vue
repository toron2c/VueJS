<template>
  <Nav class="navigation">
    <router-link class="nav__link" :to="{name: 'Dashboard', params: 1}">Dashboard</router-link>
    <router-link class="nav__link" to="/about">About</router-link>
    <router-link class="nav__link" to="/notfound">Not Found</router-link>
  </Nav>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style lang="scss" scoped>
.navigation {
  padding: 10px;
  font-size: 25px;
  display: flex;
  justify-content: center;
}

.nav__link {
  padding: 5px 10px;
  border: none;
  color: #0778d3;
  transition: 0.3s;
  cursor: pointer;
  height: 30px;
  text-decoration: none;
  display: block;
  &:hover {
    transition: 0.3s;
    transform: scale(1.24);
  }

}

</style>
