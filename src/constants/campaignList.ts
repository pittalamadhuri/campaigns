import { Campaign } from "../types/types";

const date = new Date();

const tempDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

export const CAMPAIGNS: Campaign[] = [{
    id: 1,
    name: "campaign1",
    creator: "Madhuri",
    lastModified: tempDate,
    createdAt: tempDate
}, {
    id: 2,
    name: "campaign2",
    creator: "Madhuri",
    lastModified: tempDate,
    createdAt: tempDate
}, {
    id: 3,
    name: "campaign3",
    creator: "Madhuri",
    lastModified: tempDate,
    createdAt: tempDate
}, {
    id: 4,
    name: "campaign4",
    creator: "Madhuri",
    lastModified: tempDate,
    createdAt: tempDate
}, {
    id: 5,
    name: "campaign5",
    creator: "Madhuri",
    lastModified: tempDate,
    createdAt: tempDate
}, {
    id: 6,
    name: "campaign6",
    creator: "Madhuri",
    lastModified: tempDate,
    createdAt: tempDate
}, {
    id: 7,
    name: "campaign7",
    creator: "Madhuri",
    lastModified: tempDate,
    createdAt: tempDate
}]