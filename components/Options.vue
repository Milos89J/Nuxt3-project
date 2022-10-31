<template>
  <div class="second-container">
    <h3>{{ option.title }}</h3>
    <div class="second-button">
      <button
        v-for="values in option.buttons"
        :key="values"
        class="option option-one"
        :class="options[option.category] === values && 'option-active'"
        @click="options[option.category] = values"
      >
        {{ values }}
      </button>
    </div>
  </div>
</template>


<script setup lang="ts">
import { Continent, Country, Language } from "@/data";

interface OptionsProps {
  option: {
    title: string;
    category: string;
    buttons: Country[] | Continent[] | Language[];
  };
  options: {
    country: Country;
    continent: Continent;
    language: Language;
  };
}

const props = defineProps<OptionsProps>();
</script>

<style scoped>

.second-container {
  margin-bottom: 0.2%;
}
.option {
  background: silver;
  outline: auto;
  border: none;
  padding: 0.5rem;
  width: 8rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 150;
}
.option-active {
  background-color: orangered;
  color: aliceblue;
}

</style>
