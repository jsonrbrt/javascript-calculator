# 🧮 Simple JavaScript Calculator

A basic arithmetic calculator built using HTML, CSS, and JavaScript. This project focuses on implementing robust state management to handle complex user inputs, including chained operations and error handling (division by zero).

---

## ✨ Features

* **Basic Arithmetic:** Supports Addition (+), Subtraction (-), Multiplication (*), and Division (/).
* **Chained Operations:** Correctly handles continuous calculations (e.g., `8 * 2 * 4` results in `64`).
* **State Management:** Uses dedicated variables (`firstOperand`, `storedOperator`) to maintain calculation state.
* **Clear Functions:** Includes **C** (Clear All) and **CE** (Clear Entry) buttons.
* **Error Handling:** Displays "Error" on division by zero.

---

## 🛠️ Technologies Used

* **HTML5:** Structure
* **CSS3:** Styling (for basic layout and appearance)
* **JavaScript (ES6):** Core logic and DOM manipulation

---

## 🚀 Getting Started

To view and run this project locally, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPO_URL]
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd javascript-calculator
    ```
3.  **Open the file:**
    Open the `index.html` file in your preferred web browser (e.g., Chrome, Firefox).

    ```bash
    open index.html 
    ```

---

## 💡 Project Goals (Why This Project?)

This calculator was built as an exercise to master fundamental JavaScript concepts, including:

* **Function Routing:** Directing user input to specialized functions (`handleInput`).
* **Global State Management:** Tracking the application's state (operands and operators) outside of function scope.
* **Conditional Logic:** Using `if/else` statements for control flow and operator routing.

---

## 📄 License

This project is licensed under the **MIT License** - see the `LICENSE` file for details.