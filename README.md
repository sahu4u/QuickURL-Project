
![quickurl](https://github.com/sahu4u/QuickURL-Project/assets/96582845/a06f0600-a40c-46ad-a2bc-16ab91c06b0b)
# QuickURL-Project
Title: QuickURL - URL Shortener with User Authentication (MERN Stack)

Project Description:
QuickURL is a powerful web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It offers user authentication, URL shortening, note storage, and click tracking functionalities. With QuickURL, users can securely register and log in to manage their shortened URLs, add notes, search for saved URLs and notes, and track the number of clicks on the shortened URLs.

How to Run the Project:
To run the QuickURL project, follow these steps:

1. Install Node.js and MongoDB on your machine.
2. Clone the QuickURL repository from the version control system of your choice (e.g., GitHub).
3. Open a terminal or command prompt and navigate to the project's root directory.
4. Install the project's dependencies by running the command: `npm install`.
5. Create a `.env` file in the project's root directory and set the required environment variables (e.g., MongoDB connection string, JWT secret key).
6. Start the development server by running the command: `npm run dev`.
7. Access the QuickURL web application in your web browser at `http://localhost:3000`.(client side)
Dependencies:
Backend (API):

bcrypt
cors
dotenv
express
helmet
mongoose
morgan
nodemon
shortid

Frontend (React):

axios
react
react-router-dom
Backend and frontend dependencies can be installed using the npm install command in their respective directories.

Internal Working:
QuickURL utilizes the MERN stack to build a full-stack application. The front-end is developed using React, providing a dynamic and responsive user interface. The back-end is built using Node.js and Express.js, which handle the server-side logic, API endpoints, and user authentication. MongoDB serves as the database for storing user data, URLs, notes, and click statistics.
When a user registers or logs in, the back-end server verifies their credentials. Users can enter a long URL, which the server then generates a shortcode for and stores in the database. The shortcode and original URL are associated with the user's account.
Users can add personal notes to their saved URLs, which are also stored in the database. The application provides search functionality to retrieve specific URLs and notes based on user input.
When a shortened URL is accessed, the server increments a click counter associated with that URL. The user is then redirected to the original URL.
The internal working of your project involves several key components and processes. Here's a breakdown of the internal workings:

1. Backend:
   - Node.js and Express: I used Node.js as the runtime environment and Express.js as the web framework to handle HTTP requests and responses.
   - User Registration and Login: Users can register by providing their information, and the backend securely stores their data in a MongoDB database. When a user logs in, their credentials are verified, and if successful.
   - MongoDB: I utilized MongoDB as the database to store user information, including hashed passwords, using the Mongoose library for data modeling and interaction.
   - Password Hashing: To ensure the security of user passwords, I used bcrypt to hash the passwords before storing them in the database.
   - Short ID Generation: For generating short URLs, I made use of the shortid library. This allows you to generate unique and short id for the URLs.
   - Searching Data: To enable searching and filtering of data, I implemented filtering on the frontend. This allows users to search and display specific data based on their entered short or long URL or the notes they added.
   - Number of clicks : Each time user clicks on the short url the 'clicks' are incremented by 1.
   
2. Frontend:
   - React: I used React to build the frontend of my application, creating reusable UI components and managing the application state efficiently.
   - Context API: The Context API in React was utilized to manage user authentication. It enables the sharing of authentication state and data throughout the application.
   - Bootstrap: I leveraged the Bootstrap framework to enhance the visual appearance of your application, using its predefined styles and components to create a consistent and responsive design.
   
3. Header and Footer:
     - I implemented a header and footer component that appear consistently across the application. These components provide navigation, branding, and other common elements for a cohesive user experience.

Overall, this project follows a client-server architecture, where the frontend interacts with the backend API for user authentication, data storage, and retrieval. The frontend components provide the user interface for URL shortening, note management, and other features, while the backend handles the business logic,search functionality, data processing, and interaction with the database.

Learning Takeaways:
Throughout the development of this project, you have gained valuable learning experiences. Here are some key takeaways:

1. Full-Stack Development: By building a project that encompasses both the frontend and backend, I have gained a solid understanding of full-stack development. I have learned how to integrate different technologies and frameworks together to create  application.
2. User Authentication: Implementing user authentication using the Context API has provided me with hands-on experience in handling user registration, login,. I have learned how to securely store user passwords by hashing them with bcrypt.
3. MongoDB and Mongoose: Working with MongoDB as the database and using Mongoose for data handling. I have learned how to interact with the database, and perform CRUD operations using Mongoose.
4. Frontend Design and Styling: Utilizing Bootstrap for frontend styling to make my tables and buttons look simple but designed without writing lines of CSS Codes.
5. Filtering and Search Functionality: Implementing filtering and search features on the backend, I have learned how to efficiently filter and display data based on specific criteria, enhancing the usability of the application.
6. Dependency Management: Working with various dependencies, such as bcrypt, cors, dotenv, express, mongoose, and others, has provided me with experience in managing and incorporating external libraries into this project. I have learned how to install, configure, and utilize these dependencies to enhance the functionality of my application.
7. Problem Solving and Troubleshooting: Throughout the development process, I encountered challenges and bugs. These instances have allowed me to learn troubleshooting skills, such as debugging code, researching solutions, and iterating  implementation.
8. Project Organization and Readme Writing: As part of the project, I have  structured the code, organized files and directories, and created a Readme file. 

Resources :
1. https://www.geeksforgeeks.org/
2. Web dev simplified Youtube video
3. https://www.w3schools.com/
4. https://stackoverflow.com/ for debugging and any query
5. npm website for syntaxes and other documentation
6. My own completed projects
7. Lama dev video on Search functionality


