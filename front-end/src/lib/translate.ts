export const translateType = (type: string) => {
  switch (type) {
    case "cartographic":
      return "Documento cartográfico";
    case "textual":
      return "Documento textual";
    case "iconographic":
      return "Documento iconográfico";
    case "sound":
      return "Documento sonoro";
    case "audiovisual":
      return "Documento audiovisual";
    default:
      return "Desconhecido";
  }
};
