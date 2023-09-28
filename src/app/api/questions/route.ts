import { NextResponse } from "next/server";
import { quizCreationSchema } from "@/schemas/form/quiz";
import * as Zod from 'zod';
import { strict_output } from "@/lib/gpt";
import { ZodError } from "zod";

// POST /api/questions
export const POST = async (req: Request, res: Response) => {
    try {
        const body = await req.json();
        const { amount, topic, type } = quizCreationSchema.parse(body);
        let questions: any;

        if (type === 'open_ended') {
            questions = await strict_output(
                'You are a helpful AI that is able to generate a pair of questions and answers, the length of the answer should not exceed 15 words, store all pairs of answers and questions in a JSON way',
                new Array(amount).fill(`You are to generate a random hard open-ended question about ${topic}`),
                {
                    question: 'question',
                    answer: 'answer with a maximum length of 15 words'
                }
            );
        }else if (type === 'mcq') {
            questions = await strict_output(
                'You are a helpful AI that is able to generate a pair of questions and answers, the length of the answer should not exceed 15 words, store all pairs of answers and questions in a JSON way',
                new Array(amount).fill(`You are to generate a random hard multiple choice question about ${topic}`),
                {
                    question: 'question',
                    answer: 'answer with a maximum length of 15 words',
                    option1: 'option 1 with max length of 15 words',
                    option2: 'option 2 with max length of 15 words',
                    option3: 'option 3 with max length of 15 words',
                    option4: 'option 4 with max length of 15 words'
                }
            );
        }    

        return NextResponse.json({
            questions,
        }, {
            status: 200
        });
    } catch (err) {
        if (err instanceof ZodError) {
            return NextResponse.json({
                err: err.issues
            }, {
                status: 400
            });


        }
        else{
            return NextResponse.json({
                err: err
            }, {
                status: 500
            });
        }
      
}};
