import { ApiProperty } from "@nestjs/swagger";

export class Video {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    width: number;
    @ApiProperty()
    height: number;
    @ApiProperty()
    length: number;
    @ApiProperty()
    format: string;
}
