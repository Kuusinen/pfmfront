import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageUploadResponse } from '../model/ImageUploadResponse';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  private apiUrl: string = "https://localhost:444/pfm/image/";

  constructor(private httpClient: HttpClient) { }

  getPictureById(id: string): Observable<Blob> {
    return this.httpClient.get(this.apiUrl + id, { responseType: 'blob' });
  }

  savePicture(file: File): Observable<HttpResponse<ImageUploadResponse>> {
    const imageFormData = new FormData();
    imageFormData.append('image', file, file.name);

    return this.httpClient.post<ImageUploadResponse>(this.apiUrl + 'upload', imageFormData, { observe: 'response' });
  }
}
