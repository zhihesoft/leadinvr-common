import { Global, Module } from "@nestjs/common";
import { CryptoService } from "./service/crypto.service";
import { StringService } from "./service/string.service";

@Global()
@Module({
    providers: [StringService, CryptoService],
    exports: [StringService, CryptoService],
})
export class CommonModule {}
