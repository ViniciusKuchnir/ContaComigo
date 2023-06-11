import React, { useCallback, useEffect, useState } from 'react';
import * as C from './styles';
import Layout from '../../components/Layout'
import CardInformation from '../../components/Cards/Information';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { api } from '../../services/api';
import { getUser } from '../../libs/user';
import { User } from '../../types/user';
import { Accounts } from '../../types/account';
import { MdArrowCircleLeft, MdArrowCircleRight } from 'react-icons/md';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import { toast } from 'react-toastify';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import PieChart from '../../components/Charts/Pie';
import Table from '../../components/Table';
import { formatMoney } from '../../libs/Money';
import { formatDate } from '../../libs/Date';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);


const Dashboard = () => {

  const [totalReceivable, setTotalReceivable] = useState<number>(0);
  const [totalPayable, setTotalPayable] = useState<number>(0);
  const [quantityReceivable, setQuantityReceivable] = useState<Accounts[]>([]);
  const [quantityPayable, setQuantityPayable] = useState<Accounts[]>([]);
  const [dataPayable, setDataPayable] = useState<{} | null>(null);
  const [dataTablePayable, setDataTablePayable] = useState<{}[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const user = getUser() as User;

  const getTotalReceivable = () => {
    api.get(`/accounts/${user.id}/3`)
        .then(({data}) => {
          const totalAmount = (data ?? []).reduce((accumulator: any, obj: any) => {
            const amount: number = parseFloat(obj.amount);
            const total: number = parseFloat(accumulator) + amount;
            return total.toFixed(2)
          }, 0);

          setQuantityReceivable(data);
          setTotalReceivable(totalAmount);
          
        })
        .catch(error => {
          toast.error(error);
        });   
  }

  const getTotalPayable = useCallback(() => {
    api.get(`/accounts/${user.id}/2`)
        .then(({data}) => {
          const totalAmount = (data ?? []).reduce((accumulator: any, obj: any) => {
            const amount: number = parseFloat(obj.amount);
            const total: number = parseFloat(accumulator) + amount;
            return total.toFixed(2)
          }, 0);

          setQuantityPayable(data);
          setTotalPayable(totalAmount);

          const typeCount = (data ?? []).reduce((count: any, obj: any) => {
            const type = obj.type_bill.type;
            count[type] = (count[type] || 0) + 1;
            return count;
          }, {});

          const typeCountArray = Object.values(typeCount);

          const dataPayable = data.filter((obj: Accounts) => obj.expiration !== null)
          .map((item: Accounts) => {
            return {
              name: item.name,
              amount: formatMoney(item.amount),
              expiration: formatDate(item.expiration)
            }
          })

          setDataTablePayable(dataPayable);


          setDataPayable({
            labels: (data ?? []).map((item: Accounts) => item.type_bill.type),
            datasets: [
              {
                label: "Number of accounts",
                data: typeCountArray,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(100, 100, 255, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(100, 100, 255, 1)',
                ],
                borderWidth: 2
              }
            ]
          });

          const labels = data.filter((obj: Accounts) => obj.expiration !== null)
          .map((obj: Accounts) => {
            const expiration = new Date(obj.expiration);
            const month = expiration.toLocaleString('default', { month: 'long' });
            return month;
          }).slice(0,5);




            
        })
        .catch(error => {
          console.log(error);
        })
  }, []);


  useEffect(() => {
    setLoading(true);
    getTotalReceivable();
    getTotalPayable();
    setLoading(false);
  }, [totalReceivable, totalPayable])


  return (
    <Layout 
      title='Dashboard' 
      subtitle='See a summary of your finances here'
    >
        <C.Content>
          <C.Cards>
            <CardInformation 
                color='green'
                icon={<GiReceiveMoney size={42} />}
                label='Total receivable ($)'
                data={totalReceivable}
                loading={loading}
              />
              <CardInformation 
                color='red'
                icon={<GiPayMoney size={42} />}
                label='Total payable ($)'
                data={totalPayable}
                loading={loading}
              />
              <CardInformation 
                color='green'
                icon={<MdArrowCircleLeft size={42} />}
                label='Bills to receive'
                data={quantityReceivable.length}
                loading={loading}
                />
              <CardInformation 
                color='red'
                icon={<MdArrowCircleRight size={42} />}
                label='Bills to pay'
                data={quantityPayable.length}
                loading={loading}
              />
          </C.Cards>
          <C.Line />
          <C.Graphs>
            {dataPayable !== null && 
              <PieChart title='Main spending areas' chartData={dataPayable} />
            }

            {
              dataTablePayable !== null &&
              <Table 
              labels={['ID','Name', 'Amount ($)', 'Expiration']} 
              title='Next accounts to pay'   
              data={dataTablePayable} 
            />
            }

            

           
          </C.Graphs>
          


        </C.Content>
    </Layout>
  )
}

export default Dashboard