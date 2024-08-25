import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 29641,
  login: 'j{i@13RbAc\\8N\\PcjSE',
};

export const sampleWithPartialData: IUser = {
  id: 20431,
  login: 'WE',
};

export const sampleWithFullData: IUser = {
  id: 6513,
  login: '8D@YV3dw\\fg5nc4\\4ew4iRs\\FBC-l6U\\!xpjk',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
