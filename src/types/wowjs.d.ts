declare module "wowjs" {
  export class WOW {
    constructor(options?: any);
    init(): void;
    sync(): void;
  }

  export default {
    WOW: WOW,
  };
}
