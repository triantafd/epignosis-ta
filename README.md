# Technical assignment for epignosis

### [Description of assignment](Epignosis-RN-Developer-Updated-Assignment-2023.pdf)

### [Mockups](Mockups)

## Code instructions
  ### 1. How to run the app 
    Clone code
    1) npm install & npm start (dev mode)
    2) npm install & npm run build & npm install –g server & npm run
    buildVersion (build mode)
    3) If user not connected to docker hub and no login/ authentication
    required with two possible ways
       1. npm run docker-build & npm run docker-run
       2. npm run docker-build & docker-compose up

 ### 2. How to test the app
    1) npm run test

 ### 3. How to merge in main branch
    A simple test workflow was created under .github folder.
    Branches can be merged manually in main branch after the test automation process (github action) finds no errors.

 ### 4. Libraries/tools used.
 * React
 * Tailwind for css
 * Jest for tests
 * Context for loadingSpinner
 * Formik to handle Form
 * Yup for formValidation
 * Wave tool to make the application accessible (remote contrast-errors, errors)

 ### 5. About the folder structuring.
  * App.js has two main Containers:
    1. UserForm (right section of the scrollbar)
    2. UsersList (left section of the scrollbar)

  * A custom hook to render the users, handle loading and error state is used in App.js. Can
  be found under hooks folder. Works in a similar way React Query Works

  * The configuration of the userForm can be found under formConfigurations folder.
  * The validation applied is dynamic. The validation script can be found under utils folder.
  
  * There are two spinners in the app (One component with prop for stying)
   ** The first spinner is applied only on the left section when users are loading. 
   ** The second spinner is global in the app. Actually a context loader have been
    implemented under context folder. This spinner applies when the user submit a
    form to change anther user’

### 6. TODO (Improve Performance for better user experience)
 * Virtual Viewport Rendering: Technique often used to improve performance. As the user scrolls, new content is dynamically loaded and rendered as it comes into view.
 * Data Fetching Only in Viewport: 
 * Skeleton when Scrolling: 

 All the tests for the Five scenarios(user stories/requirements) requested plus some other can be found
 under their corresponding folders.

 
