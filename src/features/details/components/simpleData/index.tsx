export const SimpleData = ({ label, value }: { label: string, value: string }) => {
    return (
        <div>
            <span className="mr-8 text-pink-50">{label}</span>
            <span className="font-bold">{value}</span>
        </div>  
    );
}