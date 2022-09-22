//rcc
import React, { Component } from 'react';
import BTHeader from './BTHeader';
import BTNav from './BTNav';
import BTContent from './BTContent';
import BTFooter from './BTFooter';

export default class BaiTapLayout extends Component {
  render() {
    return (
      <div>
        <BTHeader />

        <div className="d-flex">
          <div className="w-25">
            <BTNav />
          </div>
          <div className="w-75">
            <BTContent />
          </div>
        </div>
        <BTFooter />
      </div>
    );
  }
}
