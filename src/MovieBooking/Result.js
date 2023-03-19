import React, { Component } from "react";
import { connect } from "react-redux";
import { chairCancelAction, payChairAction } from "./duck/action";

export class Result extends Component {
  render() {
    const { chairBookingList, payChair,cancelChair } = this.props;

    return (
      <div className="mt-4">
        <div className="mt-5">
          <button className="booked mr-3"></button>
          <span className="text-light" style={{ fontSize: 25 }}>
            Ghế đã đặt
          </span>
          <br />

          <button className="booking mr-3 mt-2"></button>
          <span className="text-light" style={{ fontSize: 25 }}>
            Ghế đang chọn
          </span>
          <br />

          <button className="ghe mr-3 mt-2" style={{ marginLeft: 0 }}></button>
          <span className="text-light" style={{ fontSize: 25 }}>
            Ghế chưa đặt
          </span>
        </div>

        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{fontSize:20,fontWeight:700}}>
                <td>Số thứ tự</td>
                <td>Số ghế</td>
                <td>Giá tiền</td>
                <td>Hủy</td>
              </tr>
            </thead>

            <tbody>
              {chairBookingList.map((chair, index) => {
                return (
                  <tr key={chair.soGhe} style={{fontSize:20,color:"yellow"}}>
                    <td>{index + 1}</td>
                    <td>{chair.soGhe}</td>
                    <td>{chair.gia.toLocaleString()} VND</td>
                    <td>
                      <button className="btn btn-danger" onClick={()=>{cancelChair(chair)}}>X</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>

            <tfoot>
              <tr style={{fontSize:20}}>
                <td className="text-light">Tổng tiền:</td>
                <td style={{color:"yellow"}}>
                  {chairBookingList
                    .reduce((total, item) => {
                      return (total += item.gia);
                    }, 0)
                    .toLocaleString()}{" "}
                  VND
                </td>
              </tr>
            </tfoot>
          </table>

          <button className="btn btn-success" onClick={payChair}>
            Thanh toán
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chairBookingList: state.movieBookingReducer.chairBookingList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    payChair: () => {
      dispatch(payChairAction());
    },

    cancelChair: (payload) => {
      dispatch(chairCancelAction(payload))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
