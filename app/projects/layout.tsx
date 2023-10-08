export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-300 to-sky-700 dark:from-black dark:to-green-950">
            { children }
        </div>
    )
}
