declare module 'prompt-sync' {
  function promptSync(options?: { sigint: boolean }): (message: string) => string;
  export = promptSync;
}
