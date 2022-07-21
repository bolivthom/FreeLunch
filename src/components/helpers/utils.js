export const filter = (list, searchTerm, sortBy = 'name_desc') => {
    let tempList = (list || []).filter((item) => {
        const lower = item.name.toLocaleLowerCase();
        const term = (searchTerm || '').toLocaleLowerCase();
        const condition = lower.includes(term.toLocaleLowerCase());
        return condition;
    });
    const [key, order] = sortBy.split('_');
    tempList = tempList.sort((a, b) => compare(a, b, key) );
    console.log({
      key,
      order,
      searchTerm
    })
    return order === 'desc' ? tempList.reverse() : tempList;
}

function compare( a, b, key ) {
    if ( a[key] < b[key] ){
      return -1;
    }
    if ( a[key] > b[key]){
      return 1;
    }
    return 0;
}