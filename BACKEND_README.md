# Student Course Management System - Backend (Spring Boot)

A comprehensive Spring Boot backend application for managing students, courses, and enrollments with JWT-based authentication and security.

## Project Structure

```
backend/
├── src/main/java/com/scms/
│   │
│   ├── config/
│   │   ├── SecurityConfig.java          # Spring Security configuration
│   │   └── CorsConfig.java              # CORS configuration
│   │
│   ├── security/
│   │   ├── JwtFilter.java               # JWT authentication filter
│   │   ├── JwtService.java              # JWT token generation and validation
│   │   └── CustomUserDetailsService.java # User details service for authentication
│   │
│   ├── auth/
│   │   ├── controller/
│   │   │   └── AuthController.java      # Authentication endpoints
│   │   ├── service/
│   │   │   └── AuthService.java         # Authentication business logic
│   │   ├── dto/
│   │   │   ├── LoginRequest.java
│   │   │   ├── RegisterRequest.java
│   │   │   ├── AuthResponse.java
│   │   │   └── UserDto.java
│   │   ├── entity/
│   │   │   └── User.java                # User entity
│   │   └── repository/
│   │       └── UserRepository.java
│   │
│   ├── student/
│   │   ├── controller/
│   │   │   └── StudentController.java   # Student REST endpoints
│   │   ├── service/
│   │   │   └── StudentService.java      # Student business logic
│   │   ├── repository/
│   │   │   └── StudentRepository.java
│   │   ├── dto/
│   │   │   └── StudentDto.java
│   │   └── entity/
│   │       └── Student.java             # Student entity
│   │
│   ├── course/
│   │   ├── controller/
│   │   │   └── CourseController.java    # Course REST endpoints
│   │   ├── service/
│   │   │   └── CourseService.java       # Course business logic
│   │   ├── repository/
│   │   │   └── CourseRepository.java
│   │   ├── dto/
│   │   │   └── CourseDto.java
│   │   └── entity/
│   │       └── Course.java              # Course entity
│   │
│   ├── enrollment/
│   │   ├── controller/
│   │   │   └── EnrollmentController.java # Enrollment REST endpoints
│   │   ├── service/
│   │   │   └── EnrollmentService.java   # Enrollment business logic
│   │   ├── repository/
│   │   │   └── EnrollmentRepository.java
│   │   ├── dto/
│   │   │   └── EnrollmentDto.java
│   │   └── entity/
│   │       └── Enrollment.java          # Enrollment entity
│   │
│   ├── dashboard/
│   │   └── controller/
│   │       └── DashboardController.java # Dashboard statistics endpoints
│   │
│   ├── exception/
│   │   └── GlobalExceptionHandler.java  # Global exception handling
│   │
│   └── ScmsApplication.java             # Main Spring Boot application
│
├── src/main/resources/
│   └── application.properties            # Application configuration
│
├── pom.xml                              # Maven dependencies
├── mvnw / mvnw.cmd                      # Maven wrapper scripts
└── README.md                             # This file
```

## Key Features

- **JWT Authentication**: Secure token-based authentication for API access
- **Role-Based Access Control**: User roles and permissions
- **CORS Configuration**: Configured for React frontend at localhost:5173
- **RESTful API**: Clean REST endpoints for all resources
- **Entity Relationships**: Proper JPA entity mappings
- **Exception Handling**: Global exception handler for consistent error responses
- **Data Validation**: Input validation on DTOs
- **Database**: MySQL with Hibernate ORM

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login with email and password
- `POST /api/auth/register` - Register new user
- `GET /api/auth/me` - Get current user information
- `POST /api/auth/logout` - Logout user

### Students
- `GET /api/students` - Get all students
- `GET /api/students/{id}` - Get student by ID
- `POST /api/students` - Create new student
- `PUT /api/students/{id}` - Update student
- `DELETE /api/students/{id}` - Delete student

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/{id}` - Get course by ID
- `POST /api/courses` - Create new course
- `PUT /api/courses/{id}` - Update course
- `DELETE /api/courses/{id}` - Delete course

### Enrollments
- `GET /api/enrollments` - Get all enrollments
- `GET /api/enrollments/{id}` - Get enrollment by ID
- `GET /api/enrollments/student/{studentId}` - Get student's enrollments
- `GET /api/enrollments/course/{courseId}` - Get course enrollments
- `POST /api/enrollments` - Create new enrollment
- `PUT /api/enrollments/{id}` - Update enrollment
- `DELETE /api/enrollments/{id}` - Delete enrollment

### Dashboard
- `GET /api/dashboard/stats` - Get dashboard statistics

## Prerequisites

- Java 17 or higher
- MySQL 8.0 or higher
- Maven 3.6+

## Installation & Setup

### 1. Database Setup

Create MySQL database:
```sql
CREATE DATABASE scms_db;
USE scms_db;
```

### 2. Clone and Navigate

```bash
cd backend
```

### 3. Update Configuration

Edit `src/main/resources/application.properties`:
```properties
spring.datasource.username=your_db_username
spring.datasource.password=your_db_password
spring.datasource.url=jdbc:mysql://localhost:3306/scms_db
jwt.secret=your_secret_key_here
```

### 4. Build the Project

```bash
mvn clean install
```

### 5. Run the Application

Using Maven:
```bash
mvn spring-boot:run
```

Or using Java directly:
```bash
java -jar target/scms-0.0.1-SNAPSHOT.jar
```

The application will start on `http://localhost:8080`

## Technology Stack

- **Spring Boot 4.1.0** - Framework
- **Spring Security** - Authentication & Authorization
- **Spring Data JPA** - Database ORM
- **MySQL** - Database
- **JWT (jjwt)** - Token-based authentication
- **Lombok** - Code generation and reduction
- **Maven** - Dependency management

## Security

- JWT token-based authentication
- Password encryption using BCrypt
- CORS configuration for frontend integration
- Role-based access control
- Global exception handling with security consideration

## Database Schema

### Users Table
- id (Primary Key)
- name
- email (Unique)
- password (Encrypted)
- role
- created_at
- updated_at

### Students Table
- id (Primary Key)
- name
- email (Unique)
- phone_number
- student_id (Unique)
- major
- gpa
- created_at
- updated_at

### Courses Table
- id (Primary Key)
- name
- code (Unique)
- description
- credits
- instructor_name
- capacity
- current_enrollment
- created_at
- updated_at

### Enrollments Table
- id (Primary Key)
- student_id (Foreign Key)
- course_id (Foreign Key)
- enrollment_date
- grade
- status
- created_at
- updated_at

## Error Handling

The application implements global exception handling that returns:
```json
{
  "timestamp": "2024-06-19T10:30:00",
  "status": 400,
  "message": "Validation failed",
  "errors": []
}
```

## Development

### Adding a New Entity
1. Create entity in `{module}/entity/`
2. Create repository in `{module}/repository/`
3. Create DTO in `{module}/dto/`
4. Create service in `{module}/service/`
5. Create controller in `{module}/controller/`

### Authentication Flow
1. User sends credentials to `/api/auth/login`
2. Server validates and returns JWT token
3. Client includes token in Authorization header: `Bearer {token}`
4. Server validates token in JwtFilter before processing requests

## Contributing

1. Follow the existing project structure
2. Use meaningful commit messages
3. Ensure proper error handling
4. Add validation to DTOs
5. Document new endpoints

## License

This project is part of the Student Course Management System.

## Support

For issues or questions, please refer to the project documentation or contact the development team.
