import { Module } from "@nestjs/common";
import { ImageController } from "./image.controller";
import { AppService } from "./app.service";
import { VideoController } from "./video.controller";

@Module({
    controllers: [ImageController, VideoController],
    providers: [AppService],
})
export class AppModule {}
