export async function fetchUSDBRL() {
  try {
    const [rateResponse, variationResponse] =
      await Promise.all([
        fetch(
          'https://open.er-api.com/v6/latest/USD',
          {
            cache: 'no-store',
          }
        ),
        fetch(
          'https://economia.awesomeapi.com.br/json/last/USD-BRL',
          {
            cache: 'no-store',
          }
        ),
      ]);

    const rateData =
      await rateResponse.json();

    const variationData =
      await variationResponse.json();

    if (
      rateData.result !== 'success' ||
      !rateData.rates?.BRL
    ) {
      throw new Error(
        'Invalid exchange rate response'
      );
    }

    const usdAwesome =
      variationData?.USDBRL;

    return {
      success: true,

      bid: Number(
        rateData.rates.BRL
      ),

      high:
        usdAwesome?.high
          ? Number(
              usdAwesome.high
            )
          : Number(
              rateData.rates.BRL
            ),

      low:
        usdAwesome?.low
          ? Number(
              usdAwesome.low
            )
          : Number(
              rateData.rates.BRL
            ),

      pctChange:
        usdAwesome?.pctChange
          ? Number(
              usdAwesome.pctChange
            )
          : 0,

      createDate:
        rateData.time_last_update_utc,
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