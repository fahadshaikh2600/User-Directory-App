# User Directory App

A simple React + Redux application that fetches users from [DummyJSON
API](https://dummyjson.com/docs/users) and displays them in a searchable
directory.

## 🚀 Features

-   Fetches users from **https://dummyjson.com/users** using **Axios**
-   Displays all users on the homepage
-   Click a user → routes to `/user/:id` to show detailed info
-   Stores data in **Redux store** (no extra API calls on detail page)
-   **React Router** handles navigation
-   Bonus: Search/filter users by name and basic error handling

## 🛠 Tech Stack

-   React
-   Redux Toolkit
-   React Router DOM
-   Axios

## 📂 Project Structure

    src/
     ├── app/store.js           # Redux store configuration
     ├── features/users/usersSlice.js # Redux slice for users
     ├── pages/Home.jsx         # Homepage with list and search
     ├── pages/UserDetail.jsx   # Detail page for a single user
     ├── App.jsx                # Routes
     ├── main.jsx               # Entry point with Redux Provider
     └── styles.css             # Basic styles

## ▶ Installation & Usage

1.  Clone or create project with Vite:

    ``` bash
    npm create vite@latest user-directory
    cd user-directory
    ```

2.  Install dependencies:

    ``` bash
    npm install react-redux @reduxjs/toolkit react-router-dom axios
    ```

3.  Replace the default `src/` files with the provided code.\

4.  Run the development server:

    ``` bash
    npm run dev
    ```

5.  Open your browser at `http://localhost:5173/`.

## 🧪 How It Works

1.  On loading **Home**, `useEffect` calls Axios to fetch users.\
2.  Fetched users are stored in **Redux** via `dispatch(setUsers())`.\
3.  The homepage lists all users and includes a **search bar**.\
4.  Clicking a user name navigates to `/user/:id` (React Router).\
5.  **UserDetail** reads data **directly from Redux** (no second API
    call).

## ✅ Requirements Check

  Requirement                             Implemented?
  --------------------------------------- --------------
  Fetch users from DummyJSON API          ✅
  Display users on homepage               ✅
  Route to `/user/:id` for details        ✅
  Use Redux store for data                ✅
  Use React Router for navigation         ✅
  Bonus: Search/filter & error handling   ✅

