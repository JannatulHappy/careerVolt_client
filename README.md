# [Career_Volt](https://careervolt-01.web.app)

## Overview

This repository contains the code for a full-stack web development project. The project is designed to create a unique online marketplace, and this README provides an overview of the key features.
## GitHub Repositories

- [Client Side Code](https://github.com/JannatulHappy/careerVolt_client)
- [Server Side Code](https://github.com/JannatulHappy/careervolt_server)

## About the Project

1. **Home Page**:

   - Browse By Category tabs with job listings.

2. **Job Details Page**: After clicking "Bid now," users are redirected to the job details page with details and a "place your bid" form.

3. **Add Jobs Page**: Users can add jobs, including details like Job title, Deadline, Description, Category, Minimum price, and Maximum price.

4. **My Posted Jobs Page**: Users can view, update, and delete their posted jobs. The page is only accessible to the user who added the jobs.

5. **My Bids Page**: Users can view bid information, including status, and complete bids. Status can be pending, canceled, or in progress.

6. **Bid Requests Page**: Job owners can manage bid requests, accept or reject them, and track job status.

7. **404 Page**: A custom 404 page with a Back to home button and an interesting image.

8. **Private Routes**: Implemented private routes for My Bids, Add Job, My Posted Jobs, Bid Request, and Job Detail pages.

9. **Reload**: Prevented redirects to the login page when reloading protected/private routes after login.

10. **Responsive Design**: Made the website responsive for mobile, tablet, and desktop screens.

11. **Sorting System**: Implemented a sorting system for the My Bids page to sort jobs by status.

12. **Dynamic Page Titles**: Changed the website title and favicon based on the route.

13. **JWT Token**: Created and stored JWT tokens for email/password-based authentication and social login on private routes.

14. **Loading Spinner**: Added a loading spinner or animation when data is in a loading state.

15. **Animations**: Implemented animations from the Framer Motion library.

16. **Tanstack Query Mutations**: used Tanstack query mutations.







#### Package (implement )
 1.Tailwind
 2.Daisy UI
 3.React
 4.Express
 5.Tanstack Query
 6.MongoDB



## if you want to run it in you machine

MONGO_URI=mongodb://localhost:27017/polling-and-survey-app

STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY

5. Start the backend server by running `npm run dev:backend`.
6. Start the frontend server by running `npm run dev:frontend`.


## Deployment

To deploy the application to a production environment, follow these steps:

1. Build the frontend and backend applications by running `npm run build`.
2. Deploy the frontend application to a web server.
3. Deploy the backend application to a Node.js server.
