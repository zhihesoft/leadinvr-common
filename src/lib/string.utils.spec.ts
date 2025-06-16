import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { CommonModule } from "./common.module";
import { StringUtils } from "./string.utils";

describe("String Service Tests", () => {
    let app: INestApplication;
    let moduleRef: TestingModule;

    beforeAll(async () => {
        moduleRef = await Test.createTestingModule({
            imports: [CommonModule],
        }).compile();

        app = moduleRef.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await moduleRef.close();
    });

    it("replaceString", () => {
        expect(StringUtils.replace("hello world", ["hello", "hi"])).toBe("hi world");
        expect(StringUtils.replace("hello world", ["hello", "hi"], ["world", "everyone"])).toBe("hi everyone");
        expect(StringUtils.replace("hello world", ["hello", "hi"], ["world", "everyone"], ["hi", "hello"])).toBe(
            "hello everyone",
        );
    });

    it("splitString", () => {
        expect(StringUtils.split("hello,world", ",")).toEqual(["hello", "world"]);
        expect(StringUtils.split("hello|world", "|")).toEqual(["hello", "world"]);
        expect(StringUtils.split("hello,world|foo", ",", "|")).toEqual(["hello", "world", "foo"]);
        expect(StringUtils.split("hello, world | foo", ",", "|")).toEqual(["hello", "world", "foo"]);
    });

    it("unescapeHTML", () => {
        expect(StringUtils.unescapeHTML("&lt;div&gt;Hello &amp; World!&lt;/div&gt;")).toBe("<div>Hello & World!</div>");
        expect(StringUtils.unescapeHTML("&quot;Hello&quot; &amp; &#39;World&#39;")).toBe("\"Hello\" & 'World'");
        expect(StringUtils.unescapeHTML("&#xa;Hello&#xa;World&#xa;")).toBe("\nHello\nWorld\n");
    });

    it("randomString", () => {
        expect(StringUtils.random(10)).toHaveLength(10);
    });
});
