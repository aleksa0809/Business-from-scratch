import OrderForm from './OrderForm'
import OrderTable from './OrderTable'

export default function(props){
    return (
      <div className="showcase">
        <h2>Your purchases</h2>
        <OrderTable />
        <h2>Please fulfill your delivery data</h2>
        <OrderForm />
      </div>
    )
}
