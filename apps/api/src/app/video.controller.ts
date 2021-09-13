import { Controller, Delete, Get, Post } from "@nestjs/common";
import { Message } from "@sfeir-talk-swagger/api-interfaces";
import { AppService } from "./app.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Video")
@Controller()
export class VideoController {
    constructor(private readonly appService: AppService) {}

    @Get("video")
    getVideo(): Message {
        return this.appService.getData();
    }

    @Get("videos")
    getVideos(): Message {
        return this.appService.getData();
    }

    @Post("video")
    postVideo(): Message {
        return this.appService.getData();
    }

    @Delete("video")
    deleteVideo(): Message {
        return this.appService.getData();
    }
}
