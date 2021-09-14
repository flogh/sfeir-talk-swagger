/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Image } from '../models/image';

@Injectable({
  providedIn: 'root',
})
export class ApiImageService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation imageControllerGetImage
   */
  static readonly ImageControllerGetImagePath = '/image';

  /**
   * This endpoint returns an image depending on the id passed in parameter.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageControllerGetImage()` instead.
   *
   * This method doesn't expect any request body.
   */
  imageControllerGetImage$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Image>> {

    const rb = new RequestBuilder(this.rootUrl, ApiImageService.ImageControllerGetImagePath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Image>;
      })
    );
  }

  /**
   * This endpoint returns an image depending on the id passed in parameter.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `imageControllerGetImage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  imageControllerGetImage(params: {
    id: number;
  }): Observable<Image> {

    return this.imageControllerGetImage$Response(params).pipe(
      map((r: StrictHttpResponse<Image>) => r.body as Image)
    );
  }

  /**
   * Path part for operation imageControllerPostImage
   */
  static readonly ImageControllerPostImagePath = '/image';

  /**
   * This endpoint insert image passed in body.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageControllerPostImage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  imageControllerPostImage$Response(params: {
    body: Image
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiImageService.ImageControllerPostImagePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This endpoint insert image passed in body.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `imageControllerPostImage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  imageControllerPostImage(params: {
    body: Image
  }): Observable<void> {

    return this.imageControllerPostImage$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation imageControllerDeleteImage
   */
  static readonly ImageControllerDeleteImagePath = '/image';

  /**
   * This endpoint delete image passed in body.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageControllerDeleteImage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  imageControllerDeleteImage$Response(params: {
    body: Image
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiImageService.ImageControllerDeleteImagePath, 'delete');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This endpoint delete image passed in body.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `imageControllerDeleteImage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  imageControllerDeleteImage(params: {
    body: Image
  }): Observable<void> {

    return this.imageControllerDeleteImage$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation imageControllerGetImages
   */
  static readonly ImageControllerGetImagesPath = '/images';

  /**
   * This endpoint returns all images.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageControllerGetImages()` instead.
   *
   * This method doesn't expect any request body.
   */
  imageControllerGetImages$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Image>>> {

    const rb = new RequestBuilder(this.rootUrl, ApiImageService.ImageControllerGetImagesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Image>>;
      })
    );
  }

  /**
   * This endpoint returns all images.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `imageControllerGetImages$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  imageControllerGetImages(params?: {
  }): Observable<Array<Image>> {

    return this.imageControllerGetImages$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Image>>) => r.body as Array<Image>)
    );
  }

}
