import { SummaryCard, SummaryContainer } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";


export function Summary() {

  const { transactions } = useContext(TransactionsContext)
  console.log(transactions)


  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}