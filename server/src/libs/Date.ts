const formatDate = (data: string | null) => {
    if (data === null) {
        return null;
    }
    return new Date(data);
}

export {formatDate}