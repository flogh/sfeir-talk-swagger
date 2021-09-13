import { Controller, Delete, Get, Post, Query } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Image } from "./image.model";

@ApiTags("Image")
@Controller()
export class ImageController {
    constructor(private readonly appService: AppService) {}

    @Get("image")
    @ApiResponse({ status: 200, type: Image })
    @ApiQuery({ name: "id" })
    getImage(@Query("id") id: number): Image {
        return this.appService.getImage(id);
    }

    @Get("images")
    @ApiResponse({ status: 200, type: Image })
    getImages(): Image[] {
        return this.appService.getImages();
    }

    @Post("image")
    @ApiBody({ type: Image })
    @ApiResponse({ status: 201 })
    postImage(): string {
        return this.appService.createImage();
    }

    @Delete("image")
    @ApiBody({ type: Image })
    @ApiResponse({ status: 200 })
    deleteImage(): string {
        return this.appService.deleteImage();
    }
}
