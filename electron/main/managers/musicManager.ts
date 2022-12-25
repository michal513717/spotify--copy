import { getAxios } from '../utils/axios';
import { IAvalibleAlbumsResponse, IResponseData, IAvalibleMusicResponse } from '../../../models';


class MusicManager {
  private readonly staticURL = 'http://192.168.100.11:3000/avaliblealbums';
  // private readonly AVALIBLEALBUMS = 'avaliblealbums';

  public async getAvalibeAlbums(): Promise<string[]> {

    const avalibleAlbums = await getAxios<IAvalibleAlbumsResponse>(this.staticURL);

    if (avalibleAlbums.ok === true) {

      return avalibleAlbums.responseData.avalibleAlbums;
    }

    return [];
  }

  public async getAvalibeMusic(albumName: string): Promise<string[]> {

    const avalibleMusicList = await getAxios<IAvalibleMusicResponse>(`${this.staticURL}/${albumName}`);

    if (avalibleMusicList.ok === true) {

      return avalibleMusicList.responseData.avalibleMusicList;
    }

    return [];
  }
};

export const musicManager = new MusicManager();