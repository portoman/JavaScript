import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/projects';
import { ProjectService } from 'src/app/services/project.service';
import { formatCurrency } from '@angular/common';
import { UploadService } from 'src/app/services/upload.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService],
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string | undefined;
  public filesToUpload: Array<File> = [];

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.title = 'Crear proyecto';
    this.project = new Project('', '', '', '', 2021, '', '');
  }
  ngOnInit() {}
  /*
  public _id: string,
  public name: string,
  public description: string,
  public category: string,
  public year: number,
  public langs: string,
  public image: string
  */
  onSubmit(_form: any) {
    //Guardar los datos
    this._projectService.saveProject(this.project).subscribe(
      (response) => {
        if (response.project) {
          
          //Subir la imagen
          this._uploadService
            .makeFileRequest(
              global.url + 'upload-image/' + response.project._id,
              [],
              this.filesToUpload,
              'image'
            )
            .then((result: any) => {
              this.status = 'success';
              console.log(result);
              _form.reset();
            });
          
        } else {
          this.status = 'failed';
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
