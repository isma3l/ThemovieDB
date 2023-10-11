import { Input, Button, Textarea } from "@material-tailwind/react";
import { useMemo, useState } from "react";
import { Rating } from "../../types/Rating";

const MIN_RATE = 0.5;
const MAX_RATE = 10;

export const RateForm = ({ handleRating }: { handleRating: (rating: Rating) => void}) => {
    const [rate, setRate] = useState("");
    const [comment, setComment] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRate(event.target.value);
    }
    const handleChangeComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    }
    
    const isRateValid = useMemo(() => {
        const value = Number(rate);
        return value % MIN_RATE === 0 && value >= MIN_RATE && value <= MAX_RATE;
    }, [rate]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleRating({ value: Number(rate), comment});        
    }

    return (
        <form onSubmit={handleSubmit} noValidate className=" flex self-center rounded-md bg-white py-2 px-5 flex-col mt-16">
            <div className="flex justify-between items-center my-4">
                <div className="w-52">
                    <Input name="rating" label="Puntuación" min={MIN_RATE} max={MAX_RATE} step={MIN_RATE}
                    value={rate} size="md" 
                    crossOrigin={undefined} onChange={handleChange} type="number"/>
                </div>
                <span className="text-xs w-full ml-12 text-teal-900">Puntuación válida entre 0.5 y 10</span>
            </div>
            <Textarea name="comment" label="Comentario" value={comment} onChange={handleChangeComment}/>
            <Button
                type="submit"
                size="md"
                color="blue"
                className="rounded my-4"
                disabled={!isRateValid}
            >
                Enviar puntuación
            </Button>
        </form>
    )
};