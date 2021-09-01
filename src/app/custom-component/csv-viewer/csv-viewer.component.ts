import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-csv-viewer',
  templateUrl: './csv-viewer.component.html',
  styleUrls: ['./csv-viewer.component.scss']
})
export class CsvViewerComponent implements OnInit {

  ngOnInit(){}

  @ViewChild(MatTable)
  table!: MatTable<any>;

  constructor(private _snackBar: MatSnackBar) { }

  displayedColumns: string[] = ['sNo', 'facultyId', 'name', 'department', 'designation', 'gender', 'institution', 'qualification', 'dateOfBirth', 'dateOfJoining', 'teachingExperience', 'address', 'emailId', 'role'];
  dataSource: any = [];
  file: any;
  arrayBuffer: any;
  valid: any;

  csvInputChange(event: any) {
    this.valid = true;
    this.file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(this.file);

    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i)
        arr[i] = String.fromCharCode(data[i]);

      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      var arraylist = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      arraylist.forEach((element: any) => {

        // Check if the email is valid 
        if (
          (element["Email ID"] && !this.validateEmail(element["Email ID"])) 
          ||
          (element["S.No"] == undefined || element["Email ID"] == undefined || element["Faculty ID"] == undefined || element["Name"] == undefined || element["Department"] == undefined || element["Designation"] == undefined || element["gender"] == undefined || element["Institution"] == undefined || element["Qualification"] == undefined || element["DateOfBirth"] == undefined || element["DateOfJoining"] == undefined || element["TeachingExperience"]  == undefined || element["Role"] == undefined)
        ) {
          this.valid = false;
          element['highlight'] = true;
        } else {
          element['highlight'] = false;
        }

        const data = {
          sNo: element["S.No"],
          facultyId: element["Faculty ID"],
          name: element["Name"],
          department: element["Department"],
          designation: element["Designation"],
          gender: element["gender"],
          institution: element["Institution"],
          qualification: element["Qualification"],
          dateOfBirth: element["DateOfBirth"],
          dateOfJoining: element["DateOfJoining"],
          teachingExperience: element["TeachingExperience"],
          address: element["Address"],
          emailId: element["Email ID"],
          role: element["Role"],
          highlight: element['highlight']
        };

        // pushing the data to table
        this.dataSource.push(data);
      });
      this.table.renderRows();
    }
  }


  validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  submitFile() {

  }

}
