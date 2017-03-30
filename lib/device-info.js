import React from 'react';
import {
  PixelRatio,
  Platform,
  Dimensions
} from 'react-native';

const windowSize = Dimensions.get('window');

class DetectDeviceService {
  constructor() {
    this.pixelDensity = PixelRatio.get();
    this.width = windowSize.width;
    this.height = windowSize.height;
    this.adjustedWidth = this.width * this.pixelDensity;
    this.adjustedHeight = this.height * this.pixelDensity;

    this.isPhoneOrTablet();
    this.isIosOrAndroid();
  }

  isPhoneOrTablet() {
    if (Device.pixelDensity < 2 && (Device.adjustedWidth >= 1000 || Device.adjustedHeight >= 1000)) {
      Device.isTablet = true;
      Device.isPhone = false;
    } else if (Device.pixelDensity === 2 && (Device.adjustedWidth >= 1920 || Device.adjustedHeight >= 1920)) {
      Device.isTablet = true;
      Device.isPhone = false;
    }
     else if (Device.pixelDensity === 1 && (Device.adjustedWidth == 600 || Device.adjustedHeight == 960)) {
      Device.isTablet = true;
      Device.isPhone = false;
    } else {
      Device.isTablet = false;
      Device.isPhone = true;
    }
  }

  isIosOrAndroid() {
    if(Platform.OS === 'ios') {
      this.isIos = true;
      this.isAndroid = false;
    } else {
      this.isIos = false;
      this.isAndroid = true;
    }
  }
}

module.exports = new DetectDeviceService();
