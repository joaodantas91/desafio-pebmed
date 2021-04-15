import Select from 'react-select';

import { Container } from './styles';
import api from '../../api';
import Image from 'next/image';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export function PaymentData() {
  function handleSubmit() {
    api.delete(`users/${this.state.id}`).then(res => {
      console.log(res);
      console.log(res.data);
    });
  }

  return (
    <Container>
      <h2>Estamos quase lá!</h2>
      <p>Insira seus dados de pagamento abaixo:</p>

      <div className="FlagsWrapper">
        <div>
          <Image
            src="/img/flag1.png"
            layout="fill"
            alt="Mastercard"
            objectFit="contain"
          />
        </div>

        <div>
          <Image
            src="/img/flag2.png"
            layout="fill"
            alt="Mastercard"
            objectFit="contain"
          />
        </div>

        <div>
          <Image
            src="/img/flag3.png"
            layout="fill"
            alt="Mastercard"
            objectFit="contain"
          />
        </div>

        <div>
          <Image
            src="/img/flag4.png"
            layout="fill"
            alt="Mastercard"
            objectFit="contain"
          />
        </div>

        <div>
          <Image
            src="/img/flag5.png"
            layout="fill"
            alt="Mastercard"
            objectFit="contain"
          />
        </div>
      </div>

      <div className="iugu">
        Pagamentos por
        <div>
          <Image src="/img/iugu.png" layout="fill" objectFit="contain" />
        </div>
      </div>

      <label>
        Número do Cartão
        <input
          type="tel"
          inputMode="numeric"
          pattern="[0-9\s]{13,19}"
          autoComplete="cc-number"
          maxLength={19}
          placeholder="0000 0000 0000 0000"
        />
      </label>

      <div className="InputGroup">
        <label>
          Validade
          <input type="tel" maxLength={4} placeholder="MM/AA" />
        </label>

        <label>
          CVV
          <input type="tel" maxLength={3} placeholder="000" />
        </label>
      </div>

      <label>
        Nome impresso no cartão
        <input type="text" placeholder="Seu nome" />
      </label>

      <label>
        CPF
        <input type="tel" placeholder="000.000.000-00" />
      </label>

      <label>
        Cupom
        <input type="tel" placeholder="000.000.000-00" />
      </label>

      <label>
        Número de parcelas{' '}
        <Select
          classNamePrefix="react-select"
          className="react-select"
          isSearchable={false}
          options={options}
        />
      </label>

      <button>Finalizar pagamento</button>
    </Container>
  );
}
