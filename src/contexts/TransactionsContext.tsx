import { createContext, ReactNode, useEffect, useState } from 'react';

{/*duvida*/}
interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

{/*duvida*/}
interface TransactionContextType {
  transactions: Transaction[];
}

{/*duvida*/}
{/*
interface Transaction[] {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
  children: ReactNode
}
*/}
interface TransactionsProviderProps {
  children: ReactNode
}

{/*duvida - async, await.. */}
export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
   
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
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
  
}