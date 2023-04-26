import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";
import { insertRow } from "./crud";

const row : RowElement = {
  firstName: "Shivawn",
  lastName: "Scott"
}

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {
  firstName: "Shivawn", 
  lastName: "Scott", 
  age : 24
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
