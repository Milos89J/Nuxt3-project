interface Name {
  id: number;
  nameCity: string;
  country: Country;
  continent: Continent;
  language: Language;

}

export enum Country {
    BRASIL = "Brasil",
    INDIA = "India",
    SAD = "SAD",
 }
 export enum Continent {
    AMERICA = "America",
    ASIA = "Asia",
 }
 export enum Language {
    ENGLISH = "English",
    PORTUGUES = "Portugues",
    HINDU = "Hindu",
 }
 export const selectnames: Name[] = [

    {
        id: 1,
        nameCity: "Rio De Janeiro",
        country: Country.BRASIL,
        continent: Continent.AMERICA,
        language: Language.PORTUGUES, 
    },
    {
        id: 2,
        nameCity: "Brasilia",
        country: Country.BRASIL,
        continent: Continent.AMERICA,
        language: Language.PORTUGUES, 
    },
    {
        id: 3,
        nameCity: "Sao Paulo",
        country: Country.BRASIL,
        continent: Continent.AMERICA,
        language: Language.PORTUGUES, 
    },
    {
        id: 4,
        nameCity: "Salvator",
        country: Country.BRASIL,
        continent: Continent.AMERICA,
        language: Language.PORTUGUES, 
    },
    {
        id: 5,
        nameCity: "Porto Alegre",
        country: Country.BRASIL,
        continent: Continent.AMERICA,
        language: Language.PORTUGUES, 
    },
    {
        id: 6,
        nameCity: "Sao Luis",
        country: Country.BRASIL,
        continent: Continent.AMERICA,
        language: Language.PORTUGUES, 
    },
    {
        id: 7,
        nameCity: "New Delhi",
        country: Country.INDIA,
        continent: Continent.ASIA,
        language: Language.HINDU, 
    },
    {
        id: 8,
        nameCity: "Colcata",
        country: Country.INDIA,
        continent: Continent.ASIA,
        language: Language.HINDU, 
    },
    {
        id: 9,
        nameCity: "Mumbaj",
        country: Country.INDIA,
        continent: Continent.ASIA,
        language: Language.HINDU, 
    },
    {
        id: 10,
        nameCity: "Bangalor",
        country: Country.INDIA,
        continent: Continent.ASIA,
        language: Language.HINDU, 
    },
    {
        id: 11,
        nameCity: "Cenai",
        country: Country.INDIA,
        continent: Continent.ASIA,
        language: Language.HINDU, 
    },
    {
        id: 12,
        nameCity: "Caipur",
        country: Country.INDIA,
        continent: Continent.ASIA,
        language: Language.HINDU, 
    },
    {
        id: 13,
        nameCity: "New Jork",
        country: Country.SAD,
        continent: Continent.AMERICA,
        language: Language.ENGLISH, 
    },
    {
        id: 14,
        nameCity: "Chicago",
        country: Country.SAD,
        continent: Continent.AMERICA,
        language: Language.ENGLISH, 
    },
    {
        id: 15,
        nameCity: "Houston",
        country: Country.SAD,
        continent: Continent.AMERICA,
        language: Language.ENGLISH, 
    },
    {
        id: 16,
        nameCity: "Phoenix",
        country: Country.SAD,
        continent: Continent.AMERICA,
        language: Language.ENGLISH, 
    },
    {
        id: 17,
        nameCity: "San Diego",
        country: Country.SAD,
        continent: Continent.AMERICA,
        language: Language.ENGLISH, 
    },
    {
        id: 18,
        nameCity: "San Antonio",
        country: Country.SAD,
        continent: Continent.AMERICA,
        language: Language.ENGLISH, 
    },
    {
        id: 19,
        nameCity: "Dallas",
        country: Country.SAD,
        continent: Continent.AMERICA,
        language: Language.ENGLISH, 
    },
    {
        id: 20,
        nameCity: "San Jose",
        country: Country.SAD,
        continent: Continent.AMERICA,
        language: Language.ENGLISH, 
    },
   
 ]