@@ -1,8 +1,149 @@
# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#

# UNICODE - MERN PROJECT

UNICODE is a comprehensive platform designed to visualize sorting algorithms. It leverages modern technologies such as Vite and React for a fast and responsive user experience.

## Features

- **Dynamic Sorting Visualizer:** Developed with Vite-React to create an efficient and interactive sorting visualizer.
- **User Authentication:** Secure login and registration functionalities using JWT (JSON Web Tokens) and bcrypt for password hashing.
- **Interactive Visualizations:** Supports various sorting algorithms including Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort.
- **Responsive Design:** Tailwind CSS ensures a responsive and visually appealing interface.
- **CORS Handling:** Configured Cross-Origin Resource Sharing (CORS) for seamless client-server communication.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed.

### Frontend Setup

1. **Clone the Repository**
   ```
   git clone <repository-url>
   cd <repository-directory>
   ```


2. **Initialise npm & Install Dependencies**

    ```
    npm init
    npm install 
    ```

3.  **Run the Development Server**

    ```
    npm run dev
    ```

5. **Backend Setup**
Navigate to the Backend Directory

    ```
    cd <backend-directory>
    ```

6. **Install Dependencies**

    ```
    npm install
    ```

7. **Start the Backend Server**

    ```
    npm start
    ```

Accessing the Application 
Once the servers are running:

Open your browser and go to the specified host (e.g., http://localhost:3000).

#

You will be redirected to the home page where you can register or log in.
## Home Page
![Home-Page](</frontend/images/home.png>)

## Register
If you don't have an account, click on the register button and create a new account.

![Register-Page](</frontend/images/reg.png>)


## Login
If you already have an account, use your email and password to log in.
Using the Application

![Login-Page](</frontend/images/log.png>)
### Using the Application

After logging in, you will see four main sections:

- **Home**

- **Visualizer**

- **About**

- **Logout**

**Visualizer Page:**

Click on the **Visualizer** section to be redirected to the visualization page where you can interact with the sorting algorithms.

![Visualizer Page](</frontend/images/Screenshot (239).png>)

Here, you will find interactive visualizations for:

- **Bubble Sort**

- **Selection Sort**

- **Insertion Sort**

- **Merge Sort**

- **Quick Sort**

Feel free to explore and interact with the different algorithms to see how they work!


## Video Explanation

![Video](</frontend/images/Unicode-A Algorithm Visualizer - Google Chrome 2024-08-23 20-17-02.mp4>)


- [Acknowledgment](<https://vitejs.dev/>)
- [Vite](<https://vitejs.dev/>)
- [React](<https://react.dev/>)
- [Tailwind CSS](<https://tailwindcss.com/>)
- [JWT](<https://jwt.io/>)
- [bcrypt](<https://www.npmjs.com/package/bcrypt>)
- [cors](<https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS>)
For any questions or issues, please open an issue on this repository or contact the project maintainers.


### Instructions

1. Replace `<repository-url>` and `<repository-directory>` with the actual repository URL and directory name.
2. Replace `<backend-directory>` with the path to the backend directory.
3. Replace `<image-placeholder>` with the path to the actual image that represents the Visualizer page.
