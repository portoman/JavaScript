import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/projects';
import { ProjectService } from 'src/app/services/project.service';
import { formatCurrency } from '@angular/common';
import { UploadService } from 'src/app/services/upload.service';
import { global } from '../../services/global';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService],
})
export class EditComponent implements OnInit {
  public title: string;
  public project!: Project;
  public save_project: any;
  public status!: string;
  public filesToUpload: Array<File> = [];
  public url!: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'Editar proyecto';
    this.url = global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      let id = params.id;
      this.getProject(id);
    });
  }
  onSubmit(_form: any) {
    //Guardar los datos
    this._projectService.updateProject(this.project).subscribe(
      (response) => {
        if (response.project) {
          //Subir la imagen
          if (this.filesToUpload) {
            this._uploadService
              .makeFileRequest(
                global.url + 'upload-image/' + response.project._id,
                [],
                this.filesToUpload,
                'image'
              )
              .then((result: any) => {
                this.save_project = result.project;
                this.status = 'success';
              });
            }else{
              this.save_project = response.project;
              this.status = 'success';
            }
          }else{
            this.status='failed';
          }
        }
      ,
      (error) => {
        console.log(<any>error);
      }
    );
  }
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
  getProject(id: any) {
    this._projectService.getProject(id).subscribe(
      (response) => {
        this.project = response.project;
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
