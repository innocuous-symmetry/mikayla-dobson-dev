export default function ReadSectionLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-300 to-fuchsia-100 dark:from-black dark:to-fuchsia-900">
            { children }
        </div>
    )
}
