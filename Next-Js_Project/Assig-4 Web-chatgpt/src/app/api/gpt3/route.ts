import { NextRequest,NextResponse  } from "next/server";
import openai from "@/lib/openai";

const POST =async(request:NextRequest) =>{
    try{
        const { prompt } : { prompt: string } = await request.json();
        const response =  await openai.chat.completions.create({
            model : "gpt-3.5-turbo",
            messages : [
                {
                    role: "system",
                    content: prompt,
        
                },
                {
                    role:"user",
                    content: prompt,
                }

            ],
        });
        
        const gpt3 = response.choices[0].message.content;

        return NextResponse.json({
            data : gpt3,
            status: "sucess"
        })
    }

    catch(error:unknown){
        //.then
        //.catch
        //.trycatch

        if(error){
            return NextResponse.json({
                error : "can't read properties undefined readings ",
            },{status : 200})
        
        }
        else {
            return NextResponse.json({
                error: "status 404 not found",
            },{status: 404})
        }




    }
}
export{POST};
