export default function MusicalWorkPage({ params }: { params: { id: string }}) {
    if (Number.isNaN(parseInt(params.id))) {
        return <div>Fail</div>
    }

    return (
        <div>
            <h1>Music Works Page</h1>
            <p>Work No. {params.id}</p>

            <div>
                <p>This page is coming soon!</p>
            </div>
        </div>
    )
}
