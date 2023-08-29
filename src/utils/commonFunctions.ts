import moment from "moment";
import { DATE_FORMAT } from "./constants";

export const formatDate = (dataInput: any) => {
  return moment(dataInput).format(DATE_FORMAT);
};

export const getTimeStamps = () => {
  const today = new Date()
  const curTime = today.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit',second: "2-digit", hour12: true })

  return curTime
}

export const getFullDateTime = () => {
  const fullDateTime = new Date().toLocaleString()

  return fullDateTime
}

export const removeNonNumeric = (num: string) => {
  const result = ~~num.replace(/[^\d]/g, "");
  return result;
};

export const addCommas = (num: any, style = ".") => {
  return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, style);
};

export const addCompFunc = (regisArr: []) => {
  let regisArrLength_temp: any = [...regisArr];

  let length = regisArrLength_temp.length;
  regisArrLength_temp.push({
    uniKey: length + 1,
    isShow: true,
  });

  return regisArrLength_temp;
};

export const formatMoney = (text: any) => {
  if (!text) {
    return "0";
  } else {
    if (+text < 0) {
      text = +text * -1;
      return "-" + addCommas(removeNonNumeric(text.toString()));
    } else {
      return addCommas(removeNonNumeric(text.toString()));
    }
  }
};