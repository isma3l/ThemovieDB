export const SimpleData = ({ label, value }: { label: string, value: string }) => {
    return (
        <div>
            <span className="mr-8 text-pink-50" aria-label="label-simple" >{label}</span>
            <span className="font-bold" aria-label="value-simple" >{value}</span>
        </div>  
    );
}