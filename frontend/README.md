# Student Course Management System - Frontend

A React-based frontend application for managing students, courses, and enrollments.

## Project Structure

```
frontend/
├── public/                 # Static files
├── src/
│   ├── api/               # API integration layer
│   │   ├── axios.js       # Axios instance with interceptors
│   │   ├── authApi.js     # Authentication endpoints
│   │   ├── studentApi.js  # Student endpoints
│   │   ├── courseApi.js   # Course endpoints
│   │   └── enrollmentApi.js # Enrollment endpoints
│   │
│   ├── assets/            # Images, fonts, and other static assets
│   │
│   ├── components/        # Reusable React components
│   │   ├── common/        # Common components (Header, Footer, etc)
│   │   ├── forms/         # Form components
│   │   ├── tables/        # Table components
│   │   ├── cards/         # Card components
│   │   └── layout/        # Layout components
│   │
│   ├── pages/             # Page components
│   │   ├── auth/          # Authentication pages (Login, Register)
│   │   ├── dashboard/     # Dashboard page
│   │   ├── students/      # Student management pages
│   │   ├── courses/       # Course management pages
│   │   └── enrollments/   # Enrollment management pages
│   │
│   ├── routes/            # Routing configuration
│   │   ├── AppRoutes.jsx  # Main routes
│   │   └── ProtectedRoute.jsx # Protected route wrapper
│   │
│   ├── hooks/             # Custom React hooks
│   │   └── useAuth.js     # Authentication hook
│   │
│   ├── context/           # React context
│   │   └── AuthContext.jsx # Authentication context
│   │
│   ├── services/          # Business logic services
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # React DOM entry point
│   └── index.css          # Global styles
│
├── .env.example           # Example environment variables
├── .gitignore             # Git ignore configuration
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update `.env` with your backend API URL:
```
VITE_API_BASE_URL=http://localhost:8080/api
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## Features

- **Authentication**: Login and session management with JWT tokens
- **Dashboard**: Overview of system statistics
- **Student Management**: View and manage student records
- **Course Management**: View and manage course information
- **Enrollment Management**: Manage student enrollments in courses
- **Protected Routes**: Routes protected by authentication
- **API Integration**: Centralized API client with axios

## Technology Stack

- **React 18**: JavaScript library for building user interfaces
- **React Router v6**: Client-side routing
- **Axios**: HTTP client for API requests
- **Vite**: Fast build tool and development server
- **CSS3**: Styling

## API Integration

All API calls are made through the `/src/api` directory. Each module (auth, students, courses, enrollments) has its own API file that exports methods for CRUD operations.

### Authentication Flow

1. User logs in with credentials
2. Backend returns JWT token
3. Token is stored in localStorage
4. Token is automatically included in subsequent API requests via axios interceptor
5. If token expires (401 error), user is redirected to login page

## State Management

The application uses React Context API for global state management, specifically for authentication state. The `AuthContext` manages:
- Current user information
- Authentication status
- Login/logout operations

## Styling

The application uses CSS3 with a modular approach. Each component has its own CSS file for scoped styling.

## Contributing

When adding new pages or components:
1. Create the component in the appropriate directory
2. Create a corresponding CSS file for styling
3. Export the component properly
4. Update the routes if it's a page component

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API base URL | http://localhost:8080/api |

## License

This project is part of the Student Course Management System.
