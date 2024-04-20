import gpt from "../external/gpt";

class AIService {
  public async chat(_id: number, prompt: string) {
    const response = await gpt.embedding(prompt);

    return response;
  }
}

export default AIService;
