# 4Mobile — E-commerce Web Platform

**4Mobile** is a modern, responsive frontend-only e-commerce platform designed for small and medium businesses. It provides a clean and fast user interface for showcasing products and is fully integrated with a custom backend.

## 🌟 Key Features

* 🛒 Product catalog with categories
* 🔍 Search and filter functionality
* 📱 Mobile-friendly responsive design
* 📦 Product detail pages
* 🖼 Image preview and layout
* ⚡ Fast and lightweight UI built with Next.js

## 🛠 Tech Stack

* **Framework**: Next.js
* **Library**: React
* **UI Kit**: Bootstrap 5
* **Icons**: Bootstrap Icons
* **CI/CD**: GitHub Actions

## 📁 Project Structure

```
/public         # Static assets (images, icons, etc.)
/pages          # Next.js pages
/components     # UI components
/styles         # CSS modules and global styles
```

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/4mobile.git
cd 4mobile
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 🔌 Backend

The frontend connects to a backend available at [https://api.4mobile.kz](https://api.4mobile.kz), powered by **Cockpit CMS** — a headless content management system by [Cockpit-HQ](https://getcockpit.com/).

All content and data (products, categories, etc.) are fetched via Cockpit’s RESTful API.

## ⚙️ CI/CD Automation

4Mobile uses **GitHub Actions** for continuous integration and deployment:

* Automatic build and lint on every push
* Deploy to production server via SSH or third-party hosting (e.g., Vercel, Netlify)
* Environment variables and secrets managed via GitHub Settings → Secrets

Workflow files are located in `.github/workflows/` directory.

## 📄 License

MIT License

---

**Made with ❤️ in Kazakhstan by [Temirkhan](https://github.com/Temirkhan)**