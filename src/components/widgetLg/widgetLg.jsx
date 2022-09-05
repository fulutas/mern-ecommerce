import React from 'react'
import './widget-lg.css'

const widgetLg = () => {

  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }

  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=191.25&fit=crop&w=213.75&dpr=1" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Ava Adore</span>
          </td>
          <td className="widgetLgDate">22 Jun 2022</td>
          <td className="widgetLgAmount">#700.00</td>
          <td className="widgetLgStatus">
            <Button type='Approved'></Button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=191.25&fit=crop&w=213.75&dpr=1" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Furkan Enes</span>
          </td>
          <td className="widgetLgDate">01 Jun 2022</td>
          <td className="widgetLgAmount">#10.00</td>
          <td className="widgetLgStatus">
            <Button type='Approved'></Button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=191.25&fit=crop&w=213.75&dpr=1" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Ahmet Mehmet</span>
          </td>
          <td className="widgetLgDate">03 Jun 2022</td>
          <td className="widgetLgAmount">#22.00</td>
          <td className="widgetLgStatus">
            <Button type='Pending'></Button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=191.25&fit=crop&w=213.75&dpr=1" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Luvy Humby</span>
          </td>
          <td className="widgetLgDate">07 Jun 2022</td>
          <td className="widgetLgAmount">#598.00</td>
          <td className="widgetLgStatus">
            <Button type='Declined'></Button>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default widgetLg