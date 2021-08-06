import React, { Component } from 'react';
import QrReader from 'react-qr-reader'
import qrcodenew from '../res/QrcodeNew.png';

export class Home extends Component {
  static displayName = Home.name;
  state = {
    result: 'No result',
    stage: 0
  }

  constructor(props) {
    super(props);
    this.activeCamera = this.activeCamera.bind(this);
    this.gotoStage0 = this.gotoStage0.bind(this);
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data,
        stage: 2
      });

      console.log(data);
    }
  }
  handleError = err => { console.error(err) }

  activeCamera() { this.setState({ stage: 1 }); }

  gotoStage0() { this.setState({ stage: 0 }); }


  render() {
    return (
      <div>

        <div class="card bg-primary " style={{width: '18rem',minHeight:'295px'}} >
         
        {
          this.state.stage == 1 &&
          <div >
            <button onClick={this.gotoStage0}>
              انصراف
            </button>
            <QrReader
              delay={300}
              ref={(node) => { this.scanner = node }}
              onError={this.handleError}
              onScan={this.handleScan}
              facingMode="environment"
              style={{ width: '100%' }}
            />
          </div>
        }

          <div class="card-body text-center">
            {
              this.state.stage == 0 &&
              <button onClick={this.activeCamera} className="btn btn-light mt-5">
                <img src={qrcodenew} style={{ width: '100px' }} />
                <br />
                <br />
                اسکن با بارکدخوان
              </button>
            }

            {
              this.state.stage == 2 &&
              <div class="table-responsive" style={{direction:'rtl'}}>
                <table class="table">
                  <tbody>
                    <tr>
                      <td>درگاه</td>
                      <td>بانک سامان</td>
                    </tr>
                    <tr>
                      <td>فروشگاه</td>
                      <td>Thornton</td>
                    </tr>
                    <tr>
                      <td>مبلغ</td>
                      <td>12,345,678 ریال</td>
                    </tr>
                    <tr>
                      <td><button class="btn btn-sm btn-danger" onClick={this.gotoStage0}>انصراف</button></td>
                      <td><button class="btn btn-sm btn-success">تاببد و ادامه</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>

            }
          </div>
        </div>



     



      </div >
    );
  }
}
