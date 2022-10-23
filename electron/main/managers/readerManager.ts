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

    setCurrentSong(songName:string){
        this.currentSong = songName
    }

    getAllFiles(){

    }

    getDetailsOfFile(songName:string){

    }
};

export const reader = new ReaderManager();