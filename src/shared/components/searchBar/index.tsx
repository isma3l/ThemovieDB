import {useEffect, useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { useQueryParams } from "@/shared/hooks";
 
export function SearchBar({ onSearch }: { onSearch: (text: string) => void }) {
  const { query } = useQueryParams();
  const [movie, setMovie] = useState("");
  
  useEffect(() => {
    setMovie(query ?? "");
  }, [query]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setMovie(target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(movie);
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex w-full max-w-[40rem] mx-16">
      <Input
        type="text"
        value={movie}
        onChange={handleChange}
        className="!border !border-gray-300 bg-white text-gray-900 "
        containerProps={{
          className: "min-w-0",
        }}
        labelProps={{
          className: "hidden",
        }}
        size="lg"
        label="" crossOrigin={undefined}      />
      <Button
        type="submit"
        size="md"
        color={movie ? "red" : "red"}
        disabled={!movie}
        className="!absolute right-0.5 top-0.5 rounded"
      >
        Buscar
      </Button>
    </form>
  );
}