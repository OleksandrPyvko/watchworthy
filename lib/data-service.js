import { getMovieDetails } from "./movies";
import { supabase } from "./supabase";

export async function getGuest(email) {
  let { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();
  return data;
}

export async function createGuest(newGuest) {
  const { data, error } = await supabase.from("guests").insert([newGuest]);

  if (error) {
    console.error(error);
    throw new Error("Failed to create guest");
  }

  return data;
}

export async function addToWatchLater(movieId, userEmail) {
  //TODO: handle duplicate avoiding

  const { data, error } = await supabase
    .from("watchLater")
    .insert([{ movieId: movieId, userEmail: userEmail }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Failed to add movie to watch later");
  }

  return data;
}

export async function getWatchLaterList(userEmail) {
  let { data: watchLater, error } = await supabase
    .from("watchLater")
    .select("movieId")
    .eq("userEmail", userEmail);

  return watchLater;
}

export async function getMoviesDetails(ids) {
  const promises = ids.map((id) => getMovieDetails(id));
  return Promise.all(promises);
}
