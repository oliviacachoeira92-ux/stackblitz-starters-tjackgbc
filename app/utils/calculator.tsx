export type CalculatorConfig = {
  pointsPerDiamond: number;
  pointsPer20USD: number;
  diamondsPerCharme: number;
};

const format = (value: number) =>
  new Intl.NumberFormat('pt-BR').format(Math.floor(value));

export function calculateFromDiamonds(value: string, config: CalculatorConfig) {
  const diamonds = Number(value.replace(/\./g, ''));

  if (!diamonds) {
    return {
      diamonds: '',
      points: '',
      dollars: '',
      charme: '',
    };
  }

  const points = diamonds * config.pointsPerDiamond;

  const dollars = points / (config.pointsPer20USD / 20);

  const charme = diamonds / config.diamondsPerCharme;

  return {
    diamonds: value,
    points: format(points),
    dollars: dollars.toFixed(2),
    charme: format(charme),
  };
}

export function calculateFromPoints(value: string, config: CalculatorConfig) {
  const points = Number(value.replace(/\./g, ''));

  if (!points) {
    return {
      diamonds: '',
      points: '',
      dollars: '',
      charme: '',
    };
  }

  const diamonds = points / config.pointsPerDiamond;

  const dollars = points / (config.pointsPer20USD / 20);

  const charme = diamonds / config.diamondsPerCharme;

  return {
    diamonds: format(diamonds),
    points: value,
    dollars: dollars.toFixed(2),
    charme: format(charme),
  };
}

export function calculateFromDollars(value: string, config: CalculatorConfig) {
  const dollars = Number(value);

  if (!dollars) {
    return {
      diamonds: '',
      points: '',
      dollars: '',
      charme: '',
    };
  }

  const points = dollars * (config.pointsPer20USD / 20);

  const diamonds = points / config.pointsPerDiamond;

  const charme = diamonds / config.diamondsPerCharme;

  return {
    diamonds: format(diamonds),
    points: format(points),
    dollars: value,
    charme: format(charme),
  };
}

export function calculateFromCharme(value: string, config: CalculatorConfig) {
  const charme = Number(value);

  if (!charme) {
    return {
      diamonds: '',
      points: '',
      dollars: '',
      charme: '',
    };
  }

  const diamonds = charme * config.diamondsPerCharme;

  const points = diamonds * config.pointsPerDiamond;

  const dollars = points / (config.pointsPer20USD / 20);

  return {
    diamonds: format(diamonds),
    points: format(points),
    dollars: dollars.toFixed(2),
    charme: value,
  };
}
