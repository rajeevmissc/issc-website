const API_URL = "https://issc-backend-app.vercel.app/";

export const subscribeToNewsletter = async (email) => {
  try {
    const response = await fetch(`${API_URL}/subscribers/subscribe-mail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    return await response.json();
  } catch (error) {
    console.error("Error subscribing:", error);
    return { message: "Server error" };
  }
};
