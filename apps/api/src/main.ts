import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { SwaggerModule, DocumentBuilder, SwaggerCustomOptions } from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    /* OPEN API */
    const config = new DocumentBuilder()
        .setTitle("Sfeir talk Swagger")
        .setDescription("The Sfeir talk swagger description")
        .setVersion("1.0")
        .build();
    const document = SwaggerModule.createDocument(app, config);
    const customOptions: SwaggerCustomOptions = {
        explorer: true,
        swaggerOptions: {
            // eslint-disable-next-line
            operationsSorter: (a: any, b: any) => {
                const methodsOrder: string[] = ["get", "patch", "post", "put", "delete", "options", "trace"];
                let result: number = methodsOrder.indexOf(a.get("method")) - methodsOrder.indexOf(b.get("method"));
                if (result === 0) {
                    result = a.get("path").localeCompare(b.get("path"));
                }
                return result;
            },
            filter: true,
        },
    };
    SwaggerModule.setup("api", app, document, customOptions);
    /* START */
    const port = 3000;
    await app.listen(port, () => {
        Logger.log("Listening at http://localhost:" + port + "/");
    });
}

bootstrap();
