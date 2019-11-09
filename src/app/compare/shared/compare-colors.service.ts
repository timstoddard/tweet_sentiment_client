import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CompareColorsService {
  rgbValuesList = [
    [255, 99, 132], // pink
    [70, 191, 189], // turqoise
    [255, 206, 86], // yellow
    [54, 162, 235], // blue
    [77, 83, 96], // dark gray
  ];

  getColors() {
    return this.rgbValuesList.map(rgbValues => ({
      backgroundColor: this.rgba(rgbValues, 0.4),
      borderColor: this.rgba(rgbValues, 1),
      pointBackgroundColor: this.rgba(rgbValues, 1),
      pointBorderColor: 'rgb(255,255,255)',
      pointHoverBackgroundColor: 'rgb(255,255,255)',
      pointHoverBorderColor: this.rgba(rgbValues, 0.8),
    }));
  }

  private rgba(rgbValues: number[], alpha: number) {
    return `rgba(${[...rgbValues, alpha].join(',')})`;
  }
}
