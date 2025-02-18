import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "../../components/SearchForm";
import { useEffect, useState } from "react";

import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  async function loadTransactions() {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()
    setTransactions(data)
  }
  useEffect(() => {
    loadTransactions()
  }, []);

  return (
    <div>
      <Header />
      <Summary />
      <SearchForm />


      <TransactionsContainer>
        <TransactionsTable>
        
          <tbody>
            
          {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}

            <tr>
              <td width="50%">Hambúrguer</td>
              <td>
                <PriceHighlight variant="outcome">
                  -R$ 59,00
                </PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Teste 1</td>
              <td>
                <PriceHighlight variant="income">
                  -R$ 130,00
                </PriceHighlight>
              </td>
              <td>Cartao de credito</td>
              <td>10/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Teste 2</td>
              <td>
                <PriceHighlight variant="outcome">
                  -R$ 130,00
                </PriceHighlight>
              </td>
              <td>Cartao de credito</td>
              <td>10/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Teste 3</td>
              <td>
                <PriceHighlight variant="income">
                  -R$ 130,00
                </PriceHighlight>
              </td>
              <td>Cartao de credito</td>
              <td>10/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Teste 4</td>
              <td>
                <PriceHighlight variant="outcome">
                  -R$ 130,00
                </PriceHighlight>
              </td>
              <td>Cartao de credito</td>
              <td>10/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Teste 5</td>
              <td>
                <PriceHighlight variant="income">
                  -R$ 130,00
                </PriceHighlight>
              </td>
              <td>Cartao de credito</td>
              <td>10/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Teste 6</td>
              <td>
                <PriceHighlight variant="outcome">
                  -R$ 130,00
                </PriceHighlight>
              </td>
              <td>Cartao de credito</td>
              <td>10/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Teste 7</td>
              <td>
                <PriceHighlight variant="income">
                  -R$ 130,00
                </PriceHighlight>
              </td>
              <td>Cartao de credito</td>
              <td>10/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Teste 8</td>
              <td>
                <PriceHighlight variant="outcome">
                  -R$ 130,00
                </PriceHighlight>
              </td>
              <td>Cartao de credito</td>
              <td>10/04/2022</td>
            </tr>

          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

      
    </div>
  );
}