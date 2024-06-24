# Rodeo Registration System

The Rodeo Registration System is a comprehensive application to manage series, rodeos, contestants, events, and results for rodeo competitions. This system was initially developed as a desktop application using PyQt6 and has now been migrated to a web application using Django and Django REST Framework.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Setup Instructions](#setup-instructions)
5. [API Endpoints](#api-endpoints)
6. [Database Schema](#database-schema)
7. [Security and Privacy](#security-and-privacy)
8. [Contributing](#contributing)
9. [License](#license)

## Project Overview

This project is designed to facilitate the registration and management of contestants in various rodeo events. It includes functionality for creating series, rodeos, contestants, and events, and for mapping contestants to specific events within rodeos.

## Features

- CRUD operations for Series, Rodeo, Contestant, and Event
- Unique constraint enforcement for contestant-event mappings
- Partner management for team events
- API for fetching, creating, updating, and deleting records
- Web-based user interface for easy management

## Tech Stack

- Backend: Django, Django REST Framework
- Database: SQLite (can be switched to PostgreSQL or MySQL for production)
- Frontend: HTML, CSS, JavaScript (integrated with Django templates)
- Deployment: Docker, Gunicorn, Nginx (for production)

## Setup Instructions

### Prerequisites

- Python 3.8+
- Django 4.0+
- Docker (for deployment)

### Local Development Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/rodeo-registration-system.git
    cd rodeo-registration-system
    ```

2. **Create and activate a virtual environment:**

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. **Install dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Apply migrations:**

    ```bash
    python manage.py migrate
    ```

5. **Run the development server:**

    ```bash
    python manage.py runserver
    ```

6. **Access the application:**
   
    Open your browser and navigate to `http://127.0.0.1:8000`.

### Docker Setup

1. **Build the Docker image:**

    ```bash
    docker build -t rodeo-registration-system .
    ```

2. **Run the Docker container:**

    ```bash
    docker run -d -p 8000:8000 rodeo-registration-system
    ```

3. **Access the application:**
   
    Open your browser and navigate to `http://127.0.0.1:8000`.

## API Endpoints

The application exposes several API endpoints for CRUD operations. Below are some examples:

- `GET /api/series/` - List all series
- `POST /api/series/` - Create a new series
- `GET /api/series/:id/` - Retrieve a specific series
- `PUT /api/series/:id/` - Update a specific series
- `DELETE /api/series/:id/` - Delete a specific series

Refer to the [API documentation](api_docs.md) for a complete list of endpoints and their usage.

## Database Schema

The database schema follows the provided structure. Below is a summary of the models:

- **Series**: Stores series information
- **Rodeo**: Stores rodeo information
- **Contestant**: Stores contestant information
- **ContestRodeoSeries**: Maps contestants to rodeo series
- **Event**: Stores event information
- **ContestEvent**: Maps contested events to rodeo series
- **EventPartner**: Stores partner event information
- **MensBreakaway**: Stores men's breakaway frequency in events

## Security and Privacy

- **Authentication**: Ensure all API endpoints are secured using Django's authentication system.
- **Authorization**: Implement permission checks to ensure users can only access and modify allowed data.
- **Data Integrity**: Use database constraints and application logic to maintain data consistency.
- **Data Privacy**: Follow GDPR and other relevant regulations to protect user data.

## Contributing

We welcome contributions from the community. Please follow the guidelines below:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -am 'Add a new feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
