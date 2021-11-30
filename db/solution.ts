import { composeEntityGetters } from "./util";

export type Solution = {
  id: string;
  name: string;
  statusId: string;
};

const solutions: Solution[] = [
  {
    id: "111",
    name: "Implement chat service",
    statusId: "888"
  },
  {
    id: "222",
    name: "Provide how-to videos",
    statusId: "888"
  }
];

export default composeEntityGetters<Solution>(solutions);
