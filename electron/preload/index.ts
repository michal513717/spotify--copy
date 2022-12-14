import { contextBridge, ipcRenderer } from "electron"
import { IAuthData, ILoginStatus } from "../../models"

function domReady(condition: DocumentReadyState[] = ['complete', 'interactive']) {
  return new Promise(resolve => {
    if (condition.includes(document.readyState)) {
      resolve(true)
    } else {
      document.addEventListener('readystatechange', () => {
        if (condition.includes(document.readyState)) {
          resolve(true)
        }
      })
    }
  })
}

const safeDOM = {
  append(parent: HTMLElement, child: HTMLElement) {
    if (!Array.from(parent.children).find(e => e === child)) {
      return parent.appendChild(child)
    }
  },
  remove(parent: HTMLElement, child: HTMLElement) {
    if (Array.from(parent.children).find(e => e === child)) {
      return parent.removeChild(child)
    }
  },
}


function useLoading() {
  const className = `loaders-css__square-spin`
  const styleContent = `
@keyframes square-spin {
  25% { transform: perspective(100px) rotateX(180deg) rotateY(0); }
  50% { transform: perspective(100px) rotateX(180deg) rotateY(180deg); }
  75% { transform: perspective(100px) rotateX(0) rotateY(180deg); }
  100% { transform: perspective(100px) rotateX(0) rotateY(0); }
}
.${className} > div {
  animation-fill-mode: both;
  width: 50px;
  height: 50px;
  background: #fff;
  animation: square-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
}
.app-loading-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #282c34;
  z-index: 9;
}
    `
  const oStyle = document.createElement('style')
  const oDiv = document.createElement('div')

  oStyle.id = 'app-loading-style'
  oStyle.innerHTML = styleContent
  oDiv.className = 'app-loading-wrap'
  oDiv.innerHTML = `<div class="${className}"><div></div></div>`

  return {
    appendLoading() {
      safeDOM.append(document.head, oStyle)
      safeDOM.append(document.body, oDiv)
    },
    removeLoading() {
      safeDOM.remove(document.head, oStyle)
      safeDOM.remove(document.body, oDiv)
    },
  }
}

// ----------------------------------------------------------------------

const VALID_CHANNELS = [
  "app:auth:login",
  "app:auth:register",
  "app:receive:toast",
  "app:dialog:options"
];

contextBridge.exposeInMainWorld('electron', {

  addListener: (channel: string, func: (...args: unknown[]) => void) => {
    if (VALID_CHANNELS.includes(channel) === false) {
      throw new Error(`\`${channel}\` is not valid channel.`);
    }

    ipcRenderer.addListener(channel, (_event, ...args) => func(...args));
  },

  removeListener: (channel: string, func: (...args: unknown[]) => void) => {
    if (VALID_CHANNELS.includes(channel) === false) {
      throw new Error(`\`${channel}\` is not valid channel.`);
    }

    ipcRenderer.removeListener(channel, (_event, ...args) => func(...args));
  },

  auth: {
    login: async (loginData: IAuthData): Promise<ILoginStatus> => // it will return status
      await ipcRenderer.invoke('app:auth:login', loginData),
    register: async (registeredData: IAuthData): Promise<boolean> =>  // it will return status and special code
      await ipcRenderer.invoke("app:auth:register", registeredData)
  },

  playlist: {
    create: async (playList: string[]): Promise<void> =>
      await ipcRenderer.invoke("app:playList:create", playList),
  },

  music: {
    getAvalibleAlbums: async (): Promise<string[]> =>
      await ipcRenderer.invoke("app:music:getAvalibleAlbums"),
    getAvalibleMusicList: async (albumName): Promise<string[]> =>
      await ipcRenderer.invoke("app:music:getAvalibleMusicList", albumName),
  },
})

const { appendLoading, removeLoading } = useLoading()
domReady().then(appendLoading)

window.onmessage = ev => {
  ev.data.payload === 'removeLoading' && removeLoading()
}

setTimeout(removeLoading, 4999)
