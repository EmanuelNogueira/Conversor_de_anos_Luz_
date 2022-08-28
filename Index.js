function project1() {
  let years = prompt(
    "Olá! Por favor, digite qual a adistância de anos luz que desejará converter:"
  );

  let value1 = prompt(
    "Agora escolha uma das opções de conversão abaixo: \n1 Parsec(PC) \n2 Unidade Astronômica(AU) \n3 Quiômetros(KM)"
  );

  switch (value1) {
    case "1":
      let pc = value1 * 0.306601;
      alert(
        "Distância em anos luz é de " +
          years +
          " PC \nA conversão deseja foi a PARSEC(PC).\nA distância convertida é de: " +
          pc
      );
      break;
    case "2":
      let au = value1 * 63241.1;
      alert(
        "Distância em anos luz é de " +
          years +
          " AU \nA conversão desejada foi a UNIDADE ASTRONÔMICA(AU). \nA distância convertida é de: " +
          au
      );
      break;
    case "3":
      let km = value1 * Math.pow(10, 12);
      alert(
        "Distância em anos luz é de " +
          years +
          " KM \nA conversão desejada foi em QUILÔMETROS(KM). \nA distância convertida é de: " +
          km
      );
      break;
    default:
      alert(
        "Distância em anos luz é de " +
          years +
          " Anos. \nA unidade não foi identificada. \nConversão fora do espaço."
      );
  }
}
