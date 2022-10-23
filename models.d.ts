export interface IStore {
    state: number;

    action: (payload:number) => void;
}