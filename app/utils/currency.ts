export async function fetchUSDBRL() {
  try {
    const response = await fetch(
      'https://open.er-api.com/v6/latest/USD',
      {
        cache: 'no-store',
      }
    );

    const data = await response.json();

    if (
      data.result !== 'success' ||
      !data.rates?.BRL
    ) {
      throw new Error('Invalid response');
    }

    return {
      success: true,

      bid: Number(data.rates.BRL),

      high: Number(data.rates.BRL),

      low: Number(data.rates.BRL),

      pctChange: 0,

      createDate:
        data.time_last_update_utc,
    };

  } catch (error) {

    return {
      success: false,

      bid: 5,

      high: 5,

      low: 5,

      pctChange: 0,

      createDate: 'offline',
    };

  }
}