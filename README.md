## Namaste React

- Journey from Zero to Hero

## npm pakage parcel

- it creates a Dev build
- it creats a local server and hosted it
- parcel automatically refreshing your page also Which is knowns as HMR = Hot Module Replacement --> automatic refresh whenever we make a any changes
- parcel uses a "File watching Algorithm" - written in C++
- Parcel caches things --> that's why it gives u faster build 
- everytime we build the app it caches in .parcel-cache/    folder --it is like binary files
- image optimisation
- Do minification
- Do bundling
- Do compressing
- Consistence Hashing
- Code splitting
- Differential bunldling - to support older browser and devices or simple browser compatible/Device Compatible
- Diagnostic
- Error Handling
- HTTPs : it gives u way to host on https
- Tree Shaking --> remove unneccesary code
- Different build for dev and production builds

# Namaste Food


/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */


## Two types of export/import 
    - Default export/import
- 1: export default component/variable
- 1: import component/variable from "Path: folder/file"

    - named export/import
- 2: export const component/variable
- 2: import {component/varibale} from "path: folder/file"




# React Hooks
 (Normal JS utility functions)
- useState() - Superpowerful State Variables in react
- useEffect()



#  2 types Routing in web apps
 - Client Side Routing
 - Server Side Routing




 # Redux Toolkit
  - Install @reduxjs/toolkit and react-redux
  - Build our store
  - Connect our store to our app
  - Slice (cartSlice)
  - dispatch(action)
  - Selector


# Types of testing (devloper)
 - Unit Testing
 - Integration Testing
 - End to End Testing - e2e testing

# Setting up Testing in our app
 - Install React Testing Library
 - Installed jest
 - Installed Babel dependencies
 - Configure Babel 
 - Configure Parcel Config file to disable default babel transpilation 
 - Jest  - npx jest --init
 - Install jsdom library
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - npm i -D @testing-library/jest-dom
 