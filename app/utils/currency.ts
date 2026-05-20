export async function fetchUSDBRL() {

  try {

    const response = await fetch(
      'https://economia.awesomeapi.com.br/json/last/USD-BRL',
      {
        cache: 'no-store',
      }
    );

    const data =
      await response.json();

    const usd =
      data?.USDBRL;

    return {

      success: true,

      bid: Number(
        usd.bid
      ),

      high: Number(
        usd.high
      ),

      low: Number(
        usd.low
      ),

      pctChange: Number(
        usd.pctChange
      ),

      createDate:
        usd.create_date,

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