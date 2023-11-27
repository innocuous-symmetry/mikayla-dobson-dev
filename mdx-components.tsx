import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        h1: (props) =>
            <h1 className="text-3xl text-black font-semi-bold" {...props} />,
        h2: (props) =>
            <h2 className="text-2xl text-black font-semi-bold" {...props} />,
        h3: (props) =>
            <h3 className="text-xl text-black font-semi-bold" {...props} />,
        p: (props) => <p className="text-black" {...props} />,
        a: (props) => <a className="text-violet-900" {...props} />,
        ul: (props) => <ul className="list-disc" {...props} />,
        li: (props) => <li className="text-black" {...props} />,
    }
}
