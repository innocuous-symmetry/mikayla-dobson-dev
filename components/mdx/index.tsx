import { v4 } from "uuid"
import { cabin } from "@/app/layout";

type ElementType<Key extends keyof JSX.IntrinsicElements> = React.FC<JSX.IntrinsicElements[Key]>
type FormattedTags = {
    [Key in keyof JSX.IntrinsicElements]: ElementType<Key>
}

const H1TAG: ElementType<"h1"> = ({ children }) => { return (
    <h1 key={v4()} className={`text-4xl text-red-500 ${cabin.className} tracking-wide`}>{children}</h1>
)}

const H2Tag: ElementType<"h2"> = ({ children }) => (
    <h2 key={v4()}>{children}</h2>
)

const H3Tag: ElementType<"h3"> = ({ children }) => (
    <h3 key={v4()}>{children}</h3>
)

const H4Tag: ElementType<"h4"> = ({ children }) => (
    <h4 key={v4()}>{children}</h4>
)

const PTag: ElementType<"p"> = ({ children }) => (
    <p key={v4()}>{children}</p>
)

const LiTag: ElementType<"li"> = ({ children }) => (
    <li key={v4()}>{children}</li>
)

const BrTag: ElementType<"br"> = () => (
    <br key={v4()} />
)

export default {
    "h1": H1TAG,
    "h2": H2Tag,
    "h3": H3Tag,
    "h4": H4Tag,
    "p": PTag,
    "li": LiTag,
    "br": BrTag
} satisfies Partial<FormattedTags>
