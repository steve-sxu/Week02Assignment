export const getRandomImage = async () => {
    const response = await fetch('https://picsum.photos/300/200');
    return response.url;
  };
  