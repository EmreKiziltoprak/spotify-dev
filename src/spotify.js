export const authEndpoint = "http://accounts.spotify.com/authorize";

export const redirect = "http://localhost:3000";

export const clientId = "7b264e3861d1452c9e522c7120591ef5";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {

  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;

    }, {});}

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirect}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;