import React from 'react'
import * as C from './styles';
import EmptyListMessage from '../EmptyListMessage';

type Props = {
    labels: string[],
    data: any;
    title: string;
}

const Table = ({labels, data, title}: Props) => {
    console.log(data);

    const handleContentTable = () => {
        if (data.length === 0) {
            return (
                <tr >
                     <td colSpan={labels.length}>
                        <C.MessageEmptyList>Empty list</C.MessageEmptyList>
                     </td>
                </tr>
            )
        }else{
            return (
                <>
                    {data.map((item:any, index:number) => (
                    <tr key={index}>
                        <C.TableData>{index+1}</C.TableData>
                        <C.TableData>{item.name}</C.TableData>
                        <C.TableData>{item.amount}</C.TableData>
                        <C.TableData>{item.expiration}</C.TableData>
                    </tr>
                    ))}
                </>
            );
        }
        
    }

  return (
    <C.TableContainer>
      <thead>
        <tr>
            <C.TableTitle colSpan={labels.length}>{title}</C.TableTitle> 
        </tr>
        <tr>
          {labels.map((label: string) => <C.TableHeader>{label}</C.TableHeader>)}
        </tr>
      </thead>
      <tbody>
        {handleContentTable()}
      </tbody>
    </C.TableContainer>
  )
}

export default Table