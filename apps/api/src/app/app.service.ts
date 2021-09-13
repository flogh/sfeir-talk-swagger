import { Injectable } from "@nestjs/common";
import { Message } from "@sfeir-talk-swagger/api-interfaces";
import { Image } from "./image.model";

@Injectable()
export class AppService {
    getData(): any {
        return { message: "Welcome to api!" };
    }

    getImage(id: number): Image {
        return {
            id,
            name: `image-${id}.png`,
            width: 500,
            height: 500,
        };
    }

    getImages(): Image[] {
        return [
            {
                id: 1,
                name: `image-1.png`,
                width: 500,
                height: 500,
            },
            {
                id: 2,
                name: `image-2.png`,
                width: 750,
                height: 300,
            },
            {
                id: 3,
                name: `image-3.png`,
                width: 400,
                height: 600,
            },
        ];
    }

    createImage(): string {
        return "Image created";
    }

    deleteImage(): string {
        return "Image deleted";
    }
}
