export function calculateFromDiamonds(
  diamondsInput: string,
  config: {
    pointsPerDiamond: number;
    pointsPer20USD: number;
    diamondsPerCharme: number;
  }
) {

  const diamonds =
    Number(
      diamondsInput
        .replace(/\./g, '')
        .replace(',', '')
    ) || 0;

  const points =
    diamonds *
    config.pointsPerDiamond;

  const dollars =
    (points /
      config.pointsPer20USD) *
    20;

  const charme =
    Math.floor(
      diamonds /
      config.diamondsPerCharme
    );

  return {

    diamonds:
      diamonds.toLocaleString(
        'pt-BR'
      ),

    points:
      points.toLocaleString(
        'pt-BR'
      ),

    dollars:
      dollars.toFixed(2),

    charme:
      charme.toLocaleString(
        'pt-BR'
      ),
  };
}

export function calculateFromPoints(
  pointsInput: string,
  config: {
    pointsPerDiamond: number;
    pointsPer20USD: number;
    diamondsPerCharme: number;
  }
) {

  const points =
    Number(
      pointsInput
        .replace(/\./g, '')
        .replace(',', '')
    ) || 0;

  const diamonds =
    points /
    config.pointsPerDiamond;

  const dollars =
    (points /
      config.pointsPer20USD) *
    20;

  const charme =
    Math.floor(
      diamonds /
      config.diamondsPerCharme
    );

  return {

    diamonds:
      Math.floor(
        diamonds
      ).toLocaleString(
        'pt-BR'
      ),

    points:
      points.toLocaleString(
        'pt-BR'
      ),

    dollars:
      dollars.toFixed(2),

    charme:
      charme.toLocaleString(
        'pt-BR'
      ),
  };
}

export function calculateFromDollars(
  dollarsInput: string,
  config: {
    pointsPerDiamond: number;
    pointsPer20USD: number;
    diamondsPerCharme: number;
  }
) {

  const dollars =
    Number(
      dollarsInput
        .replace(/\./g, '')
        .replace(',', '.')
    ) || 0;

  const points =
    (dollars / 20) *
    config.pointsPer20USD;

  const diamonds =
    points /
    config.pointsPerDiamond;

  const charme =
    Math.floor(
      diamonds /
      config.diamondsPerCharme
    );

  return {

    diamonds:
      Math.floor(
        diamonds
      ).toLocaleString(
        'pt-BR'
      ),

    points:
      Math.floor(
        points
      ).toLocaleString(
        'pt-BR'
      ),

    dollars:
      dollars.toFixed(2),

    charme:
      charme.toLocaleString(
        'pt-BR'
      ),
  };
}

export function calculateFromCharme(
  charmeInput: string,
  config: {
    pointsPerDiamond: number;
    pointsPer20USD: number;
    diamondsPerCharme: number;
  }
) {

  const charme =
    Number(
      charmeInput
        .replace(/\./g, '')
        .replace(',', '')
    ) || 0;

  const diamonds =
    charme *
    config.diamondsPerCharme;

  const points =
    diamonds *
    config.pointsPerDiamond;

  const dollars =
    (points /
      config.pointsPer20USD) *
    20;

  return {

    diamonds:
      diamonds.toLocaleString(
        'pt-BR'
      ),

    points:
      points.toLocaleString(
        'pt-BR'
      ),

    dollars:
      dollars.toFixed(2),

    charme:
      charme.toLocaleString(
        'pt-BR'
      ),
  };
}