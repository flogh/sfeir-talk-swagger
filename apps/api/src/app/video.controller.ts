import { Controller, Delete, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Video } from "./video.model";

@ApiTags("Video")
@Controller()
export class VideoController {
    constructor(private readonly appService: AppService) {}

    @Get("video")
    @ApiResponse({ status: 200, type: Video })
    getVideo(): Video {
        return this.appService.getData();
    }

    @Get("videos")
    @ApiResponse({ status: 200, type: [Video] })
    getVideos(): Video[] {
        return this.appService.getData();
    }

    @Post("video")
    @ApiResponse({ status: 200 })
    @ApiBody({ type: Video })
    postVideo(): string {
        return this.appService.getData();
    }

    @Delete("video")
    @ApiResponse({ status: 200 })
    @ApiBody({ type: Video })
    deleteVideo(): string {
        return this.appService.getData();
    }
}
