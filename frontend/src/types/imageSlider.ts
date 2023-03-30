export interface ImageSliderInter {
  fhotoCount: number;
  fileName: string;
  fileExtension: string;
}

export interface BackgroundImageSliderInter extends ImageSliderInter {
  slideSwitchingSpeed: number;
}
