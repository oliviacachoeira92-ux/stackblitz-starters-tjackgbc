import { useEffect, useState } from 'react';

import { fetchUSDBRL } from '../utils/currency';

export default function useUSD() {

  const [usdRate, setUsdRate] =
    useState(5);

  const [lastUpdate, setLastUpdate] =
    useState('');

  const [usdVariation, setUsdVariation] =
    useState(0);

  const [loadingRate, setLoadingRate] =
    useState(true);

  useEffect(() => {

    const loadRate = async () => {

      setLoadingRate(true);

      const data =
        await fetchUSDBRL();

      if (data.success) {

        setUsdRate(data.bid);

        setUsdVariation(
          data.pctChange
        );

        setLastUpdate(
          data.createDate
        );
      }

      setLoadingRate(false);
    };

    loadRate();

    const interval =
      setInterval(
        loadRate,
        1000 * 60 * 5
      );

    return () =>
      clearInterval(interval);

  }, []);

  return {
    usdRate,
    lastUpdate,
    usdVariation,
    loadingRate,
  };
}