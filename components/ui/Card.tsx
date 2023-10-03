const Card = ({ children }: { children: React.ReactNode }) => (
    <article className="bg-slate-400 dark:bg-slate-800 dark:bg-opacity-40 p-3 my-4 rounded-lg">
        {children}
    </article>
)

export default Card;
