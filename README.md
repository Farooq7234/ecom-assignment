# 🛍️ Simple E-commerce with Categorization

## 🚀 Overview

This project is a simple e-commerce authentication system that allows users to sign up, log in, and mark their preferred categories. It includes protected routes, pagination, and persistent data storage.

## 📸 Demo Video

[Watch the demo](https://www.loom.com/share/fe6ee38c436745e397ba2cd994ab8660)

## 🌍 Live Deployment

[Live Demo](https://e-commerce-categorization.vercel.app/)

## 📌 Features

- **User Authentication:** Sign-up and login functionality
- **Protected Route:** Only logged-in users can access the category selection page
- **Category Management:**
  - Displays categories from a database (generated using `faker.js`)
  - Allows users to mark their preferred categories
  - Persists user selections across sessions
- **Pagination:** 6 categories per page
- **Static Header:** Common across all pages
- **Error Handling & Security:** Ensuring a smooth and secure user experience

## 🛠️ Tech Stack

- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Node.js
- **Database:** MongoDB
- **Libraries:**
  - `faker.js` for generating 100 category entries
  - `Tailwind CSS`
  - `Resend (Email Verification)`
  - `Next-Auth (Authentication)`

## 🎯 Installation & Setup

Follow these steps to set up and run the project locally:

1. **Clone the repository:**

```
git clone https://github.com/farooq7234/ecom-assignment .git
```

```
cd ecom-assignment
```

2. **Install dependencies:**

```
npm install
```

3. **Setup environment variables:**  
   Create a `.env` file and add the necessary credentials:

```
MONGODB_URI =
RESEND_API_KEY =
NEXTAUTH_SECRET =
```

5. **Access the app:**  
   Open [http://localhost:3000](http://localhost:3000) in your browser.
