import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryProjectType } from '../models/CateProject';

const url = `http://localhost:3001/categoriesProjects`;

@Injectable({
  providedIn: 'root',
})
export class CateProjectService {
  constructor(private http: HttpClient) {}

  getCateProject(): Observable<CategoryProjectType[]> {
    return this.http.get<CategoryProjectType[]>(`${url}`);
  }

  getCateDetailProject(
    id: number | undefined
  ): Observable<CategoryProjectType> {
    return this.http.get<CategoryProjectType>(`${url}/${id}`);
  }

  addCateProject(data: CategoryProjectType): Observable<CategoryProjectType> {
    return this.http.post<CategoryProjectType>(url, data);
  }

  updateCateProject(
    data: CategoryProjectType
  ): Observable<CategoryProjectType> {
    return this.http.put<CategoryProjectType>(`${url}/${data.id}`, data);
  }

  deleteCateProject(id: number | undefined): Observable<CategoryProjectType> {
    return this.http.delete<CategoryProjectType>(`${url}/${id}`);
  }
}
