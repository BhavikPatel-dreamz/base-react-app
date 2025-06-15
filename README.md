# React Redux Tailwind Admin Dashboard

A modern, responsive admin dashboard built with React, Redux Toolkit, TypeScript, and Tailwind CSS. This project implements a role-based authentication system with protected routes and a clean, intuitive user interface.

## Features

- 🔐 **Authentication & Authorization**
  - JWT-based authentication
  - Role-based access control (Admin/User)
  - Protected routes
  - Token refresh mechanism

- 🎨 **Modern UI/UX**
  - Responsive design with Tailwind CSS
  - Clean and intuitive interface
  - Dark/Light mode support
  - Loading states and error handling

- 📊 **Dashboard Features**
  - User management
  - Profile management
  - Role-based access
  - Real-time updates

- 🛠 **Tech Stack**
  - React 18
  - Redux Toolkit for state management
  - TypeScript for type safety
  - Tailwind CSS for styling
  - React Router for navigation
  - Axios for API calls

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-redux-tailwind.git
   cd react-redux-tailwind
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=http://localhost:3000/api
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The application will be available at `http://localhost:5173`.

## Project Structure

```
src/
├── api/              # API services and configuration
├── app/             # Redux store and slices
├── components/      # Reusable components
├── pages/          # Page components
├── routes/         # Route configuration
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## Authentication Flow

1. User logs in with email and password
2. Server validates credentials and returns JWT tokens
3. Tokens are stored in localStorage
4. Protected routes check for valid authentication
5. Token refresh mechanism handles expired tokens

## Role-Based Access

- **Admin**
  - Access to all features
  - User management
  - System settings

- **User**
  - Basic dashboard access
  - Profile management
  - Limited features

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/) 