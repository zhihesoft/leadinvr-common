import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

/**
 * This is only a patch for busboy encoding issue.
 * It will convert the file name from latin1 to utf8.
 * If busboy is fixed, this pipe can be removed.
 * @see https://github.com/expressjs/multer/issues/1104
 */
@Injectable()
export class FileNameEncodePipe implements PipeTransform {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    transform(value: Express.Multer.File | Express.Multer.File[], metadata: ArgumentMetadata) {
        const items = Array.isArray(value) ? value : [value];
        for (const item of items) {
            // eslint-disable-next-line no-control-regex
            if (!/[^\u0000-\u00ff]/.test(item.originalname)) {
                item.originalname = Buffer.from(item.originalname, "latin1").toString("utf8");
            }
        }
        if (Array.isArray(value)) {
            return items;
        }
        return items[0];
    }
}
