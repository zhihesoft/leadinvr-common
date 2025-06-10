import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { CommonModule } from "../common.module";
import { StringService } from "./string.service";

describe("String Service Tests", () => {
    let app: INestApplication;
    let moduleRef: TestingModule;
    let svc: StringService;

    beforeAll(async () => {
        moduleRef = await Test.createTestingModule({
            imports: [CommonModule],
        }).compile();

        app = moduleRef.createNestApplication();
        await app.init();
        svc = moduleRef.get(StringService);
    });

    afterAll(async () => {
        await moduleRef.close();
        svc = null as any; // Clear the service reference
    });

    it("replaceString", () => {
        expect(svc.replace("hello world", ["hello", "hi"])).toBe("hi world");
        expect(svc.replace("hello world", ["hello", "hi"], ["world", "everyone"])).toBe("hi everyone");
        expect(svc.replace("hello world", ["hello", "hi"], ["world", "everyone"], ["hi", "hello"])).toBe(
            "hello everyone",
        );
    });

    it("splitString", () => {
        expect(svc.split("hello,world", ",")).toEqual(["hello", "world"]);
        expect(svc.split("hello|world", "|")).toEqual(["hello", "world"]);
        expect(svc.split("hello,world|foo", ",", "|")).toEqual(["hello", "world", "foo"]);
        expect(svc.split("hello, world | foo", ",", "|")).toEqual(["hello", "world", "foo"]);
    });

    it("unescapeHTML", () => {
        expect(svc.unescapeHTML("&lt;div&gt;Hello &amp; World!&lt;/div&gt;")).toBe("<div>Hello & World!</div>");
        expect(svc.unescapeHTML("&quot;Hello&quot; &amp; &#39;World&#39;")).toBe("\"Hello\" & 'World'");
        expect(svc.unescapeHTML("&#xa;Hello&#xa;World&#xa;")).toBe("\nHello\nWorld\n");
    });

    it("randomString", () => {
        expect(svc.random(10)).toHaveLength(10);
    });
});
