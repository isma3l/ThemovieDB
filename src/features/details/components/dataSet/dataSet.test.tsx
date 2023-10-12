import { describe, it, expect } from 'vitest';
import { screen, render } from "@testing-library/react";
import { DataSet } from '.';

describe("DataSet Component", () => {
    it("should render a dataSet component", () => {
        const label = "Generos";
        const data = ["drama", "accion"] ;

        render(<DataSet label={label} data={data} />) 

        expect(screen.getByText(data[0])).toBeInTheDocument();
        expect(screen.getByText(data[1])).toBeInTheDocument();        
        expect(screen.getByText(label)).toBeInTheDocument();
    });
});