export class CreateInstanceRequest {
    userId: string;
    port: number;
    mnemonic: string;
  
    constructor(userId: string, port: number, mnemonic: string) {
        this.userId = userId;
        this.port = port;
        this.mnemonic = mnemonic;
    }
}