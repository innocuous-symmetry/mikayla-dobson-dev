export default function ResumeDownloader({ paths, label }: { paths: string[], label?: string }) {
    return (
        <div className="flex items-center pt-2 dark:text-rose-100">
            { label && <p className="mr-2">{label}</p> }
            { paths.map((path, idx) => (
                <a
                    key={idx}
                    download
                    href={path}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noopener"
                >
                    { `.${path.split('.').pop()}` }
                </a>
            ))}
            <a download href="/resume/Mikayla Resume 1023.pdf" target="_blank" referrerPolicy="no-referrer" rel="noopener" className="mr-2 cursor-pointer hover:text-sky-300 active:text-white bg-slate-500 dark:bg-slate-800 py-1 px-1.5 rounded-lg">.pdf</a>
            <a download href="/resume/Mikayla Resume 1023.docx" target="_blank" referrerPolicy="no-referrer" rel="noopener" className="mr-2 cursor-pointer hover:text-sky-300 active:text-white bg-slate-500 dark:bg-slate-800 py-1 px-1.5 rounded-lg">.docx</a>
        </div>
    )
}
