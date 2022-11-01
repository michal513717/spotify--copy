import fs from 'fs';
import { join } from 'path';

class ReaderManager {
    public currentSong: string
    private allFiles: string[]
    private avalibeSongList: object

    constructor(){
        this.setupData();
    }

    setupData(){
        this.currentSong = '';
        this.allFiles = [];
        this.avalibeSongList = {};
    }

    public checkExistStoredData() {

      const storePath = join(process.env['HOME'], "SpotifyCopy");
      const isStoreDirectoryExist = fs.existsSync(storePath);

      if (isStoreDirectoryExist === false){
        this.createLocalStore(storePath);
      } else {
        this.createAvalibeSongList(storePath);
      }
    }

    private createLocalStore(path: string){
      try{
        fs.mkdirSync(path);
      } catch(error) {
        console.error(error)
      }
    }

    private createAvalibeSongList(storePath:string){
      
      let filesInAlbum = null;
      const albumsNames = this.readDir(storePath);

      albumsNames.forEach((albumName:string) => {

        filesInAlbum = { [albumName]: this.readDir(join(storePath, albumName))};
        this.avalibeSongList = Object.assign(this.avalibeSongList, filesInAlbum);
      })
    }

    private readDir(path:string){
      try{
        return fs.readdirSync(path);
      } catch(err){
        console.error(err);
      }
    }

    private readFile(path:string){
      try{
        return fs.readFileSync(path);
      } catch(err){
        console.error(err);
      }
    }

    public setCurrentSong(songName:string){
      this.currentSong = songName
    }

    public getAvalibeSongList(){
      return this.avalibeSongList;
    }

    public getDetailsOfFile(songName:string){

    }
};

export const readerManager = new ReaderManager();


// first need to do is checking the existing store directory 
// => check albums
// => read song from albums 
// this.avalibeSongList
// { 
// 	"albumName": {
// 			{"song1":{dataOfSong1}, 
// 			{"song2":{dataOfSong2}, 
// 			{"song3":{dataOfSong3}
// 		      },
// 	"albumName2": {}
// } 