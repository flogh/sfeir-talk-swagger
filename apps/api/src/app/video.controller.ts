import { Controller, Delete, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiTags } from "@nestjs/swagger";
import { Video } from "./video.model";

@ApiTags("Video")
@Controller()
export class VideoController {
    constructor(private readonly appService: AppService) {}

    @Get("video")
    getVideo(): Video {
        return this.appService.getData();
    }

    @Get("videos")
    getVideos(): Video[] {
        return this.appService.getData();
    }

    @Post("video")
    postVideo(): string {
        return this.appService.getData();
    }

    @Delete("video")
    deleteVideo(): string {
        return this.appService.getData();
    }
}
