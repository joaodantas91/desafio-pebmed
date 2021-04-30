import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../api';

import { PaymentData } from '../components/PaymentData';
import { PlanOffers } from '../components/PlanOffers';
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

  // Currency formatter
  let formatter = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  });

  useEffect(() => {
    api.get(`offer`).then(res => {
      setOffers(res.data);
    });
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  // const Offer = () => {
  //   console.log('teste');
  //   offers.filter(offer => offer.id == offerId).map(e => e);
  // };

  const offerId = watch('offerId');

  const Router = useRouter();

  return (
    <form
      onSubmit={handleSubmit(async data => {
        const response = await api.post('subscription', {
          ...data,
          couponCode: data.couponCode ? data.couponCode : null,
          offerId: Number(data.offerId),
          gateway: 'iugu',
          installments: Number(data.installments),
          userId: 1,
        });
        console.log(response);

        // Router.push({
        //   pathname: '/success',
        //   query: {
        //     ...response.data,
        //     offer: offers.map(e => e),
        //   },
        // });
      })}
    >
      <Container>
        <PaymentData
          offers={offers}
          register={register}
          errors={errors}
          offerId={offerId}
          formatter={formatter}
        />
        <PlanOffers
          offers={offers}
          register={register}
          errors={errors}
          formatter={formatter}
        />
      </Container>
    </form>
  );
}
