const HERO_GRAPHQL_FIELDS = `
  sys {
    id
  }
  heading
  subHeading
  actionButtonText
  image {
    url
    description
  }
`;

const ABOUT_PHOTOS_GRAPHQL_FIELDS = `
  sys {
    id
  }
  aboutImagesCollection {
    items {
      url
      description
    }
  }
`;

async function fetchGraphQL(query: string, preview = false) {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`
      },
      body: JSON.stringify({ query })
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      `Error fetching data: ${data.errors.map((err: any) => err.message).join(', ')}`
    );
  }

  return data;
}

function extractHeroEntries(fetchResponse: any) {
  return fetchResponse?.data?.heroSectionCollection?.items || [];
}

function extractAboutPhotosEntries(fetchResponse: any) {
  return fetchResponse?.data?.aboutPhotosCollection?.items || [];
}

export async function getHeroSection(isDraftMode = false) {
  const heroSection = await fetchGraphQL(
    `query {
      heroSectionCollection(limit: 1, preview: ${isDraftMode}) {
        items {
          ${HERO_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  );

  const heroEntries = extractHeroEntries(heroSection);
  if (heroEntries.length === 0) {
    console.warn('No hero section data found');
  }

  return heroEntries[0] || null;
}

export async function getAboutPhotos(isDraftMode = false) {
  const aboutPhotos = await fetchGraphQL(
    `query {
      aboutPhotosCollection(limit: 1, preview: ${isDraftMode}) {
        items {
          ${ABOUT_PHOTOS_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  );

  const aboutPhotoEntries = extractAboutPhotosEntries(aboutPhotos);
  if (aboutPhotoEntries.length === 0) {
    console.warn('No about photos data found');
  }

  return aboutPhotoEntries[0] || null;
}
