import { composeEntityGetters } from "./util";

export type Status = {
  id: string;
  label: string;
};

const statuses: Status[] = [
  {
    id: "777",
    label: "Planned"
  },
  {
    id: "888",
    label: "InProgress"
  },
  {
    id: "999",
    label: "Done"
  }
];

export default composeEntityGetters<Status>(statuses);
