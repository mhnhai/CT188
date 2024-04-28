import { importDataToLocalStorage, loadDataFromLocalStorage , roles, addRole} from './MainDB.js';

// Call the import function to import data into local storage
importDataToLocalStorage();





// Call the load function to load data from local storage
loadDataFromLocalStorage();

// Now you can use the data stored in local storage as needed in this module
// For example, you can access the roles list and display it
console.log("Roles list after add:");
console.log(roles); 