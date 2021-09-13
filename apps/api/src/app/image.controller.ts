import { Controller, Delete, Get, Post } from "@nestjs/common";
import { Message } from "@sfeir-talk-swagger/api-interfaces";
import { AppService } from "./app.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Image")
@Controller()
export class ImageController {
    constructor(private readonly appService: AppService) {}

    @Get("image")
    getImage(): Message {
        return this.appService.getData();
    }

    @Get("images")
    getImages(): Message {
        return this.appService.getData();
    }

    @Post("image")
    postImage(): Message {
        return this.appService.getData();
    }

    @Delete("image")
    deleteImage(): Message {
        return this.appService.getData();
    }
}
