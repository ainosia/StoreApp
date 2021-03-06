export class Upload {
  id: string;
  file: File;
  name: string;
  url: string;
  createdAt: Date = new Date();

  constructor(file:File) {
    this.file = file;
  }
}
