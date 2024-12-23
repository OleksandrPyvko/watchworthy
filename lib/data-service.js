"use server";

import { revalidatePath } from "next/cache";
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
    .from("watchList")
    .insert([{ movieId: movieId, userEmail: userEmail, watched: false }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Failed to add movie to `watch later` list");
  }

  return data;
}

export async function addToWatched(movieId, userEmail) {

  const { data, error } = await supabase
    .from("watchList")
    .insert([{ movieId: movieId, userEmail: userEmail, watched: true }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Failed to add movie to watched list");
  }

  return data;
}

export async function getWatchLaterList(userEmail) {
  let { data: watchLater, error } = await supabase
    .from("watchList")
    .select("movieId")
    .eq("userEmail", userEmail)
    .eq("watched", false);

  if (!userEmail) return;

  return watchLater;
}

export async function getMoviesDetails(ids) {
  const promises = ids.map((id) => getMovieDetails(id));
  return Promise.all(promises);
}

export async function getWatchedList(userEmail) {
  let { data: watched, error } = await supabase
    .from("watchList")
    .select("*")
    .eq("userEmail", userEmail)
    .eq("watched", true);

  if (error) throw new Error(error.message);

  return watched;
}

export async function updateRating(newRating, userEmail, movieId) {
  const { data, error } = await supabase
    .from("watchList")
    .update({ rating: newRating })
    .eq("userEmail", userEmail)
    .eq("movieId", movieId)
    .select();

  // revalidatePath(`search/movie/${movieId}`);
  // return data;
}

export async function getWatchedMovie(userEmail, movieId) {
  let { data: watched, error } = await supabase
    .from("watchList")
    .select("*")
    .eq("userEmail", userEmail)
    .eq("movieId", movieId)
    .eq("watched", true);

  if (error) throw new Error(error.message);

  return watched;
}

export async function deleteFromList(userEmail, movieId, isWatched) {
  const { error } = await supabase
    .from("watchList")
    .delete()
    .eq("userEmail", userEmail)
    .eq("movieId", movieId)
    .eq("watched", isWatched);

  if (error) throw new Error(error.message);
}
