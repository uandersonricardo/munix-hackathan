export const embeddingPrompt = (prompt: string) => {
  let result = `preencha o JSON de acordo com a descrição do documento histórico: "${prompt.trim()}" e seu conhecimento prévio sobre documentos históricos e pontos de acesso que exigirão maior atenção na geração de índices.`;
  result += `{ title: string; date: string; content: string; accessPoints: string[]; tags: string[]; }`;
  result += `. Não gere nada além do JSON`;
  return result;
};
