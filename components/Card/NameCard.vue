<template>
  <div class="card">
     <h3>{{ 6f5cf78b6ce9fc46ea067b6a803100191021337d }}</h3>
     <h3>{{ 6f5cf78b6ce9fc46ea067b6a803100191021337d }}</h3>
    <p>x</p>
  </div>
</template>

<scrypt setup lang="ts">

interface NameProps {
    name: string;

 }  

const props = defineProps<NameProps>();
console.log(props);
</scrypt>

<style scoped>
.card {
  background-color: aqua;
  width: 30%;
  color: black;
  padding: 0.3rem;
  border-radius: 0.3rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
.card p {
  position: absolute;
  top: -20%;
  left: 80%;
  cursor: pointer;
}
</style>