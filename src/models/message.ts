import { ObjectId } from "mongodb";

//сообщение: название, дата конца, содержание
export default interface Messages {
    name: string;
    enddate: string;
    text: string;
    id?: ObjectId;
}

//пройдено
