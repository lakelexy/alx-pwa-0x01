// pages/api/fetch-movies.ts
import { NextApiRequest, NextApiResponse } from "next";
import { MoviesProps } from "@/interfaces";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { year, page, genre } = req.body;
      const apiUrl = new URL('https://moviesdatabase.p.rapidapi.com/titles');
      
      apiUrl.searchParams.set('sort', 'year.decr');
      apiUrl.searchParams.set('limit', '12');
      apiUrl.searchParams.set('page', page.toString());
      if (year) apiUrl.searchParams.set('year', year.toString());
      if (genre) apiUrl.searchParams.set('genre', genre);

      const response = await fetch(apiUrl.toString(), {
        headers: {
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.MOVIE_API_KEY!,
        },
      });

      if (!response.ok) throw new Error('API request failed');
      
      const data = await response.json();
      const movies: MoviesProps[] = data.results;

      res.status(200).json({ movies });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch movies' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}