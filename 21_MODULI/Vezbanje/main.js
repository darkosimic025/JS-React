// import { generateList, generateItem as generateListItem } from "./modules/list.js";
// import { generateTable, generateTableRow, generateItem as generateTableItem } from "./modules/table.js";

// let lista = generateList(document.body);
// generateListItem(lista, "images/slika1.png");
// generateListItem(lista, "images/slika2.png");
// generateListItem(lista, "images/slika3.png");

// let tabela = generateTable(document.body);
// let tr = generateTableRow(tabela);
// generateTableItem(tr, "images/slika1.png");
// generateTableItem(tr, "images/slika2.png");
// generateTableItem(tr, "images/slika3.png");


import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";
import * as Div from "./modules/div.js";

let lista = List.generateList(document.body);
List.generateItem(lista, "images/slika1.png");
List.generateItem(lista, "images/slika2.png");
List.generateItem(lista, "images/slika3.png");

let tabela = Table.generateTable(document.body);
let tr = Table.generateTableRow(tabela);
Table.generateItem(tr, "images/slika1.png");
Table.generateItem(tr, "images/slika2.png");
Table.generateItem(tr, "images/slika3.png");

let div = Div.generateDiv(document.body);
Div.generateItem(div, "images/slika1.png");
Div.generateItem(div, "images/slika2.png");
Div.generateItem(div, "images/slika3.png");
