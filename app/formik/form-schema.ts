import * as zod from 'zod';
import * as yup from 'yup';

export const formSchema = zod.object({
    name: zod.string("The type should be string").min(4, "Minimum 4 characters are required").max(50, "Maximum of 50 characters are allowed for this field"),
    age: zod.number("The type should be number").min(18, "Minimum age eligibility is 18").max(100, "Please enter a valid age"),
    email:zod.email("The email is not valid"),
    dob: zod.date("Please enter a valid date")
})

export const yupFormSchema = yup.object({
    name: yup.string().min(4, "Minimum 4 characters are required").max(50, "Maximum of 50 characters are allowed for this field"),
    age: yup.number().min(18, "Minimum age eligibility is 18").max(100, "Please enter a valid age"),
    email:yup.string().email(),
    dob: yup.date()
})