# Cinema Booking App

A web application for browsing movies and booking cinema tickets, built with Astro and React.

## ✨ Features

*   **User Authentication:** Secure login and registration functionality.
*   **Studio Browsing:** View a list of available cinema studios.
*   **Showtime Selection:** Choose your preferred theater, date, and time for a movie.
*   **Responsive Design:** A clean and modern UI that works on all devices.

## 🛠️ Tech Stack

*   **Framework:** [Astro](https://astro.build/)
*   **UI Library:** [React](https://react.dev/) (with TypeScript)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Emotion](https://emotion.sh/)
*   **Data Fetching:** [TanStack Query (React Query)](https://tanstack.com/query/latest)
*   **Authentication:** Cookie-based token handling with [nookies](https://github.com/maticzav/nookies).

## 🚀 Project Structure

The project follows a component-based architecture, organizing components by their complexity (`atoms`, `molecules`, `organisms`).

```
/
├── public/                   # Static assets (images, fonts, etc.)
├── src/
│   ├── components/           # Reusable UI components (React)
│   │   ├── atoms/            # Basic building blocks (Button, Input)
│   │   ├── molecules/        # Composition of atoms
│   │   ├── organisms/        # Composition of molecules and atoms
│   │   └── templates/        # Page-level layout components
│   ├── constants/            # Application-wide constants
│   ├── layouts/              # Astro layout components
│   ├── lib/                  # Utility functions (cn, cookie, http)
│   ├── pages/                # Astro pages and routes
│   ├── services/             # API service functions (auth, studio)
│   ├── styles/               # Global styles
│   └── types/                # TypeScript type definitions
├── astro.config.mjs          # Astro configuration
├── package.json              # Project dependencies and scripts
└── tsconfig.json             # TypeScript configuration
```

## 🏃 Getting Started

Follow these steps to get the project running locally.

### Prerequisites

*   Node.js (v18 or higher is recommended)
*   npm (or your preferred package manager)

### Installation

1.  Clone the repository.
2.  Navigate to the project directory:
    ```sh
    cd cinema-booking-app
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running the Development Server

To start the local development server, run the following command:

```sh
npm run dev
```

The application will be available at `http://localhost:4321`.

## 🧞 Available Commands

| Command         | Action                                     |
| :-------------- | :----------------------------------------- |
| `npm install`   | Installs project dependencies.             |
| `npm run dev`   | Starts the local development server.       |
| `npm run build` | Builds the site for production.            |
| `npm run preview` | Previews the production build locally.     |