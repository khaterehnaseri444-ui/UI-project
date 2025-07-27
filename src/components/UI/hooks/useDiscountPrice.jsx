import React, { useMemo } from 'react';

function useDiscountPrice(price, discount) {
    const discountPrice = useMemo(() => {
        const discountAmount = (price * discount) / 100
        return price - discountAmount
    }, [])
    return [discountPrice]
}

export default useDiscountPrice;