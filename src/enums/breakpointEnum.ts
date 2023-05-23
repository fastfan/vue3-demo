/*
 * @Author: fastfan
 * @Date: 2023-05-23 16:45:45
 * @LastEditors: fastfan
 * @LastEditTime: 2023-05-23 16:45:46
 * @Description: your description
 */
export enum sizeEnum {
  XS = 'XS',
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
  XL = 'XL',
  XXL = 'XXL',
}

export enum screenEnum {
  XS = 480,
  SM = 576,
  MD = 768,
  LG = 992,
  XL = 1200,
  XXL = 1600,
}

const screenMap = new Map<sizeEnum, number>();

screenMap.set(sizeEnum.XS, screenEnum.XS);
screenMap.set(sizeEnum.SM, screenEnum.SM);
screenMap.set(sizeEnum.MD, screenEnum.MD);
screenMap.set(sizeEnum.LG, screenEnum.LG);
screenMap.set(sizeEnum.XL, screenEnum.XL);
screenMap.set(sizeEnum.XXL, screenEnum.XXL);

export { screenMap };
