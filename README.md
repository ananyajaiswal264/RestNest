# RestNest 🏡

RestNest is a full‑stack web application inspired by Airbnb, built using **Node.js, Express, MongoDB, and EJS**. It allows users to explore listings, create their own listings, and leave reviews with ratings.

This project was developed as part of a learning journey in full‑stack web development.

---

## ✨ Features

* User authentication (Sign up / Login / Logout)
* Authorization (only owners can edit/delete their listings)
* Create, edit, and delete listings
* Add and delete reviews with ratings
* Flash messages for success and error handling
* Server‑side validation using Joi
* Clean MVC architecture (routes, controllers, models)

---

## 🛠️ Tech Stack

* **Frontend:** EJS, CSS, JavaScript
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Authentication:** Passport.js
* **Other Tools:** Multer, Joi, Connect‑Flash

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ananyajaiswal264/RestNest.git
```

### 2️⃣ Navigate to the project folder

```bash
cd RestNest
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Create a `.env` file

```env
DB_URL=mongodb://127.0.0.1:27017/restnest
SECRET=yourSecretKey
```

### 5️⃣ Start the server

```bash
nodemon app.js
```

### 6️⃣ Open in browser

```
http://localhost:8080
```

---

## 📁 Project Structure

```
RestNest/
│── controllers/
│── init/
│── models/
│── routes/
│── views/
│── public/
│── middleware.js
│── schema.js
│── app.js
│── package.json
```

---

## 🔐 Environment Variables

The project uses environment variables for security:

* `DB_URL` – MongoDB connection string
* `SECRET` – Session secret

Make sure `.env` is added to `.gitignore`.

---

## 📌 Future Improvements

* Image upload with cloud storage
* Search and filter listings
* Responsive UI improvements
* Deployment (Render / Railway)

---

## 👩‍💻 Author

**Ananya Jaiswal**
GitHub: [https://github.com/ananyajaiswal264](https://github.com/ananyajaiswal264)
LinkedIn: [https://www.linkedin.com/in/ananya-jaiswal-86969a2a8/](https://www.linkedin.com/in/ananya-jaiswal-86969a2a8/)

---

⭐ If you like this project, don’t forget to star the repository!
