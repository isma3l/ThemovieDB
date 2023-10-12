import { faker } from "@faker-js/faker";
import { Rating } from "@/shared";

export const getMockRating = (): Rating => {
    return {
        value: faker.number.int({ min: 1, max: 10}),
        comment: faker.string.sample(8)
    };
}