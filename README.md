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

# File Structure
All files are located in the **/src** folder

## /axios
This folder contains Axios instances. You can change the port of the **JSON-server** in the **axios_pokemons.ts** file\
\
To change port you can replace ***":4000"*** with any other port number you want. For example, if you want to use port 5000, you can update the **baseURL** as follows:
```
const instance = axios.create({
    baseURL: "http://localhost:5000
})
```
Make sure that the **json-server** is also running on the same port

## /Components
This folder contains most of the components used to build the application

#### /Pagination
This component is responsible for pagination

#### /PokemonAllInfo
After **selecting a Pokemon**, the user is redirected to this component. It **displays all the information** about the selected Pokemon

#### /PokemonAllInfo/SingleData
This component receives props to display a single unit of information with a particular style. It was created to make the code more modular

#### /Pokemons
This component displays the Pokemons obtained from db.json according to pagination. It is the first page that users see when they run the app

#### /SinglePokemon
This component is used in **PokemonAllInfo.tsx** and **Pokemons.tsx**. It is responsible for displaying the box with the Pokemon's: image, name, ID, and types

## /Pages
Rest of the components used in this app responsible for being directly displayed in the **Router**. These components collect other components from **/src/Components** and then are displayed in the Router in **app.tsx**

#### /Error404
This component is responsible for displaying the **404 error**

#### /MainContent
It connects the **/Pagination** and **/Pokemons** components to display a list of Pokemon that the user can choose from

#### /SinglePokemonInfo
This component **displays** information about the **selected Pokemon** and only uses the **/PokemonAllInfo** component

## /Redux
Contains all files related to **redux**

#### /reducers
Contains all reducers

#### /Saga
Contains all sagas

#### rootReducer.ts
Connects all the reducers from /Redux/reducers

#### store.ts
Redux store

## module.ts
Has global typs

# What I have learned and focused on.
### Redux-saga
This task was good to practise redux-saga. Now i feel more confident with it

### json-server
It was my first contact with **json-server** but after this task I think it is **awesome!**

### Folder structure
I focused on the folder structure

### Clear cod
Clear cod was moust of more important things to me in this task
