# Architecture
- <strong>Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).</strong></br>
The set of tools used to create this project was the MEAN stack (Mongo, Express, Angular, and Node). Express HTML made up the frame and layout of the pages, while JavaScript added the functionality and server portions of the application. The SPA consists of a single large page that dynamically changes for the required content. The SPA got created using Angular and the Express API, which got created to retrieve and store information in the MongoDB database.
---
- <strong>Why did the backend use a NoSQL MongoDB database?</strong></br>
A NoSQL MongoDB database got chosen for the backend due to its performance and functionality. Additionally, MongoDB uses JSON-like documents (BSON) which works well with JavaScript and web-development components.
# Functionality
- <strong>How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?</strong></br>
JSON differs from Javascript in significant ways. JSON is a file format for holding structured data derived from JavaScript syntax, while JavaScript is a programming language used to create most websites. JSON ties together the frontend and backend development pieces by serving as the common data delivery format. That is, JavaScript often uses the JSON format to send and retrieve data from other JavaScript applications.
---
- <strong>Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.</strong></br>
There were multiple times when I refactored the code to improve functionality and efficiency. One example is the nav bar in the SPA. Instead of recreating the nav bar every time the page changes, I created a nav bar component to reuse for each page.
---
# Testing
- <strong>Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.</strong></br>
There were many tools used to debug the various parts of the program. The API testing involved using Postman to test API inputs or reading the console log of the returned HTTP response codes throughout development. Additionally, the dev tools in most browsers, like inspect element, console log, and others, aided in testing the application. The added layers of security made testing more difficult since I needed to ensure I had a valid session token before any POST, PUT, or DELETE requests would work. The endpoints are URLs, which trigger functions to do certain things like call GET, PUT, or DELETE commands, as well as displaying web pages. Security involves protecting these endpoints from those who should not access them (not logged in and authenticated).
---
# Reflection
- <strong>How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?</strong></br>
This course has helped me in reaching my professional goals in many ways. I learned a lot about full-stack development techniques and the tools surrounding development and testing. I learned how to implement a SPA, API endpoints, the Express server framework, and how to utilize and manage Node.js. These skills are invaluable in a full-stack development position.
