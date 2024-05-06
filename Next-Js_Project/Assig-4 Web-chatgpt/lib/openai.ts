import OpenAI from "openai";

const openai = new OpenAI({
    apiKey : process.env.NEXTJS_OPENAI_API_KEY
});
export default openai;
