import { describe, it, expect } from 'vitest';
import { screen, render } from "@testing-library/react";
import { DataSet } from '.';

describe("DataSet Component", () => {
    it("should render a dataSet component", () => {
        const label = "Generos";
        const data = ["drama", "accion"] ;

        render(<DataSet label={label} data={data} />) 

        const values = screen.getAllByLabelText(/value-/);
        expect(values.length).toBe(data.length);
        expect(screen.getByLabelText("value-drama")).toBeInTheDocument();
        expect(screen.getByLabelText("value-accion")).toBeInTheDocument();
        
        expect(screen.getByLabelText("label-data")).toHaveTextContent(label);  
    });
});