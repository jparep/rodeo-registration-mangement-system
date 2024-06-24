# Rodeo Registration System

The Rodeo Registration System is a web application designed to manage rodeo series, rodeo events, and contestant registrations efficiently. This application is built using Django for the backend and is designed with a focus on maintainability, scalability, and user-friendliness.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Database Schema](#database-schema)
- [Models Overview](#models-overview)
- [Usage](#usage)
- [Security and Privacy](#security-and-privacy)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- Manage series, rodeos, contestants, and events
- Register contestants for specific events
- Ensure unique contestant-event combinations
- Handle partner events with validation for different partners
- Generate reports and summaries
- User-friendly interface

## Technologies Used

- **Backend:** Django
- **Database:** SQLite (development), PostgreSQL/MySQL (production)
- **Frontend:** Django Templates (extendable to React.js)
- **Others:** UUID for event IDs, Check Constraints for data integrity

## Setup and Installation

### Prerequisites

- Python 3.8+
- pip (Python package installer)
- Virtualenv (optional but recommended)

### Installation Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/rodeo-registration-system.git
    cd rodeo-registration-system
    ```

2. **Create a virtual environment:**
    ```bash
    python -m venv env
    source env/bin/activate  # On Windows use `env\Scripts\activate`
    ```

3. **Install the dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4. **Apply database migrations:**
    ```bash
    python manage.py migrate
    ```

5. **Run the development server:**
    ```bash
    python manage.py runserver
    ```

6. **Access the application:**
    Open your web browser and navigate to `http://localhost:8000`

## Database Schema

The application uses a relational database with the following schema:

![Database Schema](docs/database_schema.png)

## Models Overview

- **Series**: Represents a rodeo series.
- **Rodeo**: Represents a rodeo event.
- **Contestant**: Represents a contestant.
- **ContestRodeoSeries**: Maps contestants to specific rodeo series.
- **Event**: Represents an event within a rodeo.
- **ContestEvent**: Maps contested events to rodeo series.
- **EventPartner**: Maps partner information for specific events.
- **MensBreakawayNumber**: Stores the number of breakaway entries for men's events.

## Usage

1. **Manage Series, Rodeos, and Events:**
   - Add, update, or delete series, rodeos, and events via the admin interface or dedicated views.

2. **Register Contestants:**
   - Register contestants for events, ensuring unique combinations and handling partner events appropriately.

3. **Generate Reports:**
   - Access various reports and summaries to track contestant participation and event statistics.

## Security and Privacy

- **Authentication and Authorization:**
  - Ensure that sensitive actions are protected by proper authentication and authorization mechanisms.
  - Use Django's built-in User and Group models to manage permissions.

- **Data Integrity:**
  - Utilize database constraints (e.g., unique constraints, check constraints) to maintain data integrity.
  - Regularly back up the database and use secure storage solutions.

- **Privacy:**
  - Handle personal data in compliance with relevant data protection regulations (e.g., GDPR).
  - Ensure secure storage and transmission of sensitive data.

## Documentation

- **Code Documentation:**
  - Inline comments and docstrings are used extensively throughout the codebase.
  - Follow PEP 8 style guidelines.

- **User Documentation:**
  - Detailed user guides and FAQs are available in the `docs` directory.
  - API documentation is generated using tools like Django REST framework's built-in documentation generator.

## Contributing

We welcome contributions from the community! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to get involved.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

For any questions or feedback, please open an issue on GitHub or contact the project maintainer at [email@example.com](mailto:email@example.com).
