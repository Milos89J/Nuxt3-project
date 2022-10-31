<template>
  <div class="container">
    <h2>Generator</h2>
    <div class="seconds-container">
      <Options v-for="option in optionsArray" :key="option.title" :option="option"
      :options="options" />
      <button class="primary-button" @click="selectedNamesCountry">
        Enter(C)
      </button>
    </div>
    <div class="card-container">
      <CardNameCard v-for="nameCity in namesSelected" :key="nameCity" :nameCity="nameCity" />
    
    </div>
  </div>
</template>

<script setup lang="ts">
import { Country, Continent, Language, selectnames } from "@/data";

interface OptionCount {
  country: Country;
  continent: Continent;
  language: Language;
}

const options = reactive<OptionCount>({
  country: Country.BRASIL,
  continent: Continent.AMERICA,
  language: Language.HINDU,
});

const selectedNamesCountry = () => {
  const filterNames = selectnames
    .filter((nameCity) => nameCity.country === options.country)
    .filter((nameCity) => nameCity.continent === options.continent)
    .filter((nameCity) => {
      if (options.language === Language.English) return true;
      else return nameCity.language === options.language;
    });
  namesSelected.value = filterNames.map((nameCity) => nameCity.nameCity);
};

const namesSelected = ref<string[]>([]);

const optionsArray = [
  {
    title: "Choose a country",
    category: "country",
    buttons: [Country.BRASIL, Country.INDIA, Country.SAD],
  },
  {
    title: "Choose a continent",
    category: "continent",
    buttons: [Continent.AMERICA, Continent.ASIA],
  },
  {
    title: "Choose a language",
    category: "language",
    buttons: [Language.ENGLISH, Language.PORTUGUES, Language.HINDU],
  },
];
</script>


<style scoped>
/* scoped means, for this file only */

.container {
  font-family: "Courier New", Courier, monospace;
  color: darkslategray;
  max-width: 55re;
  margin: 0, auto;
  text-align: center;
}
h2 {
  font-size: 2rem;
}
.second-container {
  background-color: blanchedalmond;
  border-radius: 0rem;
  padding: 0.5rem;
  margin: 0, auto;
  position: relative;
}

.primary-button {
  background-color: blue;
  color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
}
.card-container {
  display: flex;
  margin-top: 2rem;
  flex-wrap: wrap;
}

</style>
