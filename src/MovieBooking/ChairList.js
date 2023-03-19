import React, { Component } from "react";
import { connect } from "react-redux";
import Chair from "./Chair";

export class ChairList extends Component {
  render() {
    const { chairList } = this.props;

    return (
      <div
        className="d-flex flex-column align-items-center mt-4"
        style={{ gap: 20 }}
      >
        {chairList.map((item) => {
          return (
            <div key={item.hang} className="d-flex align-items-center">
              <div style={{width:30, color:"yellow",fontWeight:800,marginRight:10,fontSize:20}}>{item.hang}</div>

              <div className="d-flex" style={{gap:20}}>
                {item.danhSachGhe.map((chair) => {
                  return <Chair key={chair.soGhe} chair={chair} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chairList: state.movieBookingReducer.chairList,
  };
};

export default connect(mapStateToProps, null)(ChairList);
