import React from "react";
import DashboardLayout from "../components/DashboardLay/DashboardLay";
import Filter from "../components/Filter/Filter";

const Orders = () => {
  return (
    <DashboardLayout>
      <div className="OrderCont">
        <div className="orderHead">
          <h3>Recent Orders</h3>
          <div className="SubmitBtn">Create Order</div>
        </div>
        <div className="pad-20">
          {" "}
          <Filter />
          <table className="table">
            <thead></thead>
            <tbody>
              <tr className="tablFrstRow">
                <th>Date</th>
                <th>Order ID</th>
                <th>Customer </th>
                <th>Total Qty</th>
                <th>Weight (kg)</th>
                <th>Volume m3</th>
                <th>Total Value</th>
                <th>Status</th>
              </tr>
              <tr className="tableNextRow">
                <td>12/12/2022</td>
                <td>#238299</td>
                <td>Abdul Shafeek </td>
                <td>12</td>
                <td>33.2</td>
                <td>10.94</td>
                <td>12,400</td>
                <td>
                  <div className="tabStatusCom">Completed</div>
                </td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default Orders;
