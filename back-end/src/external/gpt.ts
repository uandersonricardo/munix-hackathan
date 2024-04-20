import OpenAI, { ClientOptions } from "openai";
import extract from "extract-json-from-string";

import { embeddingPrompt } from "../lib/prompt";

class ChatGPT {
  private readonly api: OpenAI;
  private readonly configuration: ClientOptions;

  constructor() {
    this.configuration = {
      apiKey: process.env.OPENAI_API_KEY,
    };
    this.api = new OpenAI(this.configuration);
  }

  public async completion(prompt: string, description: string) {
    const response = await this.api.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Você é um assistente de IA gentil e prestativo que responde perguntas e fornece informações sobre um determinado produto anunciado.",
        },
        {
          role: "system",
          content: `A descrição do produto anunciado é dada por: ${description}.`,
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.8,
    });

    // Mocked
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // const response = {
    //   choices: [
    //     {
    //       index: 0,
    //       message: {
    //         role: "assistant",
    //         content: "Olá! E aí?",
    //       },
    //       finish_reason: "stop",
    //     },
    //   ],
    // };

    return response;
  }

  public async embedding(prompt: string) {
    const response = await this.api.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: embeddingPrompt(prompt),
        },
      ],
      temperature: 0.8,
    });
    console.log(response);
    const gptResponse = response.choices[0].message.content;
    // const gptResponse =
    //   '{"ptBR_translation":"uma bicicleta roxa com uma cesta na frente e um assento preto","product":"bicycle","color":"purple","category":"transports and driving","texture":"smooth","approximate_size_scale":"meters","approximate_weight_scale":"kilograms","semantic_label":"casual"}';

    let result = {
      title: "Documento Histórico",
      date: "Anos 1900",
      content:
        "Documento histórico de grande importância para a história do Brasil.",
      accessPoints: ["História", "Brasil", "Documentos Históricos"],
      tags: ["História", "Brasil", "Documentos Históricos"],
    };

    try {
      result = JSON.parse(gptResponse?.toString() || "");
    } catch (error) {
      const extraction = extract(gptResponse?.toString() || "");
      if (extraction.length > 0) {
        result = extraction[0];
      }
    }

    return result;
  }
}

const gpt = new ChatGPT();
export default gpt;
