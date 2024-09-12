# Functional Banking System

The Functional Banking System is a basic web application designed to simulate a simple banking environment where users can perform fundamental financial transactions such as deposits and withdrawals. This project is built using HTML, Tailwind CSS, and vanilla JavaScript, demonstrating the use of front-end technologies to manage and update financial data dynamically.

## Project Overview

This project consists of a user login system and a banking dashboard. The login system checks for valid user credentials before granting access to the main banking interface, ensuring basic security. Once logged in, users can interact with the banking dashboard to deposit money, withdraw funds, and view their current balance. The application ensures that transactions are valid and provides feedback if the user attempts to withdraw more than their available balance.

## Features

- **User Authentication**: A simple login mechanism that validates user credentials. To access the banking dashboard, use the following credentials:
  - **Email**: `nishat@gmail.com`
  - **Password**: `nishat`
  
  If the credentials are correct, the user is redirected to the banking dashboard.

- **Banking Dashboard**:
  - **Deposit Money**: Users can input an amount to deposit, which updates the total deposit and the overall balance dynamically.
  - **Withdraw Money**: Users can input an amount to withdraw, which deducts from the balance if sufficient funds are available. If the withdrawal amount exceeds the balance, the system alerts the user.
  - **Balance Tracking**: The current balance is always visible and updates automatically with each deposit and withdrawal, reflecting real-time changes.

- **Error Handling**: Ensures that:
  - Deposits are positive numbers.
  - Withdrawals do not exceed the available balance.
  - Inputs are correctly formatted to prevent errors.

## Technology Stack

- **HTML**: Provides the structure for the web pages, including the login form and the banking dashboard.
- **Tailwind CSS**: A utility-first CSS framework used for designing a responsive and visually appealing user interface with minimal custom CSS.
- **JavaScript**: Handles the core functionality of the banking system, including user interactions, data validation, and updates to the deposit, withdrawal, and balance amounts.

## File Structure

- `index.html`: The entry point of the application, featuring the login form.
- `banking.html`: The main banking dashboard where users perform transactions.
- `login.js`: Contains the logic for user authentication, redirecting to the banking dashboard upon successful login.
- `banking.js`: Manages the deposit and withdrawal functionalities, updates balances, and handles user inputs.

## How to Use

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/functional-banking-system.git
    ```
2. **Open `index.html` in Your Browser**:
   - This will take you to the login page where you can enter your credentials.
   - Use the default credentials: **Email**: `nishat@gmail.com`, **Password**: `nishat`.
3. **Access the Banking Dashboard**:
   - Once logged in, you will be redirected to `banking.html`, where you can perform transactions.
   - Use the deposit and withdrawal fields to manage your balance. The system will automatically update the displayed totals.

## Future Improvements

- **Enhanced Security**: Implement a secure authentication system using a backend service or API to replace the current hardcoded credentials.
- **Transaction History**: Add functionality to log all transactions (deposits and withdrawals) for user reference.
- **User Interface Enhancements**: Improve the design with modern UI frameworks or libraries to make the application more visually appealing and user-friendly.
- **Mobile Optimization**: Ensure the application is fully responsive and works seamlessly on all device sizes, including mobile phones and tablets.


## Checkout
https://nusnishat.github.io/Beginner-Functional-Bankingsystem/
