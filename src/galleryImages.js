const imageModules = import.meta.glob('../Gal-image*.jpeg', {
  eager: true,
  import: 'default',
  query: '?url',
})

export const galleryImages = Object.entries(imageModules)
  .sort(([first], [second]) => {
    const firstNumber = Number(first.match(/Gal-image(\d+)/)?.[1] || 0)
    const secondNumber = Number(second.match(/Gal-image(\d+)/)?.[1] || 0)
    return firstNumber - secondNumber
  })
  .map(([, src], index) => ({
    src,
    alt: `Glam Hub project image ${index + 1}`,
  }))
