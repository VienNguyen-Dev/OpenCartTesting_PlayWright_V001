import XLSX from 'xlsx'
export class ExcelUtility {

  readExcelData(sheetName) {
    const workbook = XLSX.readFile('C:\\Users\\DELL\\Desktop\\JAVA\\document testing\\Automation Testing\\Playwright\\OpenCart\\test-data\\OpenCart_DataTest.xlsx');
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);
    return data;
  }
}