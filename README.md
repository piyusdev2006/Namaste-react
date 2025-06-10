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


## Two types of export/import 
    - Default export/import
- 1: export default component/variable
- 1: import component/variable from "Path: folder/file"

    - named export/import
- 2: export const component/variable
- 2: import {component/varibale} from "path: folder/file"