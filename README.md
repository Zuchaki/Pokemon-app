# How to run?
First of all you need to downolad packages
```
npm install
```
To run the application, you will first need to start the **json-server on port 4000**
```
json-server --watch db.json --port 4000
```
Once the server is running, you can then start the application by running the command
```
npm start
```
**Make sure that you are in the correct directory when running these commands.**

# File structure
All files are in **/src** folder

## /axios
Axios instances. If you need you can change **port of json-server** in file **axios_pokemons.ts**

## /Components
There are all component wih the aplikation are building

#### /Pagination
The pagination component

#### /PokemonAllInfo
After choosen one pokemon app will redirect user to this component. There will view all infrmation about choosen pokemon.

#### /PokemonAllInfo/SingleData
Component in PokemonAllInfo where by props give information to view. Component created to get cod more clear.

#### /Pokemons
Pokemons get from db.json displaying according to pagination. Firs page wihch use see after run app.

#### /SinglePokemon
Component used in **PokemonAllInfo.tsx** and **Pokemons.tsx**. Component responsible for the display box with pokemon img, name, id, and type of pokemon
