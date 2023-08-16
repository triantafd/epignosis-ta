# There is a pdf, epignosis-ta for further isntructions

<a name="br1"></a> 

Frontend/RN Developer assignment



<a name="br2"></a> 

Purpose-Disclaimer

The objective of this assignment is to gauge your technical skills, as well as to provide us

with some talking points for your technical interview. Note that the scope of the

assignment is purely ﬁctional. It is in no capacity related to any part of our products and/

or business nor will it ever be used commercially or otherwise in any form.

Description

Please look at the mockups provided in the mock-ups directory. This is a very simple

Admin Panel to manage users. You can use the provided [**mocked**](https://github.com/tsevdos/epignosis-users)[** ](https://github.com/tsevdos/epignosis-users)[REST**](https://github.com/tsevdos/epignosis-users)[** ](https://github.com/tsevdos/epignosis-users)[AP**](https://github.com/tsevdos/epignosis-users)[I**](https://github.com/tsevdos/epignosis-users)[** ](https://github.com/tsevdos/epignosis-users)to interact

with API (more details below).

The admin panel consists of 2 horizontal panels. At the left panel you have a list of users.

Each list item contains a photo along with their name and their email (if we have this

data). At the right panel you have a form to edit the data of a selected user.

General guidelines

You can use any tool, library or framework you want (even vanilla JavaScript) to complete

the assignment. But please don't forget to attach the instructions on how to run the

project - ideally on a README ﬁle (for example node version to use, port the app is

running, any other scripts to run, etc.).

REST API

The REST API doesn't require any authorization, so you can easily perform and test the below

CRUD operations. Please keep in mind that you cannot mutate or edit anything from the

"users" resource, so don't expect persistence while interacting with it. Nevertheless, we expect



<a name="br3"></a> 

from your assignment project to correctly perform all the appropriate requests, with the

correct HTTP methods and data.

You can leave the HTTP errors unhandled (or just console log them), but you must correctly

handle any loading states. Below you can read more details regarding the requests that you

need to perform:

API Documentation

**●**

**●**

[**Mocked**](https://my-json-server.typicode.com/tsevdos/epignosis-users)[** ](https://my-json-server.typicode.com/tsevdos/epignosis-users)[REST**](https://my-json-server.typicode.com/tsevdos/epignosis-users)[** ](https://my-json-server.typicode.com/tsevdos/epignosis-users)[API**](https://my-json-server.typicode.com/tsevdos/epignosis-users)

[**README**](https://github.com/tsevdos/epignosis-users)

**Get all users**

METHOD: **GET**

Endpoint: [**https://my-json-server.typicode.com/tsevdos/epignosis-users/users**](https://my-json-server.typicode.com/tsevdos/epignosis-users/users)

**Get single user**

METHOD: **GET**

Endpoint: **https://my-json-server.typicode.com/tsevdos/epignosis-users/users/:id**

example:

[**https://my-json-server.typicode.com/tsevdos/epignosis-users/users/5c093af1c6ee9117**](https://my-json-server.typicode.com/tsevdos/epignosis-users/users/5c093af1c6ee9117a581c7d6)

[**a581c7d6**](https://my-json-server.typicode.com/tsevdos/epignosis-users/users/5c093af1c6ee9117a581c7d6)

**Update user**

METHOD: **PUT**

Endpoint: **https://my-json-server.typicode.com/tsevdos/epignosis-users/users/:id**

example:

[**https://my-json-server.typicode.com/tsevdos/epignosis-users/users/5c093af1c6ee9117**](https://my-json-server.typicode.com/tsevdos/epignosis-users/users/5c093af1c6ee9117a581c7d6)

[**a581c7d6**](https://my-json-server.typicode.com/tsevdos/epignosis-users/users/5c093af1c6ee9117a581c7d6)

DATA: **{ "name": "John Doe", "company": "epignosis", "email": "email@test.com", ... }**

Note: Put all the ﬁelds or only the changed ones. In either case do not include the "id"

ﬁeld.



<a name="br4"></a> 

User Stories / Requirements

To complete the assignment, you must successfully complete the below user stories:

1\. Load all the users at the left panel. You can leave the left panel either empty or

display a message such as "Select a user to edit".

2\. When you click on a user (left panel):

●

The right panel should display the corresponding user's data within a form.

3\. When you edit a user's data:

●

●

The Save button should be enabled

The Cancel button should appear

4\. When you click Save:

●

Make an HTTP PUT request with the new user data to the appropriate

endpoint

●

●

Cancel button should disappear

Save button should be disabled

5\. When you click Cancel:

●

●

●

The form ﬁelds should reset to its previous saved data (state)

Cancel button should disappear

Save button should be disabled

Take a look at the mockups for more visual details.

Extras

●

●

UI / UX considerations (such as loading states, ﬁeld validation errors, etc.)

Add client-side validations

○

○

○

○

Name (required)

Email (email)

Phone (required)

Address (none)



<a name="br5"></a> 

○

Company (none)

●

●

●

Test your code

Make the entire app accessible

Make the entire application more performant (for example add caching, minimize

HTTP requests, etc.).

CSS Speciﬁcations

1\. The app should be mobile ﬁrst

2\. Media query breakpoints: Desktop: >=768px

3\. Color codes:

●

●

●

●

●

●

●

Body background color (desktop): whitesmoke;

User selected background color: #1b68b3

User hover background color: #e8e8e8;

Input border color: #ececec;

Label color: grey

Cancel button background color: #f7f7f7;

Save button background color: #1b68b3

Good luck!



### Not mentioned in pdf: 
    typescript not used, 
    network calls moved in services folder
    Wave tool used to make the the application accessible
