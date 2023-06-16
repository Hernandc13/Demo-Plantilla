const detectarNavegador = () => {
  const userAgent = navigator.userAgent;
  let navegador = "";

  if (userAgent.indexOf("Firefox") > -1) {
    navegador = "Firefox";
  } else if (userAgent.indexOf("Chrome") > -1) {
    navegador = "Chrome";
  } else if (userAgent.indexOf("Safari") > -1) {
    navegador = "Safari";
  } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
    navegador = "Opera";
  } else if (userAgent.indexOf("Edge") > -1) {
    navegador = "Edge";
  } else if (
    userAgent.indexOf("MSIE") > -1 ||
    userAgent.indexOf("Trident/") > -1
  ) {
    navegador = "Internet Explorer";
  } else {
    navegador = "Desconocido";
  }

  return navegador;
};

const detectarDispositivo = () => {
  const userAgent = navigator.userAgent;

  if (userAgent.match(/Mobile/i)) {
    return <>Estás en un dispositivo móvil</>
  } else if (userAgent.match(/Tablet/i)) {
    return <>Estás en una tablet</>
  } else {
    return <>Estás en un dispositivo de escritorio</>
  }
};
