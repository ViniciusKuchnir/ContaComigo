const formatDate = (data: Date | null) => {
    if (data === null) {
        return 'N/A'
    }
    
    const date = new Date(data);

    return `${date.getFullYear()}/${('0' + (date.getMonth()+1)).slice(-2)}/${('0' + date.getDate()).slice(-2)}`
    
}

export {formatDate}