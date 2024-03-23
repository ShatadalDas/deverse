export default function validEnglishWord(str: string): boolean {
    // Regular expression for Latin letters (without accents)
    const englishLettersRegex =  /^[a-zA-Z]+(?: [a-zA-Z]+)*$/; 

    // Test the string against the regex
    return englishLettersRegex.test(str);
}
