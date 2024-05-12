export const validateEmail: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const withoutWhiteSpace: RegExp = /\S+/;
export const withoutNumber: RegExp = /[^0-9.]/g;
export const withoutSpaceBetweenLetter: RegExp = /^[A-Za-z]+$/;