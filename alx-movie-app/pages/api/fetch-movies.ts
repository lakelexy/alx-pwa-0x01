export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const API_URL = process.env.NEXT_PUBLIC_OMDB_API_URL;
      const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

      if (!API_URL || !API_KEY) {
        throw new Error("Missing API URL or API Key.");
      }

      const response = await fetch(`${API_URL}/?s=batman&apikey=${API_KEY}`);

      if (!response.ok) {
        console.error("API Error:", response.status, response.statusText);
        throw new Error("API request failed");
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error("Fetch error:", error.message);
      res.status(500).json({ error: "Failed to fetch movies" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
