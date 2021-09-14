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

import { Video } from '../models/video';

@Injectable({
  providedIn: 'root',
})
export class ApiVideoService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation videoControllerGetVideo
   */
  static readonly VideoControllerGetVideoPath = '/video';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `videoControllerGetVideo()` instead.
   *
   * This method doesn't expect any request body.
   */
  videoControllerGetVideo$Response(params?: {
  }): Observable<StrictHttpResponse<Video>> {

    const rb = new RequestBuilder(this.rootUrl, ApiVideoService.VideoControllerGetVideoPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Video>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `videoControllerGetVideo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  videoControllerGetVideo(params?: {
  }): Observable<Video> {

    return this.videoControllerGetVideo$Response(params).pipe(
      map((r: StrictHttpResponse<Video>) => r.body as Video)
    );
  }

  /**
   * Path part for operation videoControllerPostVideo
   */
  static readonly VideoControllerPostVideoPath = '/video';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `videoControllerPostVideo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  videoControllerPostVideo$Response(params: {
    body: Video
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiVideoService.VideoControllerPostVideoPath, 'post');
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
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `videoControllerPostVideo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  videoControllerPostVideo(params: {
    body: Video
  }): Observable<void> {

    return this.videoControllerPostVideo$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation videoControllerDeleteVideo
   */
  static readonly VideoControllerDeleteVideoPath = '/video';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `videoControllerDeleteVideo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  videoControllerDeleteVideo$Response(params: {
    body: Video
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiVideoService.VideoControllerDeleteVideoPath, 'delete');
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
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `videoControllerDeleteVideo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  videoControllerDeleteVideo(params: {
    body: Video
  }): Observable<void> {

    return this.videoControllerDeleteVideo$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation videoControllerGetVideos
   */
  static readonly VideoControllerGetVideosPath = '/videos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `videoControllerGetVideos()` instead.
   *
   * This method doesn't expect any request body.
   */
  videoControllerGetVideos$Response(params?: {
  }): Observable<StrictHttpResponse<Video>> {

    const rb = new RequestBuilder(this.rootUrl, ApiVideoService.VideoControllerGetVideosPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Video>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `videoControllerGetVideos$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  videoControllerGetVideos(params?: {
  }): Observable<Video> {

    return this.videoControllerGetVideos$Response(params).pipe(
      map((r: StrictHttpResponse<Video>) => r.body as Video)
    );
  }

}
