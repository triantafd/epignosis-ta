# Technical assignment for epignosis

### [Description of assignment](Epignosis-RN-Developer-Updated-Assignment-2023.pdf)

### [Mockups](Mockups)

## Code instructions
  ### 1. How to run the app 
    1) clone code
    2) npm install & npm start (dev mode)
    3) npm install & npm run build & npm install –g server & npm run
    buildVersion (build mode)
    4) If user not connected to docker hub and no login/ authentication
    required with two possible ways
       1. npm run docker-build & npm run docker-run
       2. npm run docker-build & docker-compose up

 ### 2. How to test the app
    1) npm run test

 ### 3. Libraries used.
 * React
 * Tailwind for css
 * Jest for tests
 * Context for loadingSpinner
 * Formik to handle Form
 * Yup for formValidation

 ### 4. About the folder structuring.
  * App.js has two main Containers:
    1. UserForm (right section of the scrollbar)
    2. UsersList (left section of the scrollbar)

  * A custom hook to render the users, handle loading and error state is used in App.js. Can
  be found under hooks folder. Works in a similar way React Query Works

  * The configuration of the userForm can be found under formConfigurations folder.
  * The validation applied is dynamic. The validation script can be found under utils folder.
  
  * There are two spinners in the app.
   ** The first spinner is applied only on the left section when users are loading. This
    is called customLoadingSpinners. Spinners can be found under
    compnents/Spinners folder.
   ** The second spinner is global in the app. Actually a context loader have been
    implemented under context folder. This spinner applies when the user submit a
    form to change anther user’

 All the tests for the Five scenarios(user stories/requirements) requested plus some other can be found
 under their corresponding folders.

 
