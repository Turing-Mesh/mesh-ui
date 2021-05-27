<h1 align="left">Mesh</h1> 

[![Build Status](https://travis-ci.com/Turing-Mesh/mesh-ui.svg?branch=main)](https://travis-ci.com/Turing-Mesh/mesh-ui)

<p>
   <a href="https://turing-mesh.herokuapp.com"><strong>Explore the app »</strong></a>
</p>

<img width="1411" alt="Screen Shot 2021-05-26 at 6 14 24 PM" src="https://user-images.githubusercontent.com/73088654/119746683-3d4b3e80-be4e-11eb-98bf-5a1abfd6370a.png">



## Table of Contents

* [About the Project](#about-the-project)
* [Associated Resources](#associated-resources)
* [Installation](#installation)
* [Functionality](#functionality)
* [Learning Goals](#learning-goals)
* [Future Iterations](#future-iterations)
* [Technologies Used](#technologies-used)
* [Contributors](#contributors)
* [Contact](#contact)


## About the Project

Mesh is the [capstone project](https://mod4.turing.edu/projects/capstone.html) for students of the 2011 cohort at Turing School of Software & Design. It is a full-stack application built by a FE team and BE team from the 2011 Turing cohort. The overarching goals of this project were to get experience working on a full stack team and to learn and implement a new stretch technology along the way. In a nutshell, the application itself is a project feedback tracker for fellow students at the Turing School of Software & Design.

### MVP

The MVP goal of the Mesh application is to offer students a centralized location for finding their project feedback for any project they complete in each of the four modules they move through during their time at Turing. 
 
The userflow for this goal involves:

   - Logging into the student dashboard
   - Selecting a module and project to view
   - Finding the corresponding project feedback, including:
       - Rubric categories, scores for these categories, and any associated instructor comments
       - An overall score and any final comments included by the instructor
       - A student notes section

### Extensions

The extension goal of the Mesh application is to offer instructors a convenient, standardized way to grade student projects and provide student feedback. 

The userflow for this goal would involve:

   - Logging into the instructor dashboard
   - Selecting a student, a module, and a project to view
   - Filling out a form auto-populated with the rubric categories associated with the project selected
   - Submitting their feedback through the Mesh app

## Associated Resources

 - [Deployed Application](https://turing-mesh.herokuapp.com)

 - [Mesh Backend Repo](https://github.com/Turing-Mesh/mesh-backend)

 - [Mesh Microservice Repo](https://github.com/Turing-Mesh/mesh_microservice)

 - [Deployed Backend](https://shrouded-citadel-55795.herokuapp.com/api/v1/students/1/student_projects?mod=1)

### Project Planning Resources

 - [Wireframes](https://miro.com/app/board/o9J_lErRCD0=/?userEmail=benjamin.fulton99@gmail.com&track=true&utm_source=notification&utm_medium=email&utm_campaign=add-to-team-and-board&utm_content=go-to-board)

 - [API Contract](https://github.com/Turing-Mesh/mesh-backend/blob/main/API_contract.md)

 - [Project Board](https://github.com/orgs/Turing-Mesh/projects/1)

 - [Reference Data](https://docs.google.com/spreadsheets/d/1mRK9-sHrwfJPVUcuMwOk2LYnr9MR_bL_j6D28WhUhbU/edit#gid=0)

## Installation

1. Clone this repo to your local machine with `git clone <your SSH Key>`.
2. Navigate into this directory with `cd mesh-ui`.
3. Run `npm install`.
4. Run `npm run serve` to see the app running locally on `http://localhost:8080`.
5. Run `npm run test` to open Cypress and run the tests in `student-test.js`.


## Functionality
* [Student Dashboard](#student-dashboard)
* [Accessibility](#accessibility)
* [Error Handling](#error-handling)


### Student Dashboard

#### Views

<img width="1411" alt="Screen Shot 2021-05-26 at 6 14 24 PM" src="https://user-images.githubusercontent.com/73088654/119746683-3d4b3e80-be4e-11eb-98bf-5a1abfd6370a.png">

<img width="1421" alt="Screen Shot 2021-05-26 at 6 19 23 PM" src="https://user-images.githubusercontent.com/73088654/119746977-f3af2380-be4e-11eb-8a23-20347b2c9dc4.png">

<img width="1421" alt="Screen Shot 2021-05-26 at 6 17 54 PM" src="https://user-images.githubusercontent.com/73088654/119746882-b3e83c00-be4e-11eb-87e8-79051e045417.png">


#### User Flow

![image](https://media.giphy.com/media/XYM26YSii6u59bZE87/giphy.gif)

<!-- #### Adding Notes
<!-- TODO finish this -->
<!-- When a user ... add notes ... -->

<!-- TODO add screenshot/gif -->
<!-- ![image]() -->

<!-- #### Responsive Design -->
<!-- TODO finish this -->
<!--  - The app is fully responsive across all screen sizes. Viewed on an iPhone 6/7/8: -->

<!-- TODO add screenshot/gif -->
<!-- ![image]() -->

### Accessibility 
<!-- TODO finish this -- need to check accessibility! -->
Accessibility was a consideration throughout the development of this app. Mesh earned a score of 97% using the Lighthouse audit tool.

<img width="1137" alt="Screen Shot 2021-05-26 at 5 55 11 PM" src="https://user-images.githubusercontent.com/73088654/119745536-91085880-be4b-11eb-8c54-3b6d754f2df0.png">

<!-- #### Error Handling -->
<!-- To help prevent user frustration, network request errors and bad URLs are handled gracefully, with a message displayed to the user. -->

<!-- #### Loading Screen -->
<!-- When the app is retrieving data, a message appears on the screen to say the data is being fetched. 🐾  -->

### Error Handling
When a user enters an invalid URL in the address bar, an error message appears.

<img width="1138" alt="Screen Shot 2021-05-26 at 5 56 53 PM" src="https://user-images.githubusercontent.com/73088654/119745633-c3b25100-be4b-11eb-9bb7-6c54f7468d1a.png">

## Learning Goals
- Explore and implement a Vue framework and Vuex for global state management
- Demonstrate knowledge gained throughout the Turing program
- Use an Agile process to turn well-defined requirements into deployed and production-ready software
- Gain experience dividing applications into components and domains of responsibility to facilitate multi-developer teams.
- Practice an advanced, professional git workflow using git rebase
- Gain experience using Travis CI for continuous integration
- Focus on communication between front-end and back-end teams in order to complete and deploy features
- Use best practices for UI/UX, including wireframes, user personas, and end-to-end testing

## Future Iterations
- Finish rubric component and POST request that would allow instructor to leave new feedback for their current students.
- Build feature that would allow instructors to search for students by name.

## Technologies Used
- ![Vue](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue-dot-js&logoColor=4FC08D)
- ![Vuex](https://img.shields.io/badge/Vuex-58B17C?style=for-the-badge&logo=vuex&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)
- ![Cypress](https://img.shields.io/badge/cypress%20-%2317202C.svg?&style=for-the-badge&logo=cypress&logoColor=white)
- ![Travis CI](https://img.shields.io/travis/73VW/TechnicalReport.svg?style=for-the-badge&label=Travis+CI)
- ![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

## Contributors
* [Jessica J](https://github.com/m1073496) - Application Creator
* [Katie B](https://github.com/knees4bees) - Application Creator
* [Nikki P](https://github.com/piknikki) - Application Creator

## Contact
[<img src="https://img.shields.io/badge/LinkedIn-Jessica%20J-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0077b5"/>][linkedin1]
[<img src="https://img.shields.io/badge/Github-Jessica%20J-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github1]

[<img src="https://img.shields.io/badge/LinkedIn-Katie%20B-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0077b5"/>][linkedin2]
[<img src="https://img.shields.io/badge/Github-Katie%20B-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github2]

[<img src="https://img.shields.io/badge/LinkedIn-Nikki%20P-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0077b5"/>][linkedin3]
[<img src="https://img.shields.io/badge/Github-Nikki%20P-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github3]

<!-- Personal Definitions  -->
[linkedin1]: https://www.linkedin.com/in/jessica-justice2
[github1]: https://github.com/m1073496
[linkedin2]: https://www.linkedin.com/in/katie-b-dev/
[github2]: https://github.com/knees4bees
[linkedin3]: https://www.linkedin.com/in/nikkipetersencsm
[github3]: https://github.com/piknikki
