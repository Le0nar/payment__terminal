import { IOperator } from "./../../interfaces/operator";
import { useState } from 'react';
import { IPaymentData } from './../../interfaces/paymentData';
import { MainLayout } from './../../components/MainLoyout';



const OperatorPage = ({ operator }) => {
  const [paymnetData, setPaymentData] = useState<IPaymentData>({
    telephone: "",
    moneyAmount: 250
  });

  const changePaymentData = (event, key) => {
    let value: string | number;
    key === "telephone" ? value = event.target.value : value = +event.target.value;
    setPaymentData({...paymnetData, [key]: value})
  }

  const checkParameters = () => {
    
  }

  if (!operator) {
    return <p>Loading...</p>;
  }

  return (
    <MainLayout title={`Пополнение средств | ${operator.name}`}>
      {operator.name}
      <div>
        <label htmlFor="telephone">Введите номер телефона</label>
        <input
          type="tel" 
          name="phone" 
          pattern="[789][0-9]{9}"
          required
          onChange={(e) => changePaymentData(e, "telephone")}
          value={paymnetData.telephone}
          id="telephone"
          placeholder="89992223322"
        />
      </div>
      <div>
        <label htmlFor="moneyAmount">Введите суму от 1р до 1000р</label>
        <input
          type="number"
          onChange={(e) => changePaymentData(e, "moneyAmount")}
          value={paymnetData.moneyAmount}
          id="moneyAmount"
          placeholder="250"
        />
      </div>
      <button onClick={checkParameters}>Оплатить</button>
    </MainLayout>
  );
};

export default OperatorPage;

OperatorPage.getInitialProps = async ({ query, req }) => {
  const response = await fetch(`http://localhost:4300/operators/${query.id}`);
  const operator: IOperator = await response.json();
  return {
    operator,
  };
};
