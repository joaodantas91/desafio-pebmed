import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../api';

import { PaymentData } from '../../components/PaymentData';
import { PlanOffers } from '../../components/PlanOffers';
import { Container } from './styles';

type FormValues = {
  couponCode: string;
  creditCardCPF: string;
  creditCardCVV: string;
  creditCardExpirationDate: string;
  creditCardHolder: string;
  creditCardNumber: string;
  installments: string;
  offerId: number;
};

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
  console.log(offers);

  const [paymentData, setpaymentData] = useState<PaymentData[]>();

  useEffect(() => {
    api.get(`offer`).then(res => {
      setOffers(res.data);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <form
      onSubmit={handleSubmit(data => {
        console.log(data);
      })}
    >
      <Container>
        <PaymentData offers={offers} register={register} errors={errors} />
        <PlanOffers offers={offers} register={register} errors={errors} />
      </Container>
    </form>
  );
}
