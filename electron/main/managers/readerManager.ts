import fs from 'fs';

class ReaderManager {
    currentSong: string

    constructor(){
        this.setupData();
    }

    setupData(){
        this.currentSong = '';
    }

    readAllFiles(){

    }

    readDir(path){
        fs.readdir(path, (err, files) => {
            if (err)
              console.log(err);
            else {
              console.log("\nCurrent directory filenames:");
              files.forEach(file => {
                console.log(file);
              })
            }
        })
    }

    setCurrentSong(songName:string){
        this.currentSong = songName
    }

    getAllFiles(){

    }

    getDetailsOfFile(songName:string){

    }
};

export const reader = new ReaderManager();