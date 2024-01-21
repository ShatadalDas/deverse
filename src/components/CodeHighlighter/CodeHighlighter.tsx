import styles from "./CodeHighlighter.module.scss"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus as theme } from "react-syntax-highlighter/dist/esm/styles/prism"
import languages from "@/utils/langArr"
import { AllowArrayElementsOnly } from "@/utils/usefulGenericTypes"

type LanguagesAllowed = AllowArrayElementsOnly<typeof languages>

interface Props {
    code: string
    lang: LanguagesAllowed
    className?: string
}

function CodeHighlighter({ code, lang, className }: Props) {
    return (
        <>
            <SyntaxHighlighter
                language={ lang }
                style={ theme }
                showLineNumbers
                wrapLines
                className={ `${styles.codeBlock} ${className}` }
            >
                { code.trim() }
            </SyntaxHighlighter>
        </>
    )
}

export default CodeHighlighter


