export const filterByName = (list, searchTerm) => {
    return (list || []).filter((item) => {
        const lower = item.name.toLocaleLowerCase();
        const term = (searchTerm || '').toLocaleLowerCase();
        const condition = lower.includes(term.toLocaleLowerCase());
        return condition;
    })
}