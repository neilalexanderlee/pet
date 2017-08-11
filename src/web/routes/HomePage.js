import React from 'react';
import { WingBlank, WhiteSpace, Carousel, Grid } from 'antd-mobile';
import { hashHistory } from 'dva/router';
import styles from './style/HomePage.less';
import banner1 from '../assets/banner/1.png';
import banner2 from '../assets/banner/2.png';
import banner3 from '../assets/banner/3.png';
import banner4 from '../assets/banner/4.png';
import banner5 from '../assets/banner/5.png';

class HomePage extends React.Component {
  state = {
    imgData: [banner1, banner2, banner3, banner4, banner5],
    initialHeight: 200,
  };

  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    const gridDatas = [
      {
        icon: banner5,
        text: '美容洗浴',
        url: 'app/appointment',
      },
      {
        icon: banner5,
        text: '宠物出售',
        url: 'app/sale',
      },
      {
        icon: banner5,
        text: '训练寄养',
        url: 'app/training',
      },
    ];
    return (
      <div>
        <Carousel
          className={styles.carousel}
          autoplay
          infinite
          selectedIndex={2}
          swipeSpeed={10}
        >
          {this.state.imgData.map((value, index) => (
            <a key={index} style={hProp}>
              <img
                src={value}
                alt="icon"
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
                style={{ width: '100%' }}
              />
            </a>
          ))}
        </Carousel>
        <WhiteSpace />
        <WingBlank>
          <div className="sub-title">服务</div>
          <Grid
            data={gridDatas}
            columnNum={3}
            onClick={(el) => {
              hashHistory.push({
                pathname: el.url,
                query: {
                  title: el.text,
                },
              });
            }}
            renderItem={dataItem => (
              <div style={{ padding: '0.05rem', height: '100%' }}>
                <img src={dataItem.icon} style={{ width: '70%', height: '70%' }} alt="icon" />
                <div style={{ marginTop: '0.05rem', marginBottom: '0.05rem' }}>
                  {dataItem.text}
                </div>
              </div>
            )}
          />
        </WingBlank>
      </div>
    );
  }
}

export default HomePage;
