import { FEATURED_PROGRAMS } from './constants';
import { getCollectionProducts } from './shopify';

// Define the Program type according to your data structure
interface Program {
  // Define properties of a program, e.g.:
  id: string;
  title: string;
  // Add other necessary properties based on your data
}

// Define the cache object with types
let cache: {
  featuredProgram: Program[] | null; // Allow for null or an array of Program objects
  lastFetch: number;
  cacheDuration: number;
} = {
  featuredProgram: null,
  lastFetch: 0,
  cacheDuration: 1000 * 60 * 10 // 10 minutes in milliseconds
};

// Function to get cached featured programs or fetch new ones if cache is expired
export async function getCachedFeaturedPrograms(): Promise<Program[]> {
  const now = Date.now();

  // If cached data is present and not expired, return cached data
  if (cache.featuredProgram && now - cache.lastFetch < cache.cacheDuration) {
    return cache.featuredProgram;
  }

  // Fetch new data, as cache is empty or expired
  const data: Program[] = await getCollectionProducts({ collection: FEATURED_PROGRAMS });

  // Update cache
  cache.featuredProgram = data;
  cache.lastFetch = now;

  return data;
}
