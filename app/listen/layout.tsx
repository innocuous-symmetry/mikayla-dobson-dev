export default function ListenLayout({ children }: { children: React.ReactNode}) {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-300 to-cyan-800 dark:from-black dark:to-cyan-900">
            { children }
        </main>
    )
}
