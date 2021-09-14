import { Controller, Delete, Get, ParseIntPipe, Post, Query } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Image } from "./image.model";

@ApiTags("Image")
@Controller()
export class ImageController {
    constructor(private readonly appService: AppService) {}

    @Get("image")
    @ApiResponse({ status: 200, type: Image })
    @ApiOperation({ summary: "This endpoint returns an image depending on the id passed in parameter" })
    @ApiQuery({ name: "id" })
    getImage(@Query("id", new ParseIntPipe()) id: number): Image {
        return this.appService.getImage(id);
    }

    @Get("images")
    @ApiOperation({ summary: "This endpoint returns all images" })
    @ApiResponse({ status: 200, type: [Image] })
    getImages(): Image[] {
        return this.appService.getImages();
    }

    @Post("image")
    @ApiOperation({ summary: "This endpoint insert image passed in body" })
    @ApiBody({ type: Image })
    @ApiResponse({ status: 201 })
    postImage(): string {
        return this.appService.createImage();
    }

    @Delete("image")
    @ApiOperation({ summary: "This endpoint delete image passed in body" })
    @ApiBody({ type: Image })
    @ApiResponse({ status: 200 })
    deleteImage(): string {
        return this.appService.deleteImage();
    }
}
