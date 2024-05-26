# Image-Text-Visual-Separator

This repository contains a web application that allows users to upload an image and extract text from it using Optical Character Recognition (OCR). The application is built with a Flask backend and a React frontend.

## Features

- Upload an image file
- Extract text from the uploaded image using `easyocr`
- Display the extracted text on the screen

## Technologies Used

- **Backend**: Flask, Flask-CORS, easyocr
- **Frontend**: React, Axios

## Getting Started

### Prerequisites

- Python 3.x
- Node.js
- npm (Node Package Manager)

### Backend Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/image-text-extraction-app.git
    cd image-text-extraction-app/backend
    ```

2. **Create a virtual environment**:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install the dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Run the backend server**:
    ```bash
    python main.py
    ```

### Frontend Setup

1. **Navigate to the frontend directory**:
    ```bash
    cd ../frontend
    ```

2. **Install the dependencies**:
    ```bash
    npm install
    ```

3. **Start the frontend server**:
    ```bash
    npm start
    ```

## Usage

1. Navigate to `http://localhost:3000` in your web browser.
2. Click "Choose File" to select an image file from your computer.
3. Click "Extract Text" to upload the image and extract the text.
4. The extracted text will be displayed on the screen.


