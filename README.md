# Word Count Script

This script analyzes a text file and prints the word count for each word, sorted by frequency.

## Prerequisites

1. **Node.js and npm:**
   Ensure that Node.js and npm (Node Package Manager) are installed on your system. You can download and install them from the [official Node.js website](https://nodejs.org/).

2. **TypeScript:**
   Install TypeScript globally using the following command in your terminal or command prompt:

    ```bash
    npm install -g typescript
    ```

3. **ts-node:**
   Install ts-node globally (if not already installed) using the following command:

    ```bash
    npm install -g ts-node
    ```

## Running the Script

1. **Clone the Repository:**
   Clone this repository to your local machine using the following command:

    ```bash
    git clone https://github.com/TosinHub/Typescript-word_count.git
    ```

2. **Navigate to the Script Directory:**
   Use the `cd` command to navigate to the directory where the TypeScript script is located:

    ```bash
    cd Typescript-word_count
    ```

3. **Install Dev dependency package:**
 

    ```bash
    npm install
    ```

4. **Run the Script:**
   Run the TypeScript script using ts-node and provide the path to the file you want to analyze as a command-line argument. For example:

    ```bash
    ts-node wordCount.ts path/to/your/file.txt
    ```

   Replace `path/to/your/file.txt` with the actual path to the text file you want to analyze. I have a file example.txt you can use

     ```bash
    ts-node wordCount.ts example.txt
    ```

5. **View the Word Count:**
   The script will process the file and print the word count to the terminal. Each line will show a word and the number of occurrences, sorted by frequency.


