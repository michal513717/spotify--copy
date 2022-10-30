class Toast {
  public success(
    browserWindow: Electron.BrowserWindow,
    title: string,
    description: string
  ) {
    browserWindow?.webContents.send("app:receive:toast", {
      status: "success",
      title,
      description
    })
  }

  public error(
    browserWindow: Electron.BrowserWindow,
    title: string,
    description: string
  ) {
    browserWindow?.webContents.send("app:receive:toast", {
      status: "error",
      title,
      description
    })
  }
}

export const toast = new Toast();