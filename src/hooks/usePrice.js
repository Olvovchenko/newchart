import React from "react";
import { useMemo } from "react";

const usePrice = (storage, transfer, typeBunny, typeScaleway) => {
  const blackBlaze = useMemo(() => {
    const blackPrice = 0.005 * storage + 0.01 * transfer;
    if (blackPrice < 7) {
      return 7;
    }
    return blackPrice;
  }, [storage, transfer]);

  const bunny = useMemo(() => {
    const bunnyPrice = typeBunny[0]
      ? 0.01 * storage + 0.01 * transfer
      : 0.02 * storage + 0.01 * transfer;

    if (bunnyPrice > 10) {
      return 10;
    }
    return bunnyPrice;
  }, [storage, transfer, typeBunny]);

  const scaleway = useMemo(() => {
    const storagePrice =
      storage < 75
        ? 0
        : typeScaleway[0]
        ? 0.06 * (storage - 75)
        : 0.03 * (storage - 75);
    const transferPrice = transfer < 75 ? 0 : 0.02 * (transfer - 75);
    return storagePrice + transferPrice;
  }, [storage, transfer, typeScaleway]);

  const vultr = useMemo(() => {
    const vultrPrice = 0.01 * storage + 0.01 * transfer;
    if (vultrPrice < 5) {
      return 5;
    }
    return vultrPrice;
  }, [storage, transfer]);

  return [blackBlaze, bunny, scaleway, vultr];
};

export default usePrice;
