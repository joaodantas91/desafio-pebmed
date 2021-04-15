import { Container, Offer } from './styles';
import api from '../../api';
import React, { useEffect, useState } from 'react';

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

export function PlanOffers() {
  useEffect(() => {
    api.get(`offer`).then(res => {
      console.log(res.data);

      setOffers(res.data);
    });
  }, []);

  // Currency formatter
  let formatter = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  });

  const [offers, setOffers] = useState<Offers[]>([]);
  const [offerChecked, setOfferChecked] = useState<string>('');
  const [paymentData, setpaymentData] = useState<PaymentData>({});

  function handleCheckRadioOffer(event: React.FormEvent<HTMLInputElement>) {
    setOfferChecked(event.currentTarget.value);
  }

  return (
    <Container>
      <h2>Confira o seu plano:</h2>
      <p className="UserEmail">fulano@cicrano.com.br</p>

      {offers ? (
        offers.map(e => (
          <Offer key={e.id}>
            <div>
              <h4>
                <span>{e.title}</span> | <span>{e.description}</span>
              </h4>
              <div>
                De {formatter.format(e.fullPrice)} | Por{' '}
                {formatter.format(e.fullPrice - e.discountAmmount)}{' '}
                <span className="Disccount">
                  -{(e.discountAmmount / e.fullPrice).toFixed(2)}%
                </span>
              </div>

              <div className="Installments">
                {e.installments}x de{' '}
                {formatter.format(
                  (e.fullPrice - e.discountAmmount) / e.installments,
                )}
                /mês
              </div>
            </div>

            <input
              type="radio"
              name="offer"
              value={e.id.toString()}
              id=""
              onChange={handleCheckRadioOffer}
              checked={offerChecked == e.id.toString()}
            />
          </Offer>
        ))
      ) : (
        <h2>a</h2>
      )}
    </Container>
  );
}
