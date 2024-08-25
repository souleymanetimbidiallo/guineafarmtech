import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '7cc5e97e-6a83-45fa-8fa7-dbb421adad7c',
};

export const sampleWithPartialData: IAuthority = {
  name: '0d221e2f-bf16-467b-bc99-4eb9be5fb783',
};

export const sampleWithFullData: IAuthority = {
  name: 'ed88e9b3-a5df-447a-aced-8514797915f5',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
