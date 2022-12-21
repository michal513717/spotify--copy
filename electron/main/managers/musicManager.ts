import { getAxios } from '../utils/axios';
import { IAvalibleAlbumsResponse, IResponseData, IAvalibleMusicResponse } from '../../../models';


class MusicManager {
    private readonly staticURL = 'http://192.168.100.2:3000/avaliblealbums'; 
    // private readonly AVALIBLEALBUMS = 'avaliblealbums';

    public async getAvalibeAlbums(): Promise<string[]>{

        const avalibleAlbums = await getAxios<IAvalibleAlbumsResponse>(this.staticURL);

        if( (avalibleAlbums as IResponseData<IAvalibleAlbumsResponse>).response.avalibleAlbums.length > 0 ){
            
            return (avalibleAlbums as IResponseData<IAvalibleAlbumsResponse>).response.avalibleAlbums;
        }

        return [];
    }

    public async getAvalibeMusic(albumName:string): Promise<string[]>{
        
        const avalibleMusicList = await getAxios<IAvalibleMusicResponse>(`${this.staticURL}/${albumName}`);

        if( (avalibleMusicList as IResponseData<IAvalibleMusicResponse>).response.avalibleMusicList.length > 0 ){
            
            return (avalibleMusicList as IResponseData<IAvalibleMusicResponse>).response.avalibleMusicList;
        }

        return [];
    }
};

export const musicManager = new MusicManager();