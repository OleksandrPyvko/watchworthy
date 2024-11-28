"use server";

import { signIn, signOut } from "@/app/auth";
import { addToWatchLater } from "./data-service";
import { revalidatePath } from "next/cache";

export async function signInAction() {
  await signIn("google", { redirectTo: "/" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function addToWatchLaterAction(formData) {
  const movieId = formData.get("movieId");
  const userEmail = formData.get("userEmail");

  await addToWatchLater(movieId, userEmail);
  revalidatePath(`/search/movie/${movieId}`);
}

export async function addToWatchedAction (formData) {


}