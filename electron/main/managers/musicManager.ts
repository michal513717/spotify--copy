import { getAxios } from '../utils/axios';
import { IAvalibleAlbumsResponse, IResponseData } from '../../../models';


class MusicManager {
    private readonly staticURL = 'http://192.168.100.2:3000/avaliblealbums'; 

    public async getAvalibeAlbums(): Promise<string[]>{

        const avalibleAlbums = await getAxios<IAvalibleAlbumsResponse>(this.staticURL);

        if( (avalibleAlbums as IResponseData<IAvalibleAlbumsResponse>).response.avalibleAlbums.length > 0 ){
            
            return (avalibleAlbums as IResponseData<IAvalibleAlbumsResponse>).response.avalibleAlbums;
        }

        return [];
    }
};

export const musicManager = new MusicManager();