#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

#[tauri::command]
fn fetch_without_ssl(url: &str) ->String{
  // fetch url and ignore ssl errors

  let client = reqwest::blocking::Client::builder()
    .danger_accept_invalid_certs(true)
    .build().unwrap();
  let resp = match client.get(url).send(){
    Ok(resp) => resp.text().unwrap(),
    Err(_) => "Server is not running or Protocol is wrong".to_string(),
  };
  println!("{}", resp);
  resp


}



fn main() {
  tauri::Builder::default()
  .invoke_handler(tauri::generate_handler![fetch_without_ssl])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
