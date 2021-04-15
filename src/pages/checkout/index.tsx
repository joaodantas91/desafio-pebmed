import React, { useEffect, useState } from 'react';
import api from '../../api';

import { PaymentData } from '../../components/PaymentData';
import { PlanOffers } from '../../components/PlanOffers';
import { Container } from './styles';

interface Offers {
  id: number;
  storeId: string;
  title: string;
  description: string;
  caption: string;
  fullPrice: number;
  discountAmmount: number;
  discountPercentage: number;
  periodLabel: string;
  period: string;
  discountCouponCode: null;
  order: number;
  priority: number;
  gateway: string;
  splittable: Boolean;
  installments: number;
  acceptsCoupon: Boolean;
}

interface PaymentData {
  couponCode: null;
  creditCardCPF: string;
  creditCardCVV: string;
  creditCardExpirationDate: string;
  creditCardHolder: string;
  creditCardNumber: string;
  gateway: string;
  installments: number;
  offerId: number;
  userId: number;
}

export default function Checkout() {
  const [offers, setOffers] = useState<Offers[]>([]);
  const [offerChecked, setOfferChecked] = useState<string>('');
  // const [paymentData, setpaymentData] = useState<PaymentData>({});

  function handleCheckRadioOffer(event: React.FormEvent<HTMLInputElement>) {
    setOfferChecked(event.currentTarget.value);
  }

  useEffect(() => {
    api.get(`offer`).then(res => {
      console.log(res.data);
      setOffers(res.data);
    });
  }, []);

  return (
    <Container>
      <PaymentData />
      <PlanOffers
        offers={offers}
        offerChecked={offerChecked}
        handleCheckRadioOffer={handleCheckRadioOffer}
      />
    </Container>
  );
}
