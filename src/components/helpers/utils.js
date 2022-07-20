export const filterByName = (list, searchTerm) => {
    return (list || []).filter((item) => item.name.toLocaleLowerCase().includes((searchTerm || '').toLocaleLowerCase()))
}