export interface Payload {
  subject: string;
}

export class Middleware {
  subject?: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onMessage(payload: Payload): boolean {
    return false;
  }
}