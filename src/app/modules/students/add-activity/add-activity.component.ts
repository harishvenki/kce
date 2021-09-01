import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FileUploader } from 'ng2-file-upload';

const URL = 'https://httpbin.org/post';


@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {

  validationForm: FormGroup;

  urlPattern = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validationForm = this.fb.group({
      activityName: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      activityType: ['', [Validators.required]],
      startDate: [new Date().toISOString().slice(0, 16), [Validators.required]],
      endDate: [new Date().toISOString().slice(0, 16), Validators.required],
      activityUrl: ['', Validators.required, Validators.pattern(this.urlPattern)],
      activityRemarks: ['', Validators.required],
      activityCertificate: ['', Validators.required],
    });
  }

  public uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });

  public editorValue: string = '';
  public name = 'Angular 10';
  public htmlContent = '';
  public title = 'ngx-editor';

  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  }
}
