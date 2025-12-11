# Coding-Exercises

This document explains how to execute the provided JavaScript files to test their functionality and verify the expected output.
---------------------------------------------------------------
## Option A: Using the VS Code Extension (Code Runner)

This is the fastest method for running single files directly within the VS Code environment.

### 1. Setup

1.  Open VS Code.
2.  Go to the Extensions view (`Ctrl+Shift+X`).
3.  Search for and install the **"Code Runner"** extension by **Jun Han**.

### 2. Execution

1.  Open the desired JavaScript file (e.g., `exercise1.js`) in the VS Code editor.
2.  Ensure the file contains a `console.log()` statement to output the final result (e.g., `console.log(calculateNetBalance(transactions));`).
3.  Execute the code using one of these methods:
      * Click the **Play button (▶️)** located in the top-right corner of the editor.
      * Right-click in the editor and select **"Run Code"**.
      * Use the keyboard shortcut: `Ctrl + Alt + N`.
4.  **Output:** The result will appear in the **"OUTPUT"** pane at the bottom of VS Code.

---------------------------------------------------------------

## Option B: Using the Standard Node.js Command (Recommended)

This is the most reliable method, as it uses the native Node.js environment, bypassing any potential extension-specific issues.

### 1. Setup

1.  Open the **VS Code Integrated Terminal** (`Terminal` \> `New Terminal` or \`Ctrl + \`\`).
2.  Verify Node is installed by typing: `node -v`.

### 2. Execution

1.  Ensure the terminal is navigated to the folder containing the exercise files.

2.  Ensure the file contains a `console.log()` statement to output the final result (e.g., `console.log(calculateNetBalance(transactions));`)

3.Execute the file using the `node` command followed by the filename:

    ```bash
    node exercise1.js
    ```

4.  **Output:** The result will appear directly in the integrated terminal window.

### 🛑 Troubleshooting Note

If you receive an `ETIMEDOUT` error when running the files (even with `node`), it often indicates that the file is saved in a location that a local security program or network drive is preventing Node from quickly accessing. **Please ensure all exercise files are saved on a local, non-synced drive (e.g., your local Desktop or Documents folder) before running.**