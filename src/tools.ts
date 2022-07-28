import { invoke } from '@tauri-apps/api/tauri'
export function getDateFromTimestamp(timestamp: number) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("de-AT");
  }
  
export function getTimeFromTimestamp(timestamp: number) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString("de-AT");
  }
export async function fetch_ignore_ssl(url){
 let resp  =  await invoke('fetch_without_ssl',{url});
 return resp;
}