import React, { useMemo } from 'react'
import { Balance, Container, Lable } from './style';

const BalanceItem = ({ data }) => {
    const labelName = useMemo(() => {
        if (data.tag === 'saldo') {
            return{
                label: 'Saldo atual',
                color: '3b3dbf'
            }

            }else if(data.tag === 'receita'){
                return{
                    label: 'Entradas de hoje',
                    color: '00b94a'
                }
        }else{
            return{
                label: 'Saidas de hoje',
                color: 'EF463a'
            }
        }
    }, [data])
  return (
    <Container bg={labelName.color}>
      <Lable>{labelName.label}</Lable>
      <Balance>R$ {data.saldo}</Balance>
    </Container>
  )
}

export default BalanceItem;