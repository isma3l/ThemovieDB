export const DataSet = ({ label, data }: { label: string, data: string[] }) => {
    return (
        <div className="flex flex-col">
            <span className="text-pink-50">{label}</span>
            <div className="flex my-3">
                { data.map((value: string) => 
                    (<span key={value} className="rounded-sm px-3 py-1 mr-3 text-white bg-purple-300">{value}</span>)
                )}
            </div>
        </div>
    )
}