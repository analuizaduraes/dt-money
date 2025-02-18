import * as Dialog from '@radix-ui/react-dialog';

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

export function NewTransactionModal() {

  return (
    
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <p>X</p>
        </CloseButton>
        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" value="out
            youcome">
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}