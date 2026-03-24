import { object, string, number } from 'valibot';

export const DraftproductSchema = object({
    name: string(),
    price: number()

})