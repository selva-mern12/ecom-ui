# 🍭 ÉLÉGANCE - E-commerce Frontend

ÉLÉGANCE is a responsive, modern e-commerce frontend built using **React.js**, **JavaScript**, and **CSS**, with real-time data integration from the **Fake Store API**. It features product browsing, cart functionality, and state persistence through **React Context API** and `localStorage`.

---

## 🚀 Features

- **Home Page**: Includes header with logo, navigation, cart icon, hero banner, featured products, and footer.
- **Product Listing Page**: Displays products in a responsive grid (image, title, price, Add to Cart).
- **Mini Cart**: Cart dropdown with items, subtotal, and quick links (View Cart / Checkout).
- **Full Cart Page**: List of added items with +/- quantity, remove option, and order summary.
- **State Management**: Powered by React Context API for efficient global cart state.
- **Persistent Cart**: Items persist via `localStorage` across sessions.
- **Responsive Design**: Tailored for mobile, tablet, and desktop using Tailwind CSS.
- **Error Handling**: Graceful loading and error UI for API failures.

---

## 🧰 Prerequisites

Ensure the following are installed:

- **Node.js** `v16+`
- **npm** `v7+` or **yarn**
- **Git**

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone <[https://github.com/selva-mern12/ecom-ui](https://github.com/selva-mern12/ecom-ui)>
cd ecom-frontend
```

### 2. Install Dependencies
```bash
npm install
```

Installs React, Axios, React Router, and other required packages.

### 3. Start the Development Server
```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔍 Explore the App

- Home: `/`
- Products: `/products`
- Cart: `/cart`

Interact with the mini cart via the cart icon in the header.

---

## 🗂️ Project Structure

```
ecommerce-app/
├── public/                  # index.html, favicon
├── src/
│   ├── components/          # Header, Footer, Cart, etc.
│   ├── context/             # CartContext
│   ├── pages/               # HomePage
│   ├── App.js               # Routing setup
│   ├── index.js             # App entry point
│   └── index.css             
├── package.json             # Dependencies and scripts
└── README.md                # Current file
```

---

## 📦 Deployment

### Vercel

1. Push your code to GitHub.
2. Create a new project on [Vercel](https://vercel.com).
3. Set the following:
   - **Framework**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
4. Deploy and get your live URL.

---

## 📃 Approach

- **React.js**: Modular UI & client-side routing with `react-router-dom`
- **Context API**: Lightweight state management for cart
- **Fake Store API**: Dynamic product data fetching
- **localStorage**: Cart persistence
- **Error Handling**: Graceful handling of loading & errors

---

## 📝 Assumptions

- "Checkout" button is disabled (as per assignment).
- Shipping is hardcoded at **$10**.
- Cart only stores ID, title, price, and image.
- Design is simplified based on the Mellow theme.

---

## 🏰 Bonus Features

- ✅ Cart items persist across sessions using `localStorage`.

---

## 🔮 Future Improvements

- 🔍 Product search & filter
- 🎨 Animations via Framer Motion
- 🌙 Dark mode toggle
- ✅ Unit testing (Jest, React Testing Library)
- 💳 Real payment integration

---

## 🔗 Live Demo

[👉 View Live Site](https://elegance-smp.vercel.app/)

---

## 🛠️ Troubleshooting

- **Port Conflict**: Try a different port:  
  `PORT=3001 npm start`
- **API Errors**: Ensure you're online; API data is fetched live.
- **Dependency Issues**: Run:
  ```bash
  npm install
  npm cache clean --force
  ```

---

## 📬 Contact

For questions or feedback, reach me at:  
**[selva.mern12@gmail.com]**

---

Happy Shopping with **ÉLÉGANCE**! 🍭

