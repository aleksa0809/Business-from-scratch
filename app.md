# Anna Veronica Web Shop application: how does it work

## Used client technologies

The client part of the application (frontend) is written with React framework. The following technologies are used in it:

* React hooks `useState`, `createContext`, `useContext` for transmissing the state of application between components (`BasketContext`, `Basket`, `Total`, `Card`);
* `prop-types` for controlling types of context elements (`BasketContext`);
* `HashRouter` for navigating (`App`);
* `ErrorBoundary` hook (`Showcase`);
* `async/await` functions, promises (`Showcase`);
* `localStorage` for saving state between usings of application(`Basket`).

Needed dependencies are listed in `package.json` file.

## Used server technologies

As client and server parts work on separate ports during the development, the CORS technology is used. The server is very simple. It serves request for reading and filtering data only, not for inserting/updating/deleting. Changing of 'database'  can be made by editing the json file, that plays this role.

## Workflow

The `LeftMenu` component contains links that show different sets of product according with `segment` and `size` parameters. There is also `toplist` link, that shows most popular products. Sets of products data are delivered in `Showcase` component with asyncronous `fetch` function. The `Showcase` component is bound with error handler, that shows "Something went wrong" message if there was an error during http transmission.

The information about products is presented as set of cards. Each of them contains title, description, price, amount of a product. An user can click "To basket" button to place a product into the basket. 

The basket is organized as item of application's internal state. It is reactive, i.e. can be changed and viewed in any component of application. React hooks `createContext` and `useContext` are used for this purpous. The basket contains cards that are similar with `Showcase` cards, but cards of the basket have two buttons: "More" and "Less". Pressing them user can increase or decrease amount of items that he/she intend to buy. If amount of a product is decreased to 0, such
item become a candidat to remove from the basket. After confirming this situation by user, shuch item goes out from the basket.

On the top menu bar there is the `Total` component. It calculates the total price of the basket. It changes it's digits dynamically. It also has a link for showing the basket content.

After collectint needed items in the basket, user should order his/her purchases by pressing related button. The `Order` component consists of a table with characteristics of choosen products and form for collecting user's personal data. The form is connected with a validation library (`Formik`). After correct fulfilling the form congratulation message about successfull purchase appears. This message is a stub (mock) that is present instead of real sending data to server code. When
the purchase ends sucessfully, the basket becomes empty.

