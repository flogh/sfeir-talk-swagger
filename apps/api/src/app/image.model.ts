import { ApiProperty } from "@nestjs/swagger";

export class Image {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    width: number;
    @ApiProperty()
    height: number;
}
