# SparkNate Donation

**SparkNate** is a curated donation platform where only verified campaigns added by admins are showcased. It focuses on **trust**, **transparency**, and **impact**, making it easier for people to contribute to genuine causes.

🌐 **Live Site**: [https://sparknate-donation-qpsd.vercel.app/](https://sparknate-donation-qpsd.vercel.app/)

---

## ✨ Features

- 🧑‍💼 **Admin Panel**: Secure admin login to manage donation campaigns
- 🧾 **Verified Causes**: Only admin-approved donation campaigns are displayed
- 🖼️ **Image Upload**: Upload images via **Cloudinary**
- 💳 **Stripe Payments**: Seamless and secure donation handling with Stripe
- 📝 **View Story**: Donors can view a detailed background before contributing
- 🔍 **Search & Filter**: Easily find causes by keyword or category
- 📱 Fully responsive, clean UI built with Tailwind CSS

---

## Tech Stack

### Frontend:
- **React.js**
- **Vite**
- **Tailwind CSS**
- **React Router**
- **Axios**

### Backend:
- **Node.js**
- **Express.js**
- **MongoDB** (Mongoose)
- **Cloudinary** for image uploads
- **Stripe** for payments
- **dotenv** for environment config
- **CORS** handled for frontend-backend communication

---

## 🔐 Admin Authentication

- Admins are authenticated via `localStorage` flag (`isAdminLoggedIn`)
- Admin route access is protected from unauthorized users

---

## 📂 Folder Structure

