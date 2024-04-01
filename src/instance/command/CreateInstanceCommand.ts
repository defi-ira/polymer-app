export class CreateInstanceCommand {
    constructor(public readonly userId: string, public readonly port: number, public readonly mnemonic: string) {}
}