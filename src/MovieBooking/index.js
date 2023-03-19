import React, { Component } from "react";
import ChairList from "./ChairList";
import Result from "./Result";
import './index.css';

export class Home extends Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bgmovie.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}>
        <div className="row">
          <div className="col-8 text-center">
            <div className="text-warning display-4">ĐẶT VÉ XEM PHIM</div>

            <div className="mt-1 text-light" style={{fontSize:'35px'}}>Màn hình</div>

            <div className="mt-1" style={{ marginLeft:230,display:'flex',flexDirection:'column',justifyContent:'center'}}>        
              <div className="screen"></div>                    
            </div>

            <ChairList />
          </div>

          <div className="col-4 text-left">
            <div className="text-center text-light mt-5" style={{fontSize:35}}>DANH SÁCH GHẾ BẠN CHỌN</div>
            <Result />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;
