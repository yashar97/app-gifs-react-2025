export const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=W5tpdXmmvAoNZSNMPF7aJ8pnNMCNocQK&q=${category}&limit=20`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    console.log(gifs);
    return gifs;
}