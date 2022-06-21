import moment from "moment";
//moment is an external library
//moment allows to work with the Date object more efficiently

export type tripProps = {
  id: number;
  date: moment.Moment;
  title: string;
  desc: string;
  destination: string;
  publisher: string;
};
