# bluesense-api

## Introduction

The BlueSense API serves as a REST API application for the BlueSense project, an IoT and mobile application project designed for monitoring water quality.

## Tech Stack

This project utilizes several key technologies for its implementation and functionality. Here is a list of the technologies used:

- **Express**: A web framework for Node.js used to build the server-side application.
- **PostgreSQL**: A relational database management system used to store and manage data.
- **Firebase Authentication**: An authentication service used for user management.
- **FCM (Firebase Cloud Messaging)**: Used for sending push notifications to user devices.
- **Nginx**: A web server used as a reverse proxy on Google Compute Engine to deploy this project.
- **Google Compute Engine**: A virtual machine service from Google Cloud used for hosting and deploying the application.

## Installation

1. Clone this repository:

```shell
git clone https://github.com/BlueSense-by-ByteTeam/bluesense-api.git
```

2. Navigate to directory project:

```shell
cd bluesense-api/
```

3. Configure Environment Variables:

Create a .env file at the root of your project and configure your Environment Variables.

```
DATABASE_URL="postgresql://postgres:password@localhost:5432/dots"
PORT = 8080
FCM_KEY="xxx"
```

4. Add firebase credentials:

Download Firebase credentials from Firebase and rename it to _bluesense-api-firebase.json_, then place it in the root folder.

5. Install dependencies:

```shell
npm install
```

6. Migrate Database:

```shell
npx prisma migrate deploy
```

7. Run application:

```shell
npm run start
```

Aplikasi akan berjalan di http://localhost:{port}.

## Endpoint

### Register User

- **Method:** POST
- **URL:** `/api/users/register`
- **Description:** Register a new user.
- **Authentication:** Bearer Token is required.
- **Request Body:**
  ```json
  {
    "name": "test69",
    "email": "test69@test.com"
  }
  ```
- **Respond:**

  - **Status Code:** 200 OK
  - **Body:**
    ```json
    {
      "data": {
        "id": "866b6a01-8482-49d6-b5eb-ab19b05605f7",
        "name": "roni",
        "email": "test@test.com",
        "firebase_id": "q94Kc14rJ8OLRbCGbyVGUWHrbvv1",
        "telp": null,
        "photo_url": "https://ui-avatars.com/api/?size=128&background=0D8ABC&color=fff&name=roni",
        "created_at": "2024-01-11T13:34:57.144Z",
        "updated_at": "2024-01-11T13:34:57.144Z"
      }
    }
    ```

## Get User Data

- **Method:** GET
- **URL:** `/api/users`
- **Description:** Retrieve a user profile data.
- **Authentication:** Bearer Token is required.
- **Response:**

  - **Status Code:** 200 OK
  - **Body:**

    ```json
    {
      "data": {
        "id": "866b6a01-8482-49d6-b5eb-ab19b05605f7",
        "name": "roni",
        "email": "test@test.com",
        "firebase_id": "q94Kc14rJ8OLRbCGbyVGUWHrbvv1",
        "telp": null,
        "photo_url": "https://ui-avatars.com/api/?size=128&background=0D8ABC&color=fff&name=roni",
        "created_at": "2024-01-11T13:34:57.144Z",
        "updated_at": "2024-01-11T13:34:57.144Z"
      }
    }
    ```

### Register User Devices

- **Method:** POST
- **URL:** `/api/devices`
- **Description:** Register a new devices from user.
- **Authentication:** Bearer Token is required.
- **Request Body:**
  ```json
  {
    "device_id": "123123123",
    "name": "xxx",
    "province": "jatim",
    "city": "tulungagung",
    "district": "lola",
    "address": "rejosari",
    "water_source": "sumur"
  }
  ```
- **Respond:**

  - **Status Code:** 200 OK
  - **Body:**
    ```json
    {
      "message": "success"
    }
    ```

## Get User Devices

- **Method:** GET
- **URL:** `/api/devices`
- **Description:** Retrieve a user devices data.
- **Authentication:** Bearer Token is required.
- **Response:**

  - **Status Code:** 200 OK
  - **Body:**

    ```json
    {
      "data": [
        {
          "id": "afc2f90c-1c4f-40f0-9ec8-b4a3335d06c7",
          "user_id": "866b6a01-8482-49d6-b5eb-ab19b05605f7",
          "device_id": "978cadfe-8616-4b27-83af-17ae2e3513d7",
          "device": {
            "id": "978cadfe-8616-4b27-83af-17ae2e3513d7",
            "device_id": "123123123",
            "mqtt_topic": "esp32/dev",
            "mqtt_base_url": "f2e4701e.ala.us-east-1.emqxsl.com"
          },
          "device_detail": {
            "id": "73632bd2-ad80-44f2-9776-32dc1c235be2",
            "device_id": "123123123",
            "name": "xxx",
            "province": "jatim",
            "district": "Gondang",
            "city": "tulungagung",
            "address": "rejosari",
            "water_source": "sumur",
            "user_device_id": "afc2f90c-1c4f-40f0-9ec8-b4a3335d06c7"
          }
        },
        {
          "id": "ebf49226-a7d8-4672-9470-32506706dc60",
          "user_id": "866b6a01-8482-49d6-b5eb-ab19b05605f7",
          "device_id": "978cadfe-8616-4b27-83af-17ae2e3513d7",
          "device": {
            "id": "978cadfe-8616-4b27-83af-17ae2e3513d7",
            "device_id": "123123123",
            "mqtt_topic": "esp32/dev",
            "mqtt_base_url": "f2e4701e.ala.us-east-1.emqxsl.com"
          },
          "device_detail": {
            "id": "976dbf45-5f98-471c-b9e2-254439d9fd71",
            "device_id": "123123123",
            "name": "xxx",
            "province": "jatim",
            "district": "lola",
            "city": "tulungagung",
            "address": "rejosari",
            "water_source": "sumur",
            "user_device_id": "ebf49226-a7d8-4672-9470-32506706dc60"
          }
        }
      ]
    }
    ```

## Delete User Device

- **Method:** DELETE
- **URL:** `/api/devices/{id}`
- **Description:** Delete user device by spesific device id.
- **Authentication:** Bearer Token is required.
- **Response:**

  - **Status Code:** 200 OK
  - **Body:**

    ```json
    {
      "message": "Success"
    }
    ```

### Post Device Logs

- **Method:** POST
- **URL:** `/api/devices/logs`
- **Description:** Post new logs from iot sensor.
- **Authentication:** Bearer Token is required.
- **Request Body:**
  ```json
  { "device_id": "a", "ph": 2.2, "tds": 3 }
  ```
- **Respond:**

  - **Status Code:** 200 OK
  - **Body:**
    ```json
    {
      "data": {
        "id": "string",
        "ph": "number",
        "tds": "number",
        "created_at": "Date",
        "device_id": "string"
      }
    }
    ```

## Get Latest Log

- **Method:** GET
- **URL:** `/api/devices/logs/{id}`
- **Description:** Retrieve latest log from spesific device
- **Authentication:** Bearer Token is required.
- **Response:**

  - **Status Code:** 200 OK
  - **Body:**

    ```json
    {
      "data": {
        "status": "buruk",
        "quality": "buruk",
        "drinkable": "no",
        "log": {
          "ph": 8,
          "tds": 1000000,
          "created_at": "2024-01-11T22:23:35.212Z"
        }
      }
    }
    ```
