import * as fs from 'fs';
import * as path from 'path';

function getWordCount(file_path: string): Map<string, number> {
    try {
        const content = fs.readFileSync(file_path, 'utf-8');
        const words = content.replace(/[^\w\s]/g, '').split(/\s+/);
        const wordCount = new Map<string, number>();

        words.forEach(word => {
            wordCount.set(word, (wordCount.get(word) || 0) + 1);
        });

        return wordCount;
    } catch (err : any) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

function main() {
    if (process.argv.length !== 3) {
        console.error('Usage: ts-node wordcount.ts <file_path>');
        process.exit(1);
    }

    const file_path = path.resolve(process.argv[2]);
    const wordCount = getWordCount(file_path);

    [...wordCount.entries()]
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, count]) => {
            console.log(`${word}: ${count}`);
        });
}

main();